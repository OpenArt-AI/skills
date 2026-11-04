# Turn the treatment into a feasible sequence

Create a shot/beat plan proportional to the duration. Give each beat an ID, purpose, approximate time range,
product visibility/state, framing, subject action, camera path, light/material event, transition and sound.
Add exact speech and visible text only where used. Omit irrelevant fields rather than filling a rigid form.

Plan the last image before spending the entire duration on the opening. A long spot may need several seconds
for a closing hero; a short spot may resolve through one concise action. Budget by actual recognition, reading
and sound needs, not a mandatory ratio. Time ranges must fit the chosen duration, and actions must be physically
plausible at the intended speed.

Carry a transition through shape, action, gaze, light, reflection, sound or a deliberate contrast.
Honor hard-cuts-only or continuous-shot requests. Multiple shots may be generated in one request;
consult [continuity and variants](continuity-and-variants.md) before dividing generation jobs.

Build the complete generation prompt from the approved treatment:
1. Runtime, aspect ratio, intended brand impression and actual reference-role bindings.
2. Product/brand/identity locks and permitted changes.
3. Specific visual world, photography, light, color and material behavior.
4. The timed sequence with camera, action, transitions, exact text/dialogue and sound.
5. The brand music direction, its progression and balance with speech/product sounds, and the closing
   composition and sonic resolution. Follow [music and sound](music-and-sound.md), including deliberate exceptions.
6. Only the exclusions needed to protect this brief.

Keep stage directions outside dialogue. Preserve locked copy verbatim and place pronunciation guidance
separately. Direction language does not dictate spoken or graphic language.
A single-paragraph prompt is appropriate when requested; it must retain the necessary relationships.

For requested brand graphics, state accurate content, placement, hierarchy, entrance, readable hold and exit.
Treat a wordmark as an identity asset rather than a generic font substitution. Keep physical packaging text
distinct from an added title. Do not leave essential typography for an unspecified post-production step.

Use a generated starting image or storyboard only when it serves a real dependency and the selected mode
can consume it appropriately. Keep any storyboard consistent with the final sequence; it is not automatically
an input video, a proof of accurate product geometry or a requirement for every project.

Before submitting, compare the complete prompt against the brief and product ledger. Check for conflicting
no-text instructions, unsupported views/claims, too much action, insufficient ending time, missing assets and
unbound attachment labels. Resolve model capability limits through [OpenArt execution](openart-execution.md).
