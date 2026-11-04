# OpenArt TVC

Create and revise brand commercials through OpenArt MCP, using product materials, a brief, a reference film,
an approved script, or an existing generated result.

This workflow is included in the OpenArt plugin for Claude and installs into other agents with
`npx skills add OpenArt-AI/skills`. In ChatGPT and Codex, use the OpenArt app from the OpenAI
directory instead. It needs a connected
OpenArt account, suitable model access and credits for generation. Full audiovisual review
depends on playback available in the host. See [SKILL.md](SKILL.md).

## Typical requests

> Make a warm, playful brand film for this product. Use its real colors and label, with no added text.

> Adapt the visual rhythm of this reference to our product. Keep the new brand's identity and exact slogan.

> Keep this approved concept, but revise the final product shot. Explain any preservation limits before generating.

> Write the complete generation prompt only. Do not generate media.

## What you receive

For video requests: a model-generated commercial, its authored prompt, reference/settings and task records,
and review findings. Normally include a brand-appropriate score with intentional progression and resolution;
honor deliberate unscored treatments. Music, graphics, cuts and speech are generated inside the video when
part of the treatment and supported by the selected model.
An editable composition project and local post-production are outside this version.

Recommend duration from the script and meaningful action. Show an authored script and generation counts;
use the shared preview/full-quality selection and generation approval. Runtime capability checks govern
feasible execution. An explicit fixed requirement is never silently shortened.

Exact logos, timing, product details and source-preserving edits require result verification. A prompt or
successful generation alone does not establish their correctness.

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
