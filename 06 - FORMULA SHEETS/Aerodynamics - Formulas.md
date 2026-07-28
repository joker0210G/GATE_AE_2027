---
type: formula-sheet
subject: Aerodynamics
subject_code: aero
last_updated: 2026-07-27
---

# ✈️ Aerodynamics — Formula Sheet
#type/formula #subject/aero

> **Quick Reference** | Update as you study each topic

---

## 1. Basic Fluid Mechanics

### Continuity & Flow
| Formula | Description |
|---|---|
| $\rho_1 A_1 V_1 = \rho_2 A_2 V_2$ | Continuity (compressible) |
| $A_1 V_1 = A_2 V_2$ | Continuity (incompressible) |
| $\vec{\nabla} \cdot \vec{V} = 0$ | Incompressible flow condition |

### Bernoulli's Equation
| Formula | Description |
|---|---|
| $p + \frac{1}{2}\rho V^2 + \rho g h = \text{const}$ | Along a streamline (incomp.) |
| $p_0 = p + \frac{1}{2}\rho V^2$ | Stagnation pressure |
| $q = \frac{1}{2}\rho V^2$ | Dynamic pressure |

**Related Notes:** [[02 - SUBJECTS/Aerodynamics/01 - Fluid Mechanics Basics]]

---

## 2. Potential Flow & Airfoil Theory

| Formula | Description |
|---|---|
| $c_l = 2\pi(\alpha - \alpha_{L=0})$ | Thin airfoil lift coefficient |
| $c_{m,c/4} = 0$ | Moment at quarter chord (thin airfoil) |
| $c_{d,i} = \frac{C_L^2}{\pi e AR}$ | Induced drag coefficient |
| $C_L = a_0(\alpha - \alpha_{L=0})$ | Lift-curve slope |
| Kutta-Joukowski: $L' = \rho V_\infty \Gamma$ | Lift per unit span |

**Related Notes:** [[02 - SUBJECTS/Aerodynamics/03 - Airfoil Theory]]

---

## 3. Finite Wing Theory

| Formula | Description |
|---|---|
| $AR = b^2/S = b/\bar{c}$ | Aspect Ratio |
| $C_{L_\alpha} = \frac{a_0}{1 + a_0/(\pi e AR)}$ | Finite wing lift slope |
| $C_{D_i} = C_L^2/(\pi e AR)$ | Induced drag |
| $e$ = Oswald efficiency factor | 1.0 for elliptical distribution |

**Related Notes:** [[02 - SUBJECTS/Aerodynamics/04 - Finite Wing Theory]]

---

## 4. Compressible Flow

### Isentropic Relations
| Formula | Description |
|---|---|
| $\frac{p_0}{p} = \left(1 + \frac{\gamma-1}{2}M^2\right)^{\gamma/(\gamma-1)}$ | Isentropic pressure |
| $\frac{T_0}{T} = 1 + \frac{\gamma-1}{2}M^2$ | Isentropic temperature |
| $a = \sqrt{\gamma RT}$ | Speed of sound |
| $M = V/a$ | Mach number |

### Normal Shock Relations
| Formula | Description |
|---|---|
| $M_2^2 = \frac{(\gamma-1)M_1^2 + 2}{2\gamma M_1^2 - (\gamma-1)}$ | Post-shock Mach |
| $\frac{p_2}{p_1} = \frac{2\gamma M_1^2 - (\gamma-1)}{\gamma+1}$ | Static pressure ratio |
| Rankine-Hugoniot relations | Conservation across shock |

### Prandtl-Meyer Expansion
| Formula | Description |
|---|---|
| $\nu(M) = \sqrt{\frac{\gamma+1}{\gamma-1}}\arctan\sqrt{\frac{\gamma-1}{\gamma+1}(M^2-1)} - \arctan\sqrt{M^2-1}$ | P-M function |
| $\theta = \nu(M_2) - \nu(M_1)$ | Turning angle |

**Related Notes:** [[02 - SUBJECTS/Aerodynamics/05 - Compressible Flow]]

---

## 5. Boundary Layer Theory

| Formula | Description |
|---|---|
| $Re = \rho V L / \mu$ | Reynolds number |
| $Re_{cr} \approx 5 \times 10^5$ | Transition Reynolds (flat plate) |
| $\delta \sim x/\sqrt{Re_x}$ | Boundary layer thickness (laminar) |
| $C_f = 0.664/\sqrt{Re_L}$ | Skin friction (laminar, Blasius) |

**Related Notes:** [[02 - SUBJECTS/Aerodynamics/06 - Boundary Layer]]

---

*Last Updated: 2026-07-27 | Full Index: [[_Index_Aerodynamics]]*
