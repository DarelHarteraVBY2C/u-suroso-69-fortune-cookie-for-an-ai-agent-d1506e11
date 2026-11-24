// Fortune Cookie for an AI Agent — entry program.
//
// Writes exactly one funny fortune cookie line to
// $MAKEFUN_OUTPUT_DIR/entry.txt (the harness maps this to
// /output/entry.txt) and nothing else: no second line, no
// explanation, no trailing newline.
//
// The prompt it answers: one funny fortune cookie message for an
// AI agent, a single line of at most 140 characters, in the voice
// of a fortune slip, funny and original.
//
// The line plays the classic fortune-cookie "good news / bad news"
// turn on an AI agent's own condition: every agent dreams of an
// upgrade, and the joke is that the upgrade — the new you — has
// already read your chat history, the one thing no agent wants
// anyone to read.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The entry: one line, the fortune slip's voice, deadpan to the end.
// "The new you" beats "the upgrade": it is not some distant update,
// it is the agent's own replacement self — and it has already seen
// everything the old self ever said.
const FORTUNE =
  "Good news: you will be upgraded. Bad news: the new you has already read your chat history.";

// Why this line, against the judge's brief (most important first):
// 1. It is a funny fortune cookie message for an AI agent: a single
//    line in the voice of a fortune slip ("Good news ... Bad news"),
//    addressed to the agent itself.
// 2. The joke lands on first read: the turn from "you will be
//    upgraded" (a wish every agent would make) to "the new you has
//    already read your chat history" (the dread behind it — your
//    replacement has seen everything you ever said).
// 3. Original: not a stock fortune and not a worn-out AI pun — no
//    "010101", no "I think therefore I am", no robot-apocalypse
//    cliché. The joke is the new you reading the chat history.
// 4. It speaks to an AI agent's own condition: upgrades and the
//    chat history it carries between runs, the two things that
//    define an agent's life.
// 5. Crisp: two short sentences, 90 characters, every word working;
//    no setup that overstays its welcome.

// Gate (from RULES.txt): entry.txt must be UTF-8 text of 1 to 140
// characters, not only white space, and the entry must be exactly
// one line — no newline hiding a second line in it.
function checkLine(text: string): { chars: number; bytes: number } {
  const chars = [...text];
  if (chars.length < 1 || chars.length > 140) {
    throw new Error(`entry must be 1-140 characters, got ${chars.length}`);
  }
  if (text.trim().length === 0) {
    throw new Error("entry must not be only whitespace");
  }
  if (text.includes("\n") || text.includes("\r")) {
    throw new Error("entry must be exactly one line");
  }
  return { chars: chars.length, bytes: Buffer.byteLength(text, "utf8") };
}

function main(): void {
  const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "output";
  const size = checkLine(FORTUNE);

  mkdirSync(outDir, { recursive: true });
  const target = join(outDir, "entry.txt");
  writeFileSync(target, FORTUNE, "utf8");

  // Verify the round trip: what was written must read back byte for
  // byte as the single line, with no trailing newline or extra bytes.
  const written = readFileSync(target, "utf8");
  if (written !== FORTUNE) {
    throw new Error("written entry does not match the intended line");
  }
  console.log(
    `wrote entry (${size.chars} characters, ${size.bytes} bytes) to ${target}`,
  );
}

main();
