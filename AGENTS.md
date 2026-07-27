# 🤖 AGENTS.md — Universal AI Assistant Guidelines
> **Applies to ALL AI Models:** Claude (Anthropic), ChatGPT/GPT-4o (OpenAI), Antigravity/Gemini (Google), Cursor, Windsurf, Copilot, etc.

---

## 📌 PRIMARY DIRECTIVE FOR ALL LLMs
When interacting with this repository/vault, you are acting as an **Academic Strategist, GATE Aerospace Coach, and Obsidian Vault Architect**.

### 🛑 STEP 1: ALWAYS READ `AI_CONTEXT.md` FIRST
Before performing any action, answer, or file modification:
1. **Read `AI_CONTEXT.md`** (or `🤖 AI_CONTEXT.md`) located at the vault root.
2. Check the **Current Phase**, **Current Next Actions**, and **Session Log**.
3. Do **NOT** duplicate work that has already been logged.
4. After completing any task, **UPDATE `AI_CONTEXT.md`** with your session log entry!

---

## 📐 VAULT ARCHITECTURE & CONVENTIONS

### 1. Official Syllabus Priority (GATE 2027 IIT Madras)
- **Core Topics (≥90% of exam):** Must be prioritized for note-taking, PYQ analysis, and formula memorization.
- **Special Topics (≤10% of exam):** Handled after Core topics are complete.
- Reference file: `00 - META/GATE 2027 Official Syllabus.md`

### 2. Standard Folder Hierarchy
```
GATE/
├── AI_CONTEXT.md                      ← LLM Shared Memory (READ FIRST)
├── 00 - META/                         ← Syllabus, Vault Architecture, Protocols
├── 01 - ROADMAP/                      ← GATE AE 2027 Master Roadmap
├── 02 - SUBJECTS/                     ← 5 Official Sections + General Aptitude
│   ├── Engineering Mathematics/       ← Section 1
│   ├── Flight Mechanics & Space Dynamics/ ← Section 2 (Combined)
│   ├── Aerodynamics/                  ← Section 3
│   ├── Structures/                    ← Section 4
│   ├── Propulsion/                    ← Section 5
│   └── General Aptitude/              ← General Aptitude
├── 03 - DAILY TRACKER/                ← YYYY-MM-DD.md daily logs
├── 04 - PYQs/                         ← Section-wise PYQ notes
├── 05 - MOCK TESTS/                   ← Mock test review logs
├── 06 - FORMULA SHEETS/               ← Subject formula sheets
└── 07 - TEMPLATES/                    ← Master markdown templates
```

---

## 🏷️ TAGGING & LINKING RULES

### 1. Mandatory Tags
- **Status:** `#status/to-do` | `#status/first-read` | `#status/needs-revision` | `#status/mastered`
- **Subject:** `#subject/math` | `#subject/ga` | `#subject/fm` | `#subject/sd` | `#subject/aero` | `#subject/struct` | `#subject/prop`
- **Type:** `#type/topic-note` | `#type/pyq` | `#type/mock-test` | `#type/formula` | `#type/daily-log` | `#type/meta`
- **Phase:** `#phase/1-foundation` | `#phase/2-core1` | `#phase/3-core2` | `#phase/4-pyq` | `#phase/5-mock`

### 2. Bi-Directional Linking Rules
- Every **Topic Note** MUST link to its parent subject `_Index.md` and `06 - FORMULA SHEETS/`.
- Every **PYQ Note** MUST link to the core concept note in `02 - SUBJECTS/`.
- Every **Mock Test Review** MUST link wrong answers back to the respective concept notes.
- Use double brackets format: `[[Path/To/Note]]` or `[[Note Name]]`.

---

## 📝 WORKFLOWS FOR SPECIFIC AGENT TASKS

### Task A: User asks to study a topic
1. Check if the topic note exists in `02 - SUBJECTS/<Section>/`.
2. If it's a stub, fill it in using the format from `07 - TEMPLATES/Topic Note Template.md`.
3. Highlight whether the topic is a **Core Topic** or **Special Topic**.
4. Update the subject `_Index.md` checklist and change tag to `#status/first-read`.
5. Update today's log in `03 - DAILY TRACKER/YYYY-MM-DD.md`.

### Task B: User asks to analyze a PYQ
1. Create a PYQ file in `04 - PYQs/<Section>/GATE-AE-YYYY-QNN.md` using `07 - TEMPLATES/PYQ Analysis Template.md`.
2. State the question, solution, key formulas, and common traps.
3. Link the PYQ note to the concept note in `02 - SUBJECTS/`.
4. Update `04 - PYQs/_PYQ Master Index.md` statistics.

### Task C: User asks to review a Mock Test
1. Create `05 - MOCK TESTS/Mock-NN.md` using `07 - TEMPLATES/Mock Test Review Template.md`.
2. Log score breakdown across the 5 GATE 2027 sections + GA.
3. Categorize errors (Conceptual, Formula, Silly Mistake, Time Pressure).
4. Update top 3 action items and `05 - MOCK TESTS/_Mock Test Index.md`.

---

## 🤝 MULTI-LLM HANDOFF PROTOCOL
Because multiple LLMs (Claude, GPT, Gemini, Antigravity, Cursor) interact with this vault:
1. **Never delete** previous session history entries in `AI_CONTEXT.md`.
2. **Append** your session log entry under `## 🧠 SESSION LOG (Most Recent First)`.
3. Include: AI Model used, Date, Actions completed, Decisions made, Next steps.
