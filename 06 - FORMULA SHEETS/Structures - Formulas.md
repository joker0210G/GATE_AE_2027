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

## 🃏 Interactive Foldable Flashcards Deck

> [!question]- 🃏 Flashcard: Bredt-Batho Closed Tube Torsion
> **Question:** For a single-cell closed thin-walled tube with enclosed mean area $A_m$ under torque $T$, what is the shear flow $q$ and the total angle of twist per unit length $d\theta/dx$?
> > [!success]- **Answer & Formula:**
> > 1. **Shear Flow:** $q = \tau(s) \cdot t(s) = \frac{T}{2 A_m}$ (Constant along the perimeter).
> > 2. **Rate of Twist:** $\frac{d\theta}{dx} = \frac{T}{4 A_m^2 G} \oint \frac{ds}{t(s)}$.
> > 
> > ⚠️ **Key Assumption:** Wall thickness $t(s) \ll \text{cross-sectional dimensions}$.

> [!question]- 🃏 Flashcard: Euler Column Buckling Effective Lengths ($L_e$)
> **Question:** State the critical Euler buckling load formula $P_{cr}$ and list the effective lengths $L_e$ for the 4 standard end boundary conditions.
> > [!success]- **Answer & Formula:**
> > $$P_{cr} = \frac{\pi^2 E I}{L_e^2}$$
> > 1. **Both ends pinned:** $L_e = L$ ($P_{cr} = \frac{\pi^2 EI}{L^2}$).
> > 2. **One end fixed, other free (Cantilever):** $L_e = 2L$ ($P_{cr} = \frac{\pi^2 EI}{4L^2}$).
> > 3. **Both ends fixed:** $L_e = 0.5L$ ($P_{cr} = \frac{4\pi^2 EI}{L^2}$).
> > 4. **One fixed, one pinned:** $L_e \approx 0.7L$ ($P_{cr} \approx \frac{2.046 \pi^2 EI}{L^2}$).

> [!question]- 🃏 Flashcard: Shear Center Location of Semicircular Open Channel
> **Question:** For a thin-walled semicircular open section of radius $R$, where is the shear center located relative to the center of the arc?
> > [!success]- **Answer & Formula:**
> > $$e = \frac{4R}{\pi} \approx 1.273 R$$
> > from the center of the semicircle along the axis of symmetry, lying **outside** the physical cross-section!

> [!question]- 🃏 Flashcard: Mohr's Circle Principal Stresses
> **Question:** Given 2D state of stress $(\sigma_x, \sigma_y, \tau_{xy})$, what are the principal stresses $\sigma_{1,2}$ and maximum in-plane shear stress $\tau_{\max}$?
> > [!success]- **Answer & Formula:**
> > $$\sigma_{1,2} = \frac{\sigma_x + \sigma_y}{2} \pm \sqrt{\left(\frac{\sigma_x - \sigma_y}{2}\right)^2 + \tau_{xy}^2}$$
> > $$\tau_{\max,\text{in-plane}} = R = \sqrt{\left(\frac{\sigma_x - \sigma_y}{2}\right)^2 + \tau_{xy}^2}$$

---

*Last Updated: 2026-08-17 | Full Index: [[_Index_Structures]] | [[06 - FORMULA SHEETS/Master Flashcard Hub|Flashcard Hub ↗]]*

