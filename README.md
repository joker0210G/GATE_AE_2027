# 📚 GATE AE 2027 — Shared Second Brain Vault (Obsidian + AI)

[![Exam](https://img.shields.io/badge/GATE-Aerospace_Engineering_2027-blue.svg)](file:///D:/Workspace/Obsidian/GATE/00%20-%20META/GATE%202027%20Official%20Syllabus.md)
[![Syllabus](https://img.shields.io/badge/IIT_Madras-Official_Syllabus-green.svg)](file:///D:/Workspace/Obsidian/GATE/00%20-%20META/GATE%202027%20Official%20Syllabus.md)
[![AI Integration](https://img.shields.io/badge/AI_Ready-Claude_%7C_GPT--4o_%7C_Gemini_%7C_Cursor-purple.svg)](file:///D:/Workspace/Obsidian/GATE/AGENTS.md)

Welcome to the **GATE Aerospace Engineering (AE) 2027 Second Brain**. This is an interconnected knowledge base built in **Obsidian**, pre-architected to integrate with **AI Assistants** (Claude, OpenAI / ChatGPT, Antigravity / Gemini, Cursor, Windsurf, Copilot).

---

## 🔒 Shared vs. Private Content (Privacy Policy)

| Category | What is Shared on Git (Public) | What is Ignored in `.gitignore` (Private to You) |
|---|---|---|
| **Syllabus Notes** | All Core & Special topic notes (`02 - SUBJECTS/`) | Personal notes in `Private/` or `Personal/` |
| **PYQs** | All PYQ breakdowns (`04 - PYQs/`) | — |
| **Formula Sheets** | All subject formula sheets (`06 - FORMULA SHEETS/`) | — |
| **Templates & Meta** | All templates (`07 - TEMPLATES/`), Syllabus & AI guidelines (`00 - META/`, `AGENTS.md`) | — |
| **Daily Tracker & Journal** | Folder structure & templates | Personal daily logs (`03 - DAILY TRACKER/*.md`) & `journals/` |
| **Mock Tests** | Master score index & review template (`05 - MOCK TESTS/_Mock Test Index.md`) | Individual mock test score sheets (`05 - MOCK TESTS/Mock-*.md`) |

---

## 🚀 Quick Start for Friends

1. **Clone this repository:**
   ```bash
   git clone <your-repository-url>
   ```
2. **Open in Obsidian:**
   - Launch [Obsidian](https://obsidian.md).
   - Click **"Open folder as vault"**.
   - Select the cloned repository folder.
3. **Recommended Plugins:**
   - **Templater:** For inserting templates from `07 - TEMPLATES/`.
   - **Calendar:** For navigating daily study logs.
   - **Dataview:** For dynamic queries & progress dashboards.
   - **Local REST API:** For connecting AI tools via MCP (`mcp-remote`).

---

## 🤖 Using AI Assistants with this Vault

This vault has a **built-in multi-agent protocol**. Any AI model (Claude, GPT-4o, Gemini, Cursor, Windsurf) can act as your personal GATE AE coach.

### How AI reads this vault:
1. Every AI reads `AI_CONTEXT.md` first to check current phase, session log, and next steps.
2. AI respects `00 - META/GATE 2027 Official Syllabus.md` — focusing **≥90% on Core Topics** and **≤10% on Special Topics**.
3. Universal rules are defined in `AGENTS.md` and `.agents/AGENTS.md`.
4. MCP tool configuration is pre-configured in `mcp.json` and `.vscode/mcp.json`. (See [[00 - META/MCP Setup Guide]] for setup).

---

## 🗂️ Vault Structure (Official GATE 2027 IIT Madras Alignment)

```
GATE/
├── AI_CONTEXT.md                      ← LLM Shared Memory (Read this first)
├── AGENTS.md                          ← Universal AI agent rules
├── mcp.json                           ← Model Context Protocol config
├── 00 - META/                         ← Syllabus, Vault Architecture, MCP Guide
│   ├── GATE 2027 Official Syllabus.md ← IIT Madras Official Core vs Special
│   └── Vault Maintenance Protocol.md
├── 01 - ROADMAP/                      ← GATE AE 2027 Master Roadmap
├── 02 - SUBJECTS/                     ← 5 Official Technical Sections + GA
│   ├── Engineering Mathematics/       ← Section 1
│   ├── Flight Mechanics & Space Dynamics/ ← Section 2 (Combined)
│   ├── Aerodynamics/                  ← Section 3
│   ├── Structures/                    ← Section 4
│   ├── Propulsion/                    ← Section 5
│   └── General Aptitude/              ← General Aptitude (15m)
├── 03 - DAILY TRACKER/                ← Daily logs (Local/Private)
├── 04 - PYQs/                         ← Section-wise PYQ notes (Shared)
├── 05 - MOCK TESTS/                   ← Mock test review logs (Shared Index)
├── 06 - FORMULA SHEETS/               ← Subject formula sheets (Shared)
└── 07 - TEMPLATES/                    ← Master markdown templates (Shared)
```
