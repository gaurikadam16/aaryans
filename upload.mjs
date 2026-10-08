import { put } from '@vercel/blob';
import fs from 'fs';
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

// 4. Only these files
const files = [
  'public/images/lukaap.jpg',
  'public/assets/videos/lukaap.mp4',
  'public/images/ott.jpg',
  'public/images/ott_1.jpeg',
  'public/assets/videos/ott.mp4',
  'public/images/myteasury.png',
  'public/assets/videos/myteasury.mp4',
];

const BIG_FILE = 10 * 1024 * 1024; // 10 MB
let ok = 0;
const failed = [];

// 5. Upload
for (const file of files) {
  if (!fs.existsSync(file)) {
    failed.push(file);
    console.log(`⚠️ Not found: ${file}`);
    continue;
  }

  const name = file.replace(/^public\//, '');
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
    ok++;
    console.log(`✅ ${blob.url} (${(size / 1024 / 1024).toFixed(2)} MB)`);
  } catch (err) {
    failed.push(file);
    console.log(`❌ Failed: ${file} -> ${err.message}`);
  }
}

console.log('\n==============================');
console.log(`Uploaded: ${ok} files`);
console.log(`Failed:   ${failed.length} files`);