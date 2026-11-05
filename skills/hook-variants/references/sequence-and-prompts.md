# Turn the communication goal into a prompt

Draft a compact sequence with beat IDs, time ranges and each beat's communication purpose.
For each beat specify product presence/state, framing, action/performance, camera, exact dialogue or visible
copy when used, graphics behavior, transition and sound. Avoid empty effects tables when there are no effects.

Budget real time for actions, sentence endings and reading. Do not make timestamps add up by compressing
an impossible demonstration. Preserve locked copy; resolve genuine duration conflicts rather than shortening
it silently. Several beats can fit one model-generated video; they do not require separate generation requests.

Assemble the full prompt with:
1. Duration/aspect ratio, audience context, main message and creative intention.
2. Actual reference bindings, product/identity locks and permitted changes.
3. The filming/visual approach and timed action sequence.
4. Exact spoken words, text and pronunciation direction, clearly separated.
5. Graphics where used, speech/product sounds, natural ambience and their balance and ending. Explicitly
   specify no BGM under [music and sound](music-and-sound.md) in the base and every hook prompt.
6. The ending, and specific exclusions needed by the brief.

When a graphic is used, describe its triggering action, precise content/shape, target detail or position,
entrance, stable hold, tracking if needed, and exit. State whether it is an overlay or a physical event.
Do not write only "add stickers in post" or imply that generated tracking and spelling are guaranteed.
Keep important product/face/action regions visible and respect verified placement requirements.

For a graphic-led demonstration, relate every word or marker to the visible action. For example, a named
operation appears while that operation is clear, stays readable, then leaves before the next message.
Do not rotate unrelated badges to simulate variety.

For a no-graphics treatment, omit overlay instructions rather than adding a generic global prohibition that
accidentally removes authentic product labels. Keep music, speech, feature text and captions independently scoped.

For variants, save the complete prompt for each version and a small change ledger. Reuse accepted reference
assets and base copy. Generate the complete base first, then only the additional openings. Reuse the actual
accepted body media under [hook production](hook-production.md); do not regenerate the body for each version.

Check the finished prompt against the approved message, claims, languages, offer, graphic choices and duration.
Then resolve real inputs and model settings through [OpenArt execution](openart-execution.md).
