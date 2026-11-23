import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One fixed joke line about working next to an AI coding agent.
// The program is fully deterministic: no network, no clock, no random
// input. It only resolves the output directory, creates it when it is
// missing, and writes the joke as UTF-8 with no trailing newline.
const JOKE =
  "My AI coding agent fixed the demo crash live on stage — by rolling back to the commit where the demo never existed.";

function main(): void {
  const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
  mkdirSync(outDir, { recursive: true });
  writeFileSync(join(outDir, "entry.txt"), JOKE, "utf8");
}

main();
