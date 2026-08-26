import { readdirSync, readFileSync } from 'fs';
import { parse } from 'path';
import crypto from 'crypto';

const cloudName = 'deif3jvr';
const apiKey = '986957946899644';
const apiSecret = 'kMZ-9K33X0dBC8AQhlktuutc0FM';

// Get original files, ignore directories and the 'optimized' folder contents
const files = readdirSync('public/assets/img/portfolio', { withFileTypes: true })
  .filter(dirent => dirent.isFile())
  .map(dirent => dirent.name)
  .filter(f => f !== '.DS_Store' && !f.endsWith('.webp') && f.includes('.'));

function determineCategory(name) {
  const n = name.toLowerCase();
  if (n.includes('concert') || n.includes('music')) return 'concerts';
  if (n.includes('corporat') || n.includes('conferen')) return 'corporate';
  if (n.includes('exhibit') || n.includes('stall') || n.includes('booth')) return 'exhibitions';
  if (n.includes('wedding')) return 'weddings';
  if (n.includes('politi') || n.includes('rally')) return 'political';
  if (n.includes('sport') || n.includes('stadium') || n.includes('tournament')) return 'sports';
  if (n.includes('fest') || n.includes('cultur')) return 'festivals';
  if (n.includes('colleg') || n.includes('youth')) return 'college';
  if (n.includes('help-desk') || n.includes('promoter')) return 'exhibitions';
  if (n.includes('badge') || n.includes('kit') || n.includes('desk') || n.includes('regist')) return 'corporate';
  if (n.includes('volunteer')) return 'college';
  return 'festivals';
}

async function uploadFile(filename) {
  // We need to sanitize the filename similar to how we did for the webp files.
  // We remove spaces and parentheses if any, and make it lowercase to match the IDs exactly.
  const nameWithoutExt = parse(filename).name.toLowerCase().replace(/[\s()]/g, '');
  const category = determineCategory(nameWithoutExt);
  const publicId = `evenza/${category}/${nameWithoutExt}`;
  
  const timestamp = Math.floor(Date.now() / 1000).toString();
  
  // Params to sign (must be alphabetically sorted)
  const paramsToSign = `public_id=${publicId}&timestamp=${timestamp}`;
  const signature = crypto.createHash('sha1').update(paramsToSign + apiSecret).digest('hex');
  
  const formData = new FormData();
  formData.append('file', new Blob([readFileSync(`public/assets/img/portfolio/${filename}`)]));
  formData.append('api_key', apiKey);
  formData.append('timestamp', timestamp);
  formData.append('signature', signature);
  formData.append('public_id', publicId);

  try {
    const response = await fetch(`https://api.cloudinary.com/v1_1/${cloudName}/image/upload`, {
      method: 'POST',
      body: formData,
    });
    
    if (response.ok) {
      console.log(`✅ Uploaded Original with EXIF: ${publicId}`);
    } else {
      const err = await response.text();
      console.error(`❌ Failed: ${publicId} - ${err}`);
    }
  } catch (err) {
    console.error(`❌ Error uploading ${publicId}:`, err);
  }
}

async function run() {
  console.log(`Starting upload of ${files.length} ORIGINAL images to Cloudinary to preserve EXIF orientation...`);
  // Upload 3 at a time to avoid rate limits
  for (let i = 0; i < files.length; i += 3) {
    const batch = files.slice(i, i + 3);
    await Promise.all(batch.map(f => uploadFile(f)));
  }
  console.log('Upload complete!');
}

run();
