---
type: meta
title: MCP & Local REST API Setup Guide (VS Code, Codex, Antigravity, Claude, Cursor)
last_updated: 2026-08-13
version: 1.0.0
---

# 🔌 MCP Setup & Local REST API Guide

This vault connects to AI tools using the **Obsidian Local REST API** plugin (`obsidian-local-rest-api`) + **`mcp-remote`** bridge.

---

## 🛠️ Step 1: Obsidian Local REST API Plugin Setup

1. In Obsidian, go to **Settings → Community Plugins → Explore**.
2. Search for **"Local REST API"** (by `@coddingtonbear`).
3. Click **Install**, then **Enable**.
4. Open the plugin settings:
   - Default Port: `27123`
   - Copy your **API Key / Bearer Token** (e.g., `a4a23955...`).

---

## 💻 Step 2: Client Configuration Snippets

### 1. Claude Desktop App (`claude_desktop_config.json`)
Add to `%APPDATA%\Claude\claude_desktop_config.json` (Windows) or `~/Library/Application Support/Claude/claude_desktop_config.json` (macOS):
```json
{
  "mcpServers": {
    "obsidian": {
      "command": "cmd",
      "args": [
        "/c",
        "npx",
        "-y",
        "mcp-remote@latest",
        "http://127.0.0.1:27123/mcp/",
        "--allow-http",
        "--header",
        "Authorization: Bearer YOUR_OBSIDIAN_REST_API_TOKEN"
      ]
    }
  }
}
```

---

### 2. VS Code & Antigravity IDE (`.vscode/mcp.json`)
This vault includes `.vscode/mcp.json` pre-configured:
```json
{
  "mcpServers": {
    "obsidian-rest-api": {
      "command": "cmd",
      "args": [
        "/c",
        "npx",
        "-y",
        "mcp-remote@latest",
        "http://127.0.0.1:27123/mcp/",
        "--allow-http",
        "--header",
        "Authorization: Bearer YOUR_OBSIDIAN_REST_API_TOKEN"
      ]
    }
  }
}
```

---

### 3. OpenAI / Codex / ChatGPT CLI
For OpenAI Codex or CLI agent integrations using MCP:
```json
{
  "mcpServers": {
    "obsidian": {
      "command": "npx",
      "args": [
        "-y",
        "mcp-remote@latest",
        "http://127.0.0.1:27123/mcp/",
        "--allow-http",
        "--header",
        "Authorization: Bearer YOUR_OBSIDIAN_REST_API_TOKEN"
      ]
    }
  }
}
```

---

### 4. Cursor IDE & Windsurf
Add `obsidian` to your MCP settings in Cursor / Windsurf settings using the same `mcp-remote` command:
- **Command:** `cmd` (or `npx` on macOS/Linux)
- **Args:** `/c npx -y mcp-remote@latest http://127.0.0.1:27123/mcp/ --allow-http --header "Authorization: Bearer YOUR_TOKEN"`

---

## 🔐 Security Reminder
Do **NOT** commit your actual bearer token to public Git repositories! Keep your real token inside your local private configs (such as `%APPDATA%\Claude\claude_desktop_config.json`).

*Last Updated: 2026-08-13 | Version: 1.0.0*
