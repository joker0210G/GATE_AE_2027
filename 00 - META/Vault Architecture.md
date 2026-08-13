# 🏗️ Vault Architecture

#type/meta

---

## Complete Folder Structure (GATE AE 2027 v1.0.0)

```
GATE/
│
├── VERSION.md                           ← Current vault version tracking (v1.0.0)
├── CHANGELOG.md                         ← Release history & update notes
├── AI_CONTEXT.md                        ← LLM shared memory blueprint (ALWAYS read first)
├── AGENTS.md                            ← Universal AI agent rules & interaction modes
├── mcp.json                             ← Model Context Protocol server configuration
├── README.md                            ← Human overview & setup guide
│
├── 00 - META/
│   ├── GATE 2027 Official Syllabus.md   ← Official IIT Madras Core vs Special syllabus
│   ├── MCP Setup Guide.md               ← MCP connection guide for local REST API
│   ├── Tagging & Linking System.md      ← Full tagging and linking guide
│   ├── Update & Release Guide.md        ← Student updates & Author release guide
│   ├── Vault Architecture.md            ← This architecture document
│   └── Vault Maintenance Protocol.md    ← Daily, weekly, monthly, and release maintenance
│
├── 01 - ROADMAP/
│   ├── Divide & Conquer — 6 Month Battle Plan.md
│   └── GATE AE 2027 Master Roadmap.md
│
├── 02 - SUBJECTS/
│   ├── Aerodynamics/
│   ├── Engineering Mathematics/
│   ├── Flight Mechanics & Space Dynamics/
│   ├── General Aptitude/
│   ├── Propulsion/
│   └── Structures/
│
├── 03 - DAILY TRACKER/                  ← 🟢 SHARED: Shared study roadmap & daily tracker templates
│
├── 04 - PYQs/                           ← 🟢 SHARED: Previous year question breakdowns & master index
│
├── 05 - MOCK TESTS/                     ← 🟢 SHARED: Shared developer mock series (Topic Tests/, Mock Series/, _Mock Test Index.md)
│
├── 06 - FORMULA SHEETS/                 ← 🟢 SHARED: Subject formula sheets (7 sheets)
│
├── 07 - TEMPLATES/                      ← 🟢 SHARED: Master markdown templates (5 templates)
│
├── .agents/                             ← 🟢 SHARED: AI Agent skills (vault-manager, mock-reviewer, pyq-analyzer)
│
├── scripts/                             ← 🟢 SHARED: Update & release utility scripts
│   ├── update-vault.ps1
│   └── package-release.ps1
│
└── journals/                            ← 🔒 PRIVATE (GIT-IGNORED): Student-specific personal layer
    ├── AI_STUDENT_CONTEXT.md            ← Personal AI memory, current phase, & session history
    └── YYYY_MM_DD.md                    ← Daily student logs & mistake diagnostics
```

---

## 🔒 Layer Separation Architecture

| Layer | Directories | Git Status | Update Behavior |
|---|---|---|---|
| **Shared Course Layer** | `00-07`, `.agents/`, `scripts/`, `AI_CONTEXT.md`, `AGENTS.md`, `VERSION.md`, `CHANGELOG.md`, `README.md` | Tracked in Git | Overwritten / Merged on Update |
| **Private Student Layer** | `journals/`, personal AI weak-area mock attempts, `.backup/`, `Private/` | **Git-Ignored** | **100% Preserved Losslessly** |

---

## 🎮 Mode Integration Architecture

- **Student Modes (`tutor`, `mock`, `analyse`, `onboard`):** Active study modes where AI logs conversation insights, timings, and error diagnostics into `journals/YYYY_MM_DD.md` and `journals/AI_STUDENT_CONTEXT.md`.
- **Developer / Author Mode (`author` / `dev`):** Zero-logging mode triggered by *"I am author"* or *"Developer mode"*. AI assists in editing shared course files without generating student logs.
- **Author Release Mode (`release`):** Triggers pre-release privacy audit ensuring 0 personal student log leaks before creating clean release ZIPs (`GATE_AE_2027_vX.Y.Z.zip`).
- **Lossless Update Mode (`update`):** AI-guided update engine that backs up `journals/` to `.backup/` and syncs shared course files for both ZIP download (70%) and Git clone (30%) students.

---

## Naming Conventions

| Item | Convention | Example |
|---|---|---|
| Daily Tracker | YYYY-MM-DD.md | 2026-08-13.md |
| Student Journal Log | YYYY_MM_DD.md | 2026_08_13.md |
| Topic Notes | Plain topic name | Linear Algebra.md |
| PYQ files | GATE-AE-YYYY-QNN.md | GATE-AE-2024-Q15.md |
| Shared Mock Tests | Mock-NN.md | Mock-01.md |
| Subject Index | _Index.md | _Index.md |

---

## Core Principle: Link Everything

Every note should link to at least one other note. Connections between topics, PYQs, and formula sheets are what make this a true Second Brain — not just a folder of files.

*Last Updated: 2026-08-13 | Version: 1.0.0*
