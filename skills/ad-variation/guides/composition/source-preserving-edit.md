# Source-preserving edits across model requests

Use this when the source's duration, actions, cuts, or audio must remain intact. First verify that the selected model supports source editing with the needed temporal control. Accepting a reference video is not by itself a guarantee of frame-accurate editing. A newly generated interpretation may be useful but cannot be labeled an exact replacement without comparison.

Build a source-clock ledger before submitting: source in/out, reference handles, requested output duration, preserved attributes, output media ID, measured output duration, usable output range, and final timeline range. Inspect a representative edit before propagating assumptions across the whole video. Where the user already commissioned the full task, this is a production quality step, not a new approval requirement.

Choose segment boundaries at meaningful cuts or low-motion transitions. Include overlapping source handles when they help establish continuity; mark the **owned** range separately from the **reference** range. The final timeline includes every owned source frame once. Overlap is evidence for generation and seam selection, not a reason to repeat the action in the export.

For a 37-second source with a model ceiling of 30 seconds, one possible ledger is:

| Request | Source supplied | Intended usable output | Final ownership |
| --- | --- | --- | --- |
| A | 0–20 s | output 0–20 s | source 0–20 s |
| B | 19–37 s | output 1–18 s | source 20–37 s |

These ranges are illustrative; pick real boundaries after inspection. The calculation assumes both outputs preserve their supplied source clock at speed 1. Verify this by comparing actions, cuts, duration, and the overlap, not just probing duration. If the model changes timing, the ledger is no longer true. Re-edit/regenerate the affected segment or resolve a changed contract; do not silently stretch the performance and claim strict preservation.

Once mappings are verified, assemble only the owned ranges in order, normalizing timestamps for the
selected editor. If the keep/change contract preserves source sound, use it continuously rather than
concatenating regenerated speech. Preserve picture sampling and audio coverage independently.
Confirm the full timeline, orientation, aspect ratio and source audio start/end. If the voice must change,
that is a separate changed constraint requiring a synchronized new performance route.

Inspect the seam at frame scale and with sound. Compare pose, gaze, face, product geometry, background, lighting, and camera. A dissolve can hide a small discontinuity but may create a double face and alter the source transition; use it only when the preservation contract permits. Supporting footage should not be used to conceal an unfulfilled strict source edit while claiming exactness.

Keep source-clock and final-clock evidence with the project. Test the complete output against all preserved attributes, and report exactly where fidelity remains approximate. This procedure organizes a supported edit; it does not supply a missing video-editing capability to a generative model.
