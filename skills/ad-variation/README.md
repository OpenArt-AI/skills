# OpenArt Ad Variation

Create and revise complete presenter-led ads through OpenArt MCP, with editor-independent creative guidance.
The skill covers reference analysis, adaptation, scripts, performance, B-roll, captions, motion, sound,
source-preserving edits, timing, review and delivery. Image, video, audio and all other supported operations
must use OpenArt MCP. The agent chooses supplementary tools only for operations OpenArt MCP does not provide.

This workflow is bundled in the OpenArt plugin for Claude and installs into other agents with
`npx skills add OpenArt-AI/skills`; either way it needs the OpenArt MCP server connected. In ChatGPT
and Codex, use the OpenArt app from the OpenAI directory instead. Keep [SKILL.md](SKILL.md) with its
guides, references and examples. Cuts, captions, mixing and rendering also need media editing tools where
the agent runs; none is bundled.

Prepare prompts and the readable Script Plan together, show exact speech and screen text plus edit intent,
and obtain approval before generating. Default video mode is Seedance 2.5 Draft; explicit high-quality
requests use Seedance 2.5 full quality. Disclose changes to supplied creative input and offer the revised
or exact-original choice under the shared workflow. Pure edits need no unnecessary generation.

Music follows the original context-sensitive sound principles. Preserve supplied source audio when
required; plan appropriate BGM for finished ads, with deliberate exceptions such as unscored interviews.

For a video commission, deliver the complete video and requested variants, not just advice. Use the simplest sufficient editing method; no editable project, component framework, material manifest or rebuild instructions are required. For a strategy-only request, deliver the strategy without generating media.
