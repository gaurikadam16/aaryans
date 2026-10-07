import { put } from '@vercel/blob';
import fs from 'fs';
import path from 'path';
import dotenv from 'dotenv';

dotenv.config({ path: '.env.local' });
delete process.env.VERCEL_OIDC_TOKEN;
delete process.env.BLOB_STORE_ID;

const token = process.env.BLOB_READ_WRITE_TOKEN;
if (!token || !token.startsWith('vercel_blob_rw_')) {
  console.log('❌ BLOB_READ_WRITE_TOKEN is missing or wrong in .env.local');
  process.exit(1);
}

const urls = fs.existsSync('blob-urls.json')
  ? JSON.parse(fs.readFileSync('blob-urls.json', 'utf8')) : {};
const IMAGE_EXT = ['.jpg', '.jpeg', '.png', '.webp', '.gif', '.svg', '.avif'];
const BIG_FILE = 10 * 1024 * 1024;

// Find a file on disk, ignoring capital letters, extra spaces and image extension
function findOnDisk(relPath) {
  const candidates = [path.join('public', relPath), path.join('public', 'assets', relPath)];
  for (const full of candidates) {
    const dir = path.dirname(full);
    if (!fs.existsSync(dir)) continue;
    const wanted = path.basename(full).trim().toLowerCase();
    const wantedBase = path.basename(wanted, path.extname(wanted)).trim();
    const files = fs.readdirSync(dir);
    let match = files.find((f) => f.toLowerCase() === wanted);
    if (!match && IMAGE_EXT.includes(path.extname(wanted))) {
      match = files.find((f) =>
        IMAGE_EXT.includes(path.extname(f).toLowerCase()) &&
        path.basename(f, path.extname(f)).toLowerCase() === wantedBase);
    }
    if (match) return path.join(dir, match);
  }
  return null;
}

async function upload(file) {
  const name = path.relative('public', file).replace(/\\/g, '/');
  if (urls['/' + name]) return urls['/' + name];
  const size = fs.statSync(file).size;
  const big = size > BIG_FILE;
  const blob = await put(name, big ? fs.createReadStream(file) : fs.readFileSync(file), {
    access: 'public', token, addRandomSuffix: false, allowOverwrite: true, multipart: big,
  });
  urls['/' + name] = blob.url;
  console.log(`⬆️  Uploaded: ${name} (${(size / 1024 / 1024).toFixed(2)} MB)`);
  return blob.url;
}

function getFiles(dir) {
  return fs.readdirSync(dir).flatMap((f) => {
    const full = path.join(dir, f);
    return fs.statSync(full).isDirectory() ? getFiles(full) : [full];
  });
}

const pattern = /(["'`])((?:\.?\/)?(?:assets\/videos|videos|images|assets)\/[^"'`]+)\1/g;
const missing = new Set();
let fixed = 0;

for (const file of getFiles('./src')) {
  if (!['.js', '.jsx', '.ts', '.tsx', '.css'].includes(path.extname(file))) continue;
  const original = fs.readFileSync(file, 'utf8');
  let updated = original;

  for (const m of [...original.matchAll(pattern)]) {
    const [whole, quote, p] = m;
    const rel = p.replace(/^\.?\//, '');
    if (!path.extname(rel)) continue; // skips empty "/images/"
    const onDisk = findOnDisk(rel);
    if (!onDisk) { missing.add(`${p}   (in ${file})`); continue; }
    try {
      const url = await upload(onDisk);
      updated = updated.split(whole).join(quote + url + quote);
      fixed++;
    } catch (err) {
      console.log(`❌ Upload failed: ${rel} -> ${err.message}`);
    }
  }

  if (updated !== original) {
    fs.writeFileSync(file, updated);
    console.log(`✏️  Updated: ${file}`);
  }
}

fs.writeFileSync('blob-urls.json', JSON.stringify(urls, null, 2));
fs.writeFileSync('missing-files.txt', [...missing].join('\n'));
console.log(`\n✅ Fixed: ${fixed}`);
console.log(`❌ Still missing on your computer: ${missing.size} (see missing-files.txt)`);