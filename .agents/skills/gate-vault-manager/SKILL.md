---
name: gate-vault-manager
description: Manages the GATE AE 2027 vault structure, AI context, and student session logs.
---

# GATE Vault Manager

Use this skill for vault context management, daily logs, and tag audits.

## Key File Paths
- **Shared blueprint:** `AI_CONTEXT.md`
- **Shared daily roadmap:** `03 - DAILY TRACKER/YYYY-MM-DD.md` (Shared developer 6-month plan)
- **Student context:** `journals/AI_STUDENT_CONTEXT.md` (Private AI memory & session log)
- **Daily student journals:** `journals/YYYY_MM_DD.md` (Private student log — NOT in 03 - DAILY TRACKER!)
- **All AI rules:** `AGENTS.md`
- **Templates:** `07 - TEMPLATES/`


## Quick Reference
All behavioral rules (modes, workflows, data preservation, formatting, tagging, maintenance) are defined in `AGENTS.md`. Read that file for complete instructions.

## Mode Rules
- **Mode `author` / `dev` ("I am author" / "Developer mode"):** **ZERO LOGGING.** Skip all updates/creations in `journals/` (`journals/AI_STUDENT_CONTEXT.md` and `journals/YYYY_MM_DD.md`).
- **🕵️ Silent Spy Job / Hot-Patch Protocol:** Triggered in any mode via keywords ("spy", "hot-patch", "patch concept", "fix rendering"). AI performs root-cause diagnosis, patches concept notes (`02 - SUBJECTS/`) or architecture/rule files (`AGENTS.md`, `.agents/`), logs `CHANGELOG.md` `N/5` patch progress, and seamlessly resumes the active student session.
- **Mode `release` ("Prepare release"):** Perform privacy audit verifying 0 personal files are in `journals/`, check `VERSION.md` & `CHANGELOG.md`, and package clean ZIP.
- **Mode `update` ("Update my vault"):** Create timestamped backup of personal data to `.backup/`, update shared course folders (`00-07`, `.agents/`), and verify private log integrity.

