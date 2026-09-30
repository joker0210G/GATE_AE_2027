import sys, os, re, yaml
from datetime import datetime, date

WORKSPACE_DIR = r"d:\Workspace\Obsidian\GATE"
ROADMAP_FILE = os.path.join(WORKSPACE_DIR, "01 - ROADMAP", "GATE AE 2027 4-Month Recovery Roadmap (Draft).md")
OUTPUT_YAML = os.path.join(WORKSPACE_DIR, "curriculum.yaml")

with open(ROADMAP_FILE, "r", encoding="utf-8") as f:
    text = f.read()

# Month mapping
month_map = {
    "Oct": (2026, 10),
    "Nov": (2026, 11),
    "Dec": (2026, 12),
    "Jan": (2027, 1),
    "Feb": (2027, 2)
}

curriculum_rows = []

# Regex for each phase
# Phase 1: | D# | Date (Day) | Primary (Apex) | Secondary (Sprint) | Chain/Gate |
# Phase 2: | D# | Date (Day) | Anchor 19:30–21:00 | CT / Harvest |
# Phase 3: | D# | Date (Day) | Primary | Chain/Gate |
# Phase 4: | D# | Date (Day) | Session | Gate |

p1_idx = text.find("### PHASE 1")
p2_idx = text.find("### PHASE 2")
p3_idx = text.find("### PHASE 3")
p4_idx = text.find("### PHASE 4")
p_end = text.find("## §3. Standing Mechanics", p4_idx)

phase_sections = [
    (1, text[p1_idx:p2_idx]),
    (2, text[p2_idx:p3_idx]),
    (3, text[p3_idx:p4_idx]),
    (4, text[p4_idx:p_end])
]

start_date = date(2026, 10, 1)

for phase_num, sec_text in phase_sections:
    lines = sec_text.splitlines()
    for line in lines:
        if not line.startswith("|"):
            continue
        cells = [c.strip() for c in line.split("|")[1:-1]]
        if not cells or not cells[0].isdigit():
            continue
        
        d_num = int(cells[0])
        raw_date = cells[1] # e.g. "Oct 1 (Th)"
        
        # parse month and day
        m = re.match(r"([A-Za-z]{3})\s+(\d+)", raw_date)
        if not m:
            continue
        m_str, d_str = m.group(1), int(m.group(2))
        year, month = month_map[m_str]
        cur_date = date(year, month, d_str)
        iso_date = cur_date.strftime("%Y-%m-%d")
        
        week_num = ((cur_date - start_date).days // 7) + 1
        dow = cur_date.strftime("%a")
        
        # Day type determination
        day_type = "college"
        if dow in ["Sat", "Sun"]:
            day_type = "weekend"
        if cur_date >= date(2026, 12, 16) and cur_date <= date(2027, 1, 3):
            day_type = "break-surge"
        if phase_num == 4:
            if "MOCK" in cells[2] or "CALIBRATION" in cells[2]:
                day_type = "mock"
            elif "teardown" in cells[2].lower() or "repair" in cells[2].lower():
                day_type = "repair"
            elif "REST" in cells[2]:
                day_type = "rest"
            elif "EXAM" in cells[2]:
                day_type = "exam"
            elif "taper" in cells[2].lower():
                day_type = "taper"
        
        row_dict = {
            "d": d_num,
            "date": iso_date,
            "dow": dow,
            "week": week_num,
            "phase": phase_num,
            "day_type": day_type
        }
        
        if phase_num == 1:
            row_dict["apex_topic"] = cells[2]
            row_dict["secondary_topic"] = cells[3]
            chain_gate = cells[4]
            if chain_gate != "—":
                if "CT" in chain_gate or "C" in chain_gate:
                    row_dict["chain_tag"] = chain_gate
                else:
                    row_dict["gate"] = chain_gate
        elif phase_num == 2:
            row_dict["anchor_topic"] = cells[2]
            ct_harvest = cells[3]
            if ct_harvest != "—":
                row_dict["chain_tag"] = ct_harvest
        elif phase_num == 3:
            row_dict["apex_topic"] = cells[2]
            chain_gate = cells[3]
            if chain_gate != "—":
                if "CT" in chain_gate or "C" in chain_gate:
                    row_dict["chain_tag"] = chain_gate
                elif "gate" in chain_gate.lower() or "bar" in chain_gate.lower() or "sync" in chain_gate.lower():
                    row_dict["gate"] = chain_gate
                elif "S" in chain_gate:
                    row_dict["sectional_or_mock"] = chain_gate
        elif phase_num == 4:
            row_dict["session"] = cells[2]
            gate = cells[3]
            if gate != "—":
                row_dict["gate"] = gate
        
        # Holidays
        if iso_date == "2026-11-08":
            row_dict["holiday"] = "Diwali"
        elif iso_date in ["2027-01-14", "2027-01-15"]:
            row_dict["holiday"] = "Pongal"
        elif iso_date == "2027-01-26":
            row_dict["holiday"] = "Republic Day"
            
        curriculum_rows.append(row_dict)

master_yaml_data = {
    "schema_version": "1.0-final",
    "meta": {
        "title": "GATE AE 2027 AIR-1 Master Curriculum",
        "organizer": "IIT Madras",
        "paper": "AE",
        "start_date": "2026-10-01",
        "end_date": "2027-02-06",
        "total_days": len(curriculum_rows),
        "target_score": "84-88 Marks (AIR 1)"
    },
    "operating_point": {
        "attempt_marks": "95-97",
        "accuracy": ">=0.925",
        "negative_drag": "<=1.8 M",
        "tolerance_rule": "4 s.f. universal, MS/MR zero-transcription, no premature rounding"
    },
    "curriculum": curriculum_rows
}

with open(OUTPUT_YAML, "w", encoding="utf-8") as f:
    yaml.dump(master_yaml_data, f, sort_keys=False, allow_unicode=True, default_flow_style=False)

print(f"Successfully generated {OUTPUT_YAML} with {len(curriculum_rows)} contiguous days!")
