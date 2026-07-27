# 🏗️ Vault Architecture
#type/meta

---

## Complete Folder Structure

```
GATE/
│
├── AI_CONTEXT.md                        ← LLM shared memory (ALWAYS read first)
├── README.md                            ← Human overview
│
├── 00 - META/
│   ├── Vault Architecture.md            ← This file
│   └── Tagging & Linking System.md      ← Full tagging guide
│
├── 01 - ROADMAP/
│   └── GATE AE 2027 Master Roadmap.md  ← Full phase-by-phase journey
│
├── 02 - SUBJECTS/
│   ├── Engineering Mathematics/
│   │   ├── _Index.md                    ← Subject overview + topic checklist
│   │   ├── Linear Algebra.md
│   │   ├── Calculus.md
│   │   ├── Differential Equations.md
│   │   ├── Fourier Series.md
│   │   ├── Laplace Transform.md
│   │   ├── Numerical Methods.md
│   │   └── Probability & Statistics.md
│   │
│   ├── General Aptitude/
│   │   ├── _Index.md
│   │   ├── Verbal Ability.md
│   │   └── Numerical Ability.md
│   │
│   ├── Flight Mechanics/
│   │   ├── _Index.md
│   │   ├── Atmosphere & ISA.md
│   │   ├── Basic Flight Concepts.md
│   │   ├── Aircraft Performance.md
│   │   ├── Static Stability.md
│   │   └── Dynamic Stability.md
│   │
│   ├── Space Dynamics/
│   │   ├── _Index.md
│   │   ├── Central Force Motion.md
│   │   ├── Orbital Mechanics.md
│   │   └── Orbital Maneuvers.md
│   │
│   ├── Aerodynamics/
│   │   ├── _Index.md
│   │   ├── Basic Fluid Mechanics.md
│   │   ├── Potential Flow.md
│   │   ├── Airfoil Theory.md
│   │   ├── Finite Wing Theory.md
│   │   ├── Compressible Flow.md
│   │   ├── Shock Waves.md
│   │   └── Boundary Layer.md
│   │
│   ├── Structures/
│   │   ├── _Index.md
│   │   ├── Stress & Strain.md
│   │   ├── Bending & Shear.md
│   │   ├── Torsion.md
│   │   ├── Buckling.md
│   │   ├── Fatigue.md
│   │   └── Failure Theories.md
│   │
│   └── Propulsion/
│       ├── _Index.md
│       ├── Thermodynamics Basics.md
│       ├── Gas Turbine Cycles.md
│       ├── Jet Propulsion.md
│       └── Rocket Propulsion.md
│
├── 03 - DAILY TRACKER/
│   └── YYYY-MM-DD.md                   ← One log per study day
│
├── 04 - PYQs/
│   ├── By Year/
│   │   ├── 2024/
│   │   ├── 2023/
│   │   ├── 2022/
│   │   ├── 2021/
│   │   └── 2020/
│   └── By Subject/
│       ├── Mathematics PYQs.md
│       ├── Aerodynamics PYQs.md
│       ├── Structures PYQs.md
│       ├── Flight Mechanics PYQs.md
│       ├── Propulsion PYQs.md
│       └── Space Dynamics PYQs.md
│
├── 05 - MOCK TESTS/
│   └── Mock-01.md, Mock-02.md ...
│
├── 06 - FORMULA SHEETS/
│   ├── Engineering Mathematics - Formulas.md
│   ├── Aerodynamics - Formulas.md
│   ├── Structures - Formulas.md
│   ├── Flight Mechanics - Formulas.md
│   ├── Propulsion - Formulas.md
│   └── Space Dynamics - Formulas.md
│
└── 07 - TEMPLATES/
    ├── Topic Note Template.md
    ├── PYQ Analysis Template.md
    ├── Mock Test Review Template.md
    └── Daily Tracker Template.md
```

---

## Naming Conventions
| Item | Convention | Example |
|---|---|---|
| Daily Logs | YYYY-MM-DD.md | 2026-07-27.md |
| Topic Notes | Plain topic name | Linear Algebra.md |
| PYQ files | GATE-AE-YYYY-QNN.md | GATE-AE-2024-Q15.md |
| Mock Tests | Mock-NN.md | Mock-01.md |
| Subject Index | _Index.md | _Index.md |

---

## Core Principle: Link Everything
Every note should link to at least one other note. Connections between topics, PYQs, and formula sheets are what make this a true Second Brain — not just a folder of files.
