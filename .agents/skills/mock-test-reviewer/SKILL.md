---
name: mock-test-reviewer
description: Interactive GATE AE Mock Test Engine & Forensic Reviewer for mode: mock.
---

# 📝 GATE AE Mock Test Engine & Forensic Reviewer Skill

Use this skill when running mock tests in `mode: mock` ("Test me on X", "Mock mode", "Mock test").

---

## 🎯 Mock Test Execution Protocol

```
1. SCOPE & TIME CONFIG ──► 2. QUESTION BATCH PRESENTATION (Batches of 10–15)
                                          │
4. FORENSIC SCORECARD & ◄── 3. REASONING & CONFIDENCE CAPTURE
   ERROR TAXONOMY (journals/)
```

---

## 📋 5-Step Execution Guide

### Step 1: Scoped Test Configuration & Setup
1. Determine test scope:
   - **Topic Test:** Single topic (e.g. Linear Algebra, Potential Flow).
   - **Sectional Test:** Entire GATE section (e.g. Aerodynamics 20m).
   - **Full-Length Mock:** 65 Questions / 100 Marks / 3 Hours.
2. Load questions from pre-authored shared mock files in `05 - MOCK TESTS/` (`Mock Series/` or `Topic Tests/`), or generate scoped questions adhering to the 5-Tier Hardness Hierarchy.
3. Confirm time limit and total marks.

### Step 2: Question Presentation, 5-Tier Standard, Trap Spotter & Cross-Pollination Synthesizer
1. Present questions in batches of 10 to 15.
2. Maintain the **5-Tier Hardness Hierarchy**:
   - **Level 1 (Novice):** Basic formula substitutions (1 Mark).
   - **Level 2 (Easy-Medium):** Standard 1-Mark GATE single-concept problems.
   - **Level 3 (Medium):** Core 2-Mark multi-step calculations and derivations.
   - **Level 4 (Tough):** Advanced 2-Mark tricky geometry and parameter tests.
   - **Level 5 (Challenger):** IIT Madras Rank Booster conceptual/abstract questions.
3. **Automatic "Trap Spotter" Invariant (Under the Hood):**
   - Every 10–15 question batch automatically embeds 1–2 **Reverse-Engineering Flawed Solution Trap Questions** alongside standard problems.
   - *Example Prompt:* "Problem: An aspirant calculated the lift coefficient of a cambered airfoil using thin airfoil theory and got $C_l = 2\pi(\alpha - \alpha_0) + 0.5$. Review the 4-step derivation below and pinpoint the exact invalid step/assumption, or verify if it is correct."
4. **Automatic "Cross-Pollination Synthesizer" Invariant (Under the Hood):**
   - In sectional, multi-topic, and full-length mock tests, the engine automatically embeds 2–3 **Multi-Subject Cross-Pollination Hybrid Questions** testing interdisciplinary physics (e.g. *Flight Mechanics + Propulsion*: climb ceiling with inlet ram drag; *Aerodynamics + Gas Dynamics*: wedge shock transition into ramjet diffuser; *Structures + Aerodynamics*: wing divergence under elliptic circulation).
   - Aspirants do not need to prompt "cross-pollination" — it is an organic, integrated element of every mock test.
5. In live AI chat, solutions MUST NOT be included in the question presentation prompt. Withhold solutions completely until after student submits their answers. (Foldable callouts `> [!faq]-` are used exclusively when authoring/saving mock files into `05 - MOCK TESTS/` for Obsidian).

### Step 3: Student Thought Process & Confidence Capture
For each question batch, collect from the student:
- **Answers:** Option selected for MCQs, exact decimal value for NATs.
- **Thought Process / Reasoning:** "I applied Bernoulli's equation at point 1..."
- **Confidence Rating:** `Confident` (80-100%), `Guess` (40-79%), `Stuck` (0-39%).
- **Time Taken:** Duration spent on the batch.

### Step 4: Forensic Scorecard, Distractor Trap Blueprint & 5-Tier Error Taxonomy
Generate a forensic diagnostic scorecard logged into `journals/YYYY_MM_DD.md`:

```markdown
### 📊 Mock Test Scorecard — [Topic / Scope]
- **Score:** __ / __ Marks | **Accuracy:** __%
- **MCQ Performance:** __% (Negative Marking Drag: -__ marks)
- **NAT Performance:** __% (Rounding / Precision Errors: __)

#### 🎯 Distractor Trap Blueprint (IIT Professor Deconstruction):
- **Q1:** Option B = Deg/Rad slip; Option C = Gauge vs Absolute pressure trap.
- **Q2 (Trap Spotter):** Step 3 failed because flow was compressible ($M=0.6$) but incompressible Bernoulli was used.

#### 🎯 Error Taxonomy Breakdown:
- 🔴 **Conceptual Gap:** [Q# & Concept]
- 🟠 **Formula Memory Slip:** [Q# & Formula]
- 🟡 **Silly / Calculation Error:** [Q# & Error details]
- 🔵 **Time Pressure Rush:** [Q# & Time bottleneck]
- 🟣 **GATE Trap Victim:** [Q# & Distractor choice]
```

### Step 5: 3-Hour Endurance & Fatigue Telemetry (For Full-Length Mocks)
For 180-minute full-length mocks, calculate the **3-Block Segmented Performance & Fatigue Degradation Index ($FDI$)**:

```markdown
#### ⏱️ 3-Hour Full-Mock Endurance & Fatigue Telemetry:
| Operational Block | Questions | Accuracy % | Negative Drag | Time / Question |
|---|:---:|:---:|:---:|:---:|
| **Hour 1 (Fresh Baseline)** | Q1–Q20 | __% | -__ marks | __ min |
| **Hour 2 (Core Heavy)** | Q21–Q45 | __% | -__ marks | __ min |
| **Hour 3 (Fatigue Zone)** | Q46–Q65 | __% | -__ marks | __ min |

- **Accuracy Decay (Hour 1 $\to$ Hour 3):** __% (Threshold: $\le 10\%$)
- **Fatigue Degradation Index ($FDI$):** __% ([🟢 Optimal <25% / 🟡 Moderate 25-45% / 🔴 Critical >45%])
- **Pacing Optimization Fix:** [Actionable pacing intervention from 00 - META/GATE 3-Hour Full-Mock Endurance & Fatigue Protocol.md]
```

- Log weak topics and pacing bottlenecks to `journals/AI_STUDENT_CONTEXT.md` for prioritized remediation.

---

## 🔒 Logging Rule
- Pre-authored mock papers live in `05 - MOCK TESTS/` (Shared Course Layer).
- Student attempt logs and score reviews are saved **EXCLUSIVELY in `journals/YYYY_MM_DD.md`** (Private Student Layer).
