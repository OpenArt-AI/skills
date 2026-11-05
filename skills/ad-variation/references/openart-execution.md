# Execute through OpenArt MCP

Read this while planning, before fixing references, duration, ratio or request counts: the live form decides
what the plan can promise. Use the tools the OpenArt connection lists; the host may show them under a
connector prefix. Their descriptions and the server instructions own host mechanics such as importing
attachments, result cards, waiting and submitting an offered upgrade.

| For | Use |
| --- | --- |
| Model and mode | `openart_model_list`. Draft or full quality selects the model: Seedance 2.5 Draft or Seedance 2.5. A subject in a new scene uses `element2video`; `image2video` animates a literal first frame (`startFrame`, optional `endFrame`) |
| Duration, ratio, count and audio | `openart_model_form_get` for that model and mode: `duration`, `aspectRatio` (absent on `image2video`, which keeps the frame's ratio), `videoCount` (outputs within one request) and `generateAudio` (one switch for speech, music and ambience, so separate them in the prompt) |
| Credits | `openart_model_cost` with the model, mode and params of each planned request; state the request count and total |
| Media the user supplies | The route the server instructions name for this host: `openart_upload_pick` in widget hosts, then wait for its upload-complete message; `openart_upload_sign`, a PUT and `openart_upload_metadata_get` in terminal clients. Pass each returned reference unchanged in the form's reference field |
| Media already saved in OpenArt | `openart_upload_list` |
| A missing product, person or scene still | `openart_generate_image`; after inspection, pass the result as a reference with its resource `id` and `url`, a `type` and a `label`, without uploading it again |
| Naming a reference in the prompt | Media type and order within `visualReferences`: the first image is Image 1, the first audio is Audio 1. Pair it with the role ("the creator in Image 1"). The returned `label` is a filename; it does not bind |
| The video | `openart_generate_video` |
| A different language, background or light for an existing video | `openart_tool_form_get` for `dub-video`, `replace-background` or `relight-video`, checked and quoted with `params`, then `openart_run_video_tool` |
| Earlier results | `openart_creation_get`, `openart_creation_list` and `openart_creation_show`, keyed by `historyId` and `projectId` |
| A project for the commission | `openart_project_list`, `openart_project_create`; pass its `projectId` on every request |
| Technical check of a result | The completed resource's `metadata`: `duration`, `width`, `height`, `hasAudio`. It is not a playback review |

A Draft result offers its upgrade as a `suggestedActions` entry of kind `draft_upgrade` with `credits` and,
when present, `expiresAt`. Quote those figures under [generation approval](generation-approval.md).
On failure, keep the `historyId` and the actual error, correct a cause before retrying, and stay within the
authorized retry scope. Do not silently switch model, drop planned speech or music, or substitute a silent video.

## Ad variation bindings

- Pass the presenter's photos or speaking recording as `element2video` references, named by role and order
  ("the presenter in Video 1"). Use `image2video` only when the take must open on that exact photo.
- Photos and video references do not supply a voice. When the presenter's voice must carry over and the model's
  `elementTypes` include `audio`, add a clean recording of it, such as the audio track of their speaking video,
  as an audio element (2 to 30 seconds on Seedance 2.5) and name the speaker: "the presenter in Video 1 speaks
  with the voice in Audio 1". Repeat the same identity and audio references in every clip. Review the result;
  this is not guaranteed cloning.
- Read the form's `duration` range before dividing speech; Seedance 2.5 currently allows 4 to 30 seconds per
  request. A longer passage is several requests joined in the edit.
- OpenArt makes sound only inside a generated video, through `generateAudio`; it has no separate speech, music or
  sound-effect generation. Music added in the final mix needs a supplied or licensed track.
- No OpenArt tool trims, joins, captions, mixes or renders an edit. Those use the editing tools where the agent
  runs, under [capability selection](../guides/execution/capability-selection.md).
- A language version of an accepted take can use `dub-video`; ask which languages and quote per language.
  It translates existing speech only: captions and on-screen text stay in the source language, and a new
  script in another language is a new generation.
- For an accepted clip of at most 240 frames (8 seconds at 30 fps; check its measured frame rate and duration),
  `replace-background` and `relight-video` change its scene or light and keep the motion.
