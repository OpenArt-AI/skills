# Build Talking Head Video

Create a video organized around one person speaking to the camera: an explanation, recommendation,
tutorial, opinion, announcement or spokesperson message. The setup may be casual or polished.
This is a dedicated presenter format, alongside the UGC and PGC creative treatments.

This workflow is bundled in the OpenArt plugin for Claude and installs into other agents with
`npx skills add OpenArt-AI/skills`; either way it needs the OpenArt MCP server connected. In ChatGPT
and Codex, use the OpenArt app from the OpenAI directory instead. Keep [SKILL.md](SKILL.md) and its
references together.

## Examples

> Make a talking-head explanation of this product. Keep the product in the person's hand from the opening,
> use a relevant question to start, and demonstrate the verified feature naturally in the same shot.

> Use my uploaded speaking video as the delivery reference. Explain this topic to first-time users without
> a sales pitch. Show me the readable plan before generating a preview.

> Build a high-quality talking-head video from this script. Use Seedance 2.5 directly and preserve the words.

## Experience and output

Product-page URLs can supply facts and product-image sources; upload actual reference-video files for
analysis. Social-video URL downloading is not included. Read the [shared workflow](references/video-experience.md).
Full model prompts and readable Script Plans are authored together before generation approval. All planned
spoken and on-screen words are visible in the plan; native question UI is used where the host permits it.

An unspecified mode uses Seedance 2.5 Draft preview. Explicit high-quality/full-quality delivery uses
Seedance 2.5 directly. Upgrading an accepted preview uses its actual supported upgrade offer after authorization.
Promotional takes normally include fitting light native BGM; deliberate unscored formats and dialogue-only
requests preserve speech and useful ambience without music.

Receive the selected original video, prompt/plan version, settings, reference/task records and review status.
Long scripts may require an agreed set of ordered independent takes. This skill does not assemble those
takes, add B-roll, repair graphics in post or return an editable timeline. Native captions are optional and
planned explicitly; clean-footage requests omit them. Generated media must be inspected to establish quality.

Detailed scripts and timecoded prompts are developed as creative drafts by default. The skill extracts the
intended message, preserves required facts/keywords and improves the writing or visual argument before
showing the matching Script Plan and prompt version for review. Explicit verbatim/timing locks and approved
unchanged versions remain binding. See [intent and script development](references/intent-and-script-development.md).
