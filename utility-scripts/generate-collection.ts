/**
 * Usage: node generate-collection.ts [inputDir] [collectionName]
 */
import * as fs from "fs/promises";

const inputDir = process.argv[2];
const collectionName = process.argv[3];

if (!inputDir || !collectionName) process.exit(1);

const dirContents = await fs.readdir(inputDir);
console.log(dirContents);

const collection = {
  src: `https://images.jspears.me/${collectionName}`,
  decription: "",
  images: dirContents,
};

await fs.writeFile(
  `./photo-collections/${collectionName}.json`,
  JSON.stringify(collection),
);
