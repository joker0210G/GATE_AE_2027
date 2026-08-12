---
name: mock-test-reviewer
description: Detailed instructions for logging, analyzing, and building action plans from GATE AE mock test results.
---

# Mock Test Reviewer Skill

Use this skill when processing mock test scores and mistake analyses.

## Workflow

1. **Create Mock Review Note:**
   - File path: `05 - MOCK TESTS/Mock-NN.md`
   - Use template: `07 - TEMPLATES/Mock Test Review Template.md`

2. **Record Score Breakdown:**
   - Fill scores for Section 1 (13m), GA (15m), Section 2 (16m), Section 3 (20m), Section 4 (18m), Section 5 (18m). Total = 100m.

3. **Mistake Classification:**
   - Tag each error: `Conceptual`, `Formula Forgot`, `Silly Mistake`, `Time Pressure`, `Guessed Wrong`.

4. **Action Item Generation:**
   - Extract top 3 weak concept notes that need revision.
   - Schedule revision in `03 - DAILY TRACKER/` and update subject `_Index.md` tags to `#status/needs-revision`.

5. **Topic & Sectional Mock Test Creation Standards:**
   - **5-Tier Hardness Hierarchy:**
     - **Level 1 (Novice):** Basic definitions, direct formula substitutions, 1 Mark each.
     - **Level 2 (Easy-Medium):** Standard GATE 1-Mark single-concept problems.
     - **Level 3 (Medium):** Core GATE 2-Mark multi-step calculations and derivations.
     - **Level 4 (Tough):** Advanced GATE 2-Mark tricky questions, geometry, and parameter tests.
     - **Level 5 (Challenger):** IIT Madras rank booster conceptual/abstract questions.
   - **Collapsible Solution Standard:** Every question must have an interactive `> [!faq]- 🔍 View Solution & Detailed Explanation` block with correct answer, key formula, step-by-step math, and exam trap alert.
   - **Diagnostic Scorecard:** Include score distribution and self-evaluation benchmark table at the end.
