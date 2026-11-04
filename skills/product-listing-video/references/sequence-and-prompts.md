# Translate evidence into shots and labels

Build an information-to-shot map: what the viewer should learn, the supporting source, the view/action that
shows it, exact copy if any, and the time needed to understand it. Use stable beat IDs and distinguish
source evidence from an illustrative setting or visual metaphor.

For each shot, specify time range, SKU/physical state, framing and visible surfaces, lighting/material,
camera and subject motion, operation or detail, transition, and sound. Include label/annotation instructions
only for shots that use them. Keep object counts and accessory ownership explicit when easily confused.

For a callout, write the actual label in the shot's time range:
- The precise product detail and anchor point.
- The dot/line or other explanatory graphic and its path.
- Label position, exact wording and readable scale.
- Entrance, stable reading time, any tracking, and exit.
- Any associated sound cue.

A separate graphics list may aid review but cannot substitute for specifying the behavior in the relevant shot.
Do not end with "add labels later" or introduce an unimplemented typography/tracking workflow.

Assemble a complete prompt with duration/aspect ratio, actual reference bindings, product and evidence locks,
presentation approach, timed sequence, exact words, graphic behavior when used, sound, ending and useful
exclusions. Requested no-text/no-graphics behavior overrides the feature-callout default.
Specify the selected music character, balance with narration and operation sounds, and ending, or an intentional
unscored exception from [music and sound](music-and-sound.md). No narration does not imply no BGM.
"No dialogue captions" should not contradict separately requested product feature labels.

Plan enough time for product identification, mechanism operation, reading and the final state.
Do not shorten timestamps to fit more actions. Resolve locked-wording or duration conflicts before submission.
Avoid views that expose unsupported geometry; an impressive orbit is not worth inventing product features.

If using multiple SKUs in one video, explicitly assign each shot's variant and intended transitions.
Do not describe a color/SKU change as continuous physical motion unless the user requested an illustrative
comparison and the output cannot be mistaken for the product changing itself.

A shot plan does not force multiple generation requests. Prefer a complete supported model output.
Use [continuity and variants](continuity-and-variants.md) for request boundaries and variant ownership,
and [OpenArt execution](openart-execution.md) for the live model and attachment contract.

Before submitting, compare all visible/spoken words, numbers, units, views, actions and quantities with
the product ledger. Check for conflicting negative instructions and impossible information density.
