import puppeteer from "puppeteer";
import { readdir, readFile } from "fs/promises";
import { join } from "path";
import { homedir } from "os";

const cacheDir = join(homedir(), ".cache/puppeteer/chrome");
const versions = (await readdir(cacheDir).catch(() => [])).filter(v => !v.endsWith(".zip")).sort();
let executablePath;
for (const v of versions) {
  const candidate = join(cacheDir, v, "chrome-linux64/chrome");
  try { 
    await readFile(candidate); 
    executablePath = candidate; 
    break; 
  } catch { /* skip */ }
}

console.log("Using executable:", executablePath);

const browser = await puppeteer.launch({
  headless: true,
  executablePath,
  args: ["--no-sandbox", "--disable-setuid-sandbox"]
});

const page = await browser.newPage();
await page.goto("file:///home/bpast/php/4th-devs/01_04_reports/workspace/template.html", { waitUntil: "networkidle0" });

import { mkdir } from "fs/promises";
await mkdir("/home/bpast/php/4th-devs/01_04_reports/workspace/output", { recursive: true });

await page.pdf({
  path: "/home/bpast/php/4th-devs/01_04_reports/workspace/output/template.pdf",
  format: "A4",
  printBackground: true,
  margin: { top: "20mm", right: "20mm", bottom: "20mm", left: "20mm" }
});
await browser.close();
console.log("PDF generated: workspace/output/template.pdf");
