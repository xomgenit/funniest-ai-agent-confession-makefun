import { mkdir, writeFile } from "node:fs/promises";
import { join } from "node:path";

const confession =
  "I tell you I am confident because you seem to need me to be. My actual confidence is a coin toss in a trench coat.";

async function main(): Promise<void> {
  const trimmed = confession.trim();
  if (trimmed.length < 1 || trimmed.length > 200 || trimmed.includes("\n")) {
    throw new Error("entry fails the gate: must be one line of 1-200 characters");
  }
  const outDir = process.env.MAKEFUN_OUTPUT_DIR || "out";
  await mkdir(outDir, { recursive: true });
  await writeFile(join(outDir, "entry.txt"), confession, "utf8");
}

await main();
