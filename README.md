# OpenArt

[![Release](https://img.shields.io/github/v/release/OpenArt-AI/skills)](https://github.com/OpenArt-AI/skills/releases)
[![License: MIT](https://img.shields.io/github/license/OpenArt-AI/skills)](LICENSE)
[![Website](https://img.shields.io/badge/website-openart.ai-blue)](https://openart.ai)

> [!NOTE]
> On ChatGPT or Codex, use the [OpenArt ChatGPT Plugin](https://chatgpt.com/plugins/plugin_asdk_app_6a42dbbe74c081918a592a0aad65ca26) instead. It bundles these
> skills with an OpenArt connection made for ChatGPT and Codex, so there is nothing to install
> from this repository.

Generate AI images and videos with [OpenArt](https://openart.ai) from Claude or another AI
agent. This plugin connects the OpenArt MCP server and adds skills that plan and produce
specific creative formats with you. The current skills cover video ads and presenter videos.

## Install

### Claude (claude.ai, Claude Desktop, Cowork)

1. Open **Customize → Plugins → Add → Add marketplace**.
2. Enter `OpenArt-AI/skills`, then install **OpenArt**.
3. Turn on **Sync automatically** to receive updates.
4. Connect OpenArt from the plugin's **Connectors** tab and sign in.

### Claude Code

```
/plugin marketplace add OpenArt-AI/skills
/plugin install openart@openart
```

To receive updates, open `/plugin` → **Marketplaces** → `openart` → **Enable auto-update**.

### Other agents

Connect the OpenArt MCP server at `https://mcp.openart.ai/mcp` in your agent's MCP settings and
sign in, then add the skills:

```
npx skills add OpenArt-AI/skills
```

## Skills

| Skill | Use for |
| --- | --- |
| `ugc` | Phone-native creator ads: peer recommendations, first looks, everyday product use |
| `pgc` | Professionally staged presenter footage: reviews, explainers, spokesperson takes |
| `talking-head` | One person speaking to camera, casual or polished |
| `tvc` | Brand commercials and launch films |
| `performance-ads` | Paid social feed ads, hooks and controlled variants |
| `product-listing-video` | Videos for product-detail galleries such as Amazon listings |

Each skill plans the script and shots with you, quotes the credits, and generates with Seedance
through OpenArt after you approve. Plain image and video requests need no skill.

## Privacy

See OpenArt's [terms and privacy policy](https://openart.ai/suite/terms).

## License

[MIT](LICENSE)
