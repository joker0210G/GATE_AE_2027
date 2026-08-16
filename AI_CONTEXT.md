# 🤖 AI CONTEXT — GATE AE 2027 Shared Vault

<startup_protocol>
### 🚀 3-Tier Sequential Startup Protocol
> **CRITICAL INVARIANT:** Every AI assistant MUST load context in the strict sequential hierarchy below:
1. **Layer 1 (Core Behavioral Rules):** Read `AGENTS.md` for core AI rules, interaction modes, and teaching invariants.
2. **Layer 2 (Vault Architecture & Syllabus Map):** Read THIS file (`AI_CONTEXT.md`) for shared repository boundaries, course syllabus map, and personalization mechanisms.
3. **Layer 3 (Student Profile & Personal Overrides):** Read `journals/AI_STUDENT_CONTEXT.md` for the student's 30-Point `🧬 Learning DNA`, custom note preferences, and pending backlog tracker.
4. **Load Latest State:** Read the latest `journals/YYYY_MM_DD.md` for recent attempts, timings, and forensic struggle signatures.
5. **Audit Pending Backlog:** Check if previous session was wrapped up early leaving partial question batches.
6. If `journals/AI_STUDENT_CONTEXT.md` does not exist $\to$ run **`Mode: onboard`**.
7. **Strict Logging Boundary:** Never edit `AI_CONTEXT.md` during student sessions — log student reflections strictly to `journals/`.
</startup_protocol>

---

## 📌 Vault Identity & Mission
- **Vault:** GATE AE 2027 — Second Brain
- **Target Exam:** GATE Aerospace Engineering (February 2027, IIT Madras)
- **Primary Goal:** All India Rank 1 (AIR-1)
- **Target Audience:** B.Tech Aerospace & Mechanical Engineering Students
- **Architecture:** Git-collaborative hybrid. Course syllabus notes, daily roadmaps, and shared mock series are SHARED. Personal student data, journals, and custom private notes live strictly in `journals/` (gitignored).

---

## 📂 Privacy & Layer Boundaries

| **Shared Course Layer** | `00-07` (including `03 - DAILY TRACKER/`, `05 - MOCK TESTS/`, & `06 - FORMULA SHEETS/Master Flashcard Hub.md`), `.agents/`, `scripts/`, `AI_CONTEXT.md`, `AGENTS.md`, `VERSION.md`, `CHANGELOG.md` | ✅ Tracked | Developer-authored subject notes, PYQs, templates, formula sheets with **interactive foldable flashcard decks (`[!question]-`)**, **shared 6-month daily study roadmap (`03 - DAILY TRACKER/`)**, and **shared mock series (`05 - MOCK TESTS/`)**. |
| **Private Student Layer** | `journals/` (`AI_STUDENT_CONTEXT.md`, `YYYY_MM_DD.md`, student custom private note folders), personal mock attempts, `.backup/` | 🔒 Ignored | Student's personal study journals, timings, mistake forensic logs, and private personal notes. |

> ⚠️ **CRITICAL ARCHITECTURAL RULES FOR AI ASSISTANTS:**  
> 1. `03 - DAILY TRACKER/` contains the **shared 6-month daily study plan created by the author**. AI loads today's syllabus targets from here.  
> 2. `05 - MOCK TESTS/` contains the **shared developer mock tests (`Mock Series/`, `Topic Tests/`, `_Mock Test Index.md`)**. AI presents tests from here.  
> 3. Student session logs, reflections, scores, and struggle diagnoses belong **EXCLUSIVELY in `journals/YYYY_MM_DD.md`**. AI must **NEVER** write student personal logs into `03 - DAILY TRACKER/` or `05 - MOCK TESTS/`.
> 4. **Strict Scope & Permission Boundary:** Without explicit developer/spy authorization (commands prefixed with `spy:`, `dev:`, or when running in `Mode: author`), **NO AI ASSISTANT HAS PERMISSION TO EDIT Layer 1 (`AGENTS.md`), Layer 2 (`AI_CONTEXT.md`), or `CHANGELOG.md`**. Any student modification requests, prompt additions, or personal rule overrides MUST be routed strictly to Layer 3 (`journals/AI_STUDENT_CONTEXT.md`). Editing Layer 1 or Layer 2 during a regular student turn is a severe architectural violation.

---

## ⚙️ Personalization Mechanisms (The 3-Tier Layer Bridge)

To ensure this vault is universally robust for public release while allowing every student to have a hyper-personalized AI coaching experience, all customizations follow this bridging framework:
1. **Triggering (Layer 1 — `AGENTS.md`):** Global multi-agent rules determine *when* to execute personalized routines (e.g., Step 3 Layered Teaching, Step 5 Practice Blitz, Step 6 Forensic Review).
2. **Architecture & Boundaries (Layer 2 — `AI_CONTEXT.md`):** Defines repository privacy boundaries, mandating that all student personal logs, custom notes, and attempt histories MUST remain strictly encapsulated inside `journals/` and never touch public course directories (`02 - SUBJECTS/`).
3. **Personalization Directives (Layer 3 — `journals/AI_STUDENT_CONTEXT.md`):** The AI reads the student's 30-Point `🧬 Learning DNA` and `<custom_ai_overrides>` to determine the exact note structures, custom subdirectories, tone, and pacing preferred by that individual student.

---

## 📐 6-Month Master Syllabus Map

| Mission | Focus Area | Core Subjects & Modules Covered |
|---|---|---|
| **M1** | Engineering Mathematics | Linear Algebra, Vector Calculus, Differential Equations, Numerical Methods, Probability & Statistics |
| **M2** | Aerodynamics & Structures Core | Potential Flow, Airfoils & Wings, Compressible Flow & Shocks, Boundary Layers, 1D/2D Stress & Strain, GA |
| **M3** | Flight Mechanics & Space Dynamics | Aircraft Performance (Cruise, Climb, Glide, Turn), Static/Dynamic Stability & Control, Orbital Mechanics, Hohmann Transfers |
| **M4** | Propulsion & Rocketry | Gas Turbine Cycles, Inlets & Nozzles, Combustors, Turbomachinery (Axial/Centrifugal Compressors & Turbines), Rocket Engines & Staging |
| **M5** | Advanced Structures & Dynamics | Yield Criteria, Unsymmetrical Bending, Shear Center, Thin-Walled Beams, Column Buckling, Energy Methods, Structural Vibrations |
| **M6** | Grand Mock Marathon | 8 Full-Length 65Q Mocks, Speed Blitz Drills, Formula Lockdown, Full Syllabus Mastery & Graduation |

> **Detailed daily roadmap:** `03 - DAILY TRACKER/` + `01 - ROADMAP/Divide & Conquer — 6 Month Battle Plan.md`  
> **Official IIT Madras syllabus:** `00 - META/GATE 2027 Official Syllabus.md`

---

## 🎮 Multi-Agent Interaction Modes

| Mode | Trigger Phrase | What the AI Assistant Does |
|---|---|---|
| 🎓 **`tutor`** | `"Let's study"` / `"Continue"` / `"Tutor mode"` | Unified 10-Step Learn-Test-Review flow (Topic Sequence Anchor $\to$ Mandatory Pre-Teaching Web Search $\to$ 3-Layer Completeness Teaching $\to$ Infinite Mastery Loop $\to$ Practice Blitz $\to$ Forensic Review). |
| 📝 **`mock`** | `"Test me on X"` / `"Mock mode"` / `"Mock test"` | 5-Tier Hardness mock test, student reasoning capture, NAT/MCQ negative drag calculation, and forensic review. |
| 📊 **`analyse`** | `"Analyse my prep"` / `"Telemetry report"` | Deep telemetry diagnostic (Accuracy %, NAT vs MCQ split, Negative Drag, Speed & Endurance, 5-tier error taxonomy, and ROI Rank Booster priority index). |
| 🚀 **`onboard`** | `"I am new here"` / `"Setup"` | Initializes `journals/AI_STUDENT_CONTEXT.md` with 30-Point Learning DNA diagnostic interview for new joiners. |
| 🛠️ **`author`** | `"I am author"` / `"Developer mode"` | **Zero-logging mode** for vault maintainers creating and editing shared course content (`00-07`, `.agents/`). |
| 📦 **`release`** | `"Prepare release vX.Y.Z"` | Conducts pre-release privacy audit, synchronizes changelog, and packages clean release. |
| 🔄 **`update`** | `"Update my vault"` | Performs lossless backup of `journals/` and synchronizes updated shared course content. |
| 🕵️ **`spy` / `hot-patch`** | `"spy:"` / `"hot-patch"` / `"fix rendering"` | Dual-role maintenance: diagnoses pedagogical/vault gaps, hot-patches shared notes/formula sheets, and returns seamlessly to study. |

---

*Last Updated: 2026-08-17 | Version: 1.2.0*
