# OpenArt UGC

Create phone-native creator videos from product images, a brief, a script, identity media or creative references.
This workflow is bundled in the OpenArt plugin for Claude and installs into other agents with
`npx skills add OpenArt-AI/skills`; either way it needs the OpenArt MCP server connected. In ChatGPT
and Codex, use the OpenArt app from the OpenAI directory instead. Keep [SKILL.md](SKILL.md) and its
references together.

## Typical requests

> Show this bag during an ordinary morning packing routine. Use natural window light and casual speech.
> Demonstrate only the visible pocket layout; do not claim that the creator has used it for months.

> Adapt this selfie video's delivery to my product. Preserve the approved script and use a fictional adult creator.

> Make two openings for the accepted product-sharing idea. Keep the product, creator and main message consistent.

## Output and boundaries

Receive a model-generated creator video, prompts, reference/settings/task records and audiovisual QA.
For explicit prompt-only requests, receive the plan and complete prompt without generation.
Separate generated clips are delivered only when requested or agreed; they are not automatically assembled.

UGC uses ordinary settings, phone-style framing, natural pauses and plausible interaction. PGC uses more
deliberate camera/lighting setups and structured on-camera presentation. Neither is defined by poor versus good
image quality, and neither permits invented consumer evidence or expertise.

A sparse ad brief becomes a tailored creator recommendation with specific everyday reasons, meaningful product use
and naturally integrated commercial requirements. The listener should understand why the product matters. Choose duration to fit the script. Show the authored script and counts
before generating, following the shared preview/full-quality workflow. Speech follows the
requested language. Normally include fitting light background music; unscored formats and explicit no-music
requests take priority. Captions follow the brief. No Hypit, local post-production or guaranteed
performance uplift is included.

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
