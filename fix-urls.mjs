import fs from 'fs';
import path from 'path';

const urls = JSON.parse(fs.readFileSync('blob-urls.json', 'utf8'));
const VIDEO = ['.mp4', '.webm', '.mov', '.m4v'];

// Known renames (old name in code -> real file name). Check the ones marked "guess".
const manual = {
  'solar1': 'solarpanel1',
  'ready0': 'readymadegarments0',
  'hover1': 'hovercraftservices1',
  'sea0': 'seaandriver0',
  'sea-river-aviation': 'sea-and-river-aviation',
  'museum': 'museums',
  'chemical1': 'chemicalindustry1',
  'financial1': 'financialservice1',
  'it1': 'informationtechnologyaielectronics1',
  'aadya1': 'businessanalysis1',
  'museums_1': 'museum_1',
  'newspaper_1': 'newspepar_1',
  'sumukh': 'sumukhchitra',      // guess
  'hospital_1': 'healthcare_1',  // guess
};

const clean = (s) => s.toLowerCase().replace(/[^a-z0-9]/g, '');
const isVideo = (p) => VIDEO.includes(path.extname(p).toLowerCase());

// Build lookup tables (images and videos separately)
const index = { image: {}, video: {} };
for (const [key, url] of Object.entries(urls)) {
  const type = isVideo(key) ? 'video' : 'image';
  const base = path.basename(key, path.extname(key));
  index[type][clean(base)] ??= url;
  if (type === 'video') index[type][clean(base.replace(/_1$/, ''))] ??= url;
}

function findUrl(p) {
  const type = isVideo(p) ? 'video' : 'image';
  let base = path.basename(p, path.extname(p)).trim();
  if (!base) return null;
  base = manual[base.toLowerCase()] ?? base;
  const t = index[type];
  if (t[clean(base)]) return t[clean(base)];
  if (type === 'video') {
    return t[clean(base.replace(/_1$/, ''))] || t[clean(base) + '1'] || null;
  }
  return null;
}

function getFiles(dir) {
  return fs.readdirSync(dir).flatMap((f) => {
    const full = path.join(dir, f);
    return fs.statSync(full).isDirectory() ? getFiles(full) : [full];
  });
}

const pattern = /(["'`])((?:\.?\/)?(?:assets\/videos|videos|images|assets)\/[^"'`]*)\1/g;
const missing = new Set();
let total = 0;

for (const file of getFiles('./src')) {
  if (!['.js', '.jsx', '.ts', '.tsx', '.css'].includes(path.extname(file))) continue;
  const original = fs.readFileSync(file, 'utf8');
  let count = 0;
  const updated = original.replace(pattern, (match, q, p) => {
    const url = findUrl(p);
    if (url) { count++; return q + url + q; }
    missing.add(`${p}   (in ${file})`);
    return match;
  });
  if (updated !== original) {
    fs.writeFileSync(file, updated);
    console.log(`✏️  ${file}: ${count} fixed`);
    total += count;
  }
}

fs.writeFileSync('missing-files.txt', [...missing].join('\n'));
console.log(`\n✅ Fixed: ${total}`);
console.log(`❌ Still missing: ${missing.size} (see missing-files.txt)`);