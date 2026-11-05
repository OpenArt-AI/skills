# OpenArt Skills

[![Release](https://img.shields.io/github/v/release/OpenArt-AI/skills)](https://github.com/OpenArt-AI/skills/releases)
[![Website](https://img.shields.io/badge/website-openart.ai-blue)](https://openart.ai)

> [!NOTE]
> On ChatGPT or Codex, use the [OpenArt ChatGPT Plugin](https://chatgpt.com/plugins/plugin_asdk_app_6a42dbbe74c081918a592a0aad65ca26) instead. It bundles these
> skills with an OpenArt connection made for ChatGPT and Codex, so there is nothing to install
> from this repository.

Generate AI images and videos with [OpenArt](https://openart.ai) from Claude or another AI
agent. This plugin connects the OpenArt MCP server and adds skills that plan and produce
specific creative formats with you. The current skills cover video ads and presenter videos.

## Install

### Install for Claude

#### One click

[![Install in Claude](https://img.shields.io/badge/Install_in-Claude-D97757?style=for-the-badge&logo=claude&logoColor=white)](https://claude.ai/customize/plugins/new?marketplace=OpenArt-AI%2Fskills&plugin=openart)

The link opens Claude with the OpenArt plugin ready to install. Confirm, and Claude adds the
OpenArt connector and the bundled skills. Then sign in to OpenArt from the plugin's
**Connectors** tab. If you already have OpenArt connected, install the plugin anyway to get the
skills.

#### Or install manually

1. Open **Customize → Plugins → Add → Add marketplace**.
2. Enter `OpenArt-AI/skills`, then install **OpenArt**.
3. Connect OpenArt from the plugin's **Connectors** tab and sign in.
4. Turn on **Sync automatically** to receive updates.

### Install for other agents

The skills run on the OpenArt MCP server, so connect it first:

1. Add `https://mcp.openart.ai/mcp` in your agent's MCP settings and sign in. Skip this step if
   OpenArt is already connected.
2. Install the skills:

   ```
   npx skills add OpenArt-AI/skills
   ```

   Add `--skill ugc` to install a single skill.

## Skills

| Skill | Use for |
| --- | --- |
| `ugc` | Phone-native creator ads: peer recommendations, first looks, everyday product use |
| `pgc` | Professionally staged presenter footage: reviews, explainers, spokesperson takes |
| `talking-head` | One person speaking to camera, casual or polished |
| `tvc` | Brand commercials and launch films |
| `performance-ads` | Paid social feed ads, hooks and controlled variants |
| `hook-variants` | One finished ad in several versions that share a body and differ only in the opening |
| `ad-variation` | Presenter-led ads remade, edited or varied: new openings, B-roll, captions and sound |
| `product-listing-video` | Videos for product-detail galleries such as Amazon listings |

Each skill plans the script and shots with you, quotes the credits, and generates with Seedance
through OpenArt after you approve. Plain image and video requests need no skill.

## Usage example

Attach a product photo and type:

```
/ugc A young commuter shows how this travel mug keeps her coffee hot all morning. Vertical, for TikTok.
```

## Privacy

See OpenArt's [terms and privacy policy](https://openart.ai/suite/terms).

## License

[MIT](LICENSE)
