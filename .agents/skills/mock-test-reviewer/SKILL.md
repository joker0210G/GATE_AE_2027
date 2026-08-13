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

### Step 2: Question Presentation & 5-Tier Hardness Standard
1. Present questions in batches of 10 to 15.
2. Maintain the **5-Tier Hardness Hierarchy**:
   - **Level 1 (Novice):** Basic formula substitutions (1 Mark).
   - **Level 2 (Easy-Medium):** Standard 1-Mark GATE single-concept problems.
   - **Level 3 (Medium):** Core 2-Mark multi-step calculations and derivations.
   - **Level 4 (Tough):** Advanced 2-Mark tricky geometry and parameter tests.
   - **Level 5 (Challenger):** IIT Madras Rank Booster conceptual/abstract questions.
3. Solutions MUST be hidden using Obsidian foldable callouts:
   ```markdown
   > [!faq]- 🔍 View Solution & Detailed Explanation
   > **Correct Answer:** ...
   > **Key Formula:** $$...$$
   > **Step-by-Step Derivation:** ...
   > **⚠️ Common GATE Trap / NAT Precision Alert:** ...
   ```

### Step 3: Student Thought Process & Confidence Capture
For each question batch, collect from the student:
- **Answers:** Option selected for MCQs, exact decimal value for NATs.
- **Thought Process / Reasoning:** "I applied Bernoulli's equation at point 1..."
- **Confidence Rating:** `Confident` (80-100%), `Guess` (40-79%), `Stuck` (0-39%).
- **Time Taken:** Duration spent on the batch.

### Step 4: Forensic Scorecard & 5-Tier Error Taxonomy
Generate a forensic diagnostic scorecard logged into `journals/YYYY_MM_DD.md`:

```markdown
### 📊 Mock Test Scorecard — [Topic / Scope]
- **Score:** __ / __ Marks | **Accuracy:** __%
- **MCQ Performance:** __% (Negative Marking Drag: -__ marks)
- **NAT Performance:** __% (Rounding / Precision Errors: __)

#### 🎯 Error Taxonomy Breakdown:
- 🔴 **Conceptual Gap:** [Q# & Concept]
- 🟠 **Formula Memory Slip:** [Q# & Formula]
- 🟡 **Silly / Calculation Error:** [Q# & Error details]
- 🔵 **Time Pressure Rush:** [Q# & Time bottleneck]
- 🟣 **GATE Trap Victim:** [Q# & Distractor choice]
```

### Step 5: Speed Shortcuts & NAT Precision Coaching
- Provide 1-minute speed shortcuts for calculation-heavy NAT/MCQ problems.
- Emphasize IIT Madras NAT rounding precision rules (e.g. "round to 2 decimal places: 3.14").
- Log weak topics to `journals/AI_STUDENT_CONTEXT.md` for prioritized revision.

---

## 🔒 Logging Rule
- Pre-authored mock papers live in `05 - MOCK TESTS/` (Shared Course Layer).
- Student attempt logs and score reviews are saved **EXCLUSIVELY in `journals/YYYY_MM_DD.md`** (Private Student Layer).
