# Multiple takes and variants

Inspect the selected model's duration choices before planning requests. Prefer a single take for speech that
comfortably fits. For longer content, divide at complete sentences or coherent thoughts with room to breathe.
Do not invent a universal maximum duration, truncate the requested script, accelerate speech unnaturally,
or split every sentence into a separate request without need.

Maintain a clip ledger with stable IDs such as `take-01`, sequence order, exact dialogue, requested duration,
measured duration, input references, selected output, variant membership and QA status. Concatenating the
planned dialogue in order must cover the requested script without accidental gaps or duplicate sentences.
Any performance handles are silence/settling time, not extra repeated spoken content.

Repeat the continuity essentials in every independently submitted prompt: speaker identity, vocal qualities
and supported voice route, wardrobe, environment, light, crop, camera behavior and language. Direct each
passage's own intention instead of imposing identical expressions or start poses.
Carry the selected music character and voice-to-music balance into each prompt, or preserve the reason for
unscored takes. Independently generated clips do not guarantee the same track or seamless musical continuity.

Prefer approved original identity/performance references. A generated frame may assist a requested physical
continuation only after inspection and when supported; it does not supply voice continuity. Do not propagate
an incorrect generated face into later requests. Cross-clip continuity is an acceptance check, not a guarantee
created by repeating a prompt.

For variations, state what each version changes and what remains fixed. A new opening changes its own take;
reuse accepted body clip IDs and files. A wardrobe or identity change can affect all clips, so identify that
dependency before regenerating. Keep prior receipts and selected takes intact.

Compare clips sequentially for face, clothing, framing, voice and room-tone consistency, but do not join them.
Report raw durations separately from estimated spoken duration because lead/tail room adds up.
If the user needs a single uninterrupted long performance beyond the verified model limit, explain that the
current supported output is separate clips. Do not represent separate takes as one continuous video.
