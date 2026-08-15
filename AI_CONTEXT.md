# 🤖 AI CONTEXT — GATE AE 2027 Shared Vault

> **AI Startup Protocol:**
> 1. Read THIS file for vault structure & syllabus map.
> 2. Read `journals/AI_STUDENT_CONTEXT.md` for student state & session log.
> 3. If that file doesn't exist → run **Onboard Mode** (see `AGENTS.md`).
> 4. Follow rules in `AGENTS.md`. Log student sessions to `journals/` only. Never edit this file during student sessions.

---

## 📌 Vault Identity
- **Vault:** GATE AE 2027 — Second Brain
- **Goal:** Crack GATE Aerospace Engineering 2027 (Exam: February 2027, IIT Madras)
- **Audience:** B.Tech Aerospace / Mechanical Engineering Students
- **Architecture:** Git-collaborative. Course material, daily roadmaps, & shared mock series are SHARED. Personal student data lives in `journals/` (gitignored).

---

## 📂 Privacy & Layer Boundary

| Layer | Contents | Git Status | Description |
|---|---|---|---|
| **Shared Course Layer** | `00-07` (including `03 - DAILY TRACKER/` & `05 - MOCK TESTS/`), `.agents/`, `scripts/`, `AI_CONTEXT.md`, `AGENTS.md`, `VERSION.md`, `CHANGELOG.md` | ✅ Tracked | Developer-authored course material, subject notes, PYQs, templates, **shared 6-month daily study roadmap (`03 - DAILY TRACKER/`)**, and **shared developer mock tests (`05 - MOCK TESTS/`)**. |
| **Private Student Layer** | `journals/` (`AI_STUDENT_CONTEXT.md` & `YYYY_MM_DD.md`), student personal weak-area mock attempt reviews, `.backup/` | 🔒 Ignored | Student's personal study session logs, reflections, timings, and individual weak-area diagnostic data. |

> ⚠️ **CRITICAL FOR AI ASSISTANTS:**  
> - `03 - DAILY TRACKER/` contains the **shared 6-month daily study plan created by the developer**. AI loads today's target from here.  
> - `05 - MOCK TESTS/` contains the **shared mock test series (`Mock Series/`, `Topic Tests/`, `_Mock Test Index.md`) created by the developer**. AI presents tests from here.  
> - Student personal session logging and test attempt reviews (reflections, accuracy, struggles, timings) belong **EXCLUSIVELY in `journals/`** (`journals/YYYY_MM_DD.md`). AI must NEVER write student personal logs into `03 - DAILY TRACKER/` or `05 - MOCK TESTS/`.

---

## 📐 6-Month Syllabus Map

| Mission | Focus | Core Topics |
|---|---|---|
| **M1** | Engineering Mathematics | Linear Algebra, Vector Calculus, Differential Equations, Numerical Methods, Probability |
| **M2** | Aerodynamics & Structures Core | Potential Flow, Airfoils, Wings, Shocks, Boundary Layers, Stress/Strain, GA |
| **M3** | Flight Mechanics & Space Dynamics | Aircraft Performance, Static Stability & Control, Orbits, Hohmann Transfers |
| **M4** | Propulsion & Rocketry | Gas Turbines, Nozzles, Combustors, Turbomachinery, Rockets, Multi-Staging |
| **M5** | Advanced Structures & Dynamics | Yield Criteria, Unsymmetrical Bending, Shear Center, Buckling, Energy Methods |
| **M6** | Grand Mock Marathon | 8 Full-Length 65Q Mocks, Speed Drills, Full Syllabus Lockdown & Graduation |

> **Detailed daily roadmap:** `03 - DAILY TRACKER/` + `01 - ROADMAP/Divide & Conquer — 6 Month Battle Plan.md`  
> **Official syllabus:** `00 - META/GATE 2027 Official Syllabus.md`

---

## 🎮 Interaction Modes

| Mode | Trigger | What It Does |
|---|---|---|
| **tutor** | "Let's study" / "Continue" / "Tutor mode" | Unified 10-Step Learn-Test-Review flow (Anchor → Warmup → Layered Teaching → Checkpoint → Blitz → Forensic Review) |

| **mock** | "Test me" / "Mock on X" / "Mock mode" | 5-Tier Hardness mock test, student reasoning capture, NAT/MCQ negative drag, forensic review |

| **analyse** | "Analyse my prep" / "Telemetry report" | Deep telemetry diagnostic (Accuracy, NAT/MCQ split, Negative Drag, Speed, 5-tier errors, ROI Priority) |
| **onboard** | "I am new here" / "Setup" | Initialize new student context in `journals/AI_STUDENT_CONTEXT.md` |
| **author** | "I am author" / "Developer mode" | **Zero-logging mode** for maintainer editing shared content (`00-07`, `.agents/`) |
| **release** | "Prepare release vX.Y.Z" | Conduct pre-release privacy audit & package clean release ZIP |
| **update** | "Update my vault" | Lossless backup of `journals/` & sync of shared course content |

*Last Updated: 2026-08-15 | Version: 1.1.0*
