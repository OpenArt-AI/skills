# Shared video creation experience

Use this workflow for every video, clip and variant created by this skill. It owns intake order,
the Prompt/Script Plan relationship, generation approval, preview/full-quality selection and upgrades.
The skill's craft guides still own its style and delivery boundary. Read
[product understanding](product-understanding.md) before authoring and
[generation approval](generation-approval.md) when presenting a generation decision. Read
[intent and script development](intent-and-script-development.md) for every brief or supplied draft,
including detailed timecoded inputs. Input detail alone does not lock wording or internal beat timings.

## Resolve the inputs before writing

Read the request and prior decisions. Inspect uploaded product images and reference videos; read supplied
product pages through available browsing tools. Separate product facts, identity, performance, creative
reference and footage to retain. Ask only about consequential missing or conflicting information; combine
related questions and reuse answers. Do not turn clarification into a compulsory questionnaire.

Product-page URLs and social-video URLs are different inputs. Product pages can supply facts and image
sources. For a YouTube, Instagram, X or other reference-video link, ask the user to upload the actual video
through the host's supported attachment flow. This release does not implement or install a social-video
downloader, scraping service or shared link-resolution API. Do not claim to have analyzed a video from its
title, thumbnail or page text. Analyze accessible uploaded files across their complete picture and sound.
If a reference cannot be obtained, resolve whether the user wants to proceed without it before claiming
reference-led work. Continue independent product research while the file is pending.

## Author the executable prompt and readable plan together

Choose a supported generation route and understand its input schema before completing the creative proposal.
Write the full, model-native prompt for every planned generation BEFORE presenting the Script Plan.
Derive the readable plan from those prompts, or develop both together and reconcile them before showing it.
Do not present a script now and invent the actual generation prompt only after approval.
Private creative exploration may precede prompt writing; it is not a substitute for the completed prompt.

Keep the prompt expressive and specific to the model: reference roles, physical action, performance,
camera/light, temporal progression, exact speech, visible text, music/sound and ending. Develop supplied
drafts from their intent, preserving required information, exact keywords and genuinely locked portions.
Only explicit exact-execution constraints or an approved unchanged version lock the full script.
Do not invent claims while strengthening the creative expression.
Preserve the model's creative strengths while faithfully representing the user's observable experience.

The Script Plan is a readable view of the SAME creative version, not a second independent creative draft.
Use concise timed beats or a table, including for a continuous PGC/Talking Head take. Cover:
- Concept, audience/viewing promise, presenter or subject, setting, and opening.
- Visible actions and product handling, aligned with exact spoken words in the commissioned language.
- ALL planned added on-screen words: subtitles, hooks, labels, qualifiers/disclosures, offers, CTA and end frame.
  Show their exact wording and approximate appearance; record none when no added text is intended.
  Full subtitles may refer to the exact dialogue above if they are verbatim; show edited captions separately.
- Reference/SKU identity and any required packaging or interface wording whose fidelity matters.
- Voice/performance, music presence or intentional absence, sound hierarchy and ending.
- Duration, ratio, proposed preview/full-quality mode, output count, generation-request count, necessary
  generated image dependencies, estimated credits when available, and authorized retry limits.

The full prompt need not be displayed by default; keep it available if requested. Technical camera or model
syntax can stay hidden. Viewer-facing creative decisions cannot: no hidden new dialogue, screen text,
claims, disclosures, hooks or endings. For an editable production, also prepare the planned composition
instructions before review; distinguish text/audio in generated footage from text/audio owned by the edit.
Do not promise a later editing stage in a skill that does not provide one.

If the proposal changes supplied creative input, the response presenting the Script Plan must END with
a short explanation of the change and its rationale, followed by the explicit choice of revised script
or exact original. Follow [generation approval](generation-approval.md); do not hide this notice inside
the artifact or treat a quality-mode preference as acceptance of the rewrite. Resolve the version choice
before generating, unless the user specifically delegated that choice and waived review for this scope.

Give the prompt and plan the same version and stable clip/variant IDs. User changes update both together.
After approval, submit that version. Resolving a real attachment ID or schema formatting is execution work;
changing what the viewer sees or hears is a creative revision. Show material changes before generating
unless the user already authorized that revision scope. Do not enable unreviewed prompt enhancement that
could add or change approved speech/text; disable it through the real control when available, otherwise
disclose the limitation. Never invent an unsupported switch.

## Select preview or full-quality video

Apply these defaults to VIDEO generation, including generated clips inside a larger editable production:
- No quality-mode preference: Seedance 2.5 Draft preview.
- Explicit full-quality, high-quality final, HD, 720p/1080p delivery, or direct-final request: Seedance 2.5
  full-quality by default. Do not route to another model merely because it is cheaper, newer, or recommended
  by a generic chooser. A high-quality request does not require an extra preview detour.
- An explicit named model or preview-first choice takes priority over defaults. A final-quality goal with
  an explicit preview-first request starts in Draft. Resolve genuinely conflicting instructions together.
- If the chosen Seedance capability cannot satisfy a hard requirement or is unavailable, explain the gap
  and ask about the tradeoff. Do not silently select another model, lower the requested quality or drop audio.

These are product experience defaults, not frozen API IDs. Resolve exact model/mode IDs and schema live.
Use returned resolutions and pricing, never an old example as an executable configuration. Keep the script
and creative quality complete in Draft; preview means a lower-resolution generation, not abbreviated copy,
missing music, omitted demonstrations or an unfinished ending. Preserve an explicit aspect ratio; otherwise
recommend a supported ratio from the placement in the same review instead of creating a separate gate.

As of this workflow revision, the MCP catalog describes Draft at 480p and a same-video 1080p upgrade within
7 days; direct 720p/1080p uses full Seedance 2.5. Recheck current capabilities and each result's upgrade offer.
Do not promise a 720p Draft upgrade, unlimited eligibility or a cheaper total Draft-plus-upgrade bill.
Quote actual request credits and upgrade credits when available; do not invent a price or discount.

## Approval and generation

Present the readable plan and the generation decision together using
[generation approval](generation-approval.md). A response approving generation without a quality choice
uses the stated Draft default. A response approving a displayed full-quality plan uses that full-quality
choice. Missing mode preference is not a reason to ask the same question again.
No response is not approval. Reuse explicit authorization, including a clear instruction to skip approval
and generate directly within scope. Prompt-only and analysis-only tasks never submit generation requests.

Before submission, align plan/prompt version, actual model/mode, ratio, resolution, duration, count, audio,
reference bindings and spending scope. Save submitted settings and job receipts; recover an outstanding job
before submitting a replacement. Follow the host's result-card/wait/poll mechanism rather than inventing one.

## Preview, revision and upgrade

Show the Draft result as a PREVIEW, with actual resolution and an honest review status. Where playback is
available, check speech (especially brand names, prices and units), product identity/handling, opening,
planned screen text, music and ending. Mark inaccessible checks unverified. User-directed manual testing
or review takes priority; never claim an unperformed check passed.

Offer a concise next decision: revise this preview, or approve its offered HD upgrade. Show the actual
upgrade resolution, incremental credits and expiry when available. A user liking a preview is not alone
authorization to spend on an upgrade; reuse a clear existing upgrade authorization for that exact scope.
Use the result's supported upgrade action and source-resource binding. Do not rerun the text prompt and
call the new random generation an upgrade of the same video. If the offer expired or is unavailable,
explain the alternative and obtain the needed decision before spending.

Changing dialogue, action or another creative choice produces a revised prompt/plan and normally a new
preview; it is not an upgrade. Direct full-quality generation skips the Draft stage but keeps the same
planning, authorization and review flow. For multi-clip edits, upgrade selected source clips and rebuild
only through the skill's actual editing capability; a higher export resolution alone does not upgrade them.
Keep preview and final resources, selected versions, authorization and review states distinct.

## Integration boundary

These instructions guide the agent; they do not implement a downloader, backend approval lock, budget
enforcement, deterministic rendering or an upgrade API. Use actual host/tool capabilities and report gaps.
Future video and hook-variant skills must use the same workflow, while retaining their own creative scope.
