# 🔄 Vault Update & Release Guide

This guide explains:
1. **For Students:** How to safely update your vault without losing any personal study data (`journals/`, personal mock attempts).
2. **For Author / Maintainer:** How to switch to Developer Mode (zero-logging) and cut a clean release.

---

## 🧑‍🎓 1. Student Guide: Updating Your Vault (Lossless Procedure)

Whether you downloaded the vault as a **ZIP file** or cloned it via **Git**, updating your vault is 100% safe and lossless.

### 🤖 Option A: Update via AI Prompt (Recommended)

1. Open your Obsidian vault with your AI assistant (Claude, Gemini/Antigravity, Cursor, ChatGPT).
2. **For GitHub ZIP Users:**
   - Go to [joker0210G/GATE_AE_2027](https://github.com/joker0210G/GATE_AE_2027).
   - Click the green **`<> Code`** button and select **`Download ZIP`**.
   - Extract `GATE_AE_2027-main.zip` to a temporary folder (e.g., `C:\Downloads\GATE_AE_2027-main`).
   - Tell the AI in Obsidian:
     > *"Update my vault from `C:\Downloads\GATE_AE_2027-main`"*
3. **For Git Users :** Tell the AI:
   > *"Update my vault"*


#### What the AI will automatically do:
1. **Backup:** Creates a local timestamped backup of your personal data in `.backup/v<old>_YYYYMMDD_HHMM/`.
2. **Sync Course Files:** Updates shared course notes, formula sheets, master templates, shared daily trackers, and agent skills.
3. **Verify Integrity:** Confirms that all your `journals/` entries, personal weak-area mock attempts, and reflections remain 100% intact.
4. **Summary Report:** Displays a report showing what's new from `CHANGELOG.md`.

---

### 🛠️ Option B: CLI Update Script (Advanced Users)

If you prefer using PowerShell on Windows:
```powershell
.\scripts\update-vault.ps1 -SourcePath "C:\Path\To\Unzipped\GATE_AE_2027_v1.1.0"
```

---

## 🛠️ 2. Author Guide: Developer Mode & Release Packaging

### 🧑‍💻 Developer Mode (`mode: author` / `mode: dev`)
When you are editing or maintaining shared course content, simply tell the AI:
> *"I am author"* or *"Developer mode"*

**Behavior:**
- **Zero Logging:** The AI will NOT touch or log anything to `journals/YYYY_MM_DD.md` or `journals/AI_STUDENT_CONTEXT.md`.
- Enables clean editing of `02 - SUBJECTS/`, `03 - DAILY TRACKER/`, `04 - PYQs/`, `05 - MOCK TESTS/` (shared series), `06 - FORMULA SHEETS/`, `07 - TEMPLATES/`, and `.agents/`.

---

### 🚀 Cutting a Release (`mode: release`)
When you are ready to publish a new version for students:

1. Update `VERSION.md` with the new version tag (e.g., `1.1.0`).
2. Add the release notes in `CHANGELOG.md`.
3. Tell the AI:
   > *"Prepare release v1.1.0"*

#### What the Release Audit does:
1. **Privacy Scan:** Ensures **0 personal student logs** (`journals/`, personal mock attempts) are included in the release.
2. **Package Creation:** Runs `scripts/package-release.ps1 -Version 1.1.0` to generate a clean `GATE_AE_2027_v1.1.0.zip` ready for GitHub / Google Drive.

---

## 📂 Vault Layer Reference

| Vault Path | Description | Released to Students? | Untouched During Updates? |
|---|---|---|---|
| `00 - META/` | Architecture & Guides | ✅ Yes | 🔄 Updated |
| `01 - ROADMAP/` | 6-Month Battle Plan | ✅ Yes | 🔄 Updated |
| `02 - SUBJECTS/` | Technical Notes | ✅ Yes | 🔄 Updated |
| `03 - DAILY TRACKER/` | Shared Study Roadmap | ✅ Yes | 🔄 Updated |
| `04 - PYQs/` | Previous Year Questions | ✅ Yes | 🔄 Updated |
| `05 - MOCK TESTS/` (Shared Series) | Developer Mock Tests | ✅ Yes | 🔄 Updated |
| `05 - MOCK TESTS/` (Personal Mocks) | AI Weak-Area Mocks | ❌ Excluded | 🔒 Preserved Intact |
| `06 - FORMULA SHEETS/` | Formula Sheet Reference | ✅ Yes | 🔄 Updated |
| `07 - TEMPLATES/` | Master Templates | ✅ Yes | 🔄 Updated |
| `.agents/` | AI Agent Skills | ✅ Yes | 🔄 Updated |
| `journals/` | Student Personal Logs | ❌ Excluded | 🔒 Preserved Intact |
| `.backup/` | Local Backups | ❌ Excluded | 🔒 Preserved Intact |
| `VERSION.md` | Version Tracking | ✅ Yes | 🔄 Updated |
| `CHANGELOG.md` | Release Notes | ✅ Yes | 🔄 Updated |
