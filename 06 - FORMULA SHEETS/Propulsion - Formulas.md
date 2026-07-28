---
type: formula-sheet
subject: Propulsion
subject_code: prop
last_updated: 2026-07-27
---

# 🔥 Propulsion — Formula Sheet
#type/formula #subject/prop

> **Quick Reference** | Update as you study each topic

---

## 1. Thermodynamic Fundamentals

| Formula | Description |
|---|---|
| $h = c_p T$ | Specific enthalpy (ideal gas) |
| $c_p - c_v = R$ | Mayer's relation |
| $\gamma = c_p / c_v$ | Specific heat ratio |
| $\eta_{th} = 1 - Q_{rej}/Q_{add}$ | Thermal efficiency |
| $\eta_{thermal,Brayton} = 1 - 1/r_p^{(\gamma-1)/\gamma}$ | Brayton cycle efficiency |

**Related Notes:** [[02 - SUBJECTS/Propulsion/01 - Thermodynamics Review]]

---

## 2. Gas Turbine Engine (Brayton Cycle)

### Ideal Brayton Cycle
| Process | Description |
|---|---|
| 1→2 | Isentropic compression (compressor) |
| 2→3 | Constant pressure heat addition (combustor) |
| 3→4 | Isentropic expansion (turbine) |
| 4→1 | Constant pressure heat rejection |

| Parameter | Formula |
|---|---|
| Pressure ratio | $r_p = p_2/p_1$ |
| Compressor work | $W_c = c_p(T_2 - T_1)$ |
| Turbine work | $W_t = c_p(T_3 - T_4)$ |
| Net work | $W_{net} = W_t - W_c$ |
| Thermal efficiency | $\eta_{th} = 1 - T_1/T_2 = 1 - r_p^{-(\gamma-1)/\gamma}$ |

**Related Notes:** [[02 - SUBJECTS/Propulsion/02 - Gas Turbine Cycles]]

---

## 3. Turbojet Performance

| Parameter | Formula | Description |
|---|---|---|
| Thrust | $F = \dot{m}(V_e - V_0) + (p_e - p_0)A_e$ | Momentum + pressure thrust |
| Specific thrust | $F/\dot{m}$ | Thrust per unit mass flow |
| TSFC | $\dot{m}_f / F$ | Fuel consumption per thrust |
| Propulsive efficiency | $\eta_p = 2V_0/(V_e + V_0)$ | |
| Overall efficiency | $\eta_o = \eta_{th} \cdot \eta_p$ | |
| Specific impulse | $I_{sp} = F/(\dot{m}_f g)$ | |

**Related Notes:** [[02 - SUBJECTS/Propulsion/03 - Turbojet Engines]]

---

## 4. Turbofan Engine

| Parameter | Formula |
|---|---|
| Bypass Ratio | $BPR = \dot{m}_{fan} / \dot{m}_{core}$ |
| Thrust (approx) | $F = \dot{m}_{core}(1+BPR)(V_{e,mix} - V_0)$ |
| Better propulsive eff. | Higher BPR → lower jet velocity → higher $\eta_p$ |

**Related Notes:** [[02 - SUBJECTS/Propulsion/04 - Turbofan Engines]]

---

## 5. Rocket Propulsion

| Parameter | Formula | Description |
|---|---|---|
| Thrust | $F = \dot{m}_e V_e + (p_e - p_a)A_e$ | |
| Effective exhaust velocity | $c = V_e + (p_e-p_a)A_e/\dot{m}$ | |
| Specific impulse | $I_{sp} = F/(\dot{m} g_0) = c/g_0$ | Key performance metric |
| Tsiolkovsky equation | $\Delta V = c \ln(m_0/m_f)$ | Rocket equation |
| Mass ratio | $m_0/m_f = e^{\Delta V/c}$ | |
| Thrust coefficient | $C_F = F/(p_c A_t)$ | |
| Characteristic velocity | $c^* = p_c A_t / \dot{m}$ | |

**Related Notes:** [[02 - SUBJECTS/Propulsion/05 - Rocket Propulsion]]

---

## 6. Nozzle Flow

| Type | Condition | Exit Velocity |
|---|---|---|
| Subsonic nozzle | $p_e > p^*$ | $M_e < 1$ |
| Choked nozzle | $p_e = p^*$, $M_e = 1$ | At throat |
| Overexpanded | $p_e < p_a$ | Shocks outside nozzle |
| Underexpanded | $p_e > p_a$ | Expansion waves |

| Formula | Description |
|---|---|
| $p^*/p_0 = (2/(\gamma+1))^{\gamma/(\gamma-1)}$ | Critical pressure ratio |
| $T^* = 2T_0/(\gamma+1)$ | Critical temperature |

**Related Notes:** [[02 - SUBJECTS/Propulsion/06 - Nozzles]]

---

*Last Updated: 2026-07-27 | Full Index: [[_Index_Propulsion]]*
