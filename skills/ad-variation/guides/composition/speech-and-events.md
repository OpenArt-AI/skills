# Time follows the accepted material

Use one finite production timeline and one explicit frame rate. Keep source time, normalized media time, and final composition time distinct. A 30 fps output can contain a 29.97 fps source, but the media preparation/sampling must account for that relationship.

For speech-led work, identify meaningful passages and events in the script: a complete comparison, the word that reveals a verdict, a question, a demonstration step. Transcribe or align the accepted audio to recover their timing. A planned script establishes meaning; only an accepted performance establishes what was actually said and when.

An alignment process supplies word timing, not creative judgment. Check language, missed words, repeated phrases, pronunciation errors, and confidence around cuts. Do not force an ideal script onto an incomplete take and treat the resulting timestamps as proof that every word was spoken.

Map meaningful speech ranges to the timing of picture and sound. For example, a comparison panel may remain visible throughout an explanation while its result appears at a separate verdict event. Coordinate the reveal, emphasis and sound cue at that event; one overall scene duration cannot express every internal relationship.

Use accepted speech, measured alignment and source-to-output mappings to time the edit. Keep a small timing note when needed, record how the times were obtained and update them after a changed take. Never describe manually entered timestamps as an automatic semantic dependency.

Use half-open frame ranges `[start, end)` so adjacent clips do not double-count the boundary frame. Choose a consistent seconds-to-frame rounding policy. Include explicit source sampling when trimming, holding, looping, or retiming media. A final end card can extend the timeline beyond the speaking performance without inventing more source frames or stretching the voice.

For graphic-only passages, author reading time deliberately. Their events may be absolute frame values or relationships to nearby speech. Tie motion duration to the designed movement and event location to the content that causes it. Check both after replacing a hook or changing a script's length.

If strict replacement requires fixed source timing, preserve that temporal contract and choose material that fits it. Do not silently speed up speech, crop away a sentence, or export one model-length fragment as the full source remake.
