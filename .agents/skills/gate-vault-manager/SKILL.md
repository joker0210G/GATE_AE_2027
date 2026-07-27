---
name: gate-vault-manager
description: Rules and instructions for managing the GATE AE 2027 Obsidian vault structure, AI context, daily logs, and tag statuses.
---

# GATE Vault Manager Skill

Use this skill whenever you need to:
- Read or update vault context across sessions.
- Maintain daily study logs in `03 - DAILY TRACKER/`.
- Audit topic status tags (`#status/to-do`, `#status/first-read`, `#status/needs-revision`, `#status/mastered`).
- Update subject `_Index.md` progress trackers.

## Instructions

1. **AI Context Maintenance:**
   - Always open `AI_CONTEXT.md` first.
   - After modifying notes or performing study sessions, append a log entry to `## 🧠 SESSION LOG (Most Recent First)`.
   - Update `## 📋 CURRENT NEXT ACTIONS` for the user.

2. **Daily Log Creation:**
   - When user finishes a study day, ensure `03 - DAILY TRACKER/YYYY-MM-DD.md` is populated using `07 - TEMPLATES/Daily Tracker Template.md`.
   - Update cumulative progress counters.

3. **Status Tag Synchronization:**
   - When a note is read for the first time: set `#status/first-read`.
   - When PYQs are practiced with errors: set `#status/needs-revision`.
   - When PYQs are solved with ≥80% accuracy: set `#status/mastered`.
