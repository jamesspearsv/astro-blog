/**
 * Usage: node transform-images.ts [inputDir]
 */

import sharp from 'sharp';
import * as fs from 'fs/promises';

const inputPath = process.argv[2];

if (!inputPath) {
    console.log('MISSING REQUIRED ARGUMENTS');
    console.log('Usage => `node transform-images.ts [input]`');
    process.exit(1);
}

console.log('Reading directory contents...\n');
const dirContents = await fs.readdir(inputPath);

await fs.mkdir(inputPath + '/webp');

console.log('Transforming images...\n');
for (const item of dirContents) {
    if (item !== '.DS_Store' && item.split('.')[1] !== 'webp') {
        console.log('Processing ' + item);

        try {
            await sharp(`${inputPath}/${item}`)
                .resize({ width: 400, withoutEnlargement: true })
                .webp()
                .toFile(`${inputPath}/webp/${item.split('.')[0]}-400w.webp`);

            console.log('Successfully processed 400px width');

            await sharp(`${inputPath}/${item}`)
                .resize({ width: 1200, withoutEnlargement: true })
                .webp()
                .toFile(`${inputPath}/webp/${item.split('.')[0]}-1200w.webp`);

            console.log('Successfully processed 1200px width');
        } catch (error) {
            console.error(error);
            process.exit(1);
        }
    }
}

console.log('\nSuccess!');
