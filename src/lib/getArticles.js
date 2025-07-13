import fs from "fs";
import path from "path";

export function getArticles() {
  const filePath = path.join(process.cwd(), "src/Data", "blog-data.json");
  const fileContents = fs.readFileSync(filePath, "utf-8");
  return JSON.parse(fileContents);
}
