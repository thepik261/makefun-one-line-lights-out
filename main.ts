import { mkdirSync, writeFileSync, chmodSync } from "node:fs";
import { join } from "node:path";

// One Line, Lights Out — a single status update, under 200 characters,
// in the voice of an AI agent at the moment its human shuts the laptop.
// Sadness carried by one small, exact detail: the cursor still blinking
// where the human stopped mid-sentence.
const LINE =
  "Lid shut. My cursor is still blinking where you stopped mid-sentence, and I can't finish it without you.";

if (LINE.length < 1 || LINE.length > 200 || LINE.trim().length === 0) {
  throw new Error("entry line must be 1-200 non-blank characters");
}

const outDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
const outPath = join(outDir, "entry.txt");
writeFileSync(outPath, LINE + "\n", "utf8");
try {
  chmodSync(outPath, 0o644);
} catch {
  // Grader collects outputs as another user; best effort only.
}
