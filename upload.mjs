import { put } from '@vercel/blob';
import fs from 'fs';
import path from 'path';
import dotenv from 'dotenv';

// 1. Load .env.local
dotenv.config({ path: '.env.local' });

// 2. Remove OIDC variables so the read-write token is used
delete process.env.VERCEL_OIDC_TOKEN;
delete process.env.BLOB_STORE_ID;

// 3. Check the token
const token = process.env.BLOB_READ_WRITE_TOKEN;
if (!token || !token.startsWith('vercel_blob_rw_')) {
  console.log('❌ BLOB_READ_WRITE_TOKEN is missing or wrong in .env.local');
  process.exit(1);
}

// 4. Settings
const baseFolder = './public';
const folders = ['./public/images', './public/assets'];
const allowed = ['.jpg', '.jpeg', '.png', '.webp', '.gif', '.svg', '.avif',
                 '.mp4', '.webm', '.mov', '.m4v'];
const BIG_FILE = 10 * 1024 * 1024; // 10 MB

// 5. Get all files inside a folder (including subfolders)
function getFiles(dir) {
  return fs.readdirSync(dir).flatMap((f) => {
    const full = path.join(dir, f);
    return fs.statSync(full).isDirectory() ? getFiles(full) : [full];
  });
}

// 6. Upload
const result = {};
const failed = [];

for (const folder of folders) {
  if (!fs.existsSync(folder)) {
    console.log(`⚠️ Folder not found, skipping: ${folder}`);
    continue;
  }

  for (const file of getFiles(folder)) {
    const ext = path.extname(file).toLowerCase();
    if (!allowed.includes(ext)) continue;

    const name = path.relative(baseFolder, file).replace(/\\/g, '/');
    const size = fs.statSync(file).size;
    const isBig = size > BIG_FILE;

    try {
      const blob = await put(
        name,
        isBig ? fs.createReadStream(file) : fs.readFileSync(file),
        {
          access: 'public',
          token: token,
          addRandomSuffix: false,
          allowOverwrite: true,
          multipart: isBig,
        }
      );
      result['/' + name] = blob.url;
      console.log(`✅ Uploaded: ${name} (${(size / 1024 / 1024).toFixed(2)} MB)`);
    } catch (err) {
      failed.push(name);
      console.log(`❌ Failed: ${name} -> ${err.message}`);
    }
  }
}

// 7. Save the URLs
fs.writeFileSync('blob-urls.json', JSON.stringify(result, null, 2));

console.log('\n==============================');
console.log(`Uploaded: ${Object.keys(result).length} files`);
console.log(`Failed:   ${failed.length} files`);
console.log('URLs saved in blob-urls.json');