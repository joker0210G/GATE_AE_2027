---
type: formula-sheet
subject: Flight Mechanics
subject_code: fm
last_updated: 2026-07-27
---

# ✈️ Flight Mechanics — Formula Sheet
#type/formula #subject/fm

> **Quick Reference** | Update as you study each topic

---

## 1. Standard Atmosphere

| Quantity | Troposphere (0–11 km) | Stratosphere (11–20 km) |
|---|---|---|
| Temperature | $T = T_0 - \lambda h$ | $T = \text{const} = 216.65$ K |
| Lapse rate $\lambda$ | 6.5 K/km | 0 |
| $\rho/\rho_0$ | $(T/T_0)^{g/\lambda R - 1}$ | $e^{-g(h-h_1)/RT_1}$ |

**Key Values:**
- $T_0 = 288.15$ K, $p_0 = 101325$ Pa, $\rho_0 = 1.225$ kg/m³
- $g = 9.81$ m/s², $R = 287$ J/(kg·K), $\gamma = 1.4$

**Related Notes:** [[02 - SUBJECTS/Flight Mechanics/01 - Standard Atmosphere]]

---

## 2. Equations of Motion

| Equation | Description |
|---|---|
| $T - D = W \sin\gamma + m\dot{V}$ | Tangential (along path) |
| $L - W\cos\gamma = mV\dot{\gamma}$ | Normal (perpendicular to path) |
| $T\cos\alpha - D - W\sin\gamma = m\dot{V}$ | Full tangential |

**Steady Level Flight:**
- $T = D$, $L = W$
- $L = \frac{1}{2}\rho V^2 S C_L$, $D = \frac{1}{2}\rho V^2 S C_D$

**Related Notes:** [[02 - SUBJECTS/Flight Mechanics/02 - Equations of Motion]]

---

## 3. Performance

### Range & Endurance
| Parameter | Propeller Aircraft | Jet Aircraft |
|---|---|---|
| Max Range Speed | $V_{(C_L/C_D)_{max}}$ | $V_{(C_L^{1/2}/C_D)_{max}}$ |
| Max Endurance Speed | $V_{(C_L^{3/2}/C_D)_{max}}$ | $V_{(C_L/C_D)_{max}}$ |
| Breguet Range (jet) | $R = \frac{V}{c} \frac{C_L}{C_D} \ln\frac{W_i}{W_f}$ | |

### Climb Performance
| Formula | Description |
|---|---|
| $RC = (T-D)V/W$ | Rate of Climb |
| $\gamma = \arcsin[(T-D)/W]$ | Climb angle |
| Service Ceiling | RC = 30 m/min (100 ft/min) |
| Absolute Ceiling | RC = 0 |

**Related Notes:** [[02 - SUBJECTS/Flight Mechanics/03 - Performance]]

---

## 4. Static Stability

### Longitudinal Static Stability
| Condition | Criterion |
|---|---|
| Statically stable | $C_{m\alpha} < 0$ (negative) |
| Neutral Point (NP) | $C_{m\alpha} = 0$ |
| Static margin | $K_n = (h_n - h) > 0$ |

| Formula | Description |
|---|---|
| $C_m = C_{m0} + C_{m\alpha}\alpha$ | Pitching moment coefficient |
| $C_{m\alpha} = C_{L\alpha,wing}(h - h_{ac}) - V_H a_t (1 - d\varepsilon/d\alpha)$ | Stability derivative |

### Directional & Lateral Stability
- Directional: $C_{n\beta} > 0$ (weathercock stability)
- Lateral: $C_{l\beta} < 0$ (dihedral effect, stable)

**Related Notes:** [[02 - SUBJECTS/Flight Mechanics/04 - Static Stability]]

---

## 5. Dynamic Stability

| Mode | Description | Stability Criterion |
|---|---|---|
| Short Period | Fast, high frequency pitch | Quickly damped — roots have negative real part |
| Phugoid | Slow, altitude-speed exchange | Lightly damped — roots have small negative real part |
| Dutch Roll | Yaw-roll coupled oscillation | Damped |
| Spiral | Slow roll divergence | Can be mildly unstable |
| Roll Subsidence | Pure roll damping | Always stable |

**Related Notes:** [[02 - SUBJECTS/Flight Mechanics/05 - Dynamic Stability]]

---

*Last Updated: 2026-07-27 | Full Index: [[02 - SUBJECTS/Flight Mechanics/_Index]]*
