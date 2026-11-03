# OpenArt

Generate AI images and videos with [OpenArt](https://openart.ai) from your AI agent. This
plugin connects the OpenArt MCP server and adds skills that guide the agent through
OpenArt's creative workflows.

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

### Skills only

If you already have the OpenArt MCP server connected:

```
npx skills add OpenArt-AI/skills
```

## Skills

Skills are on the way. Until then, the plugin connects the OpenArt MCP server.

## Privacy

See OpenArt's [terms and privacy policy](https://openart.ai/suite/terms).

## License

[MIT](LICENSE)
