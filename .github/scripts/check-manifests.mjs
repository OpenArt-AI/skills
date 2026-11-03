// Fails when a manifest's version or MCP URL drifts from the others.
import { existsSync, readFileSync } from "node:fs";

const read = (path) => (existsSync(path) ? JSON.parse(readFileSync(path, "utf8")) : undefined);
const errors = [];

const expectedVersion = read(".release-please-manifest.json")["."];
const versioned = [".claude-plugin/plugin.json", ".cursor-plugin/plugin.json", "plugin.json", "gemini-extension.json"];
for (const path of versioned) {
  const manifest = read(path);
  if (manifest && manifest.version !== expectedVersion) {
    errors.push(`${path}: version ${manifest.version}, expected ${expectedVersion}`);
  }
}

const mcpUrls = new Set();
for (const path of [".mcp.json", "mcp.json"]) {
  const server = read(path)?.mcpServers?.openart;
  if (server) mcpUrls.add(server.url);
}
const gemini = read("gemini-extension.json")?.mcpServers?.openart;
if (gemini) mcpUrls.add(gemini.httpUrl);
if (mcpUrls.size > 1) errors.push(`MCP URLs differ: ${[...mcpUrls].join(", ")}`);

if (existsSync("bin")) errors.push("bin/ at the repository root makes claude.ai refuse the plugin");

if (errors.length > 0) {
  console.error(errors.join("\n"));
  process.exit(1);
}
console.log(`Manifests agree on version ${expectedVersion} and ${[...mcpUrls][0]}`);
