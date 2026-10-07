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

const file = process.argv[2];
if (!file || !fs.existsSync(file)) {
  console.log('❌ File not found:', file);
  process.exit(1);
}

const name = 'assets/videos/' + path.basename(file);
const sizeMB = (fs.statSync(file).size / 1024 / 1024).toFixed(2);
console.log(`⬆️  Uploading ${name} (${sizeMB} MB)...`);

const blob = await put(name, fs.createReadStream(file), {
  access: 'public',
  token: token,
  addRandomSuffix: false,
  allowOverwrite: true,
  multipart: true,
});

console.log('✅ Done! URL:');
console.log(blob.url);