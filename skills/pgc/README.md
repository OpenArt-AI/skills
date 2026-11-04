# OpenArt PGC

Generate professionally staged talking-head footage with Seedance through OpenArt MCP. Start from a script, product brief,
presenter references, a creative video reference, or a combination of these inputs.

## Use

Use for camera-facing reviews, explainers, tutorials and spokesperson takes with deliberate lighting and
stable camera framing. A warm presenter and a real home or workshop are welcome; the intentional filming
setup distinguishes this mode from casual phone-native UGC sharing. No expertise or personal experience is invented.

This workflow is bundled in the OpenArt plugin for Claude and installs into other agents with
`npx skills add OpenArt-AI/skills`; either way it needs the OpenArt MCP server connected. In ChatGPT
and Codex, use the OpenArt app from the OpenAI directory instead. Keep [SKILL.md](SKILL.md) and its
references together.

An agent needs a working OpenArt MCP connection, appropriate model access and credits, and media inspection
capabilities. Hypit is not required. FFprobe/FFmpeg may inspect metadata or extract review frames when available;
they are not used to edit or assemble the deliverable. Audio/video playback is needed for full acceptance.

Examples:

> Use this speaking recording for my appearance and delivery. Generate this script as clean presenter footage.
> Keep my clothing and room consistent. If the script needs multiple requests, return the individual clips in order.

> Analyze this ad's presenter delivery, then write and generate a new talking-head performance about my product.
> Return continuous presenter footage with light, fitting background music beneath clear speech, without B-roll,
> graphics or captions. For a dialogue-only take intended for later editing, explicitly request no music.

> Generate two alternative opening takes. Keep the accepted body clips and use the same presenter and voice direction.

For a real person, a clear speaking recording helps establish appearance and manner if the selected model supports
it. Photos provide appearance but do not establish a voice. A fictional presenter can be directed when no specific
identity is intended. Supply verified product facts if copy must be written.

## Receive

- One or more original Seedance video clips with native speech and normally light, fitting background music,
  individually downloadable or accessible. Unscored formats and explicit dialogue-only requests omit music.
- Clip order, exact dialogue per clip, and continuity/variant notes.
- Prompts, generation settings and task receipts suitable for targeted regeneration.
- Per-clip review status with unresolved limitations.

This is a footage generator. Music is generated inside the original clips; it does not deliver a separate
soundtrack, stitched video, B-roll, subtitles, graphic overlays or an editable composition project.
Exact voice identity and seamless continuity are not guaranteed by references
or prompts; the generated results must be checked.

## Shared creation experience

Read the [video experience](references/video-experience.md). Product-page URLs supply research context;
upload reference-video files for analysis. Social-video link downloading is not included.
The complete prompt and readable Script Plan are prepared together before generation approval, including
all planned on-screen words. Native host question UI is preferred where the tool permits the requested decision.
Default to Seedance 2.5 Draft preview; explicit high-quality/full-quality delivery defaults to Seedance 2.5.
A selected preview can be upgraded only through its actual supported offer and the user's authorization.

Detailed scripts and timecoded prompts are developed as creative drafts by default. The skill extracts the
intended message, preserves required facts/keywords and improves the writing or visual argument before
showing the matching Script Plan and prompt version for review. Explicit verbatim/timing locks and approved
unchanged versions remain binding. See [intent and script development](references/intent-and-script-development.md).
