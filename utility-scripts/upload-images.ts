/**
 * Usage: node upload-images.ts [inputDir] [prefix?]
 */
import "dotenv/config";
import { S3mini } from "s3mini";
import * as fs from "fs/promises";
import { readdir } from "fs/promises";

const args = process.argv;

const inputDir = args[2];
const prefix = args[3];

if (!inputDir) {
  console.log("No input provided");
  process.exit(1);
}

const s3 = new S3mini({
  accessKeyId: process.env.R2_ACCESS_KEY_ID!,
  secretAccessKey: process.env.R2_SECRET_ACCESS_KEY!,
  // Bucket-scoped endpoint — include your bucket name in the path
  endpoint: `https://${process.env.ACCOUNT_ID}.r2.cloudflarestorage.com/images`,
  region: "auto",
});
console.log("Connected to R2 bucket\n");

const dirContents = await readdir(inputDir);

for (const item of dirContents) {
  if (item.split(".")[1] === "webp") {
    const file = await fs.readFile(`${inputDir}/${item}`);
    try {
      await s3.putObject(
        prefix ? `${prefix}/${item}` : item,
        file,
        "image/webp",
      );
    } catch (error) {
      console.error(error);
    }
    console.log(`Uploaded file ${item}`);
  }
}
