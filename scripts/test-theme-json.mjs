import { readFileSync } from "node:fs";

const files = ["jellybeans-mono.json", "jellybeans-mono-light.json"];

for (const file of files) {
  const raw = readFileSync(file, "utf8");
  const parsed = JSON.parse(raw);
  if (!parsed || typeof parsed !== "object") {
    throw new Error(`Invalid JSON object in ${file}`);
  }
}

console.log(`Validated ${files.length} theme JSON files`);
