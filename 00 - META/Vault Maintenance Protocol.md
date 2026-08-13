---
type: meta
last_updated: 2026-08-13
version: 1.0.0
---

# 🔧 Vault Maintenance Protocol
#type/meta

> **Goal:** Keep the vault clean, linked, and revision-ready at all times.  
> A cluttered vault = a cluttered mind. Maintenance IS part of studying.

---

## ⏰ DAILY Routine (5–10 minutes)

Do these at the END of every study session:

- [ ] **Open** `03 - DAILY TRACKER/YYYY-MM-DD.md` for today
- [ ] **Fill in** study sessions, topics covered, insights, struggles
- [ ] **Update** the status tag on any topic note you studied today
  - e.g., change `#status/to-do` → `#status/first-read`
- [ ] **Add** any new formulas discovered to the subject's formula sheet
- [ ] **Link** any PYQ you analyzed to the concept note
- [ ] **Set** tomorrow's plan in the daily log

**Time required:** ~5 minutes. Never skip this.

---

## 📅 WEEKLY Review (30–45 minutes | Every Sunday)

Do this every Sunday evening:

### Step 1: Review the Week
- [ ] Open all daily tracker logs from the week
- [ ] Count total study hours (did you hit your targets?)
- [ ] List topics covered and their current status

### Step 2: Identify Weaknesses
- [ ] Run a Dataview query (if installed): `WHERE #status/needs-revision`
- [ ] Or manually scan each subject index for 🔲 and 🔁 items
- [ ] List the top 3 weakest areas

### Step 3: Update Student Context & Roadmap
- [ ] Update "Current Phase" in `journals/AI_STUDENT_CONTEXT.md` if phase has changed
- [ ] Update "Next Actions" for the coming week in `journals/AI_STUDENT_CONTEXT.md`
- [ ] *(Note: Never edit `AI_CONTEXT.md` directly during student study sessions — log everything to `journals/` only).*

### Step 4: Plan Next Week
- [ ] Set a weekly goal (e.g., "Complete Aerodynamics Chapters 3–5")
- [ ] Pre-fill Monday–Friday topics in the roadmap view
- [ ] Ensure formula sheets are up to date

### Step 5: Clean Up
- [ ] Check for any orphaned notes (no links in or out)
- [ ] Merge duplicate notes if any
- [ ] Ensure all new topic notes are linked from their subject `_Index`

---

## 🗓️ MONTHLY Review (1–2 hours | Last Sunday of Month)

### Step 1: Phase Assessment
- [ ] Open `01 - ROADMAP/GATE AE 2027 Master Roadmap.md`
- [ ] Check phase milestones — are you on track?
- [ ] If behind: identify which topics to fast-track or postpone

### Step 2: PYQ Analysis
- [ ] Check `04 - PYQs/_PYQ Master Index.md` — how many PYQs analyzed?
- [ ] Identify subjects with low PYQ attempts → increase next month
- [ ] Look for recurring mistake patterns across PYQs

### Step 3: Formula Sheet Health
- [ ] Review each of the formula sheets in `06 - FORMULA SHEETS/`
- [ ] Add any new formulas you encountered this month
- [ ] Star (highlight) the formulas you keep forgetting

### Step 4: Status Tag Audit
Using Dataview (or manual search):
```dataview
TABLE status, subject FROM "02 - SUBJECTS"
SORT subject ASC
```
- How many topics are still at `#status/to-do`?
- How many have reached `#status/mastered`?
- Update plan accordingly

### Step 5: Student Context Compaction
- [ ] Open `journals/AI_STUDENT_CONTEXT.md`
- [ ] If file exceeds 300 lines, compact older sessions into `## 📜 HISTORICAL SESSIONS ARCHIVE SUMMARY` while keeping the 5 most recent sessions intact.

---

## 🛠️ AUTHOR & DEVELOPER MAINTENANCE PROTOCOL

If you are maintaining or updating the vault as the **Author/Developer**:

### 1. Authoring Shared Content (`mode: author`)
- Tell the AI: **"I am author"** or **"Developer mode"**.
- **Zero Logging Rule:** AI will NOT create or update student log files in `journals/`.
- Edit & create shared content in `02 - SUBJECTS/`, `03 - DAILY TRACKER/`, `04 - PYQs/`, `05 - MOCK TESTS/` (shared mocks), `06 - FORMULA SHEETS/`, `07 - TEMPLATES/`, and `.agents/`.

### 2. Pre-Release Audit & Packaging (`mode: release`)
- Tell the AI: **"Prepare release vX.Y.Z"**.
- AI runs privacy audit to ensure **0 personal student log files** (`journals/`, personal mock attempts) are included.
- Update `VERSION.md` and append release notes to `CHANGELOG.md`.
- Generate clean release ZIP (`GATE_AE_2027_vX.Y.Z.zip`) or verify Git release branch status.

### 3. Student Vault Lossless Updates (`mode: update`)
- Instruct students to tell the AI: **"Update my vault"** or **"Update vault from [Path]"**.
- AI creates a timestamped backup in `.backup/`, syncs shared course files, and confirms student private logs remain 100% untouched.

---

## 🚨 Red Flags — Signs Your Vault Needs Attention

| Warning Sign | Action |
|---|---|
| Daily tracker not filled for 3+ days | Fill retroactively or skip with a note; don't abandon |
| Formula sheets not updated in 2+ weeks | Spend 30 min updating them |
| No PYQs added in 2+ weeks | Start PYQ practice immediately |
| Topics all stuck at `#status/first-read` | Must do PYQ practice to advance |
| `journals/AI_STUDENT_CONTEXT.md` not updated in 2 weeks | Update it — LLMs can't help without context |

---

## 🏷️ Keeping Tags Clean

### Allowed Tags (don't create new tag categories)
```
Status:  #status/to-do | #status/first-read | #status/needs-revision | #status/mastered
Subject: #subject/math | #subject/ga | #subject/aero | #subject/struct | #subject/fm | #subject/prop | #subject/sd
Type:    #type/topic-note | #type/pyq | #type/mock-test | #type/formula | #type/daily-log | #type/meta
Phase:   #phase/1-foundation | #phase/2-core1 | #phase/3-core2 | #phase/4-pyq | #phase/5-mock
```

### Never Do
- ❌ Create a topic note outside its subject folder
- ❌ Skip linking a PYQ note to its concept note
- ❌ Leave a note with no tags
- ❌ Duplicate content across notes (link instead!)

---

## 🔗 Linking Best Practices

### Always Link:
1. **Topic Note → Formula Sheet** (in "Key Formulas" section)
2. **Topic Note → Subject Index** (in frontmatter)
3. **PYQ Note → Topic Note** (which concept does this test?)
4. **PYQ Note → Formula Sheet** (which formula was used?)
5. **Daily Log → Topics Covered** (link the actual note)
6. **Mock Test → Topic Notes** (for every wrong answer)

---

*Updated: 2026-08-13 | Version: 1.0.0 | Related: [[00 - META/Vault Architecture]] | [[00 - META/Update & Release Guide]] | [[AGENTS]]*
