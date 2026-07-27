# 🏷️ Tagging & Linking System
#type/meta

---

## The Tagging System

Tags are organized into 4 namespaces. Always use the `namespace/value` format.

---

### 1. Status Tags — Track Your Mastery
| Tag | Meaning | When to Use |
|---|---|---|
| `#status/to-do` | Not yet studied | Default tag when creating a new topic note |
| `#status/first-read` | Read once | After your first read-through of a topic |
| `#status/needs-revision` | Understood but shaky | After attempting PYQs and getting some wrong |
| `#status/mastered` | Fully confident | Can solve PYQs on this topic consistently |

> **Rule:** Every topic note MUST have exactly ONE status tag. Update it after each study session.

---

### 2. Subject Tags — Identify the Domain
| Tag | Subject |
|---|---|
| `#subject/math` | Engineering Mathematics |
| `#subject/ga` | General Aptitude |
| `#subject/fm` | Flight Mechanics |
| `#subject/sd` | Space Dynamics |
| `#subject/aero` | Aerodynamics |
| `#subject/struct` | Structures |
| `#subject/prop` | Propulsion |

---

### 3. Type Tags — Identify the Note Kind
| Tag | Note Type |
|---|---|
| `#type/topic-note` | Core subject topic notes |
| `#type/pyq` | Previous year question analysis |
| `#type/mock-test` | Mock test review |
| `#type/formula` | Formula sheets |
| `#type/daily-log` | Daily study tracker |
| `#type/meta` | Vault meta files (like this one) |

---

### 4. Phase Tags — Track Preparation Stage
| Tag | Phase |
|---|---|
| `#phase/1-foundation` | Phase 1 (Jul–Aug 2026) |
| `#phase/2-core1` | Phase 2 (Sep–Oct 2026) |
| `#phase/3-core2` | Phase 3 (Nov 2026) |
| `#phase/4-pyq` | Phase 4 (Dec–Jan 2027) |
| `#phase/5-mock` | Phase 5 (Jan–Feb 2027) |

---

## The Linking System

Obsidian's power comes from `[[bi-directional links]]`. Use them aggressively.

---

### Linking Rules

**1. Topic Note → Formula Sheet**
When writing a topic note, always link to its formula sheet:
```
For key equations, see [[Aerodynamics - Formulas]]
```

**2. Topic Note → Related Topics**
Link concepts that share foundations:
```
This builds on [[Potential Flow]] and directly feeds into [[Finite Wing Theory]].
```

**3. PYQ → Source Topic**
When analyzing a PYQ, always link back to the concept it tests:
```
**Concept Tested:** [[Thin Airfoil Theory]] — specifically the lift coefficient formula.
```

**4. Mock Test → Weak Topics**
In a mock test review, link every mistake to its source topic note:
```
**Mistake in Q12:** Confused by boundary layer transition. See [[Boundary Layer]].
Action: Revise [[Boundary Layer]] and attempt [[GATE-AE-2023-Q08]] again.
```

**5. Daily Log → Topics Studied**
In daily logs, link every topic you covered:
```
Studied [[Linear Algebra]] (Eigenvalues section) — updated status to #status/first-read
```

---

## Using Dataview (Power Feature)
Once you install the Dataview plugin, you can create dynamic dashboards.

**Example: Find all topics that need revision**
```dataview
TABLE status, subject
FROM "02 - SUBJECTS"
WHERE contains(tags, "status/needs-revision")
SORT subject ASC
```

**Example: Track weekly study hours**
```dataview
TABLE hours, topics-covered
FROM "03 - DAILY TRACKER"
WHERE date >= date(today) - dur(7 days)
SORT date DESC
```

---

## Golden Rule
> One topic. One note. Many links.
> Never duplicate information. If two topics share a concept, link — don't copy.
