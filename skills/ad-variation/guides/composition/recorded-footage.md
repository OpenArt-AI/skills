# Edit recorded speech without losing its meaning

Preserve the original file. Probe streams and rotation; transcribe with timestamps when cuts or captions need speech timing. Listen through the takes and mark false starts, repetitions, factual corrections, long pauses, useful breaths, emphasis, and reactions. Silence detection can suggest candidate gaps, but it cannot choose the best take or distinguish hesitation from a purposeful pause.

Write an edit decision list with source in/out, selected words, reason, and target order. Select complete thoughts, not merely the fastest delivery. Keep the intended meaning and the user's performance. Do not fabricate new speech by joining fragments into a claim the person did not make.

Use an editing method capable of the required cut precision. Packet-copy boundaries can differ from
editorial boundaries. For multiple retained ranges, trim picture and sound together, normalize segment
timestamps and join paired streams. Choose frame rate, orientation, pixel format and sample rate deliberately.
Handle sources without audio explicitly. Export to a new file so the original remains recoverable.

Keep a source-to-target mapping. A word inside retained source interval `[s,e)` maps to target time `targetStart + wordTime - s` for speed 1. Retiming changes that mapping and requires matched audio processing; simple timestamp shifting cannot repair it. Re-align the assembled audio when the mapping or recognized text is uncertain.

Review each join with sound and adjacent frames. Keep enough handles to adjust breaths, add appropriate room tone, or cover a visual seam with a meaningful supporting shot. A punch-in can make an intentional jump cut legible; it is not a requirement. Match orientation and crop before comparing face position across takes.

Normalize the accepted edit into the production clock, then establish its final speech events. Avoid repeated lossy encodes during exploration. Keep original media, chosen edit ranges and the accepted edited file so later changes are reversible. Caption/graphic-only revisions should reuse this accepted edit.
