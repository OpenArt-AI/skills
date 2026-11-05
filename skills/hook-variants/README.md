# OpenArt Hook Variants

Create a performance ad from a product brief and reference images, then deliver complete versions with
different openings and the same accepted body. UGC is one possible treatment. No original video is required.
Default: five complete videos, built from one base ad and four new hooks. Other requested counts are supported.

This workflow is bundled in the OpenArt plugin for Claude and installs into other agents with
`npx skills add OpenArt-AI/skills`; either way it needs the OpenArt MCP server connected. In ChatGPT
and Codex, use the OpenArt app from the OpenAI directory instead. Keep [SKILL.md](SKILL.md) and its
references together. Use OpenArt MCP for image, video and all other supported operations. Joining each
hook to the shared body also needs a media editor, such as FFmpeg, where the agent runs; none is bundled.

The complete base script, each hook script, prompts and assembly plan are prepared before approval.
Select or revise hooks and choose Draft or full quality. Default: Seedance 2.5 Draft. Explicit high-quality
requests use Seedance 2.5 full quality. No BGM is generated or added; needed speech and natural sound remain.

Deliver labeled full ads with prompts, body mappings, receipts and review notes, not just opening clips.
Reference consistency is a direction to verify, not a promise of identical voices or seamless joins.

Example: "Use these product images to make five UGC-style performance ad versions. Develop one complete
ad, then vary only the opening. Show the full script and each hook before generating Draft previews."
