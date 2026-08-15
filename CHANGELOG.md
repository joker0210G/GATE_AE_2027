# Changelog

All notable changes to the GATE AE 2027 Obsidian Vault will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.1.0] — 2026-08-15

### 🐛 Fixed & Polished (2/5 Bug Fixes / Enhancements)
- **Matrix Algebra Shortcut Hot-Patch (`02 - SUBJECTS/Engineering Mathematics/01.2 - Matrix Algebra.md`, `06 - FORMULA SHEETS/Engineering Mathematics - Formulas.md`):** Added the Iterated Adjoint Ladder Law shortcut ($\det(\text{adj}^{(k)}(A)) = (\det A)^{(n-1)^k}$) with worked calculation for $3 \times 3$ matrices ($5^4 = 625$), along with the complete 10-second proof for why odd-order real skew-symmetric matrices always have $\det(A) = 0$.
- **KaTeX Multi-Line Invariant Hot-Patch (`AGENTS.md`, `tutor-coach`):** Fixed live chat KaTeX parse error (`Expected 'EOF', got '&'`) triggered by `\begin{aligned}` blocks with ampersands. Established strict rule forbidding `\begin{aligned}` in live chat / notes in favor of standalone `$$ ... $$` lines or bulleted `$ ... $` expressions.

### 🚀 Added
- **Tutor Mode Overhaul — Full Teaching System (`AGENTS.md`, `tutor-coach`):** Upgraded tutor mode from a 4-step "study router + quiz machine" to a 10-step unified Learn-Test-Review system. New steps include: Topic Sequence Anchor (anti-hallucination with `NOW_TEACHING` pointer), 3-Layer Topic Teaching (Intuition → Engineering → GATE Mastery), Comprehension Checkpoints, Doubt Side-Quest Invariant (pause → resolve → auto-restore), and Smart SKIP Protocol (checkpoint-based mastery detection vs backlog routing).
- **Student Commands (`AGENTS.md`, `tutor-coach`):** Added 5 explicit student-controlled commands: `NEXT` (advance topic), `SKIP` (smart skip with checkpoint), `RECAP` (repeat summary), `DERIVE` (on-demand derivation), and natural doubts (auto side-quest).
- **Dynamic Learning DNA Profile (`AI Student Context Template`, `AGENTS.md`):** Added `🧬 Learning DNA` section to student context — a living, free-form observational log (not a rigid table) where AI mines personality signals from every student interaction. Five sub-sections: Observed Preferences, Confidence Calibration, Pacing & Fatigue Patterns, Struggle Signatures, Communication Style. Includes compaction rule (20 most recent per sub-section).
- **Onboard Mode Enhancement (`AGENTS.md`):** Added single open-ended Learning DNA seed question during student onboarding to initialize the personality profile.

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
