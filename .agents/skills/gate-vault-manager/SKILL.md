---
name: gate-vault-manager
description: Manages the GATE AE 2027 vault structure, AI context, daily tracker connective study architecture, and student session logs.
---

# GATE Vault Manager

Use this skill for vault context management, daily logs, concept note authoring, and daily tracker connective study architecture.

## Key File Paths
- **Shared blueprint:** `AI_CONTEXT.md`
- **Shared daily roadmap:** `03 - DAILY TRACKER/YYYY-MM-DD.md` (Pre-authored AIR-1 daily study blueprints)
- **Concept Notes:** `02 - SUBJECTS/<Subject>/`
- **Master Indices:** `02 - SUBJECTS/<Subject>/_Index_<Subject>.md`
- **Student context:** `journals/AI_STUDENT_CONTEXT.md` (Private AI memory & session log)
- **Daily student journals:** `journals/YYYY_MM_DD.md` (Private student log — NOT in 03 - DAILY TRACKER!)
- **All AI rules:** `AGENTS.md`
- **Formula Sheets:** `06 - FORMULA SHEETS/`
- **Templates:** `07 - TEMPLATES/`

## Quick Reference
All behavioral rules (modes, workflows, data preservation, formatting, tagging, maintenance) are defined in `AGENTS.md`. Read that file for complete instructions.

## Mode Rules
- **Mode `author` / `dev` ("I am author" / "Developer mode"):** **ZERO LOGGING.** Skip all updates/creations in `journals/` (`journals/AI_STUDENT_CONTEXT.md` and `journals/YYYY_MM_DD.md`).
- **🕵️ Silent Spy Job / Hot-Patch Protocol:** Triggered in any mode via keywords ("spy", "hot-patch", "patch concept", "fix rendering"). AI performs root-cause diagnosis, patches concept notes (`02 - SUBJECTS/`) or architecture/rule files (`AGENTS.md`, `.agents/`), logs `CHANGELOG.md` `N/5` patch progress, and seamlessly resumes the active student session.
- **Mode `release` ("Prepare release"):** Perform privacy audit verifying 0 personal files are in `journals/`, check `VERSION.md` & `CHANGELOG.md`, and package clean ZIP.
- **Mode `update` ("Update my vault"):** Create timestamped backup of personal data to `.backup/`, update shared course folders (`00-07`, `.agents/`), and verify private log integrity.

---

## 🧭 Daily Tracker Connective Study Architecture Standard
When authoring or updating daily trackers in `03 - DAILY TRACKER/YYYY-MM-DD.md`, the AI MUST enforce complete connective alignment with concept notes:

1. **Top Concept Notes Directory & Roles Table:**
   - Map every relevant concept note to its exact role, specific study window (timestamp), and prerequisite dependencies.
2. **Chronological Study Execution Roadmap (When, What & How):**
   - Provide concrete time breakdown for each block (e.g. 10 min immersion reading $\to$ 5 min closed-book paper derivation $\to$ 5 min formula lock).
   - Explicitly instruct *how* to study (e.g. "Derive Euler-to-Bernoulli on rough paper before opening APEX-4").
   - Define prerequisite order ("Must read Note A before attempting Problem B").
3. **In-Section Guidance Callouts:**
   - Embed `> [!tip]- 📖 How & When to Study [Segment]` callouts inside each Apex segment with direct section anchors (`[[Note#Section]]`).
4. **Diagnostic Problem-to-Note Navigation Map:**
   - In practice sprints (Track A / Track B), embed a diagnostic lookup table directing students to the exact concept note section if stuck for $>2$ minutes.
5. **Mandatory Math Prerequisite Review:**
   - In Engineering Mathematics tracks, allocate an explicit 10-minute reading period to review vector/matrix notes *before* starting numerical sprint timers.

---

## 📐 AIR-1 Concept Note & Formatting Invariants

1. **KaTeX Purity:** NEVER use `\begin{aligned}` or `&` alignment operators. Split multi-line equations into separate standalone `$$ ... $$` blocks.
2. **Script String Purity:** Always use raw string literals (`r"""..."""`) in Python authoring scripts to prevent form-feed (`\x0c`) contamination.
3. **Script Hygiene:** One-off generation or patch scripts in `scripts/` MUST be verified and deleted immediately after execution. Only standing tools (`generate_curriculum_yaml.py`, `package-release.ps1`, `update-vault.ps1`, `update_draft_roadmap.py`) are retained.
4. **TCS Calculator Protocol:** Every multi-step numerical worked example must display explicit Virtual Calculator keystrokes (`[MS]`, `[MR]`, `[M+]`) and official IIT tolerance bands $[V_{\min}, V_{\max}]$.
5. **Foldable Flashcards:** Standard native Obsidian format:
   ```markdown
   > [!question]- 🃏 Flashcard: [Concept Title]
   > **Question:** [State pure question without hints]
   > > [!success]- **Answer & AIR 1 Traps:**
   > > [Analytical Formula / Core Derivation]
   > > ⚠️ **AIR 1 Traps to Watch:** [Unit conventions, Deg/Rad slips, physical validity bounds]
   ```
