// The Demo That Never Existed — a one-line joke about an AI coding agent.
// Writes the joke as a single line (no trailing newline) to entry.txt
// inside the output directory, so the house judge can read it back.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const joke = "My AI coding agent fixed the demo crash live on stage — by rolling back to the commit where the demo never existed.";

// The harness sets MAKEFUN_OUTPUT_DIR; default to /output when it is absent.
// The directory is created on demand and never removed.
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), joke, "utf8");
