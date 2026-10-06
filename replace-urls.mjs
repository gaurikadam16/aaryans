import fs from 'fs';
import path from 'path';

const urls = JSON.parse(fs.readFileSync('blob-urls.json', 'utf8'));
const scanFolders = ['./src', './public'];
const scanExt = ['.js', '.jsx', '.ts', '.tsx', '.css', '.html', '.json'];
const skipFiles = ['manifest.json'];

function getFiles(dir) {
  return fs.readdirSync(dir).flatMap((f) => {
    const full = path.join(dir, f);
    return fs.statSync(full).isDirectory() ? getFiles(full) : [full];
  });
}

const escape = (s) => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

let totalChanges = 0;

for (const folder of scanFolders) {
  for (const file of getFiles(folder)) {
    if (!scanExt.includes(path.extname(file))) continue;
    if (skipFiles.includes(path.basename(file))) continue;

    let content = fs.readFileSync(file, 'utf8');
    const original = content;
    let count = 0;

    for (const [oldPath, newUrl] of Object.entries(urls)) {
      const p = escape(oldPath.replace(/^\//, '')); // images/hero.jpg

      // process.env.PUBLIC_URL + "/images/hero.jpg"
      const r1 = new RegExp(`process\\.env\\.PUBLIC_URL\\s*\\+\\s*(["'\`])\\.?\\/?${p}`, 'g');
      // "/images/hero.jpg", "./images/hero.jpg", `${process.env.PUBLIC_URL}/images/hero.jpg`, url(/images/hero.jpg)
      const r2 = new RegExp(`(["'\`(])(?:\\$\\{process\\.env\\.PUBLIC_URL\\})?\\.?\\/?${p}`, 'g');

      content = content.replace(r1, (m, q) => { count++; return q + newUrl; });
      content = content.replace(r2, (m, q) => { count++; return q + newUrl; });
    }

    if (content !== original) {
      fs.writeFileSync(file, content);
      console.log(`✏️  ${file}: ${count} changes`);
      totalChanges += count;
    }
  }
}

console.log(`\n✅ Done. Total replacements: ${totalChanges}`);