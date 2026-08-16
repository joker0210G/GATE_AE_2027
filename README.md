# 📚 GATE AE 2027 — Shared Second Brain Vault (Obsidian + AI)

[![Exam](https://img.shields.io/badge/GATE-Aerospace_Engineering_2027-blue.svg)](00%20-%20META/GATE%202027%20Official%20Syllabus.md)
[![Syllabus](https://img.shields.io/badge/IIT_Madras-Official_Syllabus-green.svg)](00%20-%20META/GATE%202027%20Official%20Syllabus.md)
[![Vault Version](https://img.shields.io/badge/Vault_Version-1.2.0-purple.svg)](VERSION.md)
[![Last Updated](https://img.shields.io/badge/Last_Updated-2026--08--17-orange.svg)](CHANGELOG.md)
[![Recommended AI Platform](https://img.shields.io/badge/Recommended_AI-Google_Antigravity-4285F4.svg)](https://deepmind.google/technologies/gemini/)
[![AI Ready](https://img.shields.io/badge/AI_Ready-Antigravity_%7C_Claude_%7C_Gemini_%7C_GPT--4o_%7C_Cursor-purple.svg)](AGENTS.md)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)
[![GitHub Stars](https://img.shields.io/github/stars/joker0210G/GATE_AE_2027?style=social)](https://github.com/joker0210G/GATE_AE_2027)

> **The Ultimate Open-Source AI-Native Study Vault & Personal 1-on-1 Coaching System for GATE Aerospace Engineering (AE) 2027 by IIT Madras.**  
> *Engineered with Obsidian Markdown, Spaced Repetition Flashcards, TCS Scientific Calculator Simulator, 5-Tier Mock Series, and Multi-Agent AI Coaching (Optimized for Google Antigravity, Claude, Gemini, GPT-4o, and Cursor).*

---

## 📑 Table of Contents
- [🧠 Recommended AI Platform: Google Antigravity](#-recommended-ai-platform-google-antigravity)
- [🚀 Quick Start for Students](#-quick-start-for-students)
- [🤖 Interactive AI Modes Cheat Sheet](#-interactive-ai-modes-cheat-sheet)
- [✨ Key Vault Features & Pedagogical Tooling](#-key-vault-features--pedagogical-tooling)
- [📚 Comprehensive Syllabus & Concept Keyword Index](#-comprehensive-syllabus--concept-keyword-index)
- [🎯 Syllabus Strategy (IIT Madras 2027 Core vs. Special)](#-syllabus-strategy-iit-madras-2027-core-vs-special)
- [🔒 Shared vs. Private Content (3-Tier Privacy Architecture)](#-shared-vs-private-content-3-tier-privacy-architecture)
- [🔄 Lossless Vault Updates for Existing Students](#-lossless-vault-updates-for-existing-students)
- [🛠️ Author & Developer Mode (`mode: author`)](#️-author--developer-mode-mode-author)
- [🔌 Recommended Obsidian Plugins Setup](#-recommended-obsidian-plugins-setup)
- [🗂️ Complete Vault Directory Structure](#-complete-vault-directory-structure)
- [❓ Frequently Asked Questions (FAQ)](#-frequently-asked-questions-faq)
- [🤝 Contributing & Community](#-contributing--community)

---

## 🧠 Recommended AI Platform: Google Antigravity

While this vault is completely universal and works with any modern LLM, **[Google Antigravity](https://deepmind.google/technologies/gemini/)** is the **officially recommended AI workspace platform** for the GATE AE 2027 Vault.

### 🌟 Why Google Antigravity is the Premier Choice:
1. **Native Multi-Agent & Specialized Skill Architecture:**  
   Antigravity natively executes the vault's specialized skill suite in [`.agents/skills/`](.agents/skills/) ([`gate-vault-manager`](.agents/skills/gate-vault-manager/SKILL.md), [`prep-analyser`](.agents/skills/prep-analyser/SKILL.md), [`pyq-analyzer`](.agents/skills/pyq-analyzer/SKILL.md)), coordinating autonomous subagents for deep research, step-by-step mathematical verification, and lossless note updating.
2. **Autonomous Web Search & Self-Evolving Content Gap Detection:**  
   During tutoring and mock reviews, Antigravity autonomously searches for competitive shortcuts, 1-minute topper tricks, and IIT Madras trends, hot-patching shared concept notes in real time.
3. **High-Fidelity Working-Memory & Strict XML Directives:**  
   The vault's instruction core ([`AGENTS.md`](AGENTS.md)) and student profile architecture ([`journals/AI_STUDENT_CONTEXT.md`](journals/AI_STUDENT_CONTEXT.md)) leverage structured XML semantic tags (`<tutor_engine>`, `<learning_dna>`) engineered specifically for Antigravity's zero-hallucination instruction adherence.
4. **Direct Workspace Tooling & Privacy Isolation:**  
   Antigravity seamlessly navigates shared study roadmaps while strictly sandboxing your personal study logs, mistake logs, and scorecards in `journals/`.
5. **Universal Compatibility Across All AI Models:**  
   In addition to Antigravity, the vault is 100% plug-and-play with **Claude (Anthropic)**, **Gemini / Google AI Studio**, **OpenAI ChatGPT (GPT-4o)**, **Cursor IDE**, and **Windsurf**.

---

## 🚀 Quick Start for Students

1. **Download the Vault:**
   - **GitHub ZIP Download:** Go to [joker0210G/GATE_AE_2027](https://github.com/joker0210G/GATE_AE_2027), click **`<> Code`** → **`Download ZIP`**, and extract the `GATE_AE_2027-main` folder.
   - **Git Clone:** Run `git clone https://github.com/joker0210G/GATE_AE_2027.git` in your terminal.
2. **Open in Obsidian:**
   - Download & install [Obsidian](https://obsidian.md).
   - Click **"Open folder as vault"** and choose your extracted `GATE_AE_2027-main` folder.
3. **Launch Your AI Assistant (Antigravity / Preferred AI):**
   - Open this repository in **Google Antigravity** (or launch your preferred AI agent).
   - Say: **"I am new here"** to start the 30-Point Learning DNA Diagnostic Onboarding!
   - Or say: **"Let's study"** to begin Mission 1 / Day 1 from your pre-authored daily study tracker!

---

## 🤖 Interactive AI Modes Cheat Sheet

This vault includes a built-in multi-agent protocol defined in [`AGENTS.md`](AGENTS.md). Simply type any trigger phrase to switch AI modes:

| Mode | Trigger Phrase | What the AI Assistant Does |
|---|---|---|
| 🎓 **Tutor** | `"Let's study"` / `"Continue"` / `"Tutor mode"` | Unified 10-Step Learn-Test-Review flow: Topic Dissection $\to$ Mandatory Pre-Teaching Web Search $\to$ 3-Layer Completeness Teaching (Intuition, Engineering, GATE Mastery) $\to$ Comprehension Checkpoint $\to$ Infinite Mastery Loop $\to$ Practice Blitz $\to$ Real-Time Forensic Review $\to$ Native Foldable Flashcard Recap. |
| 📝 **Mock** | `"Test me on X"` / `"Mock mode"` / `"Mock test"` | 5-Tier Hardness mock test series with under-the-hood **Trap Spotter** (reverse-engineering flawed student solutions), **Multi-Subject Cross-Pollination Synthesizer** (hybrid aerospace problems), NAT $[V_{\min}, V_{\max}]$ tolerance auditing, and IIT Distractor Trap Blueprints. |
| 📊 **Analyse** | `"Analyse my prep"` / `"Telemetry report"` | Deep preparation telemetry: accuracy %, NAT vs MCQ split, Negative Marking Drag, speed/fatigue analytics, 5-tier error taxonomy, Fatigue Degradation Index ($FDI$), and the **AIR Rank & Institute Cutoff Simulator**. |
| 🚀 **Onboard** | `"I am new here"` / `"Setup"` | Runs a comprehensive 30-Point Diagnostic Interview to formulate your private `🧬 Learning DNA` in `journals/AI_STUDENT_CONTEXT.md`. |
| 🕵️ **Spy / Hot-Patch** | `"spy:"` / `"hot-patch"` / `"fix rendering"` | Dual-role maintenance: autonomously investigates content gaps, updates shared notes/formula sheets, and resumes active tutoring. |
| 🛠️ **Author** | `"I am author"` / `"Developer mode"` | **Zero-logging mode** for vault maintainers creating and editing shared course material (`00-07`, `.agents/`). |
| 📦 **Release** | `"Prepare release vX.Y.Z"` | Runs a pre-release privacy audit (0 personal log leaks) and packages a clean release ZIP. |
| 🔄 **Update** | `"Update my vault"` | Performs lossless backup of `journals/` and synchronizes updated shared course content. |

---

## ✨ Key Vault Features & Pedagogical Tooling

### 🧮 1. Virtual TCS/GATE Scientific Calculator Simulator & Master Guide
- **Authentic Simulator (`assets/calculator/`):** Full offline-ready web simulator for the TCS iON scientific calculator with unary post-fix functions ($\sin, \cos, \tan, \ln, \log_{10}, x^y, \sqrt[y]{x}, x!$), degree/radian toggles, memory registers (`MS`, `MR`, `M+`, `M-`, `MC`) with active `[M]` indicator, and a strict **Mouse-Only Exam Mode**.
- **Master Guide ([`00 - META/GATE TCS Calculator Guide & NAT Precision Rules.md`](00%20-%20META/GATE%20TCS%20Calculator%20Guide%20%26%20NAT%20Precision%20Rules.md)):** 3-tier tutorial covering beginner post-fix rules, bracket chaining, AIR 1 zero-loss memory register workflows, and intermediate rounding error prevention.

### 🃏 2. Interactive Foldable Spaced Repetition Flashcards (`[!question]-`)
- Built natively using Obsidian foldable callouts across all subject formula sheets.
- Click-to-reveal analytical formulas, core derivations, and dedicated ⚠️ **AIR 1 Trap Warnings** for rapid active recall.
- Centralized hub available at [`06 - FORMULA SHEETS/Master Flashcard Hub.md`](06%20-%20FORMULA%20SHEETS/Master%20Flashcard%20Hub.md).

### 🏆 3. AIR Rank & Institute Cutoff Simulator
- Integrated rank and cutoff simulation engine ([`00 - META/GATE AE AIR Rank & Institute Cutoff Simulator.md`](00%20-%20META/GATE%20AE%20AIR%20Rank%20%26%20Institute%20Cutoff%20Simulator.md)).
- Dynamically translates practice scores into normalized scores (out of 1000), estimated AIR brackets, and an **Institute Admission & PSU Recruitment Probability Matrix** (IISc Bangalore, IIT Bombay, IIT Madras, IIT Kanpur, IIT Kharagpur, DRDO, ISRO, IIST, DIAT).

### ⏱️ 4. 3-Hour Full-Mock Endurance & Fatigue Protocol
- Segmented 3-Block Telemetry framework ([`00 - META/GATE 3-Hour Full-Mock Endurance & Fatigue Protocol.md`](00%20-%20META/GATE%203-Hour%20Full-Mock%20Endurance%20%26%20Fatigue%20Protocol.md)) analyzing 180-minute mock stamina:
  - **Hour 1:** Speed Baseline & Easy Marks Harvesting
  - **Hour 2:** Core Heavy 2-Mark Problems & Multi-Step Derivations
  - **Hour 3:** Fatigue Resistance, Trap Avoidance & Zero-Guess Discipline
- Tracks the **Fatigue Degradation Index ($FDI$)** to eliminate final 45-minute negative mark leaks.

---

## 📚 Comprehensive Syllabus & Concept Keyword Index

This repository covers 100% of the **IIT Madras GATE Aerospace Engineering (AE) 2027** syllabus, structured into modular second-brain notes and indexed for quick search:

### 📐 Section 1: Engineering Mathematics (13 Marks)
- **Linear Algebra:** Matrices & Determinants, Rank of Matrix, System of Linear Equations, Eigenvalues & Eigenvectors, Cayley-Hamilton Theorem, Diagonalization, Orthogonal Matrices.
- **Calculus:** Functions of Single Variable, Limit, Continuity, Differentiability, Mean Value Theorems, Taylor & Maclaurin Series, Maxima & Minima, Indeterminate Forms (L'Hôpital's Rule), Evaluation of Definite and Improper Integrals, Partial Derivatives, Total Derivatives, Maxima & Minima for Multiple Variables.
- **Vector Calculus:** Gradient, Divergence, Curl, Directional Derivatives, Line, Surface, and Volume Integrals, Green's Theorem, Stokes' Theorem, Gauss Divergence Theorem.
- **Differential Equations:** First-Order ODEs (Linear, Exact, Integrating Factors), Higher-Order Linear ODEs with Constant Coefficients, Cauchy-Euler Equations, Method of Variation of Parameters, Laplace Transforms, Initial & Boundary Value Problems, Basic Partial Differential Equations (Wave Equation, Heat Equation, Laplace Equation).
- **Numerical Methods:** Solutions of Non-linear Algebraic Equations (Bisection, Secant, Newton-Raphson Method), Numerical Integration (Trapezoidal Rule, Simpson's 1/3 and 3/8 Rules), Initial Value Problems for ODEs (Euler's Method, 4th-Order Runge-Kutta Method).
- **Probability & Statistics:** Axioms of Probability, Conditional Probability, Bayes' Theorem, Random Variables, Discrete & Continuous Probability Distributions (Binomial, Poisson, Normal Distribution), Mean, Median, Mode, Standard Deviation.

### ✈️ Section 2: Flight Mechanics & Space Dynamics (Core + Special)
- **Atmosphere & Airspeed:** International Standard Atmosphere (ISA), Geopotential vs Geometric Altitude, Pressure/Density Altitude, Indicated Airspeed (IAS), Calibrated Airspeed (CAS), Equivalent Airspeed (EAS), True Airspeed (TAS), Ground Speed.
- **Aircraft Performance:** Drag Polar, Induced Drag vs Parasite Drag, Steady Level Flight, Minimum Drag & Minimum Power Conditions, Thrust Required ($T_R$) & Power Required ($P_R$), Thrust Available ($T_A$) & Power Available ($P_A$), Maximum Speed, Maximum Range & Maximum Endurance (Jet Aircraft vs Propeller Aircraft / Breguet Range Equations), Steady Climb, Rate of Climb ($R/C$), Climb Angle, Absolute & Service Ceilings, Gliding Flight & Maximum Glide Range, Steady Level Turn, Load Factor ($n$), Pull-up/Push-over Manoeuvres, Take-off and Landing Distances, V-n Flight Envelope.
- **Stability & Control:** Longitudinal Static Stability, Neutral Point (Stick-Fixed & Stick-Free), Static Margin, Pitch Trim, Center of Gravity ($CG$) Limits, Elevator Power, Pitch Damping Derivative ($C_{m_q}$), Lateral & Directional Static Stability ($C_{l_\beta}, C_{n_\beta}$), Dihedral Effect, Weathercock Stability, Rudder & Aileron Control Power.
- **Dynamic Stability:** Equations of Motion of Rigid Aircraft, Small Perturbation Theory, Decoupling of Longitudinal and Lateral-Directional Dynamics, Longitudinal Modes (Short Period Mode, Phugoid Mode), Lateral-Directional Modes (Roll Subsidence, Spiral Mode, Dutch Roll Mode).
- **Space Dynamics (Special Topics):** Kepler's Laws of Planetary Motion, Two-Body Problem, Orbital Energy and Angular Momentum, Conic Sections (Circle, Ellipse, Parabola, Hyperbola), Orbital Elements, Escape Velocity, Orbital Velocity, Orbital Period, Orbit Transfers (Hohmann Transfer Orbit, Bi-elliptic Transfer, Orbital Inclination & Plane Change Manoeuvres), Launch Windows, Rigid-Body Attitude Dynamics, Euler's Equations for Rotating Rigid Bodies.

### 💨 Section 3: Aerodynamics (Incompressible & Compressible)
- **Incompressible Potential Flow:** Continuity and Momentum Equations, Velocity Potential ($\Phi$), Stream Function ($\Psi$), Laplace's Equation, Elementary Incompressible Flows (Uniform Stream, Source/Sink, Doublet, Point Vortex), Superposition Principle, Flow past a Cylinder with and without Circulation, D'Alembert's Paradox, Magnus Effect, Kutta-Joukowski Theorem.
- **Airfoil & 2D Wing Theory:** NACA 4-digit, 5-digit, and 6-series Airfoil Nomenclature, Aerodynamic Center ($AC$), Center of Pressure ($CP$), Kutta Condition, Thin Airfoil Theory for Symmetric and Cambered Airfoils, Aerodynamic Pitching Moment Coefficient ($C_{m_{ac}}$).
- **3D Finite Wing Theory:** Bound and Trailing Vortices, Horseshoe Vortex Model, Biot-Savart Law, Helmholtz's Vortex Theorems, Prandtl's Classical Lifting-Line Theory, Induced Angle of Attack, Downwash Distribution, Induced Drag Coefficient ($C_{D_i}$), Elliptic Lift Distribution, Aspect Ratio ($AR$) & Taper Ratio Effects.
- **Viscous Flow & Boundary Layer Theory:** Navier-Stokes Equations, Exact Solutions (Couette Flow, Poiseuille Flow), Boundary Layer Concept, Prandtl's Boundary Layer Equations, Blasius Solution for Flat Plate, Displacement Thickness ($\delta^*$), Momentum Thickness ($\theta$), Energy Thickness, Shape Factor ($H$), Skin Friction Drag Coefficient ($C_f$), von Kármán Momentum Integral Equation, Laminar-to-Turbulent Transition, Boundary Layer Separation and Control.
- **Compressible Aerodynamics & Gas Dynamics:** Speed of Sound, Mach Number Regimes, 1D Isentropic Flow of Perfect Gas, Area-Mach Number Relation, Choked Flow in Convergent-Divergent Nozzles, Normal Shock Waves (Rankine-Hugoniot Relations, Entropy Change, Stagnation Pressure Drop), Oblique Shock Waves ($\theta$-$\beta$-$\mathcal{M}$ Relations, Detached Shocks), Prandtl-Meyer Expansion Waves, Rayleigh Flow (1D Flow with Heat Transfer), Fanno Flow (1D Flow with Friction), Shock Polar, Supersonic Flow over Thin Airfoils (Linearized Supersonic Theory, Ackeret's Theory).

### 🏗️ Section 4: Aerospace Structures
- **Mechanics of Materials:** 1D and 2D Stress & Strain States, Generalized Hooke's Law, Stress-Strain Relations for Isotropic Materials, Young's Modulus ($E$), Shear Modulus ($G$), Poisson's Ratio ($\nu$), Bulk Modulus ($K$), Thermal Stresses, Mohr's Circle for Plane Stress and Plane Strain, Principal Stresses and Principal Strains, Maximum Shear Stress, Failure Theories / Yield Criteria (Maximum Principal Stress / Rankine, Maximum Shear Stress / Tresca, Distortion Energy / von Mises).
- **Structural Analysis:** Statically Determinate and Indeterminate Trusses (Method of Joints, Method of Sections), Deflection of Beams, Shear Force and Bending Moment Diagrams (SFD & BMD).
- **Bending & Torsion of Beams:** Euler-Bernoulli Beam Theory, Pure Bending, Symmetric & Unsymmetrical Bending of Beams, Principal Axes of Inertia, Shear Flow & Shear Center in Thin-Walled Open and Closed Sections, Bredt-Batho Theory for Torsion of Thin-Walled Closed Tubes, Membrane Analogy.
- **Structural Stability (Buckling):** Euler Column Buckling Theory, Critical Buckling Load ($P_{cr}$), Effective Length for Different Boundary Conditions, Column Slenderness Ratio.
- **Energy Methods:** Strain Energy due to Axial Load, Bending, Shear, and Torsion, Castigliano's First and Second Theorems, Principle of Virtual Work, Maxwell-Betti Reciprocal Theorem, Unit Load Method for Deflection Calculations.
- **Structural Vibrations:** Free and Forced Vibrations of Undamped and Damped Single-Degree-of-Freedom (SDOF) Systems, Natural Frequency ($\omega_n$), Damping Ratio ($\zeta$), Logarithmic Decrement, Resonance, Transmissibility, Two-Degree-of-Freedom Systems, Multi-DOF Systems, Mode Shapes, Orthogonality of Modes.

### 🔥 Section 5: Propulsion & Turbomachinery
- **Thermodynamics of Aircraft Engines:** Ideal and Real Brayton Cycles, Gas Turbine Engine Types (Turbojet, Turbofan, Turboprop, Turboshaft), Thermodynamic Cycle Analysis with Component Losses (Inlet, Compressor, Combustor, Turbine, Afterburner, Nozzle), Thrust Equation, Specific Thrust, Specific Fuel Consumption (Thrust SFC / TSFC), Thermal Efficiency, Propulsive Efficiency, Overall Efficiency, Ramjet & Scramjet Operating Principles.
- **Aerothermodynamics of Engine Components:** Subsonic and Supersonic Inlets, Total Pressure Recovery, Internal and External Compression Inlets, Choked Nozzles, Convergent & Convergent-Divergent (de Laval) Nozzles, Under-expanded and Over-expanded Nozzle Flows, Combustor Aerodynamics, Total Pressure Loss in Combustion Chambers.
- **Turbomachinery (Compressors & Turbines):** Euler's Turbomachinery Equation, Axial Flow Compressors (Velocity Triangles, Degree of Reaction, Stage Loading, Work Done Factor, Compressor Stage Efficiency, Blade Stalling, Rotating Stall, Surge), Centrifugal Compressors (Slip Factor, Impeller & Diffuser Flow), Axial Flow Turbines (Impulse and Reaction Turbine Stages, Blade Cooling Techniques).
- **Rocket Propulsion:** Thrust Equation for Rocket Engines, Specific Impulse ($I_{sp}$), Effective Exhaust Velocity ($c$), Characteristic Velocity ($c^*$), Thrust Coefficient ($C_F$), Tsiolkovsky Rocket Equation, Mass Ratio, Structural Coefficient, Multi-Stage Rocket Performance (Optimal Stage Mass Distribution), Chemical Rocket Propellants (Solid Propellants, Liquid Propellants, Hybrid Rocket Motors), Combustion Instabilities in Rocket Chambers.

### 💡 Section 6: General Aptitude (15 Marks)
- **Verbal Aptitude:** English Grammar, Vocabulary, Sentence Completion, Verbal Analogies, Critical Reasoning, Reading Comprehension.
- **Quantitative Aptitude:** Numerical Computation, Numerical Estimation, Data Interpretation (Bar charts, Pie charts), Percentages, Ratios & Proportions, Time & Work, Speed & Distance, Geometry & Mensuration.
- **Analytical & Spatial Aptitude:** Deductive and Inductive Logic, Pattern Recognition, Paper Folding & Cutting, Spatial Rotation and Transformation.

---

## 🎯 Syllabus Strategy (IIT Madras 2027 Core vs. Special)

Following official GATE Aerospace weightage, content is strictly prioritized:
- **Core Topics (≥90% of exam score):** Linear Algebra, Calculus, Differential Equations, Potential Flow, Airfoil & Wing Theory, Compressible Aerodynamics, Aircraft Performance, Static/Dynamic Stability, Jet Engine Cycles, Axial & Centrifugal Turbomachinery, Beam Bending & Torsion, Energy Methods, Structural Vibrations.
- **Special Topics (≤10% of exam score):** Space Dynamics (Orbital Transfers, Rigid-body Dynamics), Advanced Rocketry & Staging, Compressible Flow Boundary Layers.

---

## 🔒 Shared vs. Private Content (3-Tier Privacy Architecture)

| Category | What is Shared / Released (Course Material) | What is Ignored in `.gitignore` (Private to Student) |
|---|---|---|
| **Syllabus Notes** | All Core & Special topic notes (`02 - SUBJECTS/`) | Personal scratch notes in `Private/` or `journals/Private Notes/` |
| **PYQs** | All PYQ breakdowns & master index (`04 - PYQs/`) | Personal PYQ attempt logs & notes |
| **Formula Sheets** | All subject formula sheets & interactive flashcard decks (`06 - FORMULA SHEETS/`) | Personal custom formula sheets |
| **Templates & Meta** | All templates (`07 - TEMPLATES/`), Syllabus, Calculator & Simulator guides (`00 - META/`) | — |
| **Daily Tracker & Roadmap** | Pre-authored 6-month shared daily roadmap (`03 - DAILY TRACKER/`) | Personal daily study logs (`journals/YYYY_MM_DD.md` & `journals/AI_STUDENT_CONTEXT.md`) |
| **Mock Tests** | Shared developer mock series (`05 - MOCK TESTS/`) & master index | Personal AI weak-area mock test attempts & detailed scorecards |

---

## 🔄 Lossless Vault Updates for Existing Students

Updating your vault is **100% safe and lossless**. Your personal study logs, student context, and weak-area mock scores are stored in `journals/` (which is git-ignored) and will **never be overwritten or deleted**.

### How to Update:
- **GitHub ZIP Download Students:**
  1. Click **`<> Code`** → **`Download ZIP`** on [joker0210G/GATE_AE_2027](https://github.com/joker0210G/GATE_AE_2027).
  2. Extract the downloaded `GATE_AE_2027-main.zip`.
  3. Tell your AI assistant in Antigravity/Obsidian:
     > *"Update my vault from `[Path/To/Extracted/GATE_AE_2027-main]`"*
- **Git Clone Students:** Tell your AI assistant:
  > *"Update my vault"*
- **Via PowerShell Script:**
  ```powershell
  .\scripts\update-vault.ps1 -SourcePath "C:\Downloads\GATE_AE_2027-main"
  ```
For full details, see the [Update & Release Guide](00%20-%20META/Update%20%26%20Release%20Guide.md).

---

## 🛠️ Author & Developer Mode (`mode: author`)

If you are the **vault maintainer/author** creating content or publishing updates:
1. Simply tell the AI: **"I am author"** or **"Developer mode"**.
2. **Zero Logging Directive:** The AI will bypass creating or updating personal student logs (`journals/`).
3. **Release Packaging:** When ready to publish a new release, tell the AI: **"Prepare release vX.Y.Z"**. The AI will run a pre-release privacy audit (ensuring 0 personal log leaks) and package a clean `GATE_AE_2027_vX.Y.Z.zip` release.

---

## 🔌 Recommended Obsidian Plugins Setup

While the vault works out-of-the-box as pure Markdown, we recommend enabling the following Obsidian community plugins for the optimal experience:

1. **Templater:** For inserting structured templates from `07 - TEMPLATES/`.
2. **Dataview:** For dynamic topic progress checklists & score telemetry tables.
3. **Calendar:** For seamless navigation of daily study trackers.
4. **Local REST API / LLM Hub:** For connecting local AI models and tool integrations.

*(Note: Plugin configurations are stored locally in `.obsidian/` and are not required for students who prefer a lightweight setup).*

---

## 🗂️ Complete Vault Directory Structure

```
GATE/
├── VERSION.md                         ← Current vault version (v1.2.0)
├── CHANGELOG.md                       ← Version history & release notes
├── FEATURES.md                        ← Feature catalog & study enhancement roadmap
├── AI_CONTEXT.md                      ← LLM Shared Memory (Read this first)
├── AGENTS.md                          ← Universal AI agent rules & tutor engine
├── mcp.json                           ← Model Context Protocol config
├── assets/                            ← Assets & Offline TCS Calculator Simulator
│   └── calculator/                    ← TCS iON Scientific Calculator Web App
├── 00 - META/                         ← Syllabus, Simulator, Fatigue & Calculator Guides
│   ├── GATE 2027 Official Syllabus.md ← IIT Madras Official Core vs Special
│   ├── GATE TCS Calculator Guide & NAT Precision Rules.md
│   ├── GATE AE AIR Rank & Institute Cutoff Simulator.md
│   ├── GATE 3-Hour Full-Mock Endurance & Fatigue Protocol.md
│   ├── Update & Release Guide.md      ← Student updates & Author release guide
│   └── Vault Architecture.md
├── 01 - ROADMAP/                      ← GATE AE 2027 Master Roadmap
├── 02 - SUBJECTS/                     ← 5 Official Technical Sections + General Aptitude
│   ├── Engineering Mathematics/       ← Section 1
│   ├── Flight Mechanics & Space Dynamics/ ← Section 2 (Combined)
│   ├── Aerodynamics/                  ← Section 3
│   ├── Structures/                    ← Section 4
│   ├── Propulsion/                    ← Section 5
│   └── General Aptitude/              ← General Aptitude (15 Marks)
├── 03 - DAILY TRACKER/                ← Shared 6-month daily study roadmap
├── 04 - PYQs/                         ← Section-wise PYQ notes & master index (Shared)
├── 05 - MOCK TESTS/                   ← Shared developer mocks & master score index
├── 06 - FORMULA SHEETS/               ← Interactive Flashcards & Formula Sheets
│   └── Master Flashcard Hub.md        ← Spaced repetition navigator
├── 07 - TEMPLATES/                    ← Master markdown templates
├── .agents/                           ← AI Agent skills (vault-manager, prep-analyser, etc.)
├── scripts/                           ← Update & Release utility scripts
└── journals/                          ← Private student study journals (Git-Ignored)
    ├── AI_STUDENT_CONTEXT.md          ← Student's 30-Point Learning DNA & profile
    └── YYYY_MM_DD.md                  ← Daily study logs & forensic diagnoses
```

---

## ❓ Frequently Asked Questions (FAQ)

<details>
<summary><b>Q1: Is this vault completely free and open-source?</b></summary>

Yes! The entire GATE AE 2027 vault is free, open-source, and licensed under the MIT License. All study materials, PYQ breakdowns, formula sheets, mock tests, and AI coaching architectures are available to every aerospace engineering aspirant worldwide.
</details>

<details>
<summary><b>Q2: How do I connect Google Antigravity to this vault?</b></summary>

Simply open the vault folder in your Antigravity IDE workspace. Antigravity will automatically detect `AGENTS.md`, `AI_CONTEXT.md`, and the specialized `.agents/skills/` suite. From there, type `"Let's study"` or `"I am new here"` in chat to begin your personalized AI coaching session.
</details>

<details>
<summary><b>Q3: Can I use this vault without any AI tools?</b></summary>

Absolutely. The vault is built on standard Markdown and works as a complete, standalone Obsidian second brain with pre-authored daily roadmaps (`03 - DAILY TRACKER/`), comprehensive concept notes (`02 - SUBJECTS/`), interactive spaced repetition flashcards (`06 - FORMULA SHEETS/`), and an authentic offline TCS Calculator simulator (`assets/calculator/`).
</details>

<details>
<summary><b>Q4: How does the AI protect my private notes and study logs during updates?</b></summary>

The vault uses a **3-Tier Privacy Architecture**. All private logs, mistake diagnoses, timings, and personal flashcards live strictly in `journals/` (which is git-ignored). When updating your vault, the updater script or AI assistant only replaces public course notes in `00-07`, leaving your personal logs untouched.
</details>

<details>
<summary><b>Q5: How accurate is the built-in AIR Rank & Cutoff Simulator?</b></summary>

The simulator uses historical GATE Aerospace score-to-mark normalization curves and official IIT/IISc cutoff matrices, categorizing candidates across score tiers and forecasting admission probabilities for IISc Bangalore, IIT Bombay, IIT Madras, IIT Kanpur, IIT Kharagpur, DRDO, and ISRO.
</details>

---

## 🤝 Contributing & Community

Contributions are welcome! If you want to contribute new PYQ solutions, improve concept notes, add interactive flashcards, or optimize AI agent skills:

1. **Fork the Repository** on GitHub.
2. **Create a Feature Branch:** `git checkout -b feature/topic-name`
3. **Commit Your Changes:** `git commit -m "Add: Rocket Staging PYQ Analysis (2024)"`
4. **Push to the Branch:** `git push origin feature/topic-name`
5. **Open a Pull Request** with a brief explanation of the enhancement.

⭐ **If you find this vault helpful for your GATE preparation, please consider giving it a star on GitHub!** It helps other aerospace aspirants discover this open-source second brain.

---

### 🏷️ GitHub Repository Topics & Keywords
`gate-aerospace-2027` • `gate-ae` • `iit-madras-gate-2027` • `aerospace-engineering` • `obsidian-vault` • `ai-tutor` • `antigravity` • `flight-mechanics` • `aerodynamics` • `propulsion` • `space-dynamics` • `structures` • `engineering-mathematics` • `pyq-solutions` • `tcs-calculator-simulator` • `gate-preparation` • `spaced-repetition` • `active-recall`

---
*Targeting AIR 1 in GATE Aerospace Engineering 2027 (IIT Madras).*
