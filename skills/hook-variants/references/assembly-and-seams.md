# Assemble complete hook variants

Follow [OpenArt execution](openart-execution.md) first: use OpenArt MCP for supported operations and choose
a supplementary media editor, such as FFmpeg, only for assembly operations it does not provide. Keep editing
reversible and project-local. This guide defines media relationships, not a fixed command line or a new engine.

## Retain the accepted body

Record the base file, measured duration T, accepted cut C, each hook's usable in/out and final mapping.
For example, if the base is 30 seconds and its hook ends cleanly at 4 seconds:

| Version | Opening | Remainder |
| --- | --- | --- |
| H1 | Accepted base 0-4s | Accepted base 4-30s |
| H2 | Accepted H2 take, 4 usable seconds | The same base 4-30s |
| H3-H5 | Their respective accepted 4-second openings | The same base 4-30s |

This is an illustration, not a mandatory boundary or ad length. Preserve agreed total duration and actual
accepted ranges. Body interval [C,T) appears once, without reordered frames, retiming, changed subtitles
or new audio. Do not include the original hook twice. Reference handles are not automatically export content.

Precise cuts may require decoding and encoding; packet-copy cuts may miss the chosen boundary. Logical
content preservation does not promise byte-identical files. Normalize only technical properties needed
for a compatible export: dimensions, orientation, frame/sample rates, color handling and timestamps.
Avoid unnecessary reframing or repeated lossy passes. Preserve source-to-output mappings and avoid
picture/audio gaps, extra tails or silent padding. A changed hook length cannot silently change the final length.

## Make the join work

Compare both sides for face/product identity, physical state, eyeline, framing, light, motion and meaning.
Select a clean cut or approved transition; an automatic dissolve can create double faces or shorten the
timeline. Do not hide a mismatch by changing the common body.

Use new hook speech and retained body sound without overlapping words or cutting breaths short. No music
is allowed in base, openings or exports. Do not add a bed to disguise a join. Match hook level and acoustic
character to the body; keep necessary boundary treatment inside the approved opening/transition scope.
Fix the hook or request a scoped revision if the body needs alteration. If generated music is mixed with
speech, do not mute all audio and call it fixed. Obtain a compliant take within authorized retries or
report the unresolved no-music requirement.

Retained burned-in body captions remain in its image. Hook captions follow actual accepted speech and
the agreed style. Avoid old opening captions, duplicate subtitles and text straddling the replacement
boundary. For separate subtitles, preserve body timing and update only the opening and approved dependencies.

## Review and deliver

Check complete exports, seam frames and audible transitions, duration, ratio, speech, captions, product
fidelity and absence of BGM. Use the media ledger to check the same body appears in every version;
identical prompts are not proof of identical media. Probes, transcripts and contact sheets complement
playback but cannot prove a natural join or voice match.

Deliver labeled full videos, a hook comparison, paired prompts/plans, base/body and hook mapping, receipts,
source assets or usable references, and assembly decisions sufficient to revise the work. Mark unavailable
visual/audio checks honestly. Separate incomplete clips from finished exports.
