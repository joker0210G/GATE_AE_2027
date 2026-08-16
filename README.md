# 📚 GATE AE 2027 — Shared Second Brain Vault (Obsidian + AI)

[![Exam](https://img.shields.io/badge/GATE-Aerospace_Engineering_2027-blue.svg)](00%20-%20META/GATE%202027%20Official%20Syllabus.md)
[![Syllabus](https://img.shields.io/badge/IIT_Madras-Official_Syllabus-green.svg)](00%20-%20META/GATE%202027%20Official%20Syllabus.md)
[![Version](https://img.shields.io/badge/Vault_Version-1.1.2-purple.svg)](VERSION.md)
[![Last Updated](https://img.shields.io/badge/Last_Updated-2026--08--16-orange.svg)](CHANGELOG.md)
[![AI Integration](https://img.shields.io/badge/AI_Ready-Claude_%7C_GPT--4o_%7C_Gemini_%7C_Cursor-purple.svg)](AGENTS.md)

Welcome to the **GATE Aerospace Engineering (AE) 2027 Second Brain**. This is an interconnected, AI-native study workspace built in **Obsidian**, specifically architected for the **February 2027 GATE exam by IIT Madras**.

---

## 🚀 Quick Start for Students

1. **Get the Vault:**
   - **GitHub ZIP Download :** Go to [joker0210G/GATE_AE_2027](https://github.com/joker0210G/GATE_AE_2027), click the green **`<> Code`** button, select **`Download ZIP`**, and extract the `GATE_AE_2027-main` folder.
   - **Git Clone :** Run `git clone https://github.com/joker0210G/GATE_AE_2027.git` in your terminal.
2. **Open in Obsidian:**
   - Download & install [Obsidian](https://obsidian.md).
   - Click **"Open folder as vault"** and select the extracted `GATE_AE_2027-main` folder.
3. **Start Your First Study Session with AI:**
   - Connect your preferred AI model (Claude, Antigravity/Gemini, ChatGPT, Cursor, Windsurf).
   - Say: **"I am new here"** to initialize your student profile, or **"Let's study"** to start Mission 1!

---

## 🤖 Interactive AI Modes Cheat Sheet

This vault includes a built-in multi-agent protocol defined in [`AGENTS.md`](AGENTS.md). Simply type any trigger phrase to switch AI modes:

| Mode | Trigger Phrase | What the AI Does |
|---|---|---|
| 🎓 **Tutor** | `"Let's study"` / `"Continue"` / `"Tutor mode"` | Interactive 4-Pillar GATE coaching (Warmup → Concept Scan → PYQ Batches → Forensic Review → Tomorrow's Bridge) |
| 📝 **Mock** | `"Test me on X"` / `"Mock mode"` / `"Mock test"` | 5-Tier Hardness mock test, student reasoning capture, NAT/MCQ negative drag, forensic review |
| 📊 **Analyse** | `"Analyse my prep"` / `"Telemetry report"` | Deep telemetry diagnostic (NAT/MCQ split, Negative Drag, Speed, 5-tier errors, ROI Rank Boosters) |
| 🚀 **Onboard** | `"I am new here"` | Initializes `journals/AI_STUDENT_CONTEXT.md` for new joiners |
| 🛠️ **Author** | `"I am author"` / `"Developer mode"` | **Zero-logging mode** for vault maintainers creating shared content |
| 📦 **Release** | `"Prepare release vX.Y.Z"` | Runs pre-release privacy audit & packages clean release ZIP |
| 🔄 **Update** | `"Update my vault"` | Performs lossless backup & syncs updated shared course content |

---

## 🎯 Syllabus Strategy (IIT Madras 2027 Core vs. Special)

Following official GATE Aerospace weightage, content is strictly prioritized:
- **Core Topics (≥90% of exam score):** Linear Algebra, Calculus, Potential Flow, Airfoil & Wing Theory, Static Stability, Jet Engine Cycles, Beam Bending & Torsion, Structural Dynamics.
- **Special Topics (≤10% of exam score):** Space Dynamics (Orbital Transfers, Rigid-body Dynamics), Advanced Rocketry, Compressible Flow Boundary Layers.

---

## 🔒 Shared vs. Private Content (Privacy Policy)

| Category | What is Shared / Released (Course Material) | What is Ignored in `.gitignore` (Private to Student) |
|---|---|---|
| **Syllabus Notes** | All Core & Special topic notes (`02 - SUBJECTS/`) | Personal scratch notes in `Private/` or `Personal/` |
| **PYQs** | All PYQ breakdowns & master index (`04 - PYQs/`) | — |
| **Formula Sheets** | All subject formula sheets (`06 - FORMULA SHEETS/`) | — |
| **Templates & Meta** | All templates (`07 - TEMPLATES/`), Syllabus & AI guidelines (`00 - META/`) | — |
| **Daily Tracker & Roadmap** | Shared study roadmap (`03 - DAILY TRACKER/`) | Personal daily study logs (`journals/YYYY_MM_DD.md` & `journals/AI_STUDENT_CONTEXT.md`) |
| **Mock Tests** | Shared developer mock series (`05 - MOCK TESTS/`) & master index | Personal AI weak-area mock test attempts & score breakdown sheets |

---

## 🔄 Lossless Vault Updates for Existing Students

Updating your vault is **100% safe and lossless**. Your personal study logs, student context, and weak-area mock scores are stored in `journals/` (which is git-ignored) and will **never be deleted or overwritten**.

### How to Update:
- **GitHub ZIP Download Students :**
  1. Click **`<> Code`** → **`Download ZIP`** on [joker0210G/GATE_AE_2027](https://github.com/joker0210G/GATE_AE_2027).
  2. Extract the downloaded `GATE_AE_2027-main.zip`.
  3. Tell your AI assistant in Obsidian:
     > *"Update my vault from `[Path/To/Extracted/GATE_AE_2027-main]`"*
- **Git Clone Students :** Tell your AI assistant:
  > *"Update my vault"*
- **Via PowerShell Script:**
  ```powershell
  .\scripts\update-vault.ps1 -SourcePath "C:\Downloads\GATE_AE_2027-main"
  ```
For full details, see [Update & Release Guide](00%20-%20META/Update%20%26%20Release%20Guide.md).

---

## 🛠️ Author & Developer Mode (`mode: author`)

If you are the **vault maintainer/author** updating or creating content for students:
1. Simply tell the AI: **"I am author"** or **"Developer mode"**.
2. **Zero Logging Directive:** The AI will bypass creating or updating personal student logs (`journals/`).
3. **Release Packaging:** When ready to publish a new release, tell the AI: **"Prepare release vX.Y.Z"**. The AI will run a pre-release privacy audit (ensuring 0 personal log leaks) and package a clean `GATE_AE_2027_vX.Y.Z.zip` release.

---

## 🔌 Recommended Obsidian Plugins Setup

While the vault works out-of-the-box as pure Markdown, we recommend enabling the following Obsidian community plugins for the best experience:

1. **Templater:** For inserting templates from `07 - TEMPLATES/`.
2. **Dataview:** For dynamic topic progress checklists & score tables.
3. **Calendar:** For quick navigation of daily study trackers.
4. **Local REST API / LLM Hub:** For connecting local AI models or MCP tool integration.

*(Note: Plugin configurations are stored locally in `.obsidian/` and are not required for students who prefer a lightweight setup).*

---

## 🗂️ Vault Structure

```
GATE/
├── VERSION.md                         ← Current vault version (v1.0.0)
├── CHANGELOG.md                       ← Version history & release notes
├── AI_CONTEXT.md                      ← LLM Shared Memory (Read this first)
├── AGENTS.md                          ← Universal AI agent rules
├── mcp.json                           ← Model Context Protocol config
├── 00 - META/                         ← Syllabus, Vault Architecture, Update Guide
│   ├── GATE 2027 Official Syllabus.md ← IIT Madras Official Core vs Special
│   ├── Update & Release Guide.md      ← Student updates & Author release guide
│   └── Vault Maintenance Protocol.md
├── 01 - ROADMAP/                      ← GATE AE 2027 Master Roadmap
├── 02 - SUBJECTS/                     ← 5 Official Technical Sections + GA
│   ├── Engineering Mathematics/       ← Section 1
│   ├── Flight Mechanics & Space Dynamics/ ← Section 2 (Combined)
│   ├── Aerodynamics/                  ← Section 3
│   ├── Structures/                    ← Section 4
│   ├── Propulsion/                    ← Section 5
│   └── General Aptitude/              ← General Aptitude (15m)
├── 03 - DAILY TRACKER/                ← Shared daily study roadmap
├── 04 - PYQs/                         ← Section-wise PYQ notes (Shared)
├── 05 - MOCK TESTS/                   ← Shared developer mocks & master index
├── 06 - FORMULA SHEETS/               ← Subject formula sheets (Shared)
├── 07 - TEMPLATES/                    ← Master markdown templates (Shared)
├── .agents/                           ← AI Agent skills (vault-manager, mock-reviewer, pyq-analyzer, prep-analyser, tutor-coach)

└── scripts/                           ← Update & Release utility scripts
```
