# Changelog

All notable changes to the GATE AE 2027 Obsidian Vault will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased] — Target: v1.1.5

### 🚀 Planned / In Progress
- Continuous pedagogical telemetry refinement and subject module expansions.

---

## [1.1.4] — 2026-08-16

### 🐛 Fixed & Polished
- **Anti-Rushing Invariant Hot-Patch (`AGENTS.md`, `tutor-coach`):** Fixed a systemic failure where the AI violated the Anti-Rushing Invariant by advancing across topics without waiting for an explicit `NEXT` command. The Remedial Gate algorithm now explicitly mandates `HALT EXECUTION` and `LOG the retry` before allowing any topic advancement.
- **Lossless Refactor Restoration (Full Extraction `AGENTS.md`):** Fixed a regression where semantic tagging in v1.1.3 compressed procedural examples. Restored full text fidelity with enhanced XML working-memory tags, preserving KaTeX rules, privacy bounds, and diagnostic workflows.
- **Infinite Mastery Loop & Granular Dissection (`AGENTS.md`, `tutor-coach`):** Rewrote the tutor engine to mandate proactive, granular dissection of daily material into atomic micro-topics with an Infinite Mastery Loop that guarantees concept mastery before advancing.
- **Mandatory AIR-1 Web Search Protocol (`AGENTS.md`, `tutor-coach`):** Upgraded web search to a mandatory pre-teaching requirement. The tutor must autonomously query competitive shortcuts and weave them directly into Layer 3 teaching delivery and remediation loops.
- **Completeness Mandate for Layered Teaching (`AGENTS.md`, `tutor-engine`):** Formulated strict 3-Layer Completeness Criteria: every micro-topic must deliver Layer 1 Intuition (analogies), Layer 2 Engineering Significance (aerospace applications), and Layer 3 GATE Mastery (all formula variants, traps, question types, and step-by-step worked examples).
- **Private Dual-Note Generation Framework (`AGENTS.md`, `07 - TEMPLATES/`):** Codified the standardized architecture for personal dual-note systems (`Fresh` foundational notes with ELI15 intuition and `Recall` densely packed AIR-1 speed cheat sheets) maintaining 1-to-1 matching `## Micro-Topic N:` modular sections.
- **Strict Prompt Editing & Scope Boundary (`AGENTS.md` Rule 5):** Hardened permission boundaries to prevent student study commands from modifying core vault architecture files (`AGENTS.md`, `AI_CONTEXT.md`, `CHANGELOG.md`), strictly isolating personal student prompt overrides to their private context layer.


## [1.1.3] — 2026-08-16

### 🐛 Fixed & Polished
- **30-Point Deep Diagnostic Profiler (`AGENTS.md` Onboard Mode):** Completely overhauled the AI Onboarding mode. Replaced the superficial single open-ended question with a rigorous, comprehensive 30-question diagnostic interview (chunked into 5 rapid-fire phases: Academic Baseline, Cognitive Processing, Memory Retention, Pacing/Fatigue, and Mindset/Goal). This guarantees the tutor extracts a highly precise `Learning DNA` profile for every new student, fully customizing the tutoring style from Day 1.
- **AIR-1 Mastery Standard (Warmup Remediation):** Fixed a critical pedagogical flaw where the AI passively graded diagnostic warmup gaps (e.g., forgotten formulas) and deferred them to later topic blocks instead of immediately closing the gap. Updated `AGENTS.md` and `AI_STUDENT_CONTEXT.md` to enforce rigorous immediate verification: if an error occurs during the warmup, the tutor must immediately pause, re-teach the concept (Layer 1+3), and verify with a retry question before formulating the Daily Flight Plan.
- **Generic Private Note Mechanism (3-Tier Alignment):** Fixed an architectural flaw where personalized note styles (like commute notes) were hardcoded into the global AI layer. Introduced a robust 3-Tier mechanism: `AGENTS.md` (Layer 1) triggers the note generation universally; `AI_CONTEXT.md` (Layer 2) enforces the privacy mechanism to save strictly to `journals/Private Notes/`; and `AI_STUDENT_CONTEXT.md` (Layer 3) dictates the actual formatting (e.g., "Fresh & Recall" vs "Visual Mindmaps") based on the individual student's Learning DNA. This ensures the vault release supports deep personalization for any student.
- **Antigravity-Native System Prompt Architecture (`AGENTS.md`):** Completely refactored the formatting and structure of `AGENTS.md` to perfectly align with Google Antigravity's cognitive processing model. Replaced dense paragraphs with strict XML-style semantic tagging (e.g., `<tutor_engine>`, `<interaction_modes>`), explicit algorithmic pseudo-code for complex decision trees (like the Smart SKIP Protocol and Post-Blitz Mastery Gate), and strictly enforced constraint keywords (`MUST`, `NEVER`). This ensures zero hallucinations and flawless procedural adherence across all advanced AI models, while maintaining 100% of the original pedagogical logic.
- **Antigravity-Native Student Profile Architecture (`AI_STUDENT_CONTEXT.md`):** Deeply refactored the personal student context file to perfectly align with Google Antigravity's cognitive model. Wrapped all sections in strict XML semantic tags (`<learning_dna>`, `<custom_ai_overrides>`, etc.) for flawless working-memory encapsulation. Translated the student's 30-Point Profiler answers into strict, immutable `[DIRECTIVE]` tags (e.g., `[MASTERY_VALIDATION]`, `[PACING_FATIGUE]`, `[TEACHING_STYLE]`) so that the AI rigorously obeys the student's brutal commute constraints, constant self-doubt, 12-hour memory decay rate, and AIR-1 exam goals.
- **Topper Web Search Alignment (`AGENTS.md`, `tutor-coach`):** Updated the Autonomous Content Gap Detection (Auto-Trigger Web Search) protocol to explicitly search for "GATE topper shortcuts", "under 1-minute lesser time methods", and "topper notes key points". This ensures the vault is hot-patched with the absolute fastest competitive exam tricks, avoiding slow, standard textbook proofs.
- **Strict Prompt Editing Authorization (`AGENTS.md`):** Fixed an architectural vulnerability where students in active study modes could accidentally or intentionally request modifications to core AI instruction files (`AGENTS.md`, `AI_CONTEXT.md`) and the `CHANGELOG.md`. Added a strict directive that blocks any direct edits to these files unless the student explicitly switches to `author`/`dev` mode. (Students may still freely edit their personal `journals/AI_STUDENT_CONTEXT.md` in any mode).
---

## [1.1.2] — 2026-08-16

### 🐛 Fixed & Polished
- **Isolated Matrix Environment Invariant (`AGENTS.md`):** Fixed a KaTeX multiline truncation error (`Expected & or \\ or \cr or \end at end of input`) caused by chaining trailing relation operators (`\implies`) and text notes on subsequent lines inside a single `$$ \begin{bmatrix} ... \end{bmatrix} ... $$` display math block. Established rule isolating matrix blocks in their own dedicated display math lines.
- **2x2 Cross-Pivot Row Echelon Method Documentation (`01.3.1 - Rank of a Matrix.md`, `01.3 - Systems of Linear Equations.md`, `06 - FORMULA SHEETS/Engineering Mathematics - Formulas.md`):** Documented the fraction-free Bareiss 2x2 Cross-Pivot method ($a_{ij}' = a_{11}a_{ij} - a_{i1}a_{1j}$) with full visual formula, step-by-step worked examples for square and augmented matrices, and speed benchmarks.
- **Autonomous Note-Evolution & 3D Geometry Hot-Patch (`AGENTS.md`, `tutor-coach`, `01.1 - Vector Algebra.md`, `06 - FORMULA SHEETS/Engineering Mathematics - Formulas.md`):** Added a core protocol requiring the tutor to take complete pedagogical ownership when a student indicates a formula/concept was missing from notes or referred online. Added full Section 6 to `01.1 - Vector Algebra.md` and formula sheets covering 3D Lines and Planes geometry (Point-to-Plane, Point-to-Line, Skew Lines Distance, and Plane-Line Angles).
- **Active Tutoring Protocols — Real Tutor Behavior (`AGENTS.md`, `tutor-coach`):** Fixed three systemic defects where the AI was acting as a passive logging machine instead of an adaptive private tutor:
  1. **Active Weakness Mining (Step 0):** AI now silently extracts student's weakness patterns from `Struggle Signatures`, `Cumulative Error Taxonomy`, and `TOP ROI RANK-BOOSTER WEAK TOPICS` at session start and builds a Stealth Remediation Target List.
  2. **Zero-Repetition Invariant & Stealth Weakness Remediation (Step 5):** All checkpoint and practice questions must be freshly generated (never recycled from mock banks or past journals). AI must covertly embed 2–3 weakness-targeting questions per batch, blended naturally without announcing it.
  3. **Active Telemetry Update (Step 6):** After forensic review, AI must immediately recalculate and update `Cumulative Error Taxonomy`, `Struggle Signatures`, `TOP ROI RANK-BOOSTER WEAK TOPICS`, and `Cumulative Performance` in real-time, making the student context a living diagnostic dashboard.
- **"I Don't Know" = Teaching Failure Protocol & Post-Blitz Mastery Gate (`AGENTS.md`, `tutor-coach`):** Critical fix for the most dangerous defect — the tutor was passively grading "0 marks" and suggesting to advance to the next topic even when the student hadn't mastered the current one. Three new invariants:
  1. **Teaching Failure Ownership:** When a student says "I don't know", the AI must own the gap ("This is on me"), re-teach the concept immediately, give a retry question, and hot-patch vault notes if the formula was missing. ≥3 "I don't know" answers triggers emergency re-teaching mode.
  2. **Auto-Trigger Web Search:** Content gap detection now fires automatically during forensic review without needing "spy" keywords. Any 0-score on formula-dependent questions triggers autonomous web search + vault hot-patching.
  3. **Post-Blitz Mastery Gate:** ≥80% = may advance. 50–79% = re-teach failed concepts + retry. <50% = full re-teach from scratch. The AI must NEVER say "type NEXT to begin [next topic]" if mastery gate isn't cleared.

---

## [1.1.1] — 2026-08-15

### 🐛 Fixed & Polished (7 Post-v1.1.0 Hot-Patches & Invariants)
- **KaTeX Multi-Line Invariant Hot-Patch (`AGENTS.md`, `tutor-coach`):** Fixed live chat KaTeX parse error (`Expected 'EOF', got '&'`) triggered by `\begin{aligned}` blocks with ampersands. Established strict rule forbidding `\begin{aligned}` in live chat / notes in favor of standalone `$$ ... $$` lines or bulleted `$ ... $` expressions.
- **Rank of Adjoint Master Rule Hot-Patch (`02 - SUBJECTS/Engineering Mathematics/01.3.1 - Rank of a Matrix.md`, `06 - FORMULA SHEETS/Engineering Mathematics - Formulas.md`):** Added the 3-case Rank of Adjoint classification rule ($\text{Rank}(\text{adj}(A)) \in \{n, 1, 0\}$) with complete proof and intuition.
- **Diagnostic Status Badge Invariant (`AGENTS.md`, `tutor-coach`):** Fixed inaccurate "Mastered" status tags in the Topic Sequence Anchor when students exhibited mistakes or conceptual gaps. Established calibrated status tags (`✅ [Mastered — 100%]`, `⚠️ [Needs Revision — N Gaps]`, `🔄 [In Progress]`, `⏳ [Pending]`) to preserve forensic honesty and prevent false security.
- **Strict Topic Separation & Remedial Gate (`AGENTS.md`, `tutor-coach`):** Fixed premature auto-advancement where the AI bundled checkpoint diagnosis of Sub-Topic $K$ with the full Layer 1–3 teaching of Sub-Topic $K+1$ in a single message. Established strict separation and remedial retry flow requiring explicit student `NEXT` before advancing the `NOW_TEACHING` pointer.
- **Currency & Raw Dollar Symbol Invariant (`AGENTS.md`):** Fixed a LaTeX parser crash triggered when raw or escaped currency dollar symbols (`$15` or `\$15`) in conversational text examples were misinterpreted by markdown renderers as unclosed math-mode delimiters. Established strict rule forbidding raw dollar symbols in favor of written-out words (e.g., `15 dollars`, `10 Rs`).
- **Mastery-First Pacing & Full 5-Day Curriculum Mapping (`AGENTS.md`, `tutor-coach`):** Fixed incomplete topic anchors and "rushing" anti-pattern where AI advanced across syllabus topics without verifying student comprehension. Anchors now comprehensively map all roadmap sub-topics (D1 to D5 for Linear Algebra) with strict remedial retry gates.
- **Zero-Hint Testing Invariant (`AGENTS.md`, `tutor-coach`):** Strictly eliminated unsolicited hints, formulas, and "Notice that..." clues inside question blocks. All live chat checkpoint and practice problems must simulate unassisted, ruthless GATE exam conditions to develop authentic pattern-recognition, with hints permitted strictly on-demand.

---

## [1.1.0] — 2026-08-15

### 🚀 Added
- **Tutor Mode Overhaul — Full Teaching System (`AGENTS.md`, `tutor-coach`):** Upgraded tutor mode from a 4-step "study router + quiz machine" to a 10-step unified Learn-Test-Review system. New steps include: Topic Sequence Anchor (anti-hallucination with `NOW_TEACHING` pointer), 3-Layer Topic Teaching (Intuition → Engineering → GATE Mastery), Comprehension Checkpoints, Doubt Side-Quest Invariant (pause → resolve → auto-restore), and Smart SKIP Protocol (checkpoint-based mastery detection vs backlog routing).
- **Student Commands (`AGENTS.md`, `tutor-coach`):** Added 5 explicit student-controlled commands: `NEXT` (advance topic), `SKIP` (smart skip with checkpoint), `RECAP` (repeat summary), `DERIVE` (on-demand derivation), and natural doubts (auto side-quest).
- **Dynamic Learning DNA Profile (`AI Student Context Template`, `AGENTS.md`):** Added `🧬 Learning DNA` section to student context — a living, free-form observational log (not a rigid table) where AI mines personality signals from every student interaction. Five sub-sections: Observed Preferences, Confidence Calibration, Pacing & Fatigue Patterns, Struggle Signatures, Communication Style. Includes compaction rule (20 most recent per sub-section).
- **Onboard Mode Enhancement (`AGENTS.md`):** Added single open-ended Learning DNA seed question during student onboarding to initialize the personality profile.

### 🐛 Fixed & Polished
- **Matrix Algebra Shortcut Hot-Patch (`02 - SUBJECTS/Engineering Mathematics/01.2 - Matrix Algebra.md`, `06 - FORMULA SHEETS/Engineering Mathematics - Formulas.md`):** Added the Iterated Adjoint Ladder Law shortcut ($\det(\text{adj}^{(k)}(A)) = (\det A)^{(n-1)^k}$) with worked calculation for $3 \times 3$ matrices ($5^4 = 625$), along with the complete 10-second proof for why odd-order real skew-symmetric matrices always have $\det(A) = 0$.

---

## [1.0.1] — 2026-08-14

### 🐛 Fixed & Polished (5/5 Bug Fixes / Enhancements)
- **Live AI Chat Solution Visibility (`AGENTS.md`, `tutor-coach`, `mock-test-reviewer`):** Fixed an issue where Obsidian foldable callouts (`> [!faq]-`) rendered fully expanded as blockquotes in live AI chat interfaces (Antigravity / Web UI), spoiling question solutions immediately. Updated AI rules to withhold solution blocks completely during live chat turns until after the student submits their answers, while preserving foldable callouts strictly for written Obsidian vault notes.
- **Vector Algebra Concept Note Gaps (`02 - SUBJECTS/Engineering Mathematics/01.1 - Vector Algebra.md`):** Hot-patched missing high-yield GATE speed shortcuts based on student telemetry feedback. Added Shortcuts 5 through 12: Gram-Schmidt 30-sec execution formula ($\vec{u}_2 = \vec{v}_2 - \frac{\vec{v}_2 \cdot \vec{u}_1}{\|\vec{u}_1\|^2}\vec{u}_1$), Master Matrix Subspace Dimension Cheatsheet ($n \times n$), parallel planes distance ($d = \frac{|D_2 - D_1|}{\sqrt{A^2+B^2+C^2}}$), Jacobi & Lagrange identities, Frobenius inner product element-wise dot product speedup ($\langle A,B\rangle = \sum a_{ij} b_{ij}$), point-to-plane distance formula, polynomial coordinate vector isomorphism test ($\det \neq 0$), and 3-point plane normal calculation.
- **Date Precision Mandate (`AGENTS.md`, `journals/`):** Established Date Precision Mandate in `AGENTS.md` requiring AI models to cite explicit dates (e.g. `D1 (2026-08-11) & D2 (2026-08-12)`) in session journals instead of relative terms like "yesterday".
- **KaTeX Aligned Environment Parser Error (`AGENTS.md`):** Fixed a KaTeX syntax error (`Expected 'EOF', got '&'`) caused by combining item numbers with leading ampersands (e.g. `1.\ &`) inside `\begin{aligned}` blocks in live AI chat. Formulated KaTeX Alignment Invariant in `AGENTS.md` requiring alignment on relation operators (`&=`) or standalone markdown numbered blocks.
- **Real-Time Journal Logging Latency (`AGENTS.md`, `tutor-coach`):** Fixed an issue where AI models waited until session end to write student test attempts into `journals/YYYY_MM_DD.md`. Established Real-Time Journal Logging Mandate forcing AI to immediately write full question statements, student answers, target answers, time taken, score, and forensic review into `journals/YYYY_MM_DD.md` during the same turn a test/warmup batch is evaluated.
- **Tutor Mode Session Continuity & Unfinished Batch Audit (`AGENTS.md`, `journals/AI_STUDENT_CONTEXT.md`):** Fixed a continuity gap where AI models jumped to new daily tracker topics after a fatigue wrap-up without checking for unattempted questions from previous topic mock test batches. Added an explicit Backlog Audit step in Startup Protocol and `Mode: tutor` context initialization, along with a dedicated `Unfinished Batches & Backlog Tracker` section in `journals/AI_STUDENT_CONTEXT.md`.

---

## [1.0.0] — 2026-08-13

### 🎉 Initial Release
- **Syllabus Coverage:** Complete GATE Aerospace Engineering 2027 syllabus map aligned with IIT Madras requirements.
- **6 Core Subject Areas:** Aerodynamics, Engineering Mathematics, Flight Mechanics & Space Dynamics, General Aptitude, Propulsion, and Structures.
- **5 Master Templates:** AI Student Context, Daily Tracker, Mock Test Review, PYQ Analysis, and Topic Note.
- **5 AI Agent Skills:**
  - `gate-vault-manager`: Handles context management, student tracking, tag cleanliness.
  - `mock-test-reviewer`: 5-tier hardness hierarchy and forensic error reviews.
  - `pyq-analyzer`: Core (≥90%) vs. Special (≤10%) topic PYQ breakdowns.
  - `prep-analyser`: Telemetry diagnostics (NAT vs MCQ accuracy, negative drag, speed/endurance, 5-tier error taxonomy, and ROI Rank Booster priority index).
  - `tutor-coach`: Interactive 4-Pillar GATE coaching (Warmup → Concept Scan → PYQ Batches → Forensic Review → Tomorrow's Bridge).

- **7 Formula Sheets:** Complete formula references across all subjects.
- **6-Month Master Roadmap:** Phased study timeline from Mission 1 to Mission 6.
- **Developer Mode & Lossless AI Updates:** Added `mode: author` for zero-logging vault maintenance and `mode: update` for safe student vault updates.
