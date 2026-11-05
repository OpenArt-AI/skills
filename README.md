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

The skills generate through the OpenArt MCP server, so every path below includes connecting it.
Choose the one for where you work:

| Where you work | How to install |
| --- | --- |
| **Claude Chat or Cowork** (recommended)[^1] | [Install the plugin](#claude-chat-and-cowork) with one click |
| **Claude Code** | [Add the plugin](#claude-code) with `/plugin` |
| **ChatGPT or Codex** | Add the [OpenArt ChatGPT Plugin](https://chatgpt.com/plugins/plugin_asdk_app_6a42dbbe74c081918a592a0aad65ca26) |
| **Other agents** | [Connect the MCP server, then add the skills](#other-agents) |

[^1]: A plugin installed in Claude Chat or Cowork also loads in Claude Code signed in to the same
    Claude account. A plugin installed only in Claude Code stays out of Chat and Cowork.

To have your agent set it up, paste [this prompt](#let-your-agent-install-it) into it.

### Claude Chat and Cowork

[![Install in Claude](https://img.shields.io/badge/Install_in-Claude-D97757?style=for-the-badge&logo=claude&logoColor=white)](https://claude.ai/customize/plugins/new?marketplace=OpenArt-AI%2Fskills&plugin=openart)

The link opens Claude with the OpenArt plugin ready to install. Confirm, and Claude adds the
OpenArt connector and the bundled skills. Then sign in to OpenArt from the plugin's
**Connectors** tab. If you already have OpenArt connected, install the plugin anyway to get the
skills.

Plugins need a paid Claude plan. On the Free plan, add `https://mcp.openart.ai/mcp` as your
custom connector to generate with OpenArt without the skills.

To install manually:

1. Open **Customize → Plugins → Add → Add marketplace**.
2. Enter `OpenArt-AI/skills`, then install **OpenArt**.
3. Connect OpenArt from the plugin's **Connectors** tab and sign in.
4. Turn on **Sync automatically** to receive updates.

Chat and Cowork install plugins from Customize. Terminal commands such as `npx` are for the
agents below.

### Claude Code

If you installed the plugin in Claude Chat or Cowork, Claude Code loads it when you sign in with
the same Claude account, so you don't need to install it again here. Otherwise, run this in a
Claude Code session:

```
/plugin marketplace add OpenArt-AI/skills
/plugin install openart@openart
```

Then run `/mcp` and sign in to OpenArt. To receive updates, open `/plugin`, select `openart` on
the **Marketplaces** tab and choose **Enable auto-update**.

A plugin installed here works in the terminal, the desktop app's Code tab and the IDE extensions
on this machine. Claude Chat and Cowork keep their own plugins, so install there separately.

### Other agents

Run these in a terminal:

1. Add `https://mcp.openart.ai/mcp` in your agent's MCP settings and sign in. Skip this step if
   OpenArt is already connected.
2. Install the skills:

   ```
   npx skills add OpenArt-AI/skills
   ```

   Add `--skill ugc` to install a single skill. Claude Code can use these steps too when you want
   only some of the skills. Use one method per agent so each skill is installed once.

### Let your agent install it

Paste this into your agent. It runs the steps that fit where it is running, and in Claude Chat it
gives you the install link instead.

```
Install OpenArt (https://github.com/OpenArt-AI/skills) for me, using the step that matches where you are running:

- Claude Chat or Cowork: run nothing. Give me this link to install the OpenArt plugin: https://claude.ai/customize/plugins/new?marketplace=OpenArt-AI%2Fskills&plugin=openart
- ChatGPT or Codex: run nothing. Give me this link to the OpenArt ChatGPT Plugin: https://chatgpt.com/plugins/plugin_asdk_app_6a42dbbe74c081918a592a0aad65ca26
- Claude Code: unless the openart plugin is already installed, run `claude plugin marketplace add OpenArt-AI/skills`, then `claude plugin install openart@openart`.
- Any other agent: add the remote MCP server https://mcp.openart.ai/mcp to your MCP settings, then run `npx skills add OpenArt-AI/skills`.

OpenArt signs in through my browser with OAuth, so skip API keys. When you finish, tell me how to sign in, whether I need to restart, and how to check that it works.
```

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
