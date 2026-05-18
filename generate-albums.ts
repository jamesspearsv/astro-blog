import * as fs from "fs/promises";

const dir = process.argv[2];

const contents = await fs.readdir(`/Users/james/Downloads/${dir}`);

console.log(dir);
console.log(contents);
