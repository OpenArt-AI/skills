# OpenArt Product Listing Video

Create and revise videos for product-detail media galleries through OpenArt MCP, especially Amazon-style item
pages where videos appear alongside product photos. Use product images, verified specifications, a brief,
a reference, approved copy or existing generated results. This workflow does not upload to a marketplace.

This workflow is bundled in the OpenArt plugin for Claude and installs into other agents with
`npx skills add OpenArt-AI/skills`; either way it needs the OpenArt MCP server connected. In ChatGPT
and Codex, use the OpenArt app from the OpenAI directory instead. Keep [SKILL.md](SKILL.md) and its
references together.

## Typical requests

> Make a product listing gallery video from these front and side images. No added text; preserve the packaging
> and match the exact item shown in the companion photos.

> Show how this verified folding mechanism works, with concise labels for the two operations.

> Explain the visible stitching and weave with precise callouts, without inventing material performance claims.

> Adapt this reference to the blue SKU only. Use the supplied dimensions and exact model number.

## Output and boundaries

For video requests, receive model-generated product videos, their complete prompts, reference/settings/task
records and review findings. The model creates any requested cuts, labels, sound and other effects inside the video.
Normally include a fitting light music bed that supports product inspection. Preserve meaningful operation
sounds and deliberate unscored treatments; a requirement for muted comprehension does not itself omit BGM.
This version does not deliver an editable timeline or perform post-production repair.

For sparse briefs, start from a concise product-focused treatment, approximately 10 seconds when it fits.
Choose format from the actual placement and verified specifications; a square photo does not imply square video.
A white background and concise feature callouts may be useful, not mandatory.
Clean showcases and real-setting demonstrations can omit annotations when that suits the request.

Source evidence determines which views, operations, dimensions and claims can be shown.
Generated text, geometry and tracking require inspection; the skill does not guarantee them from a prompt alone.
Video, cover/thumbnail and main product image have separate requirements. Generate a cover only when requested
and supported, record its output separately, and do not promise marketplace approval or gallery order.

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
