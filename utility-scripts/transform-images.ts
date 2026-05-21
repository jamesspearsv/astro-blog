/**
 * Usage: node transform-images.ts [inputDir]
 */

import sharp from "sharp";
import * as fs from "fs/promises";

const inputPath = process.argv[2];

if (!inputPath) {
  console.log("MISSING REQUIRED ARGUMENTS");
  console.log("Usage => `node transform-images.ts [input]`");
  process.exit(1);
}

console.log("Reading directory contents...\n");
const dirContents = await fs.readdir(inputPath);

await fs.mkdir(inputPath + "/webp");

console.log("Transforming images...\n");
for (const item of dirContents) {
  if (item !== ".DS_Store" && item.split(".")[1] !== "webp") {
    try {
      await sharp(`${inputPath}/${item}`)
        .webp()
        .toFile(`${inputPath}/webp/${item.split(".")[0]}.webp`);
    } catch (error) {
      console.error(error);
      process.exit(1);
    }
    console.log(`${item.split(".")[0]}.webp`);
  }
}

console.log("\nSuccess!");
