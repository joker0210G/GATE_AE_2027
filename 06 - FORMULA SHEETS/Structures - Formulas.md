---
type: formula-sheet
subject: Structures
subject_code: struct
last_updated: 2026-07-27
---

# 🏗️ Structures — Formula Sheet
#type/formula #subject/struct

> **Quick Reference** | Update as you study each topic

---

## 1. Stress & Strain

| Formula | Description |
|---|---|
| $\sigma = F/A$ | Normal stress |
| $\tau = V Q / (I b)$ | Shear stress in beam |
| $\varepsilon = \Delta L / L$ | Normal strain |
| $\sigma = E \varepsilon$ | Hooke's Law |
| $\tau = G \gamma$ | Shear Hooke's Law |
| $E = 2G(1 + \nu)$ | E, G, ν relation |
| $\varepsilon_{lat} = -\nu \varepsilon_{axial}$ | Poisson's ratio effect |

**Related Notes:** [[02 - SUBJECTS/Structures/01 - Stress and Strain]]

---

## 2. Mohr's Circle

| Quantity | Formula |
|---|---|
| Center | $C = (\sigma_x + \sigma_y)/2$ |
| Radius | $R = \sqrt{[(\sigma_x - \sigma_y)/2]^2 + \tau_{xy}^2}$ |
| Principal stresses | $\sigma_{1,2} = C \pm R$ |
| Max shear stress | $\tau_{max} = R$ |
| Principal angle | $\tan 2\theta_p = 2\tau_{xy}/(\sigma_x - \sigma_y)$ |

**Related Notes:** [[02 - SUBJECTS/Structures/02 - Mohrs Circle]]

---

## 3. Failure Theories

| Theory | Criterion | Use For |
|---|---|---|
| Max Normal Stress | $\sigma_1 \leq \sigma_{ult}$ | Brittle materials |
| Max Shear Stress (Tresca) | $\tau_{max} \leq \sigma_y/2$ | Ductile, conservative |
| Von Mises (Distortion Energy) | $\sigma_{vm} = \sqrt{\sigma_1^2 - \sigma_1\sigma_2 + \sigma_2^2} \leq \sigma_y$ | Ductile, accurate |

**Related Notes:** [[02 - SUBJECTS/Structures/03 - Failure Theories]]

---

## 4. Beams — Bending & Shear

| Formula | Description |
|---|---|
| $M = EI \frac{d^2y}{dx^2}$ | Moment-curvature relation |
| $\sigma_b = M y / I$ | Bending stress |
| $I_{rect} = bh^3/12$ | Second moment of area (rectangle) |
| $I_{circ} = \pi d^4/64$ | Second moment of area (circle) |
| $\tau = VQ/(Ib)$ | Shear stress in beam |
| $Q = A'\bar{y}'$ | First moment of area |

**Related Notes:** [[02 - SUBJECTS/Structures/04 - Beams]]

---

## 5. Torsion

| Formula | Description |
|---|---|
| $\tau = Tr/J$ | Shear stress in shaft |
| $J_{circ} = \pi d^4/32$ | Polar moment (solid circle) |
| $J_{hollow} = \pi(d_o^4 - d_i^4)/32$ | Polar moment (hollow) |
| $\phi = TL/(GJ)$ | Angle of twist |

**Related Notes:** [[02 - SUBJECTS/Structures/05 - Torsion]]

---

## 6. Column Buckling

| Formula | Description |
|---|---|
| $P_{cr} = \pi^2 EI/(Le)^2$ | Euler's buckling load |
| $\sigma_{cr} = \pi^2 E/(Le/r)^2$ | Critical stress |
| $Le = L$ (pin-pin) | Effective length |
| $Le = 2L$ (fixed-free) | Effective length (cantilever) |
| $Le = L/2$ (fixed-fixed) | Effective length |
| $Le = 0.7L$ (fixed-pin) | Effective length |
| $\lambda = Le/r$ | Slenderness ratio |

**Related Notes:** [[02 - SUBJECTS/Structures/06 - Buckling]]

---

## 7. Fatigue

| Concept | Description |
|---|---|
| S-N Curve | Stress vs Cycles to failure |
| Endurance limit $\sigma_e$ | Stress below which infinite life |
| Goodman criterion | $\sigma_a/\sigma_e + \sigma_m/\sigma_{ut} = 1$ |
| Soderberg criterion | $\sigma_a/\sigma_e + \sigma_m/\sigma_y = 1$ |
| Miner's Rule | $\sum n_i/N_i = 1$ (damage accumulation) |

**Related Notes:** [[02 - SUBJECTS/Structures/07 - Fatigue]]

---

## 8. Thin-Walled Structures (Aircraft)

| Formula | Description |
|---|---|
| $\sigma = p r / t$ (hoop) | Thin-walled pressure vessel |
| $\sigma_{axial} = p r / (2t)$ | Axial stress, cylinder |
| Shear flow: $q = \tau \cdot t$ | Shear flow definition |
| Bredt's formula: $q = T/(2A_m)$ | Torsion of closed section |

**Related Notes:** [[02 - SUBJECTS/Structures/08 - Thin Walled Structures]]

---

*Last Updated: 2026-07-27 | Full Index: [[_Index_Structures]]*
