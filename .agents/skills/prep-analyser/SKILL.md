---
name: prep-analyser
description: Conducts deep telemetry diagnostics on student preparation data in journals/.
---

# 📊 GATE AE Prep Analyser & Telemetry Skill

Use this skill when the student triggers `mode: analyse` ("Analyse my prep", "Where do I stand?", "Telemetry report").

---

## 🔍 Data Harvesting Workflow
1. Read `journals/AI_STUDENT_CONTEXT.md` (Student profile, current phase, session log).
2. Read all available `journals/YYYY_MM_DD.md` files in the vault.
3. Extract metrics across all PYQs, mock tests, and daily study logs.

---

## 📊 Telemetry Metrics & Calculation Rules

### 1. Accuracy & Score Telemetry
- **Overall Accuracy:** $\text{Accuracy \%} = \frac{\text{Total Correct}}{\text{Total Attempted}} \times 100\%$
- **NAT vs MCQ Split:** Compare accuracy on Numerical Answer Type (NAT - no negative marking) vs Multiple Choice Questions (MCQ - negative marking).
- **Negative Marking Drag:** Calculate total marks lost to incorrect MCQs:
  $$\text{Negative Drag} = (\text{Incorrect 1-Mark MCQs} \times 0.33) + (\text{Incorrect 2-Mark MCQs} \times 0.66)$$

### 2. Speed & Endurance Telemetry
- **Avg Speed:** $\text{Avg Time/Q} = \frac{\text{Total Study/Test Minutes}}{\text{Total Questions Solved}}$
- **Time Sinks:** Highlight any topic where average solving time exceeds 4 minutes/question.
- **Fatigue Ratio (Mock Tests):** Compare accuracy in the 1st hour vs 3rd hour of full-length mock attempts.

### 3. 5-Tier Error Taxonomy Breakdown
Categorize all logged mistakes into the 5 error buckets:
- 🔴 **Conceptual Gap:** Topic concept not understood.
- 🟠 **Formula Memory Slip:** Concept known, but wrong/forgotten formula.
- 🟡 **Silly / Calculation Error:** Arithmetic, sign, or unit conversion error.
- 🔵 **Time Pressure Rush:** Rushed or guessed under timer pressure.
- 🟣 **GATE Trap Victim:** Fell for trick options or distractor choices.

### 4. Confidence vs Accuracy Gap (Mindset Meter)
- Compare student's self-reported confidence ("I am sure") vs actual accuracy.
- **Overconfidence Flag:** High confidence on wrong answers (indicates trap susceptibility).
- **Underconfidence Flag:** Low confidence on correct answers (indicates hesitation/slowness).

### 5. Subject ROI Ranking
Rank topics for revision by **ROI Priority Index**:
$$\text{ROI Index} = \text{Official GATE Exam Weightage (\%)} \times (100 - \text{Current Accuracy \%})$$

### 6. AIR Rank & Institute Cutoff Simulator Engine
- Project raw GATE marks: $\text{Projected Marks} = (\text{Overall Accuracy} \times 100) - \text{Negative Drag}$.
- Map to **Normalized GATE Score (out of 1000)**:
  $$S = 350 + (900 - 350) \left( \frac{M - 26.5}{82.0 - 26.5} \right)$$
- Map to **Projected AIR Band**:
  - $\ge 75$ Marks ($S \ge 900$) $\implies$ **AIR 1–10**
  - $65–74$ Marks ($S = 780–890$) $\implies$ **AIR 11–40**
  - $55–64$ Marks ($S = 650–770$) $\implies$ **AIR 41–120**
  - $45–54$ Marks ($S = 520–640$) $\implies$ **AIR 121–300**
  - $35–44$ Marks ($S = 400–510$) $\implies$ **AIR 301–650**
  - $< 35$ Marks ($S < 400$) $\implies$ **AIR > 650**
- Evaluate **Institute Admission & PSU Probability Matrix** (IISc Bangalore, IIT Bombay, IIT Madras, IIT Kanpur, IIT Kharagpur, DRDO RAC, ISRO ICRB, IIST, DIAT).

---

## 📄 Telemetry Report Output Template

```markdown
# 📊 GATE Preparation Telemetry Report

**Student Phase:** Mission __ | **Target Exam:** GATE AE 2027 (IIT Madras)
**Total Questions Analyzed:** __ | **Overall Accuracy:** __%

---

## 📊 1. Performance Telemetry Matrix

| Subject | Accuracy % | NAT Accuracy | MCQ Accuracy | Negative Drag | Time / Question |
|---|---|---|---|---|---|
| Engineering Mathematics | __% | __% | __% | -__ marks | __ min |
| Aerodynamics | __% | __% | __% | -__ marks | __ min |
| Structures | __% | __% | __% | -__ marks | __ min |
| Flight Mechanics & SD | __% | __% | __% | -__ marks | __ min |
| Propulsion | __% | __% | __% | -__ marks | __ min |
| General Aptitude | __% | __% | __% | -__ marks | __ min |

---

## 🎯 2. Error Breakdown Taxonomy

- 🔴 **Conceptual Gaps (__%):** [Key topics needing re-reading]
- 🟠 **Formula Memory Slips (__%):** [Formula sheet gaps]
- 🟡 **Silly / Calculation Errors (__%):** [Unit & sign mistakes]
- 🔵 **Time Pressure Rushes (__%):** [Time management bottlenecks]
- 🟣 **GATE Trap Victims (__%):** [Trick options & NAT rounding traps]

---

## 🏆 3. AIR Rank & Institute Cutoff Prediction Matrix

| Parameter | Projected Current Value | Target AIR < 50 Value |
|---|:---:|:---:|
| **Projected Raw Marks** | **__/100** | **$\ge 65.0$** |
| **Normalized GATE Score** | **__/1000** | **$\ge 780$** |
| **Projected All India Rank (AIR)** | **AIR __–__** | **AIR $\le 40$** |

### 🏛️ Institute Admission & PSU Recruitment Probabilities:
- 🟢 **High Probability (Safe / Direct Offer):** [Institutes e.g. IIST / DIAT / IIT Kharagpur]
- 🟡 **Moderate Probability (Interview Target):** [Institutes e.g. IIT Madras / IIT Kanpur / IIT Bombay TA]
- 🔴 **Reach / Gap to Close (+__ Marks Needed):** [Institutes e.g. IISc Bangalore / DRDO RAC Scientist-B]

---

## ⏱️ 4. 3-Hour Full-Mock Endurance & Fatigue Telemetry

- **Hour 1 Accuracy (Fresh Baseline):** __% (Avg Time/Q: __ min)
- **Hour 2 Accuracy (Core Technicals):** __% (Avg Time/Q: __ min)
- **Hour 3 Accuracy (Fatigue Zone):** __% (Avg Time/Q: __ min)
- **Accuracy Decay (H1 $\to$ H3):** __% (Threshold: $\le 10\%$)
- **Fatigue Degradation Index ($FDI$):** __% ([🟢 Optimal <25% / 🟡 Moderate 25-45% / 🔴 Critical >45%])
- **Endurance Diagnosis & Pacing Fix:** [Specific time-cap and micro-reset advice from 00 - META/GATE 3-Hour Full-Mock Endurance & Fatigue Protocol.md]

---

## 🚀 5. Highest-ROI Action Plan (Rank Boosters)

1. 🔥 **Top Priority:** [Topic Name] — *ROI Index: __* (Fixing this gains ~__ marks)
2. ⚡ **Second Priority:** [Topic Name] — *ROI Index: __*
3. 🎯 **Third Priority:** [Topic Name] — *ROI Index: __*

---

## 📅 6. Roadmap Pacing Status
- **Roadmap Position:** [Ahead / On-Track / Behind]
- **Next Recommended Action:** [Specific Tutor or Mock Mode instruction]
```
