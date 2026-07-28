---
type: formula-sheet
subject: Space Dynamics
subject_code: sd
last_updated: 2026-07-27
---

# 🚀 Space Dynamics — Formula Sheet
#type/formula #subject/sd

> **Quick Reference** | Update as you study each topic

---

## 1. Two-Body Problem & Orbital Mechanics

### Fundamental Equations
| Formula | Description |
|---|---|
| $\vec{r} \times \vec{v} = \vec{h}$ | Specific angular momentum |
| $h = r \cdot V_\perp = \sqrt{\mu p}$ | $h$ from orbit parameters |
| $\mu = GM$ | Gravitational parameter (Earth: $3.986 \times 10^{14}$ m³/s²) |
| $r = \frac{p}{1 + e\cos\theta}$ | Orbit equation (conic section) |
| $p = a(1-e^2)$ | Semi-latus rectum |
| $E = -\mu/(2a)$ | Specific orbital energy |

### Orbit Types
| Type | Eccentricity | Energy |
|---|---|---|
| Circular | $e = 0$ | $E < 0$ |
| Elliptical | $0 < e < 1$ | $E < 0$ |
| Parabolic | $e = 1$ | $E = 0$ |
| Hyperbolic | $e > 1$ | $E > 0$ |

**Related Notes:** [[02 - SUBJECTS/Flight Mechanics & Space Dynamics/06.1 - Central Force Motion and Two-Body Problem]]

---

## 2. Kepler's Laws & Orbital Period

| Law | Statement |
|---|---|
| Kepler's 1st | Orbits are conic sections with focus at central body |
| Kepler's 2nd | Equal areas swept in equal times ($h = \text{const}$) |
| Kepler's 3rd | $T^2 \propto a^3$ |

| Formula | Description |
|---|---|
| $T = 2\pi\sqrt{a^3/\mu}$ | Orbital period |
| $v_{circ} = \sqrt{\mu/r}$ | Circular orbit velocity |
| $v_{esc} = \sqrt{2\mu/r}$ | Escape velocity |
| $v_{esc} = \sqrt{2} \cdot v_{circ}$ | Escape vs circular relation |

**Related Notes:** [[02 - SUBJECTS/Flight Mechanics & Space Dynamics/06.2 - Keplerian Conic Orbits and Kepler Laws]], [[02 - SUBJECTS/Flight Mechanics & Space Dynamics/06.3 - Escape Velocity and Energy Requirements]]

---

## 3. Orbit Transfers

### Hohmann Transfer (Most Efficient 2-impulse)
| Formula | Description |
|---|---|
| $a_{transfer} = (r_1 + r_2)/2$ | Semi-major axis of transfer |
| $\Delta v_1 = \sqrt{\mu/r_1}(\sqrt{2r_2/(r_1+r_2)} - 1)$ | First burn (at periapsis) |
| $\Delta v_2 = \sqrt{\mu/r_2}(1 - \sqrt{2r_1/(r_1+r_2)})$ | Second burn (at apoapsis) |
| $t_{transfer} = \pi\sqrt{a_t^3/\mu}$ | Transfer time |

### Bi-elliptic Transfer
- More efficient than Hohmann when $r_2/r_1 > 11.94$

### Plane Change
| Formula | Description |
|---|---|
| $\Delta v = 2v\sin(\Delta i/2)$ | Velocity change for inclination change $\Delta i$ |

**Related Notes:** [[02 - SUBJECTS/Flight Mechanics & Space Dynamics/08.1 - Hohmann Orbital Transfers and Energy Requirements]]

---

## 4. Orbital Elements (COEs)

| Element | Symbol | Description |
|---|---|---|
| Semi-major axis | $a$ | Size of orbit |
| Eccentricity | $e$ | Shape of orbit |
| Inclination | $i$ | Tilt of orbit plane |
| RAAN | $\Omega$ | Right Ascension of Ascending Node |
| Argument of Periapsis | $\omega$ | Orientation of ellipse |
| True Anomaly | $\theta$ or $\nu$ | Position on orbit |

**Related Notes:** [[02 - SUBJECTS/Space Dynamics/04 - Orbital Elements]]

---

## 5. Interplanetary Trajectories

| Concept | Formula/Description |
|---|---|
| Sphere of Influence | $r_{SOI} = a_{planet}(m_{planet}/m_{sun})^{2/5}$ |
| Hyperbolic excess velocity | $v_\infty = \sqrt{v_{sc}^2 - v_{esc}^2}$ |
| Patched Conic method | Split trajectory into SOI segments |

**Related Notes:** [[02 - SUBJECTS/Space Dynamics/05 - Interplanetary Trajectories]]

---

*Last Updated: 2026-07-27 | Full Index: [[02 - SUBJECTS/Space Dynamics/_Index]]*
