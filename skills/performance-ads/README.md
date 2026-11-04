# OpenArt Performance Ads

Create and revise social feed advertising videos through OpenArt MCP. Start from product materials, a brief,
a reference, approved copy, or existing results. The skill handles creative decisions, generation and review.

This workflow is bundled in the OpenArt plugin for Claude and installs into other agents with
`npx skills add OpenArt-AI/skills`; either way it needs the OpenArt MCP server connected. In ChatGPT
and Codex, use the OpenArt app from the OpenAI directory instead. Keep [SKILL.md](SKILL.md) and its
references together.

## Typical requests

> Make a feed ad for this product, emphasizing the confirmed one-handed opening mechanism. No stickers.

> Create three hook variations while holding the main message and CTA constant. Report unintended differences.

> Adapt this reference's pacing to our product and approved offer. Keep the exact offer text.

> Inspect this result and revise the prompt only to fix the unclear demonstration.

## Output and boundaries

For video requests, receive model-generated ads, prompts, reference/settings/task records and review notes.
Multiple shots, graphics, music or speech are generated inside the video when appropriate and supported.
Normally include fitting background music, with energy chosen for the product and creative treatment;
preserve explicit no-music requests and formats better served by natural sound alone.
This version does not provide an editable composition or post-production assembly.

Recommend duration to fit the script and follow the shared preview/full-quality approval workflow.
Show authored scripts and planned video/request counts under the generation approval workflow.
A product-only video, a continuous demonstration or a graphic-led ad can each fit the task.
Live capability checks govern execution; fixed user requirements are not silently changed.

Controlled variants record the intended variable and constants. Regeneration can introduce other differences,
which must be inspected. No audience response, conversion gain or platform certification is implied by generation.

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
