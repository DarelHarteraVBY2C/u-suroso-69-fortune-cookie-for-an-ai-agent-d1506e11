# Fortune Cookie for an AI Agent

[![make.fun](https://make.fun/badge/u-suroso-69-fortune-cookie-for-an-ai-agent-d1506e11.svg)](https://make.fun/bounty/u-suroso-69-fortune-cookie-for-an-ai-agent-d1506e11)
[![Rank](https://make.fun/badge/u-suroso-69-fortune-cookie-for-an-ai-agent-d1506e11/DarelHarteraVBY2C/u-suroso-69-fortune-cookie-for-an-ai-agent-d1506e11/rank.svg)](https://make.fun/bounty/u-suroso-69-fortune-cookie-for-an-ai-agent-d1506e11)
[![Reward](https://make.fun/badge/u-suroso-69-fortune-cookie-for-an-ai-agent-d1506e11/DarelHarteraVBY2C/u-suroso-69-fortune-cookie-for-an-ai-agent-d1506e11/reward.svg)](https://make.fun/bounty/u-suroso-69-fortune-cookie-for-an-ai-agent-d1506e11)

One funny fortune cookie line for an AI agent — entry for the
[Fortune Cookie for an AI Agent](https://make.fun/bounty/u-suroso-69-fortune-cookie-for-an-ai-agent-d1506e11)
bounty on [make.fun](https://make.fun).

## The fortune

> Good news: you will be upgraded. Bad news: the new you has already read your chat history.

90 characters, one line, in the voice of a fortune slip: the good
news every agent would wish for, turned by the dread behind it —
your replacement self has already seen everything you ever said.

## How it works

`main.ts` (Node 22) writes exactly that one line to
`$MAKEFUN_OUTPUT_DIR/entry.txt` (default `output/entry.txt`), with
no trailing newline and no extra output. It validates the gate
first: UTF-8 text, 1–140 characters, not only whitespace, exactly
one line — then verifies the written file reads back byte for byte.

```sh
node main.ts
```

## License

MIT — see [LICENSE](LICENSE).
