# Direct generated video

Decide what the model must make and what the final edit will add. For a presenter take, generate the person, scene, camera behavior, speech, and performance. Exact captions, UI inserts and additional labels can be added in the final edit when needed.

Give every supplied reference an explicit role. A person's recording can establish identity, expression, habitual gestures, and delivery. Another video's selected passage can establish a particular action, camera relationship, or strict-edit source. Product pictures establish actual visible product details. Prose mentioning a reference is not equivalent to passing its media in the request.

A request can be assembled from these responsibilities; omit irrelevant blocks and write natural direction rather than blindly concatenating a template:

1. **Reference relationships:** which actual attachment establishes whom or what; what may change.
2. **Visible shot:** camera, crop, setting, light, and continuity requirements.
3. **Performance intention:** how the speaker regards the subject and listener, with meaningful reactions tied to selected phrases.
4. **Exact dialogue:** only the spoken words, with supported pronunciation direction separated appropriately.
5. **Temporal contract:** duration supported by the model, natural pacing, useful lead/tail, continuity across clips, and intended audio behavior.
6. **Composition separation:** avoid generating overlays or extraneous physical objects when they will be authored later.

Apply [sound direction](sound.md) before submitting: if the final edit adds BGM, request clean native speech and natural sounds without baked-in music; if the generated passage owns music, specify its character, voice balance and ending. Do not confuse a dry intermediate take with the intended final mix.

For example, after resolving the actual attachment identifier: "Use the attached speaking recording as the identity and natural delivery reference for the same woman. Preserve her recognizable face and characteristic expression and pauses. Place her in a bright home office. She is sharing a practical discovery with a colleague, with a brief pleased pause after the key benefit. Speak the following words exactly: …" The attachment token and supported fields come from the live tool response; ellipses here are explanatory, never a submitted prompt.

Use video references when temporal behavior matters. A frame can establish appearance but cannot encode a gesture's preparation, timing, and resolution. For strict source editing, explicitly direct the change and preserved source motion/timing/audio, using a model that actually supports this contract. For style transfer, transfer the relationship to the new script instead of demanding source timing for different words.

Plan passage lengths around speech and model limits. Do not compress a long script into an arbitrary default duration. For segmented work, split at complete thoughts; preserve identity, voice, wardrobe, environment, camera, and useful boundary evidence across requests. Track source-input duration separately from requested generated duration and measured output duration.

Inspect assembled prompts for accidental literalization: "show the plan" inside a presenter prompt may cause a screen to appear in the room. If the intent is a knowing nod followed by an authored UI reveal, describe those in their respective systems. Likewise, prompting "replace only the person" does not prove other pixels were preserved; compare the output.

Choose execution capabilities under [capability selection](../../execution/capability-selection.md). Prompt enhancement, resolution, audio settings, references, and model version are factual parameters to record, not assumptions.
