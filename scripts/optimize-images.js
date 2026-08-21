import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import sharp from 'sharp';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

const assetDirs = [
  path.join(rootDir, 'src', 'assets'),
  path.join(rootDir, 'public')
];

async function optimizeImagesInDir(dirPath) {
  if (!fs.existsSync(dirPath)) return;
  const files = fs.readdirSync(dirPath);

  for (const file of files) {
    const filePath = path.join(dirPath, file);
    const stat = fs.statSync(filePath);

    if (stat.isDirectory()) {
      await optimizeImagesInDir(filePath);
      continue;
    }

    const ext = path.extname(file).toLowerCase();
    if (['.png', '.jpg', '.jpeg'].includes(ext)) {
      const originalSize = stat.size;
      const buffer = fs.readFileSync(filePath);

      try {
        let pipeline = sharp(buffer);
        const metadata = await pipeline.metadata();

        // Max reasonable resolution for web luxury display
        if (metadata.width && metadata.width > 1920) {
          pipeline = pipeline.resize({ width: 1920, withoutEnlargement: true });
        }

        let optimizedBuffer;
        if (ext === '.png') {
          optimizedBuffer = await pipeline
            .png({ compressionLevel: 9, quality: 85, adaptiveFiltering: true })
            .toBuffer();
        } else {
          optimizedBuffer = await pipeline
            .jpeg({ quality: 82, mozjpeg: true })
            .toBuffer();
        }

        if (optimizedBuffer.length < originalSize) {
          fs.writeFileSync(filePath, optimizedBuffer);
          const savedKB = ((originalSize - optimizedBuffer.length) / 1024).toFixed(1);
          console.log(`✓ Optimized ${file}: ${(originalSize / 1024).toFixed(1)} KB -> ${(optimizedBuffer.length / 1024).toFixed(1)} KB (Saved ${savedKB} KB)`);
        } else {
          console.log(`- ${file} is already fully optimized.`);
        }
      } catch (err) {
        console.warn(`! Skipped ${file}: ${err.message}`);
      }
    }
  }
}

async function run() {
  console.log('--- Starting Luxury Spa Image Optimization ---');
  for (const dir of assetDirs) {
    console.log(`Scanning: ${dir}`);
    await optimizeImagesInDir(dir);
  }
  console.log('--- Image Optimization Complete ---');
}

run();
