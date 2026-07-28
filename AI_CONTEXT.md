# 🤖 AI CONTEXT FILE — GATE AE 2027 VAULT
> **⚠️ IMPORTANT FOR ALL AI ASSISTANTS:**
> This is the FIRST file you must read before doing ANYTHING in this vault.
> After every session, UPDATE the "Current State" and "Session Log" sections below.
> This file is the shared memory between all LLMs working with this vault.
> This file need to log below 4000 tokens (Only for this file,not for other files in the vault)


---

## 📌 VAULT IDENTITY
- **Vault Name:** GATE AE 2027 — Second Brain
- **Vault Path:** D:\Workspace\Obsidian\GATE
- **Owner:** Final Year B.Tech Student (Shared with team on GitHub)
- **Goal:** Crack GATE Aerospace Engineering (AE) 2027 (Exam: February 2027, IIT Madras)
- **Vault Created:** 2026-07-27
- **Privacy & Git Settings:** Core notes & PYQs are shared on Git; Personal journals (`journals/`), private notes (`Private/`), personal daily trackers (`03 - DAILY TRACKER/*.md`), and individual mock test score sheets (`05 - MOCK TESTS/*.md`) are ignored via `.gitignore`.

---

## 👤 USER PROFILE
| Field | Value |
|---|---|
| Academic Status | Final Year B.Tech |
| Exam Target | GATE AE 2027 (IIT Madras) |
| Daily Study Time | 4 hours on weekdays |
| Sharing / Collaboration | GitHub Repository (Shared notes/PYQs/formulas, Private journals/logs) |
| Supported AI Assistants | Claude, OpenAI/ChatGPT/Codex, Antigravity/Gemini, Cursor, Windsurf, VS Code |

---

## 🗺️ CURRENT PHASE
```
Phase: 1 — FOUNDATION
Stage: Vault Privacy, GitHub, MCP REST-API Bridge & Multi-Agent Ready — Ready to Study
Started: 2026-07-27
Target End: 2026-08-31
```

---

## 🧠 SESSION LOG (Most Recent First)

### Session 108 — 2026-07-28
- **AI Used:** Gemini 3.6 Flash (High) / Antigravity
- **Done:**
  - Created `08.1 - Hohmann Orbital Transfers and Energy Requirements.md` — complete zero-to-AIR1 deep-dive note for Hohmann Orbital Transfers, 2-Impulse Delta-V Calculations, Orbit Sizing & Transfer Time under `02 - SUBJECTS/Flight Mechanics & Space Dynamics/`.
  - Covers: Master Mental Model of 2-Impulse Co-Planar Tangential Transfer between co-axial circular orbits ($r_1, r_2$); **Transfer Ellipse Geometry ($a_t = \frac{r_1+r_2}{2}, e_t = \frac{r_2-r_1}{r_1+r_2}$)**; **First Velocity Impulse Derivation ($\Delta v_1 = v_{t1} - v_{c1} = \sqrt{\frac{\mu}{r_1}}(\sqrt{\frac{2r_2}{r_1+r_2}} - 1)$)**; **Second Velocity Impulse Derivation ($\Delta v_2 = v_{c2} - v_{t2} = \sqrt{\frac{\mu}{r_2}}(1 - \sqrt{\frac{2r_1}{r_1+r_2}})$)**; **Total Velocity Increment ($\Delta v_{\text{total}} = \Delta v_1 + \Delta v_2$)**; **Transfer Time Derivation ($t_{\text{transfer}} = \frac{1}{2} T_t = \pi \sqrt{\frac{a_t^3}{\mu}} = \pi \sqrt{\frac{(r_1+r_2)^3}{8\mu}}$)**; **Reversibility Principle** (Inward transfer $r_2 \to r_1$ uses identical total $\Delta v$ and time); **Hohmann vs. Bi-Elliptic 3-Impulse Transfer Comparison** ($r_2/r_1 < 11.94$ limit); 5-Second shortcuts; 1 fully solved GATE LEO-to-GEO numerical example ($r_1 = 6678\text{ km}, r_2 = 42,164\text{ km} \implies a_t = 24,421\text{ km}, v_{c1} = 7.726\text{ km/s}, v_{t1} = 10.152\text{ km/s}, \Delta v_1 = 2.426\text{ km/s}, v_{t2} = 1.608\text{ km/s}, v_{c2} = 3.075\text{ km/s}, \Delta v_2 = 1.467\text{ km/s}, \Delta v_{\text{total}} = 3.89\text{ km/s}, t_{\text{transfer}} = 5.28\text{ hours}$); 4 critical exam traps (Altitude vs Radius $r = R_\oplus + h$, dividing orbital period by 2 for transfer time, scalar sum of impulses, unit consistency $\text{m}$ vs $\text{km}$).
  - Updated `06 - FORMULA SHEETS/Space Dynamics - Formulas.md` with link to `08.1`.
  - Updated `02 - SUBJECTS/Flight Mechanics & Space Dynamics/_Index_Flight Mechanics & Space Dynamics.md` (08.1 marked ✅ under Section 8). **SECTION 8 (HOHMANN TRANSFERS) & ALL CORE AND SPECIAL TOPICS FOR FLIGHT MECHANICS & SPACE DYNAMICS OFFICIALLY COMPLETED! 🏆🎉**

### Session 107 — 2026-07-28
- **AI Used:** Gemini 3.6 Flash (High) / Antigravity
- **Done:**
  - Verified and integrated `07.3 - Decoupling of Lateral-Directional Dynamics and Dynamic Modes.md` — zero-to-AIR1 deep-dive note covering Dutch Roll, Roll Subsidence & Spiral Modes.
  - Confirmed Section 7.3 entries in `06 - FORMULA SHEETS/Flight Mechanics - Formulas.md` and `_Index_Flight Mechanics & Space Dynamics.md`.

### Session 106 — 2026-07-28
- **AI Used:** Gemini 3.6 Flash (High) / Antigravity
- **Done:**
  - Verified and integrated `07.2 - Decoupling of Longitudinal Dynamics and Dynamic Modes.md` — zero-to-AIR1 deep-dive note covering Short Period Pitching Oscillation (SPPO) & Phugoid (Long Period) Modes.
  - Updated bi-directional links between `07.2` and `07.3` in `02 - SUBJECTS/Flight Mechanics & Space Dynamics/`.
  - Confirmed Section 7.2 entries in `06 - FORMULA SHEETS/Flight Mechanics - Formulas.md` and `_Index_Flight Mechanics & Space Dynamics.md`.

### Session 105 — 2026-07-28
- **AI Used:** Gemini 3.6 Flash (High) / Antigravity
- **Done:**
  - Created `07.3 - Decoupling of Lateral-Directional Dynamics and Dynamic Modes.md` — complete zero-to-AIR1 deep-dive note for Decoupling of Lateral-Directional Dynamics, Dutch Roll Mode, Roll Subsidence Mode & Spiral Mode under `02 - SUBJECTS/Flight Mechanics & Space Dynamics/`.
  - Covers: Master Mental Model of Lateral-Directional Dynamic System ($\mathbf{x}_{\text{lat}} = [\Delta v, \Delta p, \Delta r, \Delta \phi]^T$ or $[\Delta \beta, \Delta p, \Delta r, \Delta \phi]^T$); **Primed Derivatives ($L', N'$) & Inertia Coupling ($I_{xz}$)**; 4th-Order Linearized State Matrix & Characteristic Polynomial ($A s^4 + B s^3 + C s^2 + D s + E = 0$); **Dutch Roll Mode** mechanics (coupled out-of-plane yawing/rolling oscillation, 2x2 reduced matrix approximation, **Undamped Natural Frequency $\omega_{n,\text{dr}} \approx \sqrt{N_\beta'} = \sqrt{\frac{q_\infty S b C_{n_\beta}}{I_{zz}}}$ ($\approx 1-3\text{ rad/s}$)**, **Light Damping Ratio $\zeta_{\text{dr}} \approx \frac{-(Y_\beta + N_r')}{2\omega_{n,\text{dr}}}$ ($0.05-0.20$)**); **Roll Subsidence Mode** mechanics (pure 1-DOF rolling motion around velocity axis, **Real Root $s_{\text{roll}} \approx L_p' = \frac{q_\infty S b^2 C_{l_p}}{2 U_0 I_{xx}} < 0$**, **Time Constant $\tau_{\text{roll}} = -1/L_p' \approx 0.1-0.5\text{ s}$**); **Spiral Mode** mechanics (slow bank/yaw/slip motion, real root near origin $s_{\text{spiral}} \approx \frac{g}{U_0}\frac{L_\beta N_r - N_\beta L_r}{N_\beta L_p}$, **Spiral Stability Criterion $\frac{C_{l_\beta} C_{n_r}}{C_{n_\beta} C_{l_r}} > 1.0 \iff E > 0$**); **The Golden Lateral-Directional Stability Conflict** (High dihedral $|C_{l_\beta}|$ improves spiral stability but degrades Dutch roll damping $\implies$ design compromise with mild spiral instability); Master Comparison Matrix (Dutch Roll vs Roll Subsidence vs Spiral); 5-Second shortcuts; 2 fully solved GATE numerical examples ($\omega_{n,\text{dr}} = 2.030\text{ rad/s}, \zeta_{\text{dr}} = 0.197, T = 3.157\text{ s}$; $\tau_{\text{roll}} = 0.25\text{ s}$, spiral ratio $= 2.0 > 1.0$ stable); 4 critical exam traps (Confusing $C_{l_\beta} C_{n_r}$ positive product sign, mode name confusion, dihedral trade-off, roll/yaw inertia indices $I_{xx}$ vs $I_{zz}$).
  - Updated `06 - FORMULA SHEETS/Flight Mechanics - Formulas.md` with Section 7.3 Lateral-Directional Dynamic Modes table.
  - Updated `02 - SUBJECTS/Flight Mechanics & Space Dynamics/_Index_Flight Mechanics & Space Dynamics.md` (07.3 marked ✅ under Section 7 Dynamic Stability). **SECTION 7 (DYNAMIC STABILITY) OFFICIALLY COMPLETED! 🎉**

### Session 104 — 2026-07-28
- **AI Used:** Gemini 3.6 Flash (High) / Antigravity
- **Done:**
  - Created `07.2 - Decoupling of Longitudinal Dynamics and Dynamic Modes.md` — complete zero-to-AIR1 deep-dive note for Decoupling of Longitudinal Dynamics, Short Period Pitching Oscillation (SPPO) & Phugoid Mode under `02 - SUBJECTS/Flight Mechanics & Space Dynamics/`.
  - Covers: Master Mental Model of Longitudinal Dynamic System ($\mathbf{x}_{\text{long}} = [\Delta u, \Delta \alpha, \Delta q, \Delta \theta]^T$); **Dimensional & Non-Dimensional Longitudinal Derivatives ($X_u, X_\alpha, Z_u, Z_\alpha, M_u, M_\alpha, M_{\dot{\alpha}}, M_q$)**; 4th-Order Linearized Matrix Formulation & Characteristic Polynomial ($A s^4 + B s^3 + C s^2 + D s + E = 0$); **Short Period Pitching Oscillation (SPPO)** mechanics ($\Delta u \approx 0$ constant speed assumption, 2x2 reduced matrix, **Undamped Natural Frequency $\omega_{n,sp} \approx \sqrt{-M_\alpha} = \sqrt{\frac{-q_\infty S \bar{c} C_{m_\alpha}}{I_{yy}}}$ ($\omega_{n,sp} \propto U_0$)**, **Heavy Damping Ratio $\zeta_{sp} \approx \frac{-(M_q + M_{\dot{\alpha}} + Z_\alpha/U_0)}{2\omega_{n,sp}}$ ($0.5-0.8$)**); **Phugoid Mode (Long Period)** mechanics ($\Delta\alpha \approx 0$ constant AoA assumption, 2x2 reduced energy matrix, **Lanchester Approximations: $\omega_{n,ph} = \frac{\sqrt{2} g}{U_0} \approx \frac{13.87}{U_0\text{ (m/s)}}$ ($\omega_{n,ph} \propto 1/U_0$)**, **Time Period $T_{ph} = \frac{\sqrt{2}\pi U_0}{g} \approx 0.452 \cdot U_0\text{ (m/s)}$**, **Light Damping Ratio $\zeta_{ph} \approx \frac{1}{\sqrt{2} (L/D)} \approx \frac{0.707}{L/D}$ ($0.04-0.08$)**); Master Comparison Matrix (SPPO vs. Phugoid); 5-Second speed scaling shortcuts; 2 fully solved GATE numerical examples ($\omega_{n,sp} = 3.83\text{ rad/s}, \zeta_{sp} = 0.435$ jet trainer; $\omega_{n,ph} = 0.0578\text{ rad/s}, T_{ph} = 108.7\text{ s}, \zeta_{ph} = 0.0442$ transport); 3 critical exam traps (Speed dependence inversion $\omega_{n,sp} \propto U_0$ vs $\omega_{n,ph} \propto 1/U_0$, AoA constancy in Phugoid, Radians vs degrees in $C_{m_\alpha}$).
  - Updated `06 - FORMULA SHEETS/Flight Mechanics - Formulas.md` with Section 7.2 Longitudinal Dynamic Modes table.
  - Updated `02 - SUBJECTS/Flight Mechanics & Space Dynamics/_Index_Flight Mechanics & Space Dynamics.md` (07.2 marked ✅ under Section 7 Dynamic Stability).

### Session 103 — 2026-07-28
- **AI Used:** Gemini 3.6 Flash (High) / Antigravity
- **Done:**
  - Created `07.1 - Full 6-DOF Aircraft Equations of Motion and Euler Angles.md` — complete zero-to-AIR1 deep-dive note for Full 6-DOF Equations of Motion, Euler Kinematic Rates, Small Disturbance Linearization & Subsystem Decoupling under `02 - SUBJECTS/Flight Mechanics & Space Dynamics/`.
  - Covers: Master Mental Model of 6 Degrees of Freedom ($u, v, w, p, q, r$); Z-Y-X Euler Rotation Sequence ($\psi, \theta, \phi$); **Euler Kinematic Rates Derivation ($\dot{\phi} = p + q\sin\phi\tan\theta + r\cos\phi\tan\theta, \dot{\theta} = q\cos\phi - r\sin\phi, \dot{\psi} = (q\sin\phi + r\cos\phi)\sec\theta$)**; **Gimbal Lock Singularity ($\theta = \pm 90^\circ$)**; Complete 6-DOF Non-Linear Force & Moment Equations; **Small Disturbance Linearization Rules** ($x = X_0 + \Delta x$); **Complete Subsystem Decoupling under Symmetric Trim Flight**: **Longitudinal Subsystem ($\mathbf{x}_{\text{long}} = [\Delta u, \Delta w, \Delta q, \Delta\theta]^T$)** governing in-plane motion, **Lateral-Directional Subsystem ($\mathbf{x}_{\text{lat}} = [\Delta v, \Delta p, \Delta r, \Delta\phi]^T$)** governing out-of-plane motion; 5-Second shortcuts ($\dot{\theta} \approx q, \dot{\phi} \approx p, \dot{\psi} \approx r$ for level flight); 2 fully solved GATE numerical examples ($\dot{\theta} = 0.1061\text{ rad/s}$ in banked climb; state matrix classification); 2 critical exam traps (Body vs Euler rates, Gimbal lock).
  - Updated `06 - FORMULA SHEETS/Flight Mechanics - Formulas.md` with Section 7.1 Euler Kinematics table.
  - Updated `02 - SUBJECTS/Flight Mechanics & Space Dynamics/_Index.md` (07.1 marked ✅ under Section 7 Dynamic Stability). **SPECIAL TOPICS (SECTION 7 DYNAMIC STABILITY) INITIATED!**

### Session 102 — 2026-07-28
- **AI Used:** Gemini 3.6 Flash (High) / Antigravity
- **Done:**
  - Created `06.3 - Escape Velocity and Energy Requirements.md` — complete zero-to-AIR1 deep-dive note for Escape Velocity, Surface/Altitude Scaling, Hyperbolic Excess Velocity & Direction Independence under `02 - SUBJECTS/Flight Mechanics & Space Dynamics/`.
  - Covers: Master Mental Model of Escape Velocity ($v_{\text{esc}} = \sqrt{\frac{2\mu}{r}} = \sqrt{\frac{2GM}{r}}$); Surface Escape Velocity derivation ($v_{\text{esc, surface}} = \sqrt{2 g_0 R} = 11.19\text{ km/s}$ for Earth); **Master Circular vs Escape Speed Relation ($v_{\text{esc}} = \sqrt{2} \cdot v_{\text{circ}} \approx 1.414 v_{\text{circ}}$)**; Impulse required from circular orbit ($\Delta v_{\text{esc}} = (\sqrt{2}-1) v_{\text{circ}} \approx 0.414 v_{\text{circ}}$); **Direction Independence Property** ($v_{\text{esc}}$ is a scalar, launch angle does not affect magnitude); **Hyperbolic Excess Velocity ($v_\infty = \sqrt{v_{\text{burn}}^2 - v_{\text{esc}}^2} \implies v_{\text{burn}} = \sqrt{v_{\text{esc}}^2 + v_\infty^2}$)**; Comparative Solar System Escape Speeds (Sun $617.5\text{ km/s}$, Jupiter $59.5\text{ km/s}$, Earth $11.2\text{ km/s}$, Mars $5.03\text{ km/s}$, Moon $2.38\text{ km/s}$); 5-Second shortcuts; 2 fully solved GATE numerical examples ($LEO\text{ at } 500\text{ km}: v_{\text{circ}} = 7.61\text{ km/s}, v_{\text{esc}} = 10.77\text{ km/s}, \Delta v = 3.15\text{ km/s}$; Mars probe burn $v_{\text{burn}} = 11.50\text{ km/s} \implies v_\infty = 3.39\text{ km/s}$); 3 critical exam traps (Hyperbolic Pythagorean subtraction $v_\infty = \sqrt{v_{\text{burn}}^2 - v_{\text{esc}}^2}$, direction independence, altitude scaling).
  - Updated `06 - FORMULA SHEETS/Space Dynamics - Formulas.md` with links to 06.3.
  - Updated `02 - SUBJECTS/Flight Mechanics & Space Dynamics/_Index.md` (06.3 marked ✅ under Section 6 Space Dynamics).

### Session 101 — 2026-07-28
- **AI Used:** Gemini 3.6 Flash (High) / Antigravity
- **Done:**
  - Created `06.2b - Kepler Laws and Planetary Motion.md` — complete zero-to-AIR1 deep-dive note for Kepler's 3 Laws of Planetary Motion, Newtonian Proofs, Areal Velocity & Geostationary (GEO) Orbit Sizing under `02 - SUBJECTS/Flight Mechanics & Space Dynamics/`.
  - Covers: Master Mental Model of Kepler's 3 Laws vs. Newtonian Gravitation ($F = \frac{GMm}{r^2}$); **Kepler's 1st Law (Ellipses)** Newtonian derivation via Binet equation; **Kepler's 2nd Law (Equal Areas)** derivation from angular momentum conservation ($\frac{dA}{dt} = \frac{h}{2} = \text{const}$); **Perigee vs. Apogee Speed Ratio Shortcut ($\frac{v_p}{v_a} = \frac{r_a}{r_p} = \frac{1+e}{1-e}$)**; **Kepler's 3rd Law (Harmonic Law)** derivation ($T^2 = \frac{4\pi^2}{\mu} a^3 \implies T = 2\pi\sqrt{a^3/\mu}$); **Two-Orbit Period Ratio Shortcut ($\frac{T_1}{T_2} = (\frac{a_1}{a_2})^{3/2}$)**; **Geostationary Orbit (GEO) Derivation** ($T_{\text{GEO}} = 86,164.1\text{ s}$ sidereal day, $a_{\text{GEO}} = 42,164\text{ km}, h_{\text{GEO}} = 35,786\text{ km}, v_{\text{GEO}} = 3.075\text{ km/s}$); 5-Second shortcuts; 2 fully solved GATE numerical examples ($T_B = 15.60\text{ hours}$ for $a_B = 4 a_A$; $e = 0.50, r_p = 6250\text{ km}, r_a = 18,750\text{ km}$ from $v_{\max}/v_{\min} = 3.0$); 3 critical exam traps (Sidereal vs Solar day in GEO, Radius vs Altitude, Speed ratio inverse relation).
  - Updated `02 - SUBJECTS/Flight Mechanics & Space Dynamics/_Index.md` (06.2b marked ✅ under Section 6 Space Dynamics).

### Session 100 — 2026-07-28
- **AI Used:** Gemini 3.6 Flash (High) / Antigravity
- **Done:**
  - Created `06.2 - Keplerian Conic Orbits and Kepler Laws.md` — complete zero-to-AIR1 deep-dive note for Keplerian Conic Orbits, Ellipse Geometry, Kepler's 3 Laws & Kepler's Equation under `02 - SUBJECTS/Flight Mechanics & Space Dynamics/`.
  - Covers: Master Mental Model of Elliptical Orbit Geometry ($r_p = a(1-e), r_a = a(1+e), a = (r_p+r_a)/2, e = (r_a-r_p)/(r_a+r_p), b = a\sqrt{1-e^2}, c = ae, p = a(1-e^2)$); **Kepler's Three Laws** (1st Law Ellipses, 2nd Law Equal Areas $\frac{dA}{dt} = \frac{h}{2}$, **3rd Law Harmonic Law $T^2 = \frac{4\pi^2}{\mu} a^3 \implies T = 2\pi\sqrt{a^3/\mu}$**); Mean Motion $n = \frac{2\pi}{T} = \sqrt{\mu/a^3}$; **The Three Anomalies**: True Anomaly $\theta$, Eccentric Anomaly $E$ ($\cos E = \frac{e+\cos\theta}{1+e\cos\theta}, \tan\frac{E}{2} = \sqrt{\frac{1-e}{1+e}}\tan\frac{\theta}{2}$), Mean Anomaly $M = n(t-t_p)$; **Kepler's Equation ($M = E - e\sin E$, $E$ in radians!)**; Open Trajectories (Parabola $e=1$ & Barker's Equation; Hyperbola $e>1$, $v_\infty = \sqrt{\mu/|a|}$, turn angle $\sin\frac{\delta}{2} = 1/e$); 5-Second shortcuts; 2 fully solved GATE numerical examples (Molniya orbit $a = 26,378\text{ km}, e = 0.7393, T = 11.84\text{ hours}$; Time of flight $E = 50.48^\circ, M = 0.7267\text{ rad}, t-t_p = 1151\text{ s}$); 3 critical exam traps.
  - Updated `06 - FORMULA SHEETS/Space Dynamics - Formulas.md` with links to 06.2.
  - Updated `02 - SUBJECTS/Flight Mechanics & Space Dynamics/_Index.md` (06.2 marked ✅ under Section 6 Space Dynamics). **SECTION 6 (KEPLERIAN ORBITAL MECHANICS) & ALL CORE TOPICS (≥90% OF GATE EXAM) FOR FLIGHT MECHANICS & SPACE DYNAMICS OFFICIALLY COMPLETED! 🎉🏆**

### Session 99 — 2026-07-28
- **AI Used:** Gemini 3.6 Flash (High) / Antigravity
- **Done:**
  - Created `06.1 - Central Force Motion and Two-Body Problem.md` — complete zero-to-AIR1 deep-dive note for Central Force Motion, Two-Body Problem, Three Conservation Laws & Vis-Viva Equation under `02 - SUBJECTS/Flight Mechanics & Space Dynamics/`.
  - Covers: Master Mental Model of Central Force Field ($\vec{F} = -\frac{\mu m}{r^3} \vec{r}$); Reduction of N-Body Problem to **Relative Equation of Motion ($\ddot{\vec{r}} + \frac{\mu}{r^3} \vec{r} = 0$)**; Three Universal Conservation Principles: **Conservation of Specific Angular Momentum ($\vec{h} = \vec{r} \times \vec{v} = \text{const}$, proving motion is strictly planar 2D)**, **Conservation of Specific Mechanical Energy ($\mathcal{E} = \frac{v^2}{2} - \frac{\mu}{r} = -\frac{\mu}{2a}$)**, **Constant Areal Velocity ($\frac{dA}{dt} = \frac{h}{2} = \text{const}$, Kepler's 2nd Law)**; Polar Flight Path Angle Formula ($h = r v \cos\gamma$); **Derivation of Orbit Trajectory Equation ($r(\theta) = \frac{p}{1+e\cos\theta} = \frac{h^2/\mu}{1+e\cos\theta}$)**; **The Vis-Viva Equation ($v^2 = \mu(\frac{2}{r} - \frac{1}{a})$)**; Orbital Classification Matrix (Circular $e=0$, Elliptical $0<e<1$, Parabolic $e=1$, Hyperbolic $e>1$); 5-Second shortcuts ($v_{\text{circ}} = \sqrt{\mu/r}, v_{\text{esc}} = \sqrt{2} v_{\text{circ}}$); 2 fully solved GATE numerical examples ($LEO\text{ speed } v_{\text{circ}} = 7.56\text{ km/s}, v_{\text{esc}} = 10.69\text{ km/s}, \mathcal{E} = -28.56\text{ MJ/kg}$; Elliptical orbit perigee/apogee speeds $v_p = 8.81\text{ km/s}, v_a = 4.11\text{ km/s}$); 3 critical exam traps (Altitude vs. Radius $r = R_\oplus + h_{\text{alt}}$, $\gamma \ne 0$ outside apses, Units of $\mu$).
  - Updated `06 - FORMULA SHEETS/Space Dynamics - Formulas.md` with links to 06.1.
  - Updated `02 - SUBJECTS/Flight Mechanics & Space Dynamics/_Index.md` (06.1 marked ✅ under Section 6 Space Dynamics).

### Session 98 — 2026-07-28
- **AI Used:** Gemini 3.6 Flash (High) / Antigravity
- **Done:**
  - Created `05.2 - Angular Momentum Balance for Rigid Bodies.md` — complete zero-to-AIR1 deep-dive note for Angular Momentum Balance, 3D Rotational Equations of Motion, Moments of Inertia & Euler Gyroscopic Coupling under `02 - SUBJECTS/Flight Mechanics & Space Dynamics/`.
  - Covers: Master Mental Model of Euler's 2nd Law ($\vec{M}_{\text{ext}} = (\frac{d\vec{H}}{dt})_{\text{body}} + \vec{\Omega} \times \vec{H}$); Aircraft Inertia Tensor in Body Axes ($I_{xy}=I_{yz}=0, I_{xz}\ne 0$); **Derivation of Euler 3-Axis Rotational Equations ($L = I_{xx}\dot{p}-I_{xz}\dot{r}+(I_{zz}-I_{yy})qr-I_{xz}pq$, $M = I_{yy}\dot{q}+(I_{xx}-I_{zz})pr+I_{xz}(p^2-r^2)$, $N = I_{zz}\dot{r}-I_{xz}\dot{p}+(I_{yy}-I_{xx})pq+I_{xz}qr$)**; Principal Axes Form ($I_{xz}=0$); **Engine Gyroscopic Precession Moments ($\Delta M = -I_e \omega_e r, \Delta N = +I_e \omega_e q$)**; **Inertial Roll Coupling & Roll Divergence Mechanics ($M_{\text{inertial}} = I_{xz}p^2 + (I_{xx}-I_{zz})pr$)**; Aircraft Inertia Order ($I_{zz} > I_{yy} \gg I_{xx}$); 5-Second shortcuts; 2 fully solved GATE numerical examples ($M = -17,000\text{ N}\cdot\text{m}$ pitch moment required during roll/yaw coupling; $N_{\text{gyro}} = +900\text{ N}\cdot\text{m}$ engine yaw moment); 3 critical exam traps.
  - Updated `06 - FORMULA SHEETS/Flight Mechanics - Formulas.md` with Section 5.2 Angular Momentum & Rotational Equations table.
  - Updated `02 - SUBJECTS/Flight Mechanics & Space Dynamics/_Index.md` (05.2 marked ✅ under Section 5 Rigid Body Dynamics). **SECTION 5 (RIGID BODY DYNAMICS) OFFICIALLY COMPLETED! 🎉**

### Session 97 — 2026-07-28
- **AI Used:** Gemini 3.6 Flash (High) / Antigravity
- **Done:**
  - Created `05.1 - Linear Momentum Balance for Rigid Bodies.md` — complete zero-to-AIR1 deep-dive note for Linear Momentum Balance, 3D Translational Equations of Motion, Transport Theorem & Euler Forces under `02 - SUBJECTS/Flight Mechanics & Space Dynamics/`.
  - Covers: Master Mental Model of Newton's 2nd Law in rotating body-fixed reference frame ($X_b$ noseward, $Y_b$ starboard, $Z_b$ bellyward); **Transport Theorem Derivation ($(\frac{d\vec{V}}{dt})_{\text{inertial}} = (\frac{d\vec{V}}{dt})_{\text{body}} + \vec{\Omega} \times \vec{V}$)**; **3-Axis Acceleration Components ($a_x = \dot{u}+qw-rv, a_y = \dot{v}+ru-pw, a_z = \dot{w}+pv-qu$)**; Complete Force Equations ($X_A+X_T-mg\sin\theta = m a_x, Y_A+Y_T+mg\cos\theta\sin\phi = m a_y, Z_A+Z_T+mg\cos\theta\cos\phi = m a_z$); Special flight simplifications (Level trim, Symmetric longitudinal flight, Pull-up maneuver $a_z = -q V_\infty$, Steady yawing turn); **Wind Axes Conversion & Normal Acceleration ($a_z = V_\infty(\dot{\alpha}-q)$)**; 5-Second shortcuts; 2 fully solved GATE numerical examples ($a_z = -30\text{ m/s}^2, n = 4.06\text{ g}$ pull-up; axial acceleration $\dot{u} = +0.261\text{ m/s}^2$); 3 critical exam traps.
  - Updated `06 - FORMULA SHEETS/Flight Mechanics - Formulas.md` with Section 5.1 Linear Momentum & 3D Translational Equations table.
  - Updated `02 - SUBJECTS/Flight Mechanics & Space Dynamics/_Index.md` (05.1 marked ✅ under Section 5 Rigid Body Dynamics).

### Session 96 — 2026-07-28
- **AI Used:** Gemini 3.6 Flash (High) / Antigravity
- **Done:**
  - Created `04.4c - Stick Force Gradients and Maneuver Points.md` — complete zero-to-AIR1 deep-dive note for Stick Forces, Speed Stability Gradient, Maneuver Points & Artificial Feel Systems under `02 - SUBJECTS/Flight Mechanics & Space Dynamics/`.
  - Covers: Master Mental Model of Stick Force ($F_s = -G H_e = -G q_\infty S_e \bar{c}_e C_h$); Analytical Stick Force Expression in Level Flight; **Speed Stability Gradient Criterion ($\frac{dF_s}{dV} = -\frac{2 G S_e \bar{c}_e}{V_\infty}\left(\frac{W}{S}\right)\left(\frac{C_{h_\delta}}{\bar{V}_H a_t}\right)(h - h_n^*) > 0 \implies h < h_n^*$)**; **Stick-Fixed Maneuver Point ($h_m = h_n + \frac{\rho_\infty g l_t \eta_t \bar{V}_H a_t}{2 (W/S)} > h_n$)** & **Stick-Free Maneuver Point ($h_m^* = h_n^* + \frac{\rho_\infty g l_t \eta_t \bar{V}_H a_t^*}{2 (W/S)} > h_n^*$)**; **Stick Force per 'g' Gradient ($\frac{dF_s}{dn} = -G S_e \bar{c}_e (W/S) (\frac{C_{h_\delta}}{\bar{V}_H a_t^*}) (h_m^* - h) > 0 \implies h < h_m^*$)**; **The Master 5-Point Chord Hierarchy ($\mathbf{h_{ac,wb} < h_n^* < h_n < h_m^* < h_m}$)**; Artificial Feel Systems in Irreversible FBW Aircraft (Q-Feel, Bobweight $\Delta F_s \propto n-1$, Spring Feel); 5-Second shortcuts; 2 fully solved GATE numerical examples ($h_m^* = 0.3788, dF_s/dn = 16.61\text{ N/g}$; $dF_s/dV = +0.196\text{ N/(m/s)}$); 3 critical exam traps.
  - Verified `06 - FORMULA SHEETS/Flight Mechanics - Formulas.md` & updated `02 - SUBJECTS/Flight Mechanics & Space Dynamics/_Index.md` (04.4c marked ✅ under Section 4 Static Stability).

### Session 95 — 2026-07-28
- **AI Used:** Gemini 3.6 Flash (High) / Antigravity
- **Done:**
  - Created `04.4b - Control Surface Hinge Moments and Aerodynamic Balancing.md` — complete zero-to-AIR1 deep-dive note for Control Surface Hinge Moments, Floating Angle, Aerodynamic Balancing & Trim Tabs under `02 - SUBJECTS/Flight Mechanics & Space Dynamics/`.
  - Covers: Master Mental Model of Hinge Moments ($C_h = \frac{H_e}{q_\infty S_e \bar{c}_e}$); Derivatives ($C_{h_\alpha} < 0, C_{h_\delta} < 0, C_{h_{\delta_t}} < 0$); **Floating Angle Derivation ($\delta_{e,\text{float}} = f \cdot \alpha_t = -\frac{C_{h_\alpha}}{C_{h_\delta}} \alpha_t$, $f < 0$)**; **Stick-Free Tail Lift Slope Reduction ($a_t^* = a_t(1 + f \tau_e) < a_t$)**; **Aerodynamic Balancing Methods** (Overhang balance, Horn balance, Internal pressure seal balance, Beveled trailing edge); **Control Tab Mechanics** (Trim tabs, Balance/Geared tabs, Anti-balance tabs, Servo tabs, Spring tabs); **Trim Tab Deflection Equation ($\delta_{t,\text{trim}} = -\frac{C_{h_0} + C_{h_\alpha}\alpha_t + C_{h_\delta}\delta_e}{C_{h_{\delta_t}}}$)**; **Trim Tab Direction Rule** (deflecting tab UP $\delta_t < 0$ forces elevator DOWN $\delta_e > 0$); 5-Second shortcuts; 2 fully solved GATE numerical examples ($f = -0.40, \delta_{e,\text{float}} = -2.4^\circ, a_t^* = 3.276\text{ rad}^{-1}$; trim tab deflection $\delta_{t,\text{trim}} = -9.67^\circ$); 3 critical exam traps.
  - Verified `06 - FORMULA SHEETS/Flight Mechanics - Formulas.md` & updated `02 - SUBJECTS/Flight Mechanics & Space Dynamics/_Index.md` (04.4b marked ✅ under Section 4 Static Stability).

### Session 94 — 2026-07-28
- **AI Used:** Gemini 3.6 Flash (High) / Antigravity
- **Done:**
  - Created `04.5b3 - Wing Sweep and Position Effects on Stability.md` — complete zero-to-AIR1 deep-dive note for Wing Sweep Back, Tip Stall Pitch-Up & High/Low Wing Placement Contributions under `02 - SUBJECTS/Flight Mechanics & Space Dynamics/`.
  - Covers: Master Cross-Axis Stability Matrix for Wing Sweep ($\Lambda$) and Vertical Position (High / Mid / Low) across Pitch ($C_{m_\alpha}$), Roll ($C_{l_\beta}$), and Yaw ($C_{n_\beta}$); **Swept Wing Tip Stall Pitch-Up Mechanism ($\Delta C_m > 0$)** & mitigations (washout twist, fences, saw-tooth LE); **Lift-Dependent Sweep Dihedral Derivation ($C_{l_\beta,\Lambda} \approx -\frac{C_L}{3}\sin 2\Lambda$)**; **Sweep Weathercock Stability ($\Delta C_{n_\beta,\Lambda} \approx \frac{C_L^2}{4\pi AR}\tan^2\Lambda > 0$)**; **Fuselage Flow Bowing Physics** (High wing $+2^\circ \text{ to } +3^\circ \Gamma_{\text{eff}}$ stabilizing; Low wing $-2^\circ \text{ to } -3^\circ \Gamma_{\text{eff}}$ destabilizing); High-wing Low-CG Pendulum Stability; Master Comparison Table; 5-Second shortcuts; 2 fully solved GATE numerical examples ($C_{l_\beta,\Lambda}$ at cruise vs. landing, geometric dihedral sizing for low vs. high wing); 3 critical exam traps.
  - Verified `06 - FORMULA SHEETS/Flight Mechanics - Formulas.md` & updated `02 - SUBJECTS/Flight Mechanics & Space Dynamics/_Index.md` (04.5b3 marked ✅ under Section 4 Static Stability).

### Session 93 — 2026-07-28
- **AI Used:** Gemini 3.6 Flash (High) / Antigravity
- **Done:**
  - Created `04.5b2 - Wing Dihedral and Lateral Stability.md` — complete zero-to-AIR1 deep-dive note for Geometric Wing Dihedral, Strip Theory Derivation & Equivalent Dihedral Effects under `02 - SUBJECTS/Flight Mechanics & Space Dynamics/`.
  - Covers: Master Mental Model of Geometric Dihedral Angle ($\Gamma$) vs. Dihedral Effect ($C_{l_\beta} = \frac{\partial C_l}{\partial \beta} < 0$); Kinematic cross-flow resolution and **Rigorous Strip Theory Integration Derivation** for rectangular wings ($C_{l_\beta,\Gamma} = -\frac{C_{L_\alpha}}{4}\Gamma$) and tapered wings ($C_{l_\beta,\Gamma} = -\frac{C_{L_\alpha}}{4}\left(\frac{1+3\lambda}{1+2\lambda}\right)\Gamma$); Geometric configurations (Simple uniform dihedral, Polyhedral / cranked wings, Inverted gull wings, Winglets, Anhedral $\Gamma < 0$); **The Master Equivalent Dihedral Matrix ($\Gamma_{\text{equiv}} = \Gamma_{\text{geom}} + \Delta \Gamma_{\text{sweep}} + \Delta \Gamma_{\text{position}} + \Delta \Gamma_{\text{tail}}$)**; Stability Trade-Offs: **Spiral Stability Criterion ($\frac{C_{l_\beta} C_{n_r}}{C_{n_\beta} C_{l_p}} > 1.0$) vs. Dutch Roll Instability Risk**; 5-Second shortcuts; 3 fully solved GATE numerical examples ($C_{l_\beta} = -0.1004\text{ rad}^{-1}$ for $5^\circ$ dihedral, tapered wing $C_{l_\beta} = -0.1066\text{ rad}^{-1}$, high-wing swept transport equivalent dihedral $\Gamma_{\text{equiv}} = +4.5^\circ$); 3 critical exam traps.
  - Verified `06 - FORMULA SHEETS/Flight Mechanics - Formulas.md` & updated `02 - SUBJECTS/Flight Mechanics & Space Dynamics/_Index.md` (04.5b2 marked ✅ under Section 4 Static Stability).

### Session 92 — 2026-07-28
- **AI Used:** Gemini 3.6 Flash (High) / Antigravity
- **Done:**
  - Created `04.5b - Lateral Static Stability.md` — complete zero-to-AIR1 deep-dive note for Lateral Static Stability, Dihedral Effect & Cross-Coupling under `02 - SUBJECTS/Flight Mechanics & Space Dynamics/`.
  - Covers: Master Mental Model of Lateral Self-Righting ($C_{l_\beta} = \frac{\partial C_l}{\partial \beta} < 0$, NEGATIVE derivative); Four Primary Sources of Dihedral Effect ($C_{l_\beta} = C_{l_\beta,\Gamma} + C_{l_\beta,\Lambda} + C_{l_\beta,\text{pos}} + C_{l_\beta,v}$): Geometric Dihedral Angle $C_{l_\beta,\Gamma} = -\frac{C_{L_\alpha}}{4}\Gamma$, **Wing Sweep Back $C_{l_\beta,\Lambda} \approx -\frac{C_L}{3}\sin(2\Lambda)$ (Lift-dependent!)**, Wing Vertical Position (High wing stabilizing $+3^\circ \Gamma_{\text{eff}}$, Low wing destabilizing $-3^\circ \Gamma_{\text{eff}}$), Vertical Tail Roll Contribution $C_{l_\beta,v} = -\eta_v V_v a_v (1+d\sigma/d\beta) (z_v/b) < 0$; **Anhedral Angle ($\Gamma < 0$) Purpose** (reduces excessive $|C_{l_\beta}|$ on high-wing swept transports to prevent severe **Dutch Roll** instability); **Cross-Coupling Derivatives**: Roll-due-Yaw rate $C_{l_r} \approx \frac{C_L}{4} > 0$ & Yaw-due-Roll rate $C_{n_p} \approx -\frac{C_L}{8} < 0$ (adverse yaw); Aileron Control Power $C_{l_{\delta_a}} < 0$ & Aileron Reversal Speed $V_R$; 5-Second shortcuts; 2 fully solved GATE numerical examples ($C_{l_\beta} = -0.2178\text{ rad}^{-1}$, induced roll moment $\Delta C_l = +0.0009$); 3 critical exam traps.
  - Updated `06 - FORMULA SHEETS/Flight Mechanics - Formulas.md` with Section 4.1E Dihedral angle, Wing sweep, Wing position, Anhedral, and Cross-coupling formulas.
  - Updated `02 - SUBJECTS/Flight Mechanics & Space Dynamics/_Index.md` (04.5b marked ✅ under Section 4 Static Stability). **SECTION 4 (STATIC STABILITY & CONTROL) OFFICIALLY COMPLETED! 🎉**

### Session 91 — 2026-07-28
- **AI Used:** Gemini 3.6 Flash (High) / Antigravity
- **Done:**
  - Created `04.5a2 - Vertical Tail Position and Size.md` — complete zero-to-AIR1 deep-dive note for Vertical Tail Sizing, Aspect Ratio, Placement & OEI Boundaries under `02 - SUBJECTS/Flight Mechanics & Space Dynamics/`.
  - Covers: Master Mental Model of Three Vertical Tail Sizing Boundaries (Directional Stability $C_{n_\beta,\min}$, Engine Failure OEI $V_{mc}$, Crosswind Landing $\beta_{\text{cross}}$); Vertical Tail Volume Ratio $V_v = \frac{S_v l_v}{S b}$ and longitudinal arm trade-off ($l_v$ vs. $S_v$); Aspect Ratio $AR_v = b_v^2/S_v$ ($1.2-2.0$) & **T-tail Endplate Boost Effect ($AR_{v,\text{eff}} = (1.15-1.30) AR_v$, reducing required tail area by $15\%-25\%$)**; Single Fin vs. **Twin Vertical Fins (High-$\alpha$ wing stalled wake immunity & hangar height limits)**; **Dorsal Fin Vortex Generation (prevents Rudder Lock at $\beta > 15^\circ$)** & **Ventral Fin (maintains $C_{n_\beta} > 0$ at high $\alpha$)**; Analytical sizing equations for Stability, OEI, and Crosswind limits; 5-Second shortcuts; 2 fully solved GATE numerical examples ($S_{v,\text{OEI}} = 9.73\text{ m}^2$, T-tail area reduction to $8.86\text{ m}^2$); 3 critical exam traps.
  - Verified `06 - FORMULA SHEETS/Flight Mechanics - Formulas.md` & updated `02 - SUBJECTS/Flight Mechanics & Space Dynamics/_Index.md` (04.5a2 marked ✅ under Section 4 Static Stability).

### Session 90 — 2026-07-28
- **AI Used:** Gemini 3.6 Flash (High) / Antigravity
- **Done:**
  - Created `04.5a - Directional Static Stability.md` — complete zero-to-AIR1 deep-dive note for Directional Static Stability, Weathercock Effect & Vertical Tail Sizing under `02 - SUBJECTS/Flight Mechanics & Space Dynamics/`.
  - Covers: Master Mental Model of Weathercock Stability ($C_{n_\beta} = \frac{\partial C_n}{\partial \beta} > 0$, POSITIVE derivative); Component Breakdown: Fuselage destabilizing moment $C_{n_\beta,\text{fuse}} < 0$, Swept-back wing stabilizing contribution $\Delta C_{n_\beta,\text{sweep}} \propto C_L^2 \tan^2\Lambda > 0$, **Vertical Tail Primary Stabilizer $C_{n_\beta,v} = \eta_v V_v a_v (1 + d\sigma/d\beta) > 0$**; Vertical Tail Volume Ratio $V_v = \frac{S_v l_v}{S b}$ (CRITICAL: Uses wingspan $b$, NOT chord $\bar{c}$!); Vertical Tail Sizing Benchmarks ($GA 0.03-0.05, Transport 0.06-0.09, Fighter 0.04-0.07$); **Dorsal Fin Purpose** (prevents high-$\beta$ tail stall / rudder lock) & **Ventral Fin Purpose** (provides directional stability at high $\alpha$ when top fin is shielded by wing wake); Rudder Control Power $C_{n_{\delta_r}} = -\eta_v V_v a_v \tau_r < 0$ (deflecting trailing edge LEFT $\delta_r > 0$ creates nose-LEFT moment $C_n < 0$); **One Engine Inoperative (OEI) Trim & Minimum Control Speed $V_{mc} = \sqrt{\frac{2 T_{\max} y_p}{\rho_\infty S b |C_{n_{\delta_r}}| \delta_{r,\max}}}$**; Straight Steady Sideslip (SSSS) & Crosswind Landing Trim ($\phi_{\text{trim}}$ bank into wind, $\delta_{r,\text{trim}}$ opposite rudder); 5-Second shortcuts; 3 fully solved GATE numerical examples ($V_v = 0.064, C_{n_\beta} = +0.1954\text{ rad}^{-1}$, $V_{mc} = 55.40\text{ m/s}$, engine-out rudder deflection $\delta_{r,\text{trim}} = +1.20^\circ$); 4 critical exam traps.
  - Updated `06 - FORMULA SHEETS/Flight Mechanics - Formulas.md` with Section 4.1D Directional Static Stability derivative $C_{n_\beta} > 0$, Vertical Tail Volume Ratio $V_v$, Rudder Power $C_{n_{\delta_r}}$, Engine-Out Trim, Minimum Control Speed $V_{mc}$, and Dorsal/Ventral Fin roles.
  - Updated `02 - SUBJECTS/Flight Mechanics & Space Dynamics/_Index.md` (04.5a marked ✅ under Section 4 Static Stability).

### Session 89 — 2026-07-28
- **AI Used:** Gemini 3.6 Flash (High) / Antigravity
- **Done:**
  - Created `04.3b - Horizontal Tail Position and Size.md` — complete zero-to-AIR1 deep-dive note for Horizontal Tail Sizing, Spatial Location & Scissor Plot under `02 - SUBJECTS/Flight Mechanics & Space Dynamics/`.
  - Covers: Master Mental Model of Tail Dual Purpose (Stability at Aft CG Limit $h_{\text{aft}}$ vs. Control/Trim at Forward CG Limit $h_{\text{fwd}}$); Horizontal Tail Volume Ratio formula $V_H = \frac{S_t l_t}{S \bar{c}}$ and benchmark values across aircraft classes (GA $0.50-0.70$, Transport $0.70-1.00$, Fighter $0.30-0.50$); Longitudinal tail arm trade-off ($l_t$ vs. $S_t$); Vertical Placement Configurations (Low Tail, Mid Tail, High T-Tail, V-Tail); **T-Tail Benefits & Deep Stall (Super-Stall) Hazard** (wing stalled wake loss of elevator pitch authority); **V-Tail Equivalent Surface Equations ($S_H = S_{v\text{-tail}}\cos^2\Gamma_v, S_V = S_{v\text{-tail}}\sin^2\Gamma_v$)**; Dynamic pressure ratio $\eta_t = q_t/q_\infty$ (fuselage loss $\eta_t < 1$, prop slipstream $\eta_t > 1$, T-tail clean air $\eta_t \approx 1$); Downwash spatial interaction ($d\epsilon/d\alpha$ height dependency); **The Scissor Plot (Tail Sizing Diagram)**: Stability boundary equation (positive slope line) & Control boundary equation (negative slope line); Flap deployment pitching moment ($\Delta C_{m,ac} < 0$) shifting control boundary upward; 5-Second shortcuts; 3 fully solved GATE numerical examples; 3 critical exam traps.
  - Updated `06 - FORMULA SHEETS/Flight Mechanics - Formulas.md` with Section 4.1B Horizontal Tail Area Sizing boundaries, Scissor Plot equations, and V-Tail equivalences.
  - Updated `02 - SUBJECTS/Flight Mechanics & Space Dynamics/_Index.md` (04.3b marked ✅ under Section 4 Static Stability).

### Session 88 — 2026-07-28
- **AI Used:** Gemini 3.6 Flash (High) / Antigravity
- **Done:**
  - Created `04.4 - Stick-Free Stability and Hinge Moments.md` — complete zero-to-AIR1 deep-dive note for Longitudinal Stick-Free Static Stability under `02 - SUBJECTS/Flight Mechanics & Space Dynamics/`.
  - Covers: Master Mental Model of Released Controls ($C_{h_e} = 0$ floating condition); Elevator Hinge Moment formulation $H_e = q_t S_e c_e C_{h_e}$ and derivatives ($C_{h_\alpha} < 0, C_{h_{\delta_e}} < 0, C_{h_{\delta_t}} < 0$); Elevator Floating Angle $\delta_{e,\text{float}} = -\left(\frac{C_{h_\alpha}}{C_{h_{\delta_e}}}\right)\alpha_t = f \cdot \alpha_t$ ($f < 0$ floats UP); **Stick-Free Tail Lift Slope $a_t^* = a_t \left(1 - \frac{C_{h_\alpha}}{C_{h_{\delta_e}}}\tau_e\right) < a_t$ ALWAYS**; Stick-Free Pitch Stiffness $C_{m_\alpha}^* = -C_{L_\alpha} K_n^*$; Analytical derivation of **Stick-Free Neutral Point $h_n^* = h_{ac,wb} + \frac{\eta_t V_H a_t^*}{C_{L_\alpha}}(1 - d\epsilon/d\alpha) < h_n$** (ALWAYS forward of stick-fixed NP!); Stick-Free Static Margin $K_n^* = h_n^* - h < K_n$; Control Stick Force $F_s = G \cdot H_e = G q_\infty S_e c_e \eta_t \frac{C_{h_{\delta_e}}}{C_{m_{\delta_e}}} C_{L_\alpha} K_n^* (C_L - C_{L,\text{trim}})$ and trim tab mechanics (tab moves **OPPOSITE** to elevator); Control Stick Force Gradient $dF_s/dV$ & $dF_s/dn$; **Maneuver Points ($h_m, h_m^*$) & Maneuver Margins ($K_m, K_m^*$)** in pull-up flight; Master Chordwise Point Hierarchy ($\mathbf{h_{ac,wb} < h_n^* < h_n < h_m^* < h_m}$); Aerodynamic balancing methods (overhang, horn, internal, beveled edge, balance tabs); 5-Second shortcuts; 3 fully solved GATE numerical examples; 4 critical exam traps.
  - Updated `06 - FORMULA SHEETS/Flight Mechanics - Formulas.md` with Section 4.1C Stick-Free Neutral Point, Static Margin, Control Stick Forces, Trim Tab Rule, Maneuver Points & Golden Chord Sequence.
  - Updated `02 - SUBJECTS/Flight Mechanics & Space Dynamics/_Index.md` (04.4 marked ✅ under Section 4 Static Stability).

### Session 87 — 2026-07-28
- **AI Used:** Gemini 3.6 Flash (High) / Antigravity
- **Done:**
  - Enhanced `04.3 - Longitudinal Static Stability.md` — complete zero-to-AIR1 deep-dive note for Longitudinal Stick-Fixed Static Stability under `02 - SUBJECTS/Flight Mechanics & Space Dynamics/`.
  - Covers: Master Mental Model of Pitch Stiffness ($C_{m_\alpha} < 0$) & Trim Equilibrium ($C_{m_0} > 0$); Step-by-step physical derivations for Wing-Body and Tail pitch moments; Tail local angle of attack $\alpha_t = \alpha_w - i_w + i_t - \epsilon$ & downwash gradient $d\epsilon/d\alpha$; Stick-Fixed Neutral Point analytical formula $h_n = h_{ac,wb} + \frac{\eta_t V_H a_t}{C_{L_\alpha}}(1 - d\epsilon/d\alpha)$; Static Margin $K_n = h_n - h$ and fundamental relation $C_{m_\alpha} = -C_{L_\alpha} K_n = -dC_m/dC_L$; Elevator deflection to trim $\delta_{e,\text{trim}}$ and elevator trim curve slope $d\delta_e/dC_L = (h - h_n)/C_{m_{\delta_e}} < 0$; **Stick-Fixed Speed Stability ($d\delta_e/dV = -\frac{2 C_L K_n}{V |C_{m_{\delta_e}}|})$**; Canard configuration neutral point shift ($h_n = h_{ac,w} - \frac{\eta_c V_c a_c}{C_{L_\alpha}}(1 + d\epsilon_c/d\alpha)$) & safety stall rule; Tailless aircraft static stability (reflexed airfoil $C_{m,ac} > 0$, wing sweep + washout); **Advanced Shifts:** Supersonic Mach shift ($h_{ac} 0.25c \to 0.50c$, "Mach Tuck" tendency) & Ground Effect shift ($d\epsilon/d\alpha \downarrow \implies h_n$ shifts AFT); Permissible CG range between forward elevator authority limit and aft neutral point limit; 5-Second Neutral Point shortcut $h_n = h - C_{m_\alpha}/C_{L_\alpha}$; 3 fully solved GATE numerical examples; 4 critical exam traps.
  - Updated `06 - FORMULA SHEETS/Flight Mechanics - Formulas.md` with Section 4.1B Stick-Fixed Neutral Point, Static Margin, Speed Stability, Canard, Supersonic & Ground Effect Shifts.
  - Verified `02 - SUBJECTS/Flight Mechanics & Space Dynamics/_Index.md` (04.3 marked ✅ under Section 4 Static Stability).

### Session 86 — 2026-07-27
- **AI Used:** Gemini 3.6 Flash (High)
- **Done:**
  - Created `03.7 - Wind Effects on Performance.md` — complete zero-to-AIR1 deep-dive note for Airplane Performance: Wind Effects (Headwind, Tailwind & Crosswind) under `02 - SUBJECTS/Flight Mechanics & Space Dynamics/`.
  - Covers: Vector Kinematics & Wind Triangle $\vec{V}_G = \vec{V}_{\text{TAS}} + \vec{V}_W$; Performance scaling across all domains:
    - **Takeoff & Landing Roll:** $S_{g,\text{headwind}} = S_{g,0} (1 - V_w/V_{\text{LOF}})^2 \approx S_{g,0} (1 - 2 V_w/V_{\text{LOF}})$. Headwind significantly REDUCES takeoff/landing ground roll!
    - **Gliding Flight:** Ground glide distance $R_{\text{ground}} = h (L/D) [1 \mp V_w/(V_{\text{TAS}}\cos\gamma_d)]$. Headwind shortens ground glide distance.
    - **Range vs. Endurance:** Aircraft Endurance $E$ and Rate of Climb $R/C$ are **100% UNAFFECTED BY WIND**! Ground Range $R_{\text{ground}} = R_{\text{air}} \pm V_w \cdot E$.
  - Crosswind Drift Correction & Crab Angle $\sin\beta_{\text{crab}} = V_{\text{cross}} / V_{\text{TAS}} \implies V_G = \sqrt{V_{\text{TAS}}^2 - V_{\text{cross}}^2}$; "ENDURANCE AND R/C DO NOT CARE ABOUT WIND" & "HEADWIND HELPS TAKEOFF & LANDING, HURTS RANGE" mnemonics; 5-Second Headwind Takeoff Distance Reduction shortcut; 2 fully solved GATE numerical examples (Headwind takeoff ground roll reduction $36\%$ from $600\text{ m} \to 384\text{ m}$ for $10\text{ m/s}$ headwind at $V_{\text{LOF}}=50\text{ m/s}$, crosswind crab angle $\beta_{\text{crab}} = 11.54^\circ$ & groundspeed $V_G = 68.58\text{ m/s}$ for $14\text{ m/s}$ crosswind at $V_{\text{TAS}}=70\text{ m/s}$); 4 critical exam traps.
  - Updated `06 - FORMULA SHEETS/Flight Mechanics - Formulas.md` with Wind Effects section under Section 3 Airplane Performance.
  - Updated `02 - SUBJECTS/Flight Mechanics & Space Dynamics/_Index.md` (03.7 marked ✅ under Section 3).
- **AI Used:** Gemini 3.6 Flash (High)
- **Done:**
  - Created `03.6c - Vn Diagram and Flight Envelope.md` — complete zero-to-AIR1 deep-dive note for Airplane Performance: V-n Diagram, Gust Envelopes & Flight Limits under `02 - SUBJECTS/Flight Mechanics & Space Dynamics/`.
  - Covers: Anatomy of the Maneuver V-n Diagram (Parabolic Positive Stall Curve $n_{\text{stall}} = +(V/V_s)^2$, Negative Stall Curve, Structural Limit Lines $n = +n_{\max}$ & $n = -n_{\max}$, Design Dive Speed $V_D / V_{NE}$); Critical Design Airspeeds ($V_s$ $1g$ stall, $V_A = V^* = V_s \sqrt{n_{\max}}$ Maneuver Speed / Corner Velocity, $V_C$ cruise speed, $V_D$ dive speed); FAR Regulatory Standards (Transport $+2.5g/-1.0g$, Normal $+3.8g/-1.52g$, Acrobatic $+6.0g/-3.0g$, Military Fighter $+7.5g$ to $+9.0g$); Atmospheric Vertical Gust V-n Diagram:
    - Gust Load Factor Increment $\Delta n_{\text{gust}} = \frac{K_g \rho_\infty V S a U_{de}}{2 W}$ (varies **LINEARLY with airspeed $V$**!).
    - Gust Alleviation Factor $K_g = \frac{0.88 \mu_g}{5.3 + \mu_g}$ ($\mu_g = \frac{2W}{\rho \bar{c} S g a}$ aircraft mass ratio).
  - "CORNER VELOCITY V_A IS WHERE STALL MEETS N_MAX" & "MANEUVER STALL IS PARABOLIC, GUST LOAD IS LINEAR" mnemonics; 5-Second Maneuver Speed ($V_A$) formula shortcut; 2 fully solved GATE numerical examples ($1g$ stall $V_s = 67.34\text{ m/s}$, Maneuver Speed $V_A = 106.48\text{ m/s}$ & accelerated stall $V_{s,2g} = 95.23\text{ m/s}$ for $500\text{ kN}$ transport with $n_{\max}=2.50g$, vertical gust load factor $n_{\text{gust}} = 2.764g$ for $150\text{ m/s}$ cruise encounter with $10\text{ m/s}$ gust); 4 critical exam traps.
  - Updated `06 - FORMULA SHEETS/Flight Mechanics - Formulas.md` with V-n Diagram & Structural Flight Envelope section under Section 3 Airplane Performance.
  - Updated `02 - SUBJECTS/Flight Mechanics & Space Dynamics/_Index.md` (03.6c marked ✅ under Section 3). **SECTION 3 (AIRPLANE PERFORMANCE) OFFICIALLY COMPLETED! 🎉**
- **AI Used:** Gemini 3.6 Flash (High)
- **Done:**
  - Created `03.6b - Turning Flight Performance.md` — complete zero-to-AIR1 deep-dive note for Airplane Performance: Turning Flight, Minimum Radius, Max Rate & Corner Velocity under `02 - SUBJECTS/Flight Mechanics & Space Dynamics/`.
  - Covers: The 3 Physical Constraints of Turning Flight (Aerodynamic Stall Limit $n_{\text{stall}} = (V/V_s)^2$, Structural Limit $n_{\max}$, Engine Thrust Limit $T_a \ge D_{\text{turn}}$); Corner Velocity / Maneuver Speed derivation $V^* = V_s \sqrt{n_{\max}} = \sqrt{2 n_{\max} W / (\rho_\infty S C_{L,\max})}$; Simultaneous Optimization at Corner Velocity $V^*$:
    - **Minimum Turn Radius ($R_{\min}$):** $R_{\min} = \frac{(V^*)^2}{g \sqrt{n_{\max}^2 - 1}} = \frac{2 W}{\rho_\infty g S C_{L,\max} \sqrt{n_{\max}^2 - 1}}$.
    - **Maximum Turn Rate ($\omega_{\max}$):** $\omega_{\max} = \frac{g \sqrt{n_{\max}^2 - 1}}{V^*} = \frac{g \sqrt{n_{\max}^2 - 1}}{V_s \sqrt{n_{\max}}}$.
  - Thrust-Limited Sustained Turn Load Factor $n_{\text{sustained}} = \sqrt{\frac{q_\infty S}{K W^2} (T_a - q_\infty S C_{D,0})}$; Instantaneous vs. Sustained Turns; "CORNER VELOCITY V* GIVES MIN RADIUS & MAX RATE", "CORNER VELOCITY = V_s * SQRT(n_max)" mnemonics; 5-Second Minimum Turn Radius formula shortcut; 2 fully solved GATE numerical examples (Corner Velocity $V^* = 150.0\text{ m/s}$, $R_{\min} = 256.43\text{ m}$ & $\omega_{\max} = 33.51^\circ/\text{s}$ for $n_{\max}=9.0g, V_s=50\text{ m/s}$, sustained turn load factor $n_{\text{sustained}} = 6.89g$ at $V=200\text{ m/s}$ with $T_a=24\text{ kN}$); 4 critical exam traps.
  - Updated `06 - FORMULA SHEETS/Flight Mechanics - Formulas.md` with Turning Flight Performance section under Section 3 Airplane Performance.
  - Updated `02 - SUBJECTS/Flight Mechanics & Space Dynamics/_Index.md` (03.6b marked ✅ under Section 3).
- **AI Used:** Gemini 3.6 Flash (High)
- **Done:**
  - Created `03.6a - Load Factor and Maneuvering Flight.md` — complete zero-to-AIR1 deep-dive note for Airplane Performance: Load Factor, Maneuvering Flight & Accelerated Stall under `02 - SUBJECTS/Flight Mechanics & Space Dynamics/`.
  - Covers: Definition of Load Factor ($n = L/W$); Accelerated Stall Speed formula $V_{s,n} = V_s \sqrt{n}$; Level Coordinated Turn Mechanics (Bank Angle relation $n = \sec\phi = 1/\cos\phi$, Turn Radius $R = V^2 / (g \tan\phi) = V^2 / (g \sqrt{n^2 - 1})$, Turn Rate $\omega = g \tan\phi / V = g \sqrt{n^2 - 1} / V$); Vertical Maneuvers (Pull-Up load factor $n = 1 + V^2/gR \implies R = V^2 / (g(n-1))$, Push-Over load factor $n = 1 - V^2/gR$); "TURN LOAD FACTOR = 1 / COS(PHI)", "PULL-UP ADDS 1, PUSH-OVER SUBTRACTS FROM 1" mnemonics; 5-Second Accelerated Stall Speed formula shortcut; 2 fully solved GATE numerical examples (Coordinated turn load factor $n=2g$, turn radius $R=2,354.1\text{ m}$, turn rate $\omega=4.87^\circ/\text{s}$ & accelerated stall speed $V_{s,2g}=84.85\text{ m/s}$ at $V=200\text{ m/s}$ and $\phi=60^\circ$, pull-up load factor $n=4.058g$ at bottom of loop $R=750\text{ m}$); 4 critical exam traps.
  - Updated `06 - FORMULA SHEETS/Flight Mechanics - Formulas.md` with Load Factor & Maneuvering Flight section under Section 3 Airplane Performance.
  - Updated `02 - SUBJECTS/Flight Mechanics & Space Dynamics/_Index.md` (03.6a marked ✅ under Section 3).
- **AI Used:** Gemini 3.6 Flash (High)
- **Done:**
  - Created `03.5b - Endurance Performance.md` — complete zero-to-AIR1 deep-dive note for Airplane Performance: Aircraft Endurance & Breguet Equations under `02 - SUBJECTS/Flight Mechanics & Space Dynamics/`.
  - Covers: Fuel consumption rate kinematics $dt = -dW / \text{Fuel Burn Rate}$; Breguet Endurance Equation for Jet Aircraft $E_{\text{jet}} = \frac{1}{c_t} (\frac{C_L}{C_D}) \ln(\frac{W_0}{W_1})$ maximized at **$(L/D)_{\max}$** ($C_{D,0} = K C_L^2$, speed $V = 1.000 V_m$); Breguet Endurance Equation for Propeller Aircraft $E_{\text{prop}} = \frac{\eta_p}{c_p} \sqrt{2\rho_\infty S} (\frac{C_L^{3/2}}{C_D}) [\frac{1}{\sqrt{W_1}} - \frac{1}{\sqrt{W_0}}]$ maximized at **$(C_L^{3/2}/C_D)_{\max}$** ($K C_L^2 = 3 C_{D,0}$, speed $V = 0.760 V_m$); Master Range vs. Endurance Duality Matrix (Golden Duality Rule: Propeller Range and Jet Endurance are aerodynamic twins, both using $(L/D)_{\max}$ and $\ln(W_0/W_1)$!); "PROP RANGE = JET ENDURANCE = (L/D)max" & "PROP ENDURANCE USES 3/2 POWER, JET RANGE USES 1/2 POWER" mnemonics; 5-Second Jet Endurance formula shortcut; 2 fully solved GATE numerical examples (Jet fighter endurance $E = 5.75\text{ hours}$ for $W_0=80\text{ kN}, W_1=60\text{ kN}$ at $(L/D)_{\max}=14$ with $TSFC=0.70\text{ hr}^{-1}$, Propeller reconnaissance drone endurance $E = 77.65\text{ hours}$ for $W_0=10\text{ kN}, W_1=6.4\text{ kN}$); 4 critical exam traps.
  - Updated `06 - FORMULA SHEETS/Flight Mechanics - Formulas.md` with Aircraft Endurance section under Section 3 Airplane Performance.
  - Updated `02 - SUBJECTS/Flight Mechanics & Space Dynamics/_Index.md` (03.5b marked ✅ under Section 3).
- **AI Used:** Gemini 3.6 Flash (High)
- **Done:**
  - Created `03.5a - Range and Breguet Equations.md` — complete zero-to-AIR1 deep-dive note for Airplane Performance: Aircraft Range & Breguet Equations under `02 - SUBJECTS/Flight Mechanics & Space Dynamics/`.
  - Covers: Specific Fuel Consumption definitions ($c_p$ for propeller power $\text{N}/(\text{W}\cdot\text{s})$, $c_t$ / $TSFC$ for jet thrust $\text{s}^{-1}$); Kinematic distance integration $dx = -V (dt/dW) dW$; Breguet Range Equation for Propeller Aircraft $R_{\text{prop}} = \frac{\eta_p}{c_p} (\frac{C_L}{C_D}) \ln(\frac{W_0}{W_1})$ maximized at **$(L/D)_{\max}$** ($C_{D,0} = K C_L^2$, speed $V = 1.000 V_m$); Breguet Range Equations for Jet Aircraft:
    - **Cruise-Climb Profile (Const $C_L$ & Const $V_{\text{EAS}}$):** $R_{\text{jet}} = \frac{2}{c_t} \sqrt{\frac{2}{\rho_0 S}} (\frac{C_L^{1/2}}{C_D}) [\sqrt{W_0} - \sqrt{W_1}]$ maximized at **$(C_L^{1/2}/C_D)_{\max}$** ($C_{D,0} = 3 K C_L^2$, speed $V = 1.316 V_m$).
    - **Constant Altitude & Constant Speed Profile:** $R_{\text{jet, Const}} = \frac{V}{c_t} (\frac{L}{D})_{\text{avg}} \ln(\frac{W_0}{W_1})$.
  - "PROP RANGE AT (L/D)max, JET RANGE AT (C_L^(1/2)/C_D)max" & "PROP USES LN(W0/W1), JET CRUISE-CLIMB USES SQRT DIFFERENCE" mnemonics; 5-Second Propeller Range formula shortcut; 2 fully solved GATE numerical examples (Propeller aircraft range $R = 5,032.5\text{ km}$ for $W_0=40\text{ kN}, W_1=30\text{ kN}$ at $(L/D)_{\max}=16$, Jet cruise-climb range $R = 3,472.4\text{ km}$ for $W_0=100\text{ kN}, W_1=64\text{ kN}$ with $TSFC = 0.60\text{ hr}^{-1}$); 4 critical exam traps.
  - Updated `06 - FORMULA SHEETS/Flight Mechanics - Formulas.md` with Aircraft Range section under Section 3 Airplane Performance.
  - Updated `02 - SUBJECTS/Flight Mechanics & Space Dynamics/_Index.md` (03.5a marked ✅ under Section 3).
- **AI Used:** Gemini 3.6 Flash (High)
- **Done:**
  - Created `03.4c - Absolute and Service Ceilings.md` — complete zero-to-AIR1 deep-dive note for Airplane Performance: Absolute Ceiling, Service Ceiling & Time-to-Climb under `02 - SUBJECTS/Flight Mechanics & Space Dynamics/`.
  - Covers: Regulatory Ceiling Definitions (Absolute Ceiling $h_{\text{abs}}$ where $R/C_{\max} = 0$; Commercial Service Ceiling $h_{\text{serv}}$ where $R/C = 100\text{ ft/min} = 0.508\text{ m/s}$ (FAR-25); Military Service Ceiling $R/C = 500\text{ ft/min} = 2.54\text{ m/s}$ (FAR-23)); Analytical Ceiling Density Ratio Derivations:
    - **Jet Aircraft ($T_a \propto \rho$):** $(\rho_{\text{abs}}/\rho_0)_{\text{Jet}} = \frac{W}{T_{a,0} \cdot (L/D)_{\max}}$.
    - **Propeller Aircraft ($P_{AV} \propto \rho$):** $(\rho_{\text{abs}}/\rho_0)_{\text{Prop}} = [P_{R,\min,0}/P_{AV,0}]^{2/3}$.
  - Service Ceiling Formula $h_{\text{serv}} = h_{\text{abs}}(1 - R/C_{\text{service}}/R/C_0)$; Time to Climb Logarithmic Integration $t_{\text{climb}} = (h_{\text{abs}}/R/C_0) \ln((h_{\text{abs}}-h_1)/(h_{\text{abs}}-h_2))$; Infinite Time to Absolute Ceiling ($t_{\text{abs}} = \infty$); "ABSOLUTE CEILING: R/C = 0, TIME = INFINITY" & "SERVICE CEILING = 100 FT/MIN (0.508 M/S)" mnemonics; Quick Jet Absolute Ceiling density ratio shortcut; 2 fully solved GATE numerical examples (Jet absolute density ratio $\rho_{\text{abs}}/\rho_0 = 0.2222 \implies \rho_{\text{abs}} = 0.2722\text{ kg/m}^3$ for $T_{a,0}/W=0.30$ & $(L/D)_{\max}=15$, commercial service ceiling $h_{serv} = 13,644.4\text{ m}$ & climb time $t_{\text{serv}} = 42.85\text{ min}$ from sea level for $h_{\text{abs}}=14,000\text{ m}$); 4 critical exam traps.
  - Updated `06 - FORMULA SHEETS/Flight Mechanics - Formulas.md` with Absolute & Service Ceilings section under Section 3 Airplane Performance.
  - Updated `02 - SUBJECTS/Flight Mechanics & Space Dynamics/_Index.md` (03.4c marked ✅ under Section 3).
- **AI Used:** Gemini 3.6 Flash (High)
- **Done:**
  - Created `03.4b - Steady Descent and Glide Performance.md` — complete zero-to-AIR1 deep-dive note for Airplane Performance: Steady Descent, Gliding Flight & Sink Rate under `02 - SUBJECTS/Flight Mechanics & Space Dynamics/`.
  - Covers: Unpowered Glide Force Balance ($T = 0 \implies D = W \sin\gamma_d$, $L = W \cos\gamma_d$); Glide Angle relation $\tan\gamma_d = D/L = 1/(L/D) = C_D/C_L$; Maximum Glide Range $R_{\text{glide, max}} = h \cdot (L/D)_{\max}$ (**COMPLETELY INDEPENDENT OF AIRCRAFT WEIGHT $W$!**); Shallowest Glide Angle $\tan\gamma_{d,\min} = 1/(L/D)_{\max} = 2\sqrt{K C_{D,0}}$ at speed $V_{(L/D)_{\max}}$; Rate of Descent / Sink Rate $R/D = V \sin\gamma_d = P_R / W = \sqrt{2W/\rho S} \cdot (C_D/C_L^{3/2})$; Minimum Rate of Descent / Sink Rate $R/D_{\min} = \sqrt{2W/\rho S} / (C_L^{3/2}/C_D)_{\max}$ occurring at speed $V_{\text{min sink}} = 0.760 V_{(L/D)_{\max}}$ (Optimum $C_L = \sqrt{3 C_{D,0}/K}$); Weight Paradox (Weight $W$ does not change glide range or angle, but heavy glider glides faster $V \propto \sqrt{W}$ and reaches ground sooner); "GLIDE RANGE DEPENDS ONLY ON ALTITUDE AND (L/D)max" & "HEAVY GLIDER GLIDES AT SAME ANGLE BUT FASTER" mnemonics; 5-Second Maximum Glide Distance formula shortcut; 2 fully solved GATE numerical examples ($10\text{ km}$ glide distance $70.71\text{ km}$ & angle $\gamma_{d,\min}=2.43^\circ$ for $(L/D)_{\max}=23.57$, minimum rate of descent $R/D_{\min} = 0.8858\text{ m/s}$ & glide endurance $56.44\text{ minutes}$ from $3,000\text{ m}$); 4 critical exam traps.
  - Updated `06 - FORMULA SHEETS/Flight Mechanics - Formulas.md` with Steady Descent & Gliding Performance section under Section 3 Airplane Performance.
  - Updated `02 - SUBJECTS/Flight Mechanics & Space Dynamics/_Index.md` (03.4b marked ✅ under Section 3).
- **AI Used:** Gemini 3.6 Flash (High)
- **Done:**
  - Created `03.4a - Steady Climb Performance.md` — complete zero-to-AIR1 deep-dive note for Airplane Performance: Steady Climb, Rate of Climb & Ceilings under `02 - SUBJECTS/Flight Mechanics & Space Dynamics/`.
  - Covers: Steady Climb Force Balance ($T - D = W \sin\gamma$, $L = W \cos\gamma < W$); Climb Angle formula $\sin\gamma = (T - D)/W = T/W - 1/(L/D)$; Rate of Climb $R/C = V \sin\gamma = (P_{AV} - P_R)/W$; Optimum Climb Speeds for Jet vs. Propeller:
    - **Jet Aircraft:** Max Climb Angle $\sin\gamma_{\max} = T_a/W - 1/(L/D)_{\max}$ at $V_x = V_{(L/D)_{\max}}$; Max Rate of Climb speed $V_y = 1.316 V_{(L/D)_{\max}}$ (Optimum $C_{L,y} = \sqrt{C_{D,0}/3K}$).
    - **Propeller Aircraft:** Max Rate of Climb $R/C_{\max} = \eta_p P / W - V_{P_R}/(L/D)_{P_R}$ at $V_y = V_{P_{R,\min}} = 0.760 V_{(L/D)_{\max}}$ (Optimum $C_{L,y} = \sqrt{3 C_{D,0}/K}$).
  - Ceiling Definitions: Absolute Ceiling ($h_{abs}$ where $R/C=0$), Commercial Service Ceiling ($h_{serv}$ where $R/C = 100\text{ ft/min} = 0.508\text{ m/s}$); Ceiling Relationship $h_{serv} = h_{abs}(1 - R/C_{\text{service}}/R/C_0)$; Time to Climb Logarithmic Integration $t_{\text{climb}} = (h_{abs}/R/C_0) \ln((h_{abs}-h_1)/(h_{abs}-h_2))$; "CLIMB ANGLE = THRUST / WEIGHT, RATE = POWER / WEIGHT" & "SERVICE CEILING = 100 FT/MIN RATE OF CLIMB" mnemonics; 5-Second Time to Climb formula shortcut; 2 fully solved GATE numerical examples (Jet max climb angle $\gamma_{\max}=8.25^\circ$ & $R/C_{\max}=12.04\text{ m/s}$ for $50\text{ kN}$ weight aircraft with $T_a=10\text{ kN}$, commercial service ceiling $h_{serv}=11,593.6\text{ m}$ & climb time $t=14.65\text{ min}$ to $8,000\text{ m}$); 4 critical exam traps.
  - Updated `06 - FORMULA SHEETS/Flight Mechanics - Formulas.md` with Steady Climb Performance section under Section 3 Airplane Performance.
  - Updated `02 - SUBJECTS/Flight Mechanics & Space Dynamics/_Index.md` (03.4a marked ✅ under Section 3).
- **AI Used:** Gemini 3.6 Flash (High)
- **Done:**
  - Created `03.3b - Landing Performance.md` — complete zero-to-AIR1 deep-dive note for Airplane Performance: Landing Performance, Ground Roll & Braking under `02 - SUBJECTS/Flight Mechanics & Space Dynamics/`.
  - Covers: Landing Distance Breakdown ($S_L = S_a + S_f + S_g$ from obstacle height $h_{obs} = 50\text{ ft} / 15\text{ m}$ FAR-23/25); Landing Speed Regulations ($V_a = 1.30 V_s$, $V_{TD} \approx 1.15 V_s$); Retarding Force Balance $m V dV/dx = -F_{\text{retard}} = -[\mu_b(W - L) + D - T_{\text{rev}}]$; Standard GATE Average Retarding Force Formula $S_g = \frac{m V_{TD}^2}{2 \bar{F}_{\text{retard}}}$ evaluated at average speed $V_{av} = 0.707 V_{TD}$ (dynamic pressure $\bar{q} = 0.50 q_{TD}$); Ground Spoilers / Lift Dumpers mechanics (dumps lift $L \to 0 \implies$ wheel normal load $N \approx W \implies F_{\text{brake}} = \mu_b W$); Reverse Thrust ($T_{\text{rev}}$) assistance; Landing Ground Roll Parametric Scaling ($S_g \propto W$, $S_g \propto 1/\rho$, $S_g \propto 1/C_{L,\max,\text{land}}$); Headwind Reduction Formula $S_{g,\text{headwind}} = S_{g,0}(1 - V_w/V_{TD})^2$; "SPOILERS DUMP LIFT TO MAXIMIZE BRAKING" & "LANDING SPEEDS: V_a = 1.30 V_s, V_TD = 1.15 V_s" mnemonics; 5-Second Landing Ground Roll formula shortcut; 2 fully solved GATE numerical examples (Landing ground roll distance $S_g = 341.15\text{ m}$ for $10\text{ ton}$ aircraft with spoilers, brakes $\mu_b=0.35$, and reverse thrust $T_{\text{rev}}=6\text{ kN}$, and reverse thrust removal effect increasing distance to $394.55\text{ m}$ (+15.6%)); 4 critical exam traps.
  - Updated `06 - FORMULA SHEETS/Flight Mechanics - Formulas.md` with Landing Performance section under Section 3 Airplane Performance.
  - Updated `02 - SUBJECTS/Flight Mechanics & Space Dynamics/_Index.md` (03.3b marked ✅ under Section 3).
- **AI Used:** Gemini 3.6 Flash (High)
- **Done:**
  - Created `03.3a - Take-off Performance.md` — complete zero-to-AIR1 deep-dive note for Airplane Performance: Take-off Performance, Ground Roll & Speeds under `02 - SUBJECTS/Flight Mechanics & Space Dynamics/`.
  - Covers: Take-off Distance Breakdown ($S_{TO} = S_g + S_r + S_c$ to obstacle height $h_{obs} = 35\text{ ft} / 10.5\text{ m}$ FAR-25); Take-off Speed Hierarchy ($V_s < V_1 \le V_r (1.05V_s) < V_{LOF} (1.1\text{--}1.2V_s) < V_2 (1.2V_s)$); Ground Roll Force Balance $m V dV/dx = F_{\text{net}} = T - D - \mu_r(W - L)$; Standard GATE Average Force Formula $S_g = \frac{m V_{LOF}^2}{2 \bar{F}_{\text{net}}}$ evaluated at average speed $V_{av} = 0.707 V_{LOF}$ (dynamic pressure $\bar{q} = 0.50 q_{LOF}$); Optimum Ground Roll Lift Coefficient $C_{L,g,\text{opt}} = \frac{\mu_r}{2K} = \frac{\mu_r \pi AR e}{2}$; Ground Roll Parametric Scaling Laws ($S_g \propto W^2$, $S_g \propto 1/\rho$, $S_g \propto 1/(S C_{L,\max})$, $S_g \propto 1/T$); Headwind Reduction Formula $S_{g,\text{headwind}} = S_{g,0}(1 - V_w/V_{LOF})^2$; "S_g PROPORTIONAL TO W SQUARED AND 1/RHO" & "EVALUATE ACCELERATION AT 0.707 V_LOF" mnemonics; 5-Second Ground Roll average force formula shortcut; 3 fully solved GATE numerical examples (Ground roll distance $S_g = 882.57\text{ m}$ for $12\text{ ton}$ aircraft with $\bar{F}_{\text{net}}=32\text{ kN}$, optimum ground roll lift coefficient $C_{L,g,\text{opt}} = 0.2403$ for $\mu_r=0.03$, headwind reduction $500\text{ m} \to 320\text{ m}$ for $10\text{ m/s}$ headwind); 4 critical exam traps.
  - Updated `06 - FORMULA SHEETS/Flight Mechanics - Formulas.md` with Take-off Performance section under Section 3 Airplane Performance.
  - Updated `02 - SUBJECTS/Flight Mechanics & Space Dynamics/_Index.md` (03.3a marked ✅ under Section 3).
- **AI Used:** Gemini 3.6 Flash (High)
- **Done:**
  - Created `03.2 - Drag Polar and Induced Drag.md` — complete zero-to-AIR1 deep-dive note for Airplane Performance: Parabolic Drag Polar, Induced Drag & Performance Optimums under `02 - SUBJECTS/Flight Mechanics & Space Dynamics/`.
  - Covers: Parabolic Drag Polar Model ($C_D = C_{D,0} + K C_L^2$ where $K = 1/\pi AR e$); Parasite Drag ($C_{D,0}$) vs. Induced Drag ($C_{D,i} = K C_L^2$); Mathematical derivations of 3 Master GATE Performance Optimums:
    1. **Min Thrust / Best Glide ($(L/D)_{\max}$):** Parasite = Induced ($C_{D,0} = K C_L^2$), $C_{L,(L/D)_{\max}} = \sqrt{C_{D,0}/K}$, $(L/D)_{\max} = \frac{1}{2\sqrt{K C_{D,0}}} = \frac{1}{2}\sqrt{\frac{\pi AR e}{C_{D,0}}}$, $T_{R,\min} = \frac{W}{(L/D)_{\max}}$ (Altitude invariant!); Speed multiplier = $1.000$.
    2. **Min Power / Prop Endurance ($P_{R,\min}$):** Induced = $3 \times$ Parasite ($K C_L^2 = 3 C_{D,0}$), $C_{L,P_{R,\min}} = \sqrt{3 C_{D,0}/K} = \sqrt{3} C_{L,(L/D)_{\max}}$, $C_{D,P_R} = 4 C_{D,0}$; Speed multiplier = $3^{-1/4} \approx 0.760$.
    3. **Jet Maximum Range:** Parasite = $3 \times$ Induced ($C_{D,0} = 3 K C_L^2$), $C_{L,\text{Jet}} = \sqrt{C_{D,0}/3K} = \frac{1}{\sqrt{3}} C_{L,(L/D)_{\max}}$, $C_{D,\text{Jet}} = \frac{4}{3} C_{D,0}$; Speed multiplier = $3^{1/4} \approx 1.316$.
  - Airspeed ratio multipliers ($0.760, 1.000, 1.316$); "1-TO-1, 3-TO-1, 1-TO-3 DRAG RATIOS" & "SPEED MULTIPLIERS: 0.76, 1.0, 1.32" mnemonics; 5-Second $(L/D)_{\max}$ formula shortcut; 2 fully solved GATE numerical examples (Drag polar optimums for $C_D = 0.020 + 0.050 C_L^2$: $(L/D)_{\max} = 15.811$, $C_{L,\text{opt}} = 0.6325$, $T_{R,\min} = 6,324.7\text{ N}$, $V_{(L/D)_{\max}} = 80.33\text{ m/s}$, $V_{\text{jet range}} = 105.73\text{ m/s}$; Minimum Power calculation $P_{R,\min} = 445.78\text{ kW}$ at $V_{P_R} = 61.04\text{ m/s}$); 4 critical exam traps.
  - Updated `06 - FORMULA SHEETS/Flight Mechanics - Formulas.md` with Drag Polar section under Section 3 Airplane Performance.
  - Updated `02 - SUBJECTS/Flight Mechanics & Space Dynamics/_Index.md` (03.2 marked ✅ under Section 3).
- **AI Used:** Gemini 3.6 Flash (High)
- **Done:**
  - Created `03.1 - Lift-Alpha Curve.md` — complete zero-to-AIR1 deep-dive note for Airplane Performance: $C_L - \alpha$ Curve, Lift Slope & 2D vs 3D Wing under `02 - SUBJECTS/Flight Mechanics & Space Dynamics/`.
  - Covers: Anatomy of $C_L - \alpha$ Curve (Linear region $C_L = a \alpha_{abs}$, Zero-lift angle $\alpha_{L=0}$, Stall point $C_{L,\max}$ & $\alpha_{\text{stall}}$); 2D Thin Airfoil Theory Slope ($a_0 = 2\pi\text{ rad}^{-1} \approx 6.283\text{ rad}^{-1} \approx 0.1097\text{ deg}^{-1}$); 3D Finite Wing Prandtl Lifting-Line Slope $a = a_0 / (1 + a_0 / (\pi AR e))$; Aspect Ratio Effects (High $AR \implies$ steeper slope $a$, high lift at low $\alpha$; Low $AR \implies$ flatter slope $a$, delays stall to higher $\alpha_{\text{stall}}$); Aspect Ratio Equal Lift Angle Shift $\Delta\alpha(^\circ) = (57.3 C_L / \pi e)(1/AR_2 - 1/AR_1)$; Subsonic Compressibility Correction (Prandtl-Glauert $a_0 = 2\pi / \sqrt{1 - M_\infty^2}$); Helmbold/Kuchemann Swept Low-AR Wing Formula; Total Aircraft Lift Slope $a_A = a_w + a_f + \eta_t(S_t/S)a_t(1 - d\epsilon/d\alpha)$; Stall Types & Wing Sweep Tip Stall; "HIGH AR = STEEP SLOPE, LOW AR = STALL LATE" & "PRANDTL-GLAUERT BUMP" mnemonics; 5-Second 3D Lift Slope degree formula shortcut; 3 fully solved GATE numerical examples (2D to 3D lift slope conversion $a = 4.743\text{ rad}^{-1} = 0.08278\text{ deg}^{-1}$ & $C_L = 0.8278$ for $AR=7$ wing, angle of attack shift $+1.52^\circ$ for $AR=4$ vs $AR=8$ wing at $C_L=0.6$, Prandtl-Glauert slope $5.922\text{ rad}^{-1}$ at Mach $0.65$); 4 critical exam traps.
  - Updated `06 - FORMULA SHEETS/Flight Mechanics - Formulas.md` with $C_L - \alpha$ Curve section under Section 3 Airplane Performance.
  - Updated `02 - SUBJECTS/Flight Mechanics & Space Dynamics/_Index.md` (03.1 marked ✅ under Section 3).
- **AI Used:** Gemini 3.6 Flash (High)
- **Done:**
  - Created `02.4c - Yaw Dynamics and Control.md` — complete zero-to-AIR1 deep-dive note for Yaw Axis Dynamics, Rudder Controls & Engine-Out Trim under `02 - SUBJECTS/Flight Mechanics & Space Dynamics/`.
  - Covers: Yaw Axis Geometry & Rudder Deflection ($\delta_r > 0$ trailing edge LEFT creates side force to RIGHT $\implies$ nose-left moment $C_n < 0$, rudder power $C_{n_{\delta_r}} < 0$ ALWAYS NEGATIVE); Master Yawing Moment Equation $C_n = C_{n_\beta} \beta + C_{n_{\delta_r}} \delta_r + C_{n_r}(r b/2V_\infty)$; Vertical Tail Volume Ratio $V_v = S_v l_v / S b$ (uses wingspan $b$!); Rudder Control Power analytical formula $C_{n_{\delta_r}} = -\eta_v V_v a_v \tau_r$; Critical Engine-Out Trim (One Engine Inoperative - OEI) balance equation $\delta_{r,\text{trim}} = -(T y_p)/(q_\infty S b C_{n_{\delta_r}})$; Minimum Control Speed derivation $V_{mc} = \sqrt{2 T_{\max} y_p / (\rho_\infty S b |C_{n_{\delta_r}}| \delta_{r,\max})}$; 1-DOF Yaw Equation of Motion $I_{zz} \dot{r} = q_\infty S b [C_{n_\beta}\beta + C_{n_{\delta_r}}\delta_r + C_{n_r}(rb/2V_\infty)]$; Yaw Damping Derivative ($C_{n_r} < 0$ always negative); "RUDDER LEFT = NOSE LEFT", "DIRECTIONAL DERIVATIVE SIGNS", "V_mc IS DEFINED BY RUDDER POWER" mnemonics; 5-Second Engine-Out Rudder Deflection shortcut; 2 fully solved GATE numerical examples (Rudder deflection for engine-out trim $\delta_{r,\text{trim}} = +51.97^\circ$ at $60\text{ m/s}$ for $50\text{ kN}$ thrust, Minimum Control Speed calculation $V_{mc} = 86.51\text{ m/s} = 168\text{ knots}$); 4 critical exam traps.
  - Updated `06 - FORMULA SHEETS/Flight Mechanics - Formulas.md` with Yaw Axis Dynamics section.
  - Updated `02 - SUBJECTS/Flight Mechanics & Space Dynamics/_Index.md` (02.4c marked ✅ under Section 2, **Section 2 Aerodynamic Forces & Controls marked COMPLETE 🎉**).
- **AI Used:** Gemini 3.6 Flash (High)
- **Done:**
  - Created `02.4b - Pitch Dynamics and Control.md` — complete zero-to-AIR1 deep-dive note for Pitch Axis Dynamics, Elevator Controls & Longitudinal Trim under `02 - SUBJECTS/Flight Mechanics & Space Dynamics/`.
  - Covers: Pitch Axis Geometry & Elevator Deflection ($\delta_e > 0$ trailing edge DOWN increases tail lift $\implies$ nose-down moment $C_m < 0$, elevator power $C_{m_{\delta_e}} < 0$ ALWAYS NEGATIVE); Master Pitching Moment Equation $C_m = C_{m_0} + C_{m_\alpha} \alpha + C_{m_{\delta_e}} \delta_e + C_{m_q}(q\bar{c}/2V_\infty)$; Static Longitudinal Stability & Trim conditions ($C_{m_\alpha} < 0$ negative slope, $C_{m_0} > 0$ positive intercept); Trim Elevator Deflection equation $\delta_{e,\text{trim}} = -(C_{m_0} + C_{m_\alpha}\alpha_{\text{trim}})/C_{m_{\delta_e}}$; Horizontal Tail Volume Ratio $V_H = S_t l_t / S \bar{c}$; Elevator Control Power analytical formula $C_{m_{\delta_e}} = -\eta_t V_H a_t \tau_e$; 1-DOF Pitch Equation of Motion $I_{yy} \dot{q} = q_\infty S \bar{c} [C_{m_0} + C_{m_\alpha}\alpha + C_{m_{\delta_e}}\delta_e + C_{m_q}(q\bar{c}/2V_\infty)]$; Pitch Damping Derivative ($C_{m_q} < 0$ always negative); Trim tab mechanics; "ELEVATOR DOWN = NOSE DOWN", "STABILITY REQUIREMENTS: Cm0 > 0 AND Cm_alpha < 0", "PITCH DAMPING IS ALWAYS NEGATIVE" mnemonics; 5-Second Tail Volume Ratio shortcut; 2 fully solved GATE numerical examples (Trim elevator deflection $\delta_{e,\text{trim}} = +2.275^\circ$ for $\alpha_{\text{trim}}=5^\circ$, elevator control power $C_{m_{\delta_e}} = -1.4175\text{ rad}^{-1} = -0.02473\text{ deg}^{-1}$ from tail geometry); 4 critical exam traps.
  - Updated `06 - FORMULA SHEETS/Flight Mechanics - Formulas.md` with Pitch Axis Dynamics section.
  - Updated `02 - SUBJECTS/Flight Mechanics & Space Dynamics/_Index.md` (02.4b marked ✅ under Section 2).
- **AI Used:** Gemini 3.6 Flash (High)
- **Done:**
  - Created `02.4a - Roll Dynamics and Control.md` — complete zero-to-AIR1 deep-dive note for Roll Axis Dynamics, Ailerons & Adverse Yaw under `02 - SUBJECTS/Flight Mechanics & Space Dynamics/`.
  - Covers: Roll Motion Geometry & Aileron Deflection ($\delta_a = (\delta_{a,L} - \delta_{a,R})/2$, positive $\delta_a > 0$ produces negative rolling moment $C_{l_{\delta_a}} < 0$, rolling left); Governing 1-DOF Roll Equation of Motion $I_{xx} \dot{p} = q_\infty S b [ C_{l_{\delta_a}} \delta_a + C_{l_p} (p b / 2 V_\infty) ]$; Roll Damping Derivative ($C_{l_p} < 0$ always negative); Steady-State Roll Rate equation $p_{\text{ss}} = -(2 V_\infty / b)(C_{l_{\delta_a}}/C_{l_p})\delta_a$; Roll Helix Angle $(p b / 2 V_\infty)_{\text{ss}} = -(C_{l_{\delta_a}}/C_{l_p})\delta_a$; Roll Time Constant $\tau_r = -I_{xx} / (\frac{1}{4} \rho_\infty V_\infty S b^2 C_{l_p})$; First-order transient response $p(t) = p_{\text{ss}}(1 - e^{-t/\tau_r})$ and bank angle integration $\phi(t) = p_{\text{ss}}[t - \tau_r(1-e^{-t/\tau_r})]$; Adverse Yaw Mechanism (higher lift on down-going aileron wing creates higher induced drag $C_{D,i} \propto C_L^2 \implies$ nose yaws opposite to roll) and mitigation techniques (Differential Ailerons, Frise Ailerons, Spoilers, Rudder Interconnect); "ROLL DAMPING IS ALWAYS NEGATIVE", "ADVERSE YAW = NOSE YAWS OPPOSITE TO ROLL", "FRISE & DIFFERENTIAL KILL ADVERSE YAW" mnemonics; 5-Second Steady Roll Rate shortcut; 2 fully solved GATE numerical examples (Steady roll rate $p_{\text{ss}} = -50.0^\circ/\text{s}$ for $10^\circ$ aileron deflection at $90\text{ m/s}$, roll time constant $\tau_r = 0.2041\text{ s}$ & bank angle $\phi(1\text{s}) = 22.84^\circ$ integration); 4 critical exam traps.
  - Updated `06 - FORMULA SHEETS/Flight Mechanics - Formulas.md` with Roll Axis Dynamics section.
  - Updated `02 - SUBJECTS/Flight Mechanics & Space Dynamics/_Index.md` (02.4a marked ✅ under Section 2).
- **AI Used:** Gemini 3.6 Flash (High)
- **Done:**
  - Created `02.3 - High-Lift Devices.md` — complete zero-to-AIR1 deep-dive note for High-Lift Devices (Flaps, Slats, Slots & Aerodynamic Effects) under `02 - SUBJECTS/Flight Mechanics & Space Dynamics/`.
  - Covers: Physical purpose of high-lift devices (increase $C_{L,\max}$ and wing area $S \implies$ reduce stall speed $V_{\text{stall}}$ and ground landing roll $S_g \propto V_{\text{stall}}^2$); Trailing-Edge Flap Types (Plain, Split high-drag airbrake effect, Slotted boundary layer re-energization, Fowler sliding AFT & DOWN increasing $S$ and camber, Double/Triple Slotted Fowler); Leading-Edge Devices (Fixed Slot duct re-energizing upper boundary layer, Retractable Slat extending stall angle $\alpha_{\text{stall}}$ from $15^\circ \to 25^\circ+$, Krueger flap, LE Droop); Master $C_L - \alpha$ Graphical Shift Analysis (TE Flaps shift curve UP & LEFT, making $\alpha_{L=0}$ more negative without increasing $\alpha_{\text{stall}}$, creating nose-down pitching moment $\Delta C_{m,ac} < 0$; LE Slats extend curve RIGHT & UP, increasing $\alpha_{\text{stall}}$ without shifting $\alpha_{L=0}$); Flapped Stall Speed equation $V_{\text{flapped}} = V_{\text{clean}}\sqrt{(S_{\text{clean}} C_{L,\max, \text{clean}})/(S_{\text{flapped}} C_{L,\max, \text{flapped}})}$; "FLAPS = UP & LEFT", "SLATS = EXTEND RIGHT", "FOWLER = AREA + CAMBER" mnemonics; 5-Second Stall Speed Reduction ratio shortcut; 2 fully solved GATE numerical/conceptual examples (Fowler flap stall speed reduction $60\text{ m/s} \to 39.56\text{ m/s}$ & $56.52\%$ landing distance reduction, flap deployment pitch trim MCQ requiring pull-back elevator $\delta_e < 0$); 4 critical exam traps.
  - Updated `06 - FORMULA SHEETS/Flight Mechanics - Formulas.md` with High-Lift Devices section.
  - Updated `02 - SUBJECTS/Flight Mechanics & Space Dynamics/_Index.md` (02.3 marked ✅ under Section 2).
- **AI Used:** Gemini 3.6 Flash (High)
- **Done:**
  - Created `02.2b - Sideslip Mechanics and Trim.md` — complete zero-to-AIR1 deep-dive note for Sideslip Mechanics, Crosswind Flight & Directional Trim under `02 - SUBJECTS/Flight Mechanics & Space Dynamics/`.
  - Covers: Kinematic definition of Sideslip Angle ($\sin\beta = v/V \implies \beta \approx v/V\text{ rad}$); Sign convention ($v > 0 \implies \beta > 0$, wind coming from aircraft RIGHT); Three Lateral-Directional Aerodynamic Derivatives ($C_{y_\beta} < 0$ side force slope, $C_{n_\beta} > 0$ weathercock/directional stability, $C_{l_\beta} < 0$ dihedral effect/lateral stability); Straight Steady Sideslip (SSSS) & Crosswind Landing equilibrium equations ($\dot{p}=\dot{q}=\dot{r}=\dot{\psi}=0$); Trim Rudder Deflection equation $\delta_r = -(C_{n_\beta}/C_{n_{\delta_r}})\beta$; Trim Bank Angle equation $C_{y_\beta}\beta + C_{y_{\delta_r}}\delta_r + C_L\sin\phi = 0$; Maximum Crosswind Velocity Limit $V_{\text{cross, max}} = V_\infty \sin(\beta_{\max})$ limited by rudder power $\delta_{r,\max}$; "RIGHT BETA = WIND FROM RIGHT", "STABILITY SIGNS: Weathercock +, Dihedral -", "BANK INTO WIND, RUDDER OUTWARD" mnemonics; 5-Second Rudder Deflection shortcut ($\delta_r = -(C_{n_\beta}/C_{n_{\delta_r}})\beta$); 2 fully solved GATE numerical examples (Trim rudder $\delta_r = +7.50^\circ$ & bank angle $\phi = 2.55^\circ$ for $6^\circ$ sideslip at $80\text{ m/s}$, maximum crosswind capability $15.53\text{ m/s}$ for $20^\circ$ rudder limit at $60\text{ m/s}$ approach); 4 critical exam traps.
  - Updated `06 - FORMULA SHEETS/Flight Mechanics - Formulas.md` with Sideslip Mechanics section.
  - Updated `02 - SUBJECTS/Flight Mechanics & Space Dynamics/_Index.md` (02.2b marked ✅ under Section 2).
- **AI Used:** Gemini 3.6 Flash (High)
- **Done:**
  - Created `02.2 - Angle of Attack and Sideslip Angle.md` — complete zero-to-AIR1 deep-dive note for Angle of Attack ($\alpha$) and Sideslip Angle ($\beta$) under `02 - SUBJECTS/Flight Mechanics & Space Dynamics/`.
  - Covers: Body-frame velocity components $(u, v, w)$ resolution to true airspeed $V = \sqrt{u^2+v^2+w^2}$; Exact transformation equations ($u = V\cos\alpha\cos\beta, v = V\sin\beta, w = V\sin\alpha\cos\beta$); Exact $\alpha$ formula ($\tan\alpha = w/u \implies \alpha = \arctan(w/u) \approx w/u\text{ rad}$); Exact $\beta$ formula ($\sin\beta = v/V \implies \beta = \arcsin(v/V) \approx v/V\text{ rad}$); Small angle approximations ($u \approx V, \alpha \approx w/V, \beta \approx v/V$); Alpha Types (Geometric $\alpha$, Zero-Lift Angle $\alpha_{L=0}$ where $C_L=0$, Absolute Alpha $\alpha_{abs} = \alpha - \alpha_{L=0}$); 3D Wing Downwash & Induced Alpha ($\alpha_i = \frac{C_L}{\pi AR e}\text{ rad} = \frac{57.3 C_L}{\pi AR e}\text{ deg}$); Effective Alpha ($\alpha_{eff} = \alpha - \alpha_i$); "A-W-U" & "B-V-V" mnemonics; 5-Second Degree-to-Radian induced alpha shortcut; 2 fully solved GATE numerical examples (Velocity resolution $V=121.055\text{ m/s}, \alpha=5.00^\circ, \beta=5.69^\circ$ for $(120, 12, 10.5)\text{ m/s}$, 3D wing effective alpha $\alpha_{eff} = 5.83^\circ$ and induced downwash $\alpha_i = 2.17^\circ$ for $AR=8.0$ wing); 4 critical exam traps.
  - Updated `06 - FORMULA SHEETS/Flight Mechanics - Formulas.md` with Angle of Attack & Sideslip Angle section.
  - Updated `02 - SUBJECTS/Flight Mechanics & Space Dynamics/_Index.md` (02.2 marked ✅ under Section 2).
- **AI Used:** Gemini 3.6 Flash (High)
- **Done:**
  - Created `02.1 - Aerodynamic Forces and Moments.md` — complete zero-to-AIR1 deep-dive note for Aerodynamic Forces & Moments (Wind vs. Body Axes & Center of Pressure) under `02 - SUBJECTS/Flight Mechanics & Space Dynamics/`.
  - Covers: Two physical sources of aerodynamic force (Normal pressure distribution $p$ + Tangential shear stress $\tau_w$); Wind Axes ($L$ perpendicular to $\vec{V}_\infty$, $D$ parallel to $\vec{V}_\infty$) vs. Body Axes ($N$ perpendicular to chord, $A$ parallel to chord); Vector transformation equations ($L = N\cos\alpha - A\sin\alpha$, $D = N\sin\alpha + A\cos\alpha$; $N = L\cos\alpha + D\sin\alpha$, $A = D\cos\alpha - L\sin\alpha$); Dimensionless aerodynamic coefficients ($C_L, C_D, C_N, C_A, C_m$); Small angle approximations ($C_L \approx C_N - C_A \alpha$, $C_D \approx C_N \alpha + C_A$); Aerodynamic Moments ($M$ pitch, $L$ roll, $N$ yaw, sign conventions); Aerodynamic Center ($AC$, $dC_m/d\alpha = 0$, $0.25c$ subsonic, $0.50c$ supersonic); Center of Pressure ($CP$, $M_{CP} = 0$, derivation $x_{cp}/c = x_{ac}/c - C_{m,ac}/C_L = 0.25 - C_{m,ac}/C_L$); $CP$ movement behavior with $\alpha$ (Symmetric airfoil $\implies x_{cp}/c = 0.25$ FIXED for all $\alpha$; Positively cambered $C_{m,ac} < 0 \implies x_{cp}/c = 0.25 + |C_{m,ac}|/C_L$, moves FORWARD towards $0.25c$ as $\alpha \uparrow$); "L-N-C-A-S" & "D-N-S-A-C" mnemonics; 5-Second Symmetric Airfoil CP shortcut; 3 fully solved GATE numerical examples (Body force conversion $N=40,198.9\text{ N}, A=-203.1\text{ N}$ for $6^\circ$ AoA, $CP$ location $0.40c$ for NACA 4412 cambered airfoil, leading edge moment coefficient $C_{m,LE} = -0.24$); 5 critical exam traps.
  - Updated `06 - FORMULA SHEETS/Flight Mechanics - Formulas.md` with Aerodynamic Forces & Moments section.
  - Updated `02 - SUBJECTS/Flight Mechanics & Space Dynamics/_Index.md` (02.1 marked ✅ under Section 2).
- **AI Used:** Gemini 3.6 Flash (High)
- **Done:**
  - Created `01.6d - Turn-and-Bank Indicator.md` — complete zero-to-AIR1 deep-dive note for Primary Flight Instruments: Turn-and-Bank Indicator, Turn Coordinator & Gyroscopes under `02 - SUBJECTS/Flight Mechanics & Space Dynamics/`.
  - Covers: Two-in-one housing anatomy (Gyroscopic Turn Needle for rate of turn $r=\dot{\psi}$ + Inclinometer/Slip-Skid Ball for quality of turn coordination); Gyroscopic Precession Mechanics ($\vec{T}_{\text{prec}} = I \omega r = K_s \theta_{\text{needle}} \implies \theta_{\text{needle}} \propto r$); Turn Indicator ($0^\circ$ horizontal gimbal, senses Yaw rate $r$ ONLY) vs. Turn Coordinator ($30^\circ$ canted gimbal, senses BOTH Roll rate $p$ and Yaw rate $r$ for early roll initiation feedback); Inclinometer Ball Quality Mechanics ($\tan\phi = \frac{V^2}{gR} = \frac{V r}{g}$ for Coordinated Turn $\implies$ ball CENTERED; Skidding Turn $\implies$ centrifugal $>$ gravity $\implies$ ball moves OUTSIDE of turn; Slipping Turn $\implies$ gravity $>$ centrifugal $\implies$ ball drops INSIDE of turn); Aviation Correction Rule ("STEP ON THE BALL" — press rudder pedal on same side as ball displacement); Standard Rate Turn ($3^\circ/\text{s} = 0.05236\text{ rad/s} \implies 360^\circ$ in $2\text{ min}$, radius $R_{\text{std}} \approx 19.1 V\text{ m}$, bank angle rule of thumb $\phi_{\text{std}}(^\circ) \approx V_{\text{knots}}/10 + 7$); "STEP ON THE BALL", "SKID = OUT, SLIP = IN", "CANTED 30° = TURN COORDINATOR" mnemonics; 3 fully solved GATE numerical/conceptual examples (Coordinated standard rate turn bank angle $28.1^\circ$ & load factor $n=1.134$ at $100\text{ m/s}$, gyroscopic precession torque $26.32\text{ mN}\cdot\text{m}$ for $12000\text{ rpm}$ gyro at $6^\circ/\text{s}$ turn, slip vs skid diagnostic MCQ); 4 critical exam traps.
  - Updated `06 - FORMULA SHEETS/Flight Mechanics - Formulas.md` with Turn-and-Bank Indicator section.
  - Updated `02 - SUBJECTS/Flight Mechanics & Space Dynamics/_Index.md` (01.6d marked ✅, **Section 1 Standard Atmosphere & Aircraft Basics marked COMPLETE 🎉**).
- **AI Used:** Gemini 3.6 Flash (High)
- **Done:**
  - Created `01.6c - Vertical Speed Indicator.md` — complete zero-to-AIR1 deep-dive note for Primary Flight Instruments: Vertical Speed Indicator (VSI) & Lag Mechanics under `02 - SUBJECTS/Flight Mechanics & Space Dynamics/`.
  - Covers: Differential static pressure rate gauge anatomy (diaphragm receives unrestricted static pressure $p(t)$, case receives restricted static pressure $p_c(t)$ via Calibrated Metering Orifice / Capillary Leak); Hydrostatic Rate Relation $dp/dt = -\rho g_0 \dot{h} \approx -12.01 \dot{h}\text{ Pa/s per m/s}$; Diaphragm expansion equation $\Delta p(t) = \tau \rho g_0 \dot{h}$ (proportional to rate of climb $\dot{h}$); Instrument First-Order Lag ($\tau \approx 6 - 9\text{ seconds}$, $\dot{h}_{\text{ind}}(t) = \dot{h}_{\text{true}}(1 - e^{-t/\tau})$); Instantaneous VSI (IVSI) accelerometer-driven dashpot pistons eliminating lag; Static Port Blockage Failure Mode ($p_c = p_{\text{diag}} \implies \Delta p = 0 \implies$ VSI FREEZES AT ZERO $\dot{h}=0$); Emergency Alternate Cockpit Static Mode (momentary false climb spike then normal rate); "C-O-L-D" & "Blocked Static = ZERO VSI" mnemonics; $12\text{-Pa/s}$ pressure rate shortcut; 3 fully solved GATE numerical/conceptual examples (VSI diaphragm pressure differential $360.4\text{ Pa}$ for $5\text{ m/s}$ climb rate, $63.2\%$ response at 1 time constant $\tau=8\text{ s}$, blocked static port comparison MCQ); 4 critical exam traps.
  - Updated `06 - FORMULA SHEETS/Flight Mechanics - Formulas.md` with Vertical Speed Indicator section.
  - Updated `02 - SUBJECTS/Flight Mechanics & Space Dynamics/_Index.md` (01.6c marked ✅).
- **AI Used:** Gemini 3.6 Flash (High)
- **Done:**
  - Created `01.6b - Airspeed Indicator.md` — complete zero-to-AIR1 deep-dive note for Primary Flight Instruments: Airspeed Indicator (ASI) & Failure Diagnostics under `02 - SUBJECTS/Flight Mechanics & Space Dynamics/`.
  - Covers: Differential pressure gauge anatomy (thin aneroid diaphragm receives $p_0$ from Pitot tube inside and $p$ from Static port inside instrument case $\implies$ expansion is $q_c = p_0 - p = \frac{1}{2}\rho_0 V_{\text{CAS}}^2$); Calibration to ISA sea-level density $\rho_0 = 1.2250\text{ kg/m}^3$; Master Color-Coded ASI Arcs ($V_{S0}$ landing stall at bottom of White Arc, $V_{S1}$ clean stall at bottom of Green Arc, $V_{\text{FE}}$ max flap extended at top of White Arc, $V_{\text{NO}}$ max structural cruise at top of Green / bottom of Yellow Arc, $V_{\text{NE}}$ Never-Exceed Red Line, $V_A$ design maneuvering speed); Complete Failure Modes Matrix (Case 1: Pitot blocked + drain open $\implies$ ASI drops to 0; Case 2: Pitot + drain trapped $\implies$ ASI acts as ALTIMETER, overreading in climb $p_0-p \uparrow$ and underreading in descent $p_0-p \downarrow$; Case 3: Static port blocked $\implies$ ASI underreads in climb $p_0 \downarrow, p_{\text{trap}} = \text{const}$ and overreads in descent; Case 4: Alternate cockpit static opened $\implies$ venturi suction lowers $p_{\text{case}} \implies$ ASI overreads); "P-U-C" & "S-U-C" mnemonics; Quick dynamic pressure shortcut $q_c \approx 0.6125 V_{\text{CAS}}^2\text{ Pa}$; 3 fully solved GATE numerical/conceptual examples (CAS calculation from $7.5\text{ kPa}$ impact pressure $110.66\text{ m/s} = 215.1\text{ knots}$, trapped pitot descent hazard analysis, static blockage at $3,000\text{ m}$ climb error); 4 critical exam traps.
  - Updated `06 - FORMULA SHEETS/Flight Mechanics - Formulas.md` with Airspeed Indicator section.
  - Updated `02 - SUBJECTS/Flight Mechanics & Space Dynamics/_Index.md` (01.6b marked ✅).
- **AI Used:** Gemini 3.6 Flash (High)
- **Done:**
  - Created `01.6a - Pressure Altimeter.md` — complete zero-to-AIR1 deep-dive note for Primary Flight Instruments: Pressure Altimeter & Altimetry Errors under `02 - SUBJECTS/Flight Mechanics & Space Dynamics/`.
  - Covers: Aneroid capsule mechanical anatomy (partially evacuated bellows inside static pressure case, capsules expand during climb as $p \downarrow$ and contract during descent as $p \uparrow$); ISA Hydrostatic Altimeter Calibration $h = \frac{T_0}{\lambda}[1 - (p/p_{\text{ref}})^{0.190263}]$; Pressure lapse rate at sea level ($\rho_0 g_0 \approx 12.01\text{ Pa/m} \approx 1\text{ hPa} / 30\text{ ft}$); Q-Codes Summary (QFE reads ZERO on runway ground height AGL, QNH reads airfield elevation MSL, QNE standard $1013.25\text{ hPa} / 29.92\text{ inHg}$ reads Flight Levels $h_p$); 4 Error Sources (Barometric setting error $h_{\text{true}} = h_{\text{ind}} + 27.3(QNH_{\text{act}}-QNH_{\text{dialed}})$; Exact Non-standard Temperature error $h_{\text{true}} = h_{\text{station}} + (h_{\text{ind}}-h_{\text{station}})(T_{\text{actual, K}}/T_{\text{ISA, K}})$; Cold air $T < T_{\text{ISA}}$ squeezes isobars $\implies h_{\text{ind}} > h_{\text{true}}$, aircraft is lower than shown; Position error $\Delta h_{\text{pos}}$; Instrument error $\Delta h_{\text{inst}}$); System Failures & Emergency Modes (Static port blocked $\implies$ altimeter FREEZES at blockage height; Emergency alternate cockpit static opened $\implies$ cockpit venturi suction lowers internal pressure $\implies$ altimeter OVERREADS by $100 - 200\text{ ft}$); "HIGH TO LOW, LOOK OUT BELOW" & "4% Per 10°C Temp Rule" mnemonics; 1 hPa = 30 ft shortcut; 3 fully solved GATE numerical/conceptual examples (true altitude calculation in $-20.2^\circ\text{C}$ cold air at $10,000\text{ ft} \implies 9,247.2\text{ ft}$, $8\text{ hPa}$ barometric mis-setting error $+218.4\text{ ft}$, alternate static port selection diagnostic MCQ); 4 critical exam traps.
  - Updated `06 - FORMULA SHEETS/Flight Mechanics - Formulas.md` with Pressure Altimeter section.
  - Updated `02 - SUBJECTS/Flight Mechanics & Space Dynamics/_Index.md` (01.6a marked ✅).
- **AI Used:** Gemini 3.6 Flash (High)
- **Done:**
  - Created `01.5b - Calibrated and Indicated Airspeeds.md` — complete zero-to-AIR1 deep-dive note for Indicated (IAS) & Calibrated Airspeed (CAS) Measurement, Calibration & System Failures under `02 - SUBJECTS/Flight Mechanics & Space Dynamics/`.
  - Covers: Physical relation $V_{\text{CAS}} = V_{\text{IAS}} + \Delta V_{\text{inst}} + \Delta V_{\text{pos}}$; Instrument Mechanical Error ($\Delta V_{\text{inst}}$) vs Position/Location Error ($\Delta V_{\text{pos}}$) caused by perturbed flow near static ports; Low-Speed Incompressible CAS Calibration Equation $V_{\text{CAS}} = \sqrt{2(p_0-p)/\rho_0}$; High-Speed Compressible Subsonic Calibration (Saint-Venant / Wantzel equation $V_{\text{CAS}} = \sqrt{5a_0^2[(1+q_c/p_0)^{0.2857}-1]}$); Operational Airspeed Limits & ASI Color-Coded Arcs ($V_{S0}$ landing stall at bottom of White Arc, $V_{S1}$ clean stall at bottom of Green Arc, $V_{\text{FE}}$ max flap extended at top of White Arc, $V_{\text{NO}}$ max structural cruise at top of Green / bottom of Yellow Arc, $V_{\text{NE}}$ Never-Exceed Red Line, $V_A$ maneuvering speed); Complete Blocked Pitot-Static System Failure Modes (Pitot blocked + drain open $\implies$ ASI drops to 0; Pitot + drain trapped $\implies$ ASI acts as ALTIMETER, overreading in climb $p_0-p \uparrow$ and underreading in descent $p_0-p \downarrow$; Static port blocked $\implies$ ASI underreads in climb and overreads in descent); "P-U-C" & "WHITE=Flaps, GREEN=Normal, YELLOW=Caution, RED=Never Exceed" mnemonics; 5-Second Incompressible CAS shortcut ($V_{\text{CAS}} = 1.278\sqrt{q_c\text{ in Pa}}\text{ m/s}$); 2 fully solved GATE numerical/conceptual examples (Incompressible vs Compressible CAS calculation from $13\text{ kPa}$ impact pressure $145.69\text{ m/s}$ vs $141.78\text{ m/s}$, blocked pitot tube climb diagnostic MCQ); 4 critical exam traps.
  - Updated `06 - FORMULA SHEETS/Flight Mechanics - Formulas.md` with Calibrated & Indicated Airspeed section.
  - Updated `02 - SUBJECTS/Flight Mechanics & Space Dynamics/_Index.md` (01.5b marked ✅).
- **AI Used:** Gemini 3.6 Flash (High)
- **Done:**
  - Created `01.5 - Airspeeds (IAS, CAS, EAS, TAS).md` — complete zero-to-AIR1 deep-dive note for Airspeed Types (IAS, CAS, EAS, TAS) & Pitot-Static Mechanics under `02 - SUBJECTS/Flight Mechanics & Space Dynamics/`.
  - Covers: The 4-stage ICE-T Airspeed Conversion Chain ($\text{IAS} \xrightarrow{\text{Position/Inst}} \text{CAS} \xrightarrow{\text{Compressibility } f_c} \text{EAS} \xrightarrow{1/\sqrt{\sigma}} \text{TAS}$); Physical definition of Equivalent Airspeed (EAS) ($q = \frac{1}{2}\rho V_{\text{TAS}}^2 = \frac{1}{2}\rho_0 V_{\text{EAS}}^2 \implies V_{\text{EAS}} = V_{\text{TAS}}\sqrt{\sigma}$); Atmospheric density ratio $\sigma = \rho/\rho_0$; Dynamic pressure $q$ and lift/drag forces depending directly on $V_{\text{EAS}}$; Stall speed behavior ($V_{\text{EAS, stall}} = \sqrt{2W/\rho_0 S C_{L,\max}}$ is CONSTANT with altitude, while $V_{\text{TAS, stall}} = V_{\text{EAS, stall}}/\sqrt{\sigma}$ increases with altitude); Pitot-Static Tube mechanics (Incompressible Bernoulli $p_0-p = \frac{1}{2}\rho V^2$, Compressible Isentropic $p_0/p = (1+0.2M^2)^{3.5}$, Rayleigh Supersonic Pitot Formula behind normal shock); Groundspeed $\vec{V}_G = \vec{V}_{\text{TAS}} + \vec{V}_{\text{wind}}$ (Headwind vs Tailwind effects on flight time); "I-C-E-T" & "EAS is Equal-q Sea-Level Speed" mnemonics; 2 AIR-1 speed tricks; 3 fully solved GATE numerical examples (EAS to TAS conversion at $7\text{ km}$ altitude $216.14\text{ m/s}$ & Mach $0.692$, True stall speed at $10\text{ km}$ altitude $80.38\text{ m/s}$, round-trip wind time increase); 5 critical exam traps.
  - Updated `06 - FORMULA SHEETS/Flight Mechanics - Formulas.md` with Airspeed Types section.
  - Updated `02 - SUBJECTS/Flight Mechanics & Space Dynamics/_Index.md` (01.5 marked ✅).
- **AI Used:** Gemini 3.6 Flash (High)
- **Done:**
  - Created `01.4 - Pressure Altitude and Altitude Types.md` — complete zero-to-AIR1 deep-dive note for Pressure Altitude, Density Altitude & Altimetry under `02 - SUBJECTS/Flight Mechanics & Space Dynamics/`.
  - Covers: 5 Altitude Types Spectrum (Pressure Altitude $h_p$ where $p_{ISA}(h_p)=p_{ambient}$, Density Altitude $h_d$ where $\rho_{ISA}(h_d)=\rho_{ambient}$, Temperature Altitude $h_T=(288.15-T_{act})/0.0065$, True Altitude $h_{true}$, Indicated Altitude $h_{ind}$); Exact Troposphere Equations for $h_p = 44330.8 \left[ 1 - (p/p_0)^{0.190263} \right] \text{ m}$ and $h_d = 44330.8 \left[ 1 - (\rho/\rho_0)^{0.234968} \right] \text{ m}$; Isothermal Stratosphere $h_p = 11000 - 6341.6 \ln(p/22632)$; Linear Density Altitude Approximations ($h_d \approx h_p + 120 \times \Delta T_{^\circ\text{C}} \text{ ft}$ or $h_d \approx h_p + 36.6 \times \Delta T_{\text{K}} \text{ m}$); Altimeter Barometric Settings (QFE reads ZERO on runway ground height AGL, QNH reads airfield elevation above MSL, QNE standard $1013.25\text{ hPa} / 29.92\text{ inHg}$ reads Flight Levels $h_p$); Temperature Errors ("From High to Low, Look Out Below!" — cold air $T < T_{ISA}$ squeezes pressure levels $\implies h_{ind} > h_{true}$, aircraft is lower than indicated); "HIGH TO LOW, LOOK OUT BELOW" & "QFE=Field, QNH=Height, QNE=FL" mnemonics; 2 AIR-1 speed tricks; 3 fully solved GATE numerical examples ($h_p$ from $70,120\text{ Pa}$ pressure sensor $3,008.3\text{ m}$, exact vs linear $h_d$ on hot $ISA+31^\circ\text{C}$ day $3,046.1\text{ m}$, QNH to QFE runway altimeter conversion); 5 critical exam traps.
  - Updated `06 - FORMULA SHEETS/Flight Mechanics - Formulas.md` with Pressure Altitude & Altimetry section.
  - Updated `02 - SUBJECTS/Flight Mechanics & Space Dynamics/_Index.md` (01.4 marked ✅).
- **AI Used:** Gemini 3.6 Flash (High)
- **Done:**
  - Created `01.3b - Airplane Parts and Wing Geometry.md` — complete zero-to-AIR1 deep-dive note for Airplane Structural Parts, Wing Geometry Mathematics & Control Tab Mechanics under `02 - SUBJECTS/Flight Mechanics & Space Dynamics/`.
  - Covers: Detailed Fuselage Internal Framework (Longerons carrying primary longitudinal bending $M_b$, Stringers preventing skin compression buckling, Bulkheads distributing point loads & pressurization hoop stress, Formers maintaining cross-section shape); Wing Box Internal Stress Distribution (Spar Flanges taking pure axial tension/compression bending moments $M_b$, Spar Webs taking vertical shear force $V_y$, Ribs maintaining airfoil contour & transferring pressure loads, Thin Skin taking torsional shear stress $T$ via closed shear flow $q = T/2A_k$); Complete Mathematical Derivation of Mean Aerodynamic Chord ($\bar{c} = \frac{2}{3} c_r \frac{1+\lambda+\lambda^2}{1+\lambda}$) and Spanwise Location ($\bar{y} = \frac{b}{6} \frac{1+2\lambda}{1+\lambda}$); Special limiting cases (Rectangular wing $\lambda=1 \implies \bar{c}=c_r, \bar{y}=b/4$; Delta wing $\lambda=0 \implies \bar{c}=\frac{2}{3}c_r, \bar{y}=b/6$); Control Tab Mechanics Comparison (Trim tab for $F_s=0$, Balance tab moving OPPOSITE to lower $F_s$, Anti-Servo tab moving SAME DIRECTION on all-moving stabilators to increase $F_s$ feedback, Servo tab directly stick-driven to float main surface, Spring tab for variable high-speed assist); "2/3 & 1/6 Rule" & "OPPOSITE vs SAME Tab Rule" mnemonics; 10-Second MAC shortcut for $\lambda=0.5$ ($\bar{c} = \frac{7}{9} c_r$); 3 fully solved GATE numerical/conceptual examples (MAC and $\bar{y}$ calculation for $12\text{ m}$ tapered wing, spar flange tensile stress calculation $312.5\text{ MPa}$ under uniform lift, anti-servo tab selection MCQ); 4 critical exam traps (MAC $\bar{c}$ vs Geometric mean chord $\bar{c}_{\text{geom}}$, spar flange vs web duties, anti-servo tab motion direction, taper ratio definition).
  - Updated `06 - FORMULA SHEETS/Flight Mechanics - Formulas.md` with Wing Geometry & Control Tab Mechanics section.
  - Updated `02 - SUBJECTS/Flight Mechanics & Space Dynamics/_Index.md` (01.3b marked ✅).
- **AI Used:** Gemini 3.6 Flash (High)
- **Done:**
  - Created `01.3 - Aircraft Components and Controls.md` — complete zero-to-AIR1 deep-dive note for Fixed-Wing Aircraft Configuration, Structural Components & Controls under `02 - SUBJECTS/Flight Mechanics & Space Dynamics/`.
  - Covers: 5 Major Structural Components (Fuselage Monocoque vs Semi-Monocoque skin+stringer+bulkhead; Wing internal anatomy: Spars carry bending $M_b$ & vertical shear $V_y$, Ribs maintain airfoil contour & transfer surface pressure, Skin carries torsional shear $T$, Stringers resist skin compression buckling; Empennage vertical/horizontal tail; Powerplant nacelles/pylons; Landing Gear oleo struts); Right-Handed Body-Fixed Motion Axes ($X$-longitudinal Roll $\phi, p, L$ via Ailerons; $Y$-lateral Pitch $\theta, q, M$ via Elevator; $Z$-vertical Yaw $\psi, r, N$ via Rudder pointing downwards); Control Surface Deflection Sign Conventions (Elevator down is $+\delta_e \implies M < 0$ nose DOWN pitch; Rudder left is $+\delta_r \implies N > 0$ nose RIGHT yaw; Ailerons left down right up is $+\delta_a \implies L > 0$ right roll); Auxiliary Controls (Trim tabs moving OPPOSITE to main surface for $F_s=0$, Spoilers lift dump); High-Lift Devices (Plain, Split, Slotted, Fowler flaps increasing both $S$ and camber to lower $V_{\text{stall}}=\sqrt{2W/\rho S C_{L,\max}}$; Leading edge Slats extending $\alpha_{\text{stall}}$ from $15^\circ$ to $25^\circ$); Aerodynamic Center ($AC$) vs Center of Pressure ($CP$) ($dC_{m,ac}/d\alpha = 0$, $AC = 0.25\bar{c}$ subsonic $\to 0.50\bar{c}$ supersonic causing Supersonic Trim Tuck); "S-R-S-S" & "L-Roll, M-Pitch, N-Yaw" mnemonics; 2 AIR-1 speed tricks; 3 fully solved GATE numerical/conceptual examples (wing internal member load matching PYQ, $32.6\%$ stall speed reduction via Fowler flaps, control stick pull-back deflection sign); 5 critical exam traps.
  - Updated `06 - FORMULA SHEETS/Flight Mechanics - Formulas.md` with Aircraft Components, Controls & Motion Axes section.
  - Updated `02 - SUBJECTS/Flight Mechanics & Space Dynamics/_Index.md` (01.3 marked ✅).
- **AI Used:** Gemini 3.6 Flash (High)
- **Done:**
  - Created `01.2 - Classification of Aircraft.md` — complete zero-to-AIR1 deep-dive note for Classification of Aircraft under `02 - SUBJECTS/Flight Mechanics & Space Dynamics/`.
  - Covers: Master Spectrum: Aerostats (Lighter-Than-Air / LTA, Archimedes buoyancy $F_B = \rho g V$) vs. Aerodynes (Heavier-Than-Air / HTA, dynamic lift $L = \frac{1}{2}\rho V^2 S C_L$); Fixed-wing vs Rotary-wing vs Flapping-wing (Ornithopters); Wing Height Configuration (High-wing $+3^\circ$ pendulum stability gain vs Mid-wing zero interference drag vs Low-wing gear integration and required $+4^\circ$ dihedral); Wing Planform Shapes (Rectangular root stall first, Elliptical minimum induced drag $e=1.0$ with uniform stall, Tapered $e\approx 0.96$, Swept-back $M_{\text{eff}}=M_\infty \cos\Lambda$ with tip stall pitch-up trap, Swept-forward root stall with aeroelastic divergence risk, Delta vortex lift at high $\alpha$); Tail & Control Configurations (Conventional negative tail load $L_w - L_t = W$ vs Canard positive trim lift $L_w + L_c = W$ and automatic anti-stall safety vs T-tail Deep Stall blanketing vs V-tail ruddervators); Landing Gear Architecture (Tricycle gear main wheels behind CG $\implies$ directionally STABLE ground roll vs Taildragger main wheels ahead of CG $\implies$ directionally UNSTABLE ground loop risk); Rotary-Wing Breakdown (Helicopter engine-driven rotor with anti-torque tail rotor vs Autogyro engine-powered forward prop with free autorotation rotor and zero torque vs Gyrodyne); Flight Speed Regimes (Subsonic $M<0.8$, Transonic $0.8\le M\le 1.2$ with $M_{\text{crit}}$ shock formation, Supersonic $1.2<M\le 5.0$, Hypersonic $M>5.0$ high-temperature gas dynamics); "T-L-M-P" & "C-A-N-A-R-D" mnemonics; 2 AIR-1 speed tricks; 3 fully solved GATE numerical/conceptual examples (Canard vs Conventional $10.9\%$ main wing lift savings, stall progression MCQ, tricycle vs taildragger ground stability); 5 critical exam traps.
  - Updated `06 - FORMULA SHEETS/Flight Mechanics - Formulas.md` with Aircraft Classification & Configurations section.
  - Updated `02 - SUBJECTS/Flight Mechanics & Space Dynamics/_Index.md` (01.2 marked ✅).
- **AI Used:** Gemini 3.6 Flash (High)
- **Done:**
  - Created `01.1 - Standard Atmosphere.md` — complete zero-to-AIR1 deep-dive note for Standard Atmosphere (ISA Model) under `02 - SUBJECTS/Flight Mechanics & Space Dynamics/`.
  - Covers: Geometric Altitude ($h_g$) vs Geopotential Altitude ($h$) with exact inverse-square gravity derivation $g(h_g) = g_0 (r_0/(r_0+h_g))^2$ and bidirectional conversion formulas $h = \frac{r_0 h_g}{r_0 + h_g} \iff h_g = \frac{r_0 h}{r_0 - h}$; Hydrostatic Equation $dp = -\rho g_0 dh$; Ideal Gas Law $p = \rho R T$; Master differential equation $\frac{dp}{p} = -\frac{g_0}{RT}dh$; Standard Sea Level Values ($T_0=288.15\text{ K}$, $p_0=101325\text{ Pa}$, $\rho_0=1.2250\text{ kg/m}^3$, $a_0=340.29\text{ m/s}$, $R=287.053\text{ J/(kg}\cdot\text{K)}$, $\gamma=1.40$); Complete Layer Structure up to 51 km; Troposphere ($0\le h\le 11\text{ km}$) lapse rate $\lambda=+6.5\text{ K/km}$ ($0.0065\text{ K/m}$), temperature profile $T(h)=T_0-\lambda h$, pressure ratio $\delta=(T/T_0)^{g_0/\lambda R}=(T/T_0)^{5.256}$, density ratio $\sigma=(T/T_0)^{g_0/\lambda R - 1}=(T/T_0)^{4.256}$; Lower Stratosphere ($11\le h\le 20\text{ km}$) isothermal layer $T_{11}=216.65\text{ K}$, exponential pressure/density decay ratio $e^{-g_0(h-11000)/RT_{11}}=e^{-(h-11000)/H_s}$, scale height $H_s \approx 6.34\text{ km}$; Speed of Sound formula $a=\sqrt{\gamma R T} \approx 20.047\sqrt{T}\text{ m/s}$ (depends ONLY on static $T$); Master identity $\delta = \sigma \cdot \theta$; Non-standard atmosphere ($ISA \pm \Delta T$) density & pressure altitude; "5.256 & 4.256" and "G-to-G Transformation" mnemonics; 4 AIR-1 speed tricks; 4 fully solved GATE examples (troposphere $5\text{ km}$, stratosphere $15\text{ km}$, sounding rocket $100\text{ km}$ $h_g\to h$, off-standard $ISA+20^\circ\text{C}$); 5 critical exam traps.
  - Updated `06 - FORMULA SHEETS/Flight Mechanics - Formulas.md` with complete Standard Atmosphere section and formulas.
  - Updated `02 - SUBJECTS/Flight Mechanics & Space Dynamics/_Index.md` (01.1 marked ✅).
- **AI Used:** Gemini 3.6 Flash (High)
- **Done:**
  - Created `07.3b - Poisson Distribution.md` — complete zero-to-AIR1 deep-dive note for Poisson Distribution.
  - Covers: PMF $P(X=k) = \frac{e^{-\lambda} \lambda^k}{k!}$; Rare event physical context; Parameters ($\mu=\lambda, \sigma^2=\lambda$); Unique identifying rule **Mean = Variance = $\lambda$**; Unimodal/bimodal mode formula $\lfloor\lambda\rfloor$; Always positive skewness $\gamma_1=1/\sqrt{\lambda}$; Rate scaling across time/space intervals $\lambda = \alpha t$; Additive property of independent Poisson variables $\text{Poisson}(\lambda_1 + \lambda_2)$; Connection to Exponential inter-arrival distribution $f(t)=\alpha e^{-\alpha t}$; Limiting form of Binomial ($n\ge 20, p\le 0.05, \lambda=np$); Recurrence relation $P(X=k+1) = \frac{\lambda}{k+1} P(X=k)$; "At least 1" complement formula $1 - e^{-\lambda}$; RIPE & MVL-P mnemonics; 3 speed tricks; 5 step-by-step solved GATE examples (basic accident probability, airport arrivals rate scaling, finding $\lambda$ from $P(X=1)=P(X=2)$, satellite noise pulse addition, rivet defect Poisson approximation); 4 critical exam traps (time scaling omission, non-Poisson difference $X_1-X_2$, complement formula error, rate vs inter-arrival mean confusion).
  - Updated `07 - Probability and Statistics.md` and `_Index.md` (07.3b ✅, Section 7 Probability & Statistics marked **COMPLETE** ✅).

### Session 54 — 2026-07-27
- **AI Used:** Gemini 3.6 Flash (High)
- **Done:**
  - Created `07.3c - Normal Distribution.md` — complete zero-to-AIR1 deep-dive note for Normal (Gaussian) Distribution.
  - Covers: PDF formula $f(x) = \frac{1}{\sigma\sqrt{2\pi}} e^{-(x-\mu)^2/2\sigma^2}$; Bell curve geometric properties (symmetry about $\mu$, Mean=Median=Mode=$\mu$, peak height $1/\sigma\sqrt{2\pi}$, inflection points at $\mu\pm\sigma$, mesokurtic $\beta_2=3$, skewness=0); Standard normal variable $Z = \frac{X-\mu}{\sigma} \sim N(0,1)$; CDF $\Phi(z)$ rules ($\Phi(0)=0.5$, $\Phi(-z)=1-\Phi(z)$, $P(a\le X\le b)=\Phi(z_2)-\Phi(z_1)$); Empirical 68-95-99.7 rule ($1\sigma \to 68.27\%$, $2\sigma \to 95.45\%$, $3\sigma \to 99.73\%$); Critical Z-table for confidence levels (90% $\to 1.645$, 95% $\to 1.960$, 99% $\to 2.576$); Linear combination and additivity property ($aX_1+bX_2+c \sim N(a\mu_1+b\mu_2+c, a^2\sigma_1^2+b^2\sigma_2^2)$); Difference of normal variables $X_1-X_2 \sim N(\mu_1-\mu_2, \sigma_1^2+\sigma_2^2)$ (variance PLUS sign rule); Sample mean distribution $\bar{X} \sim N(\mu, \sigma^2/n)$; Central Limit Theorem (CLT) for $n \ge 30$; Normal approximation to Binomial/Poisson with continuity correction; BELL-S & EMPIRIC mnemonics; 3 speed tricks (structural reliability interference $S-L$, symmetry shortcut, SE vs SD); 5 step-by-step solved GATE examples (shaft diameter Z-score interval, structural failure probability $P(S<L)$, finding $\mu$ and $\sigma$ from two percentiles, rivet package weight using CLT, 3-variable linear combination variance); 4 critical exam traps (subtracting variances for difference, $\sigma$ vs $\sigma^2$ in notation, using $\sigma$ instead of $\sigma/\sqrt{n}$ for sample mean, forgetting continuity correction).
  - Updated `07 - Probability and Statistics.md` and `_Index.md` (07.3c ✅).

### Session 53 — 2026-07-27
- **AI Used:** Gemini 3.6 Flash (High)
- **Done:**
  - Created `07.3a - Binomial Distribution.md` — complete zero-to-AIR1 deep-dive note for Binomial Distribution.
  - Covers: Bernoulli trial foundation ($E[X]=p, Var(X)=pq$); 4 mandatory BINS conditions (Binary, Independent, Number fixed, Same prob $p$); PMF $\binom{n}{k}p^k q^{n-k}$; Parameters ($\mu=np$, $\sigma^2=npq$, $\sigma=\sqrt{npq}$); Strict **Mean > Variance** rule ($np > npq$, fast test for binomial model validity); Maximum variance $n/4$ at $p=0.5$; Mode calculation formula $\lfloor(n+1)p\rfloor$ (unimodal vs bimodal); Skewness behavior ($p=0.5$ symmetric, $p<0.5$ positive, $p>0.5$ negative); Additive property $B(n_1+n_2, p)$ for identical $p$; PMF recurrence relation $\frac{P(X=k+1)}{P(X=k)} = \frac{n-k}{k+1} \cdot \frac{p}{q}$; "At least 1" complement formula $1-q^n$ & log equation for minimum $n$; Poisson and Normal approximations; BINS & MVP-B mnemonics; 3 speed tricks; 5 step-by-step solved GATE examples (coin toss 4 heads, minimum testing trials for 0.95 reliability, finding $n,p$ from mean=4 & var=3, mode of $B(10, 0.4)$, additivity $E[(X+Y)^2]$); 4 critical exam traps (without replacement non-independence, expecting Var>Mean, adding binomials with different $p$, summing vs complement for $P(X\ge 1)$).
  - Updated `07 - Probability and Statistics.md` and `_Index.md` (07.3a ✅).

### Session 52 — 2026-07-27
- **AI Used:** Gemini 3.6 Flash (High)
- **Done:**
  - Created `07.2b - Variance and Covariance.md` — complete zero-to-AIR1 deep-dive note for Variance & Covariance.
  - Covers: Physical moment of inertia analogy; Discrete, Grouped, and Random Variable $Var(X) = E[X^2] - (E[X])^2$; Population vs Sample variance ($n$ vs $n-1$ Bessel's correction); Master properties of variance ($Var(c)=0$, $Var(aX+b)=a^2Var(X)$, constant shift adds 0, $Var(X\pm Y) = Var(X) + Var(Y) \pm 2Cov(X,Y)$); Independent variable plus sign rule ($Var(X-Y) = Var(X)+Var(Y)$); General linear combination $Var(\sum a_i X_i)$; Sample mean variance $Var(\bar{X})=\sigma^2/n$ & Standard Error $\sigma/\sqrt{n}$; Covariance $Cov(X,Y) = E[XY]-E[X]E[Y]$ and properties; Pearson correlation coefficient $\rho_{XY} \in [-1, 1]$; Standard distributions variance reference table (Discrete Uniform $(n^2-1)/12$, Continuous Uniform $(b-a)^2/12$, Bernoulli $pq$, Binomial $npq$, Poisson $\lambda$, Geometric $(1-p)/p^2$, Exponential $1/\lambda^2$, Normal $\sigma^2$); Chebyshev's inequality $P(|X-\mu|\ge k\sigma) \le 1/k^2$; VARS & COV-R mnemonics; 4 speed tricks; 5 step-by-step solved GATE examples ($Var(2X-3Y+4)$ independent, continuous RV integral, non-independent linear combination with $Cov$, correlation $\rho$ to $Var(X+Y)$, Chebyshev bounds); 4 critical exam traps.
  - Updated `07 - Probability and Statistics.md` and `_Index.md` (07.2b ✅).

### Session 51 — 2026-07-27
- **AI Used:** Claude (Anthropic)
- **Done:**
  - Created `07.2 - Mean Median Mode.md` — complete zero-to-AIR1 note for descriptive statistics.
  - Covers: AM (raw, weighted, grouped, combined), GM, HM; AM-GM-HM inequality $HM\le GM\le AM$ with equality iff all values equal; average speed = HM; Median (raw: odd/even formula, grouped: $L+\frac{N/2-F}{f}h$); Mode (raw: most frequent, grouped: $L+\frac{f_1-f_0}{2f_1-f_0-f_2}h$); Karl Pearson's empirical formula Mode=$3M-2\bar{x}$; Skewness and MOMED order (positive: $\bar{x}>M>Z$, negative: $\bar{x}<M<Z$); Range, MD about mean and median; Variance $\sigma^2=\overline{x^2}-\bar{x}^2$ (MSM-SM² shortcut); sample variance $n-1$ vs population variance $n$; CV; quartiles and IQR; linear transformation $y=ax+b$ → $\sigma_y^2=a^2\sigma_x^2$; combined mean+variance formula with $d_i=\bar{x}_i-\bar{x}_{12}$; MOMED skewness mnemonic; VAMP dispersion mnemonic; 5 speed tricks; 5 solved examples (raw data, variance shortcut for $\{2,4,6,8,10\}$, mode from Pearson given mean=35 median=33, grouped data mean+variance, combined mean+SD); 4 exam traps ($n$ vs $n-1$, average speed = HM, adding constant doesn't change variance, median class vs modal class confusion).
  - Updated `07 - Probability and Statistics.md` and `_Index.md` (07.2 ✅, 1 topic remaining).

### Session 50 — 2026-07-27
- **AI Used:** Claude (Anthropic)
- **Done:**
  - Created `07.1 - Bayes Theorem.md` — complete zero-to-AIR1 note for Bayes' Theorem.
  - Created `07 - Probability and Statistics.md` — Section Overview.
  - Covers: Kolmogorov axioms (K1-K3); conditional probability $P(A|B) = P(A \cap B)/P(B)$; multiplication rule; independence vs mutual exclusivity (critical distinction: mutually exclusive events with $P>0$ are NEVER independent); Law of Total Probability $P(A) = \sum P(A|B_i)P(B_i)$; Bayes' theorem full derivation (conditional probability + total probability); Prior, Likelihood, Posterior, Marginal terminology; Bayes table systematic method (4-step PLACE framework); odds form $\frac{P(B|A)}{P(B^c|A)} = \frac{P(A|B)}{P(A|B^c)} \cdot \frac{P(B)}{P(B^c)}$ (avoids denominator); Flip-the-Fraction trick; Odds form shortcut; Sum-to-1 posterior verification; Don't-swap-A-and-B trick; PLACE mnemonic; CLAP mnemonic; 5 solved examples (3-machine factory bolt problem, medical test with base rate fallacy, 2-machine problem, conditional from inclusion-exclusion, bag problem with fractions); 4 exam traps.
  - Updated `_Index.md`: Section 7 Probability opened (07.1 ✅, 2 topics remaining).

### Session 49 — 2026-07-27
- **AI Used:** Claude (Anthropic)
- **Done:**
  - Created `06.3 - Cauchy Riemann Equations.md` — dedicated standalone GATE reference for C-R equations.
  - Covers: Full derivation from first principles via two-direction limit (Path 1: real axis $\Delta z=\Delta x$; Path 2: imaginary axis $\Delta z=i\Delta y$) → setting equal → $u_x=v_y$ and $u_y=-v_x$; 4 equivalent forms of $f'(z)$ (choice of $u_x+iv_x$, $v_y-iu_y$, etc.); C-R in polar form $u_r=v_\theta/r$, $v_r=-u_\theta/r$ with $r$ factor emphasized; Necessary vs Sufficient conditions table; Comprehensive pattern table (Category A: always analytic, Category B: never analytic, Category C: only at isolated points); 4 C-R consequences (harmonic functions, orthogonality of level curves → streamlines ⊥ equipotentials, conformal mapping, real-imaginary part determination); Diagonal-Antidiagonal 2×2 grid trick; SAME-OPPOSITE rule; CURE mnemonic (4 steps); UV-Cross-Match mnemonic; 5 solved examples ($z^2+2iz$ full check with derivative, $|z|^2$ MCQ trap with answer (c), finding $b$ for $x^2-by^2+2ixy$ to be analytic, polar C-R for $\sqrt{z}$, harmonic conjugate of $2x(1-y)$ via Milne-Thomson); 4 exam traps (necessary vs sufficient, sign error on $u_y=-v_x$, forgotten $1/r$ in polar, isolated point ≠ analytic).
  - Updated `06 - Complex Variables.md` and `_Index.md` (06.3 added and marked ✅).

### Session 48 — 2026-07-27
- **AI Used:** Claude (Anthropic)
- **Done:**
  - Created `06.2 - Analytic Functions.md` — dedicated deep-dive on analytic functions (companion to 06.1).
  - Covers: Limit and continuity in $\mathbb{C}$ (direction-independence requirement); Formal definition of analyticity vs. differentiability-at-a-point; C-R equations derived from two-direction limit (real and imaginary axis approaches); C-R in polar form $u_r = v_\theta/r$, $v_r = -u_\theta/r$; Pattern recognition table (always analytic: polynomials, $e^z$, trig; never analytic: $\bar{z}$, $|z|$, Re(z), Im(z)); $|z|^2$ differentiable only at $z=0$ but not analytic anywhere; Harmonic connection via Laplace equation; Systematic harmonic conjugate procedure (Step 1-5 + substitution shortcut); Milne-Thomson method (fastest path: $f(z) = \int[u_x(z,0) - iu_y(z,0)]dz + C$); 5 key properties (infinite differentiability, power series with $R$ = dist to nearest singularity, isolated zeros, Liouville theorem, maximum modulus principle); Identity theorem; Conformal mapping (analytic + $f'(z_0)\ne 0$); Möbius transformation $w=(az+b)/(cz+d)$; Joukowski transform $w=z+a^2/z$ for airfoil shapes; CHAIN mnemonic; REAL mnemonic; 4 speed tricks; 5 solved examples (full C-R analysis, Milne-Thomson for $e^x\cos y$, max modulus principle, radius of convergence, finding $f(z)$ with initial condition); 4 exam traps.
  - Updated `06 - Complex Variables.md` section overview (06.2 added).
  - Updated `_Index.md` (06.2 added under Complex Variables section).

### Session 47 — 2026-07-27
- **AI Used:** Claude (Anthropic)
- **Done:**
  - Created `06.1 - Complex Variables.md` — full zero-to-AIR1 deep-dive (Special Topic).
  - Created `06 - Complex Variables.md` — Section Overview.
  - Covers: Complex number definition; Argand plane; Three forms (Rectangular, Polar $re^{i\theta}$, Euler $e^{i\theta}=\cos\theta+i\sin\theta$) with special values; Euler's identity $e^{i\pi}+1=0$; Algebraic operations (polar form for mult/div, conjugate for division); De Moivre's theorem $(re^{i\theta})^n=r^ne^{in\theta}$ and $n$-th roots equally spaced on circle; Cube roots of unity ($1+\omega+\omega^2=0$); Complex functions $f(z)=u+iv$; Cauchy-Riemann equations $u_x=v_y$, $u_y=-v_x$ (necessary & sufficient for analyticity); C-R in polar form; Harmonic functions (both $u,v$ satisfy Laplace); Harmonic conjugate construction procedure; Elementary functions (complex exponential, multi-valued log, trig, hyperbolic); Cauchy's theorem $\oint f\,dz=0$; Cauchy integral formula $\oint \frac{f(z)}{z-z_0}\,dz = 2\pi i f(z_0)$ and generalized derivative formula; Taylor vs Laurent series; Singularity classification (removable, simple pole, order-$m$ pole, essential); Three residue formulas (general, simple pole, quotient form); Residue theorem $\oint = 2\pi i\sum\text{Res}$; CAMP mnemonic; RIPE-SE mnemonic; 4 speed tricks ($i$-power cycle, polar mult/div, C-R cross pattern, circle check); 5 solved examples ($z^2$ analyticity, $(1+i)^{10}$ De Moivre, Cauchy integral $e^z/z(z-1)$ via partial fractions, order-2 pole residue, harmonic conjugate of $x^2-y^2-2y$); 4 exam traps.
  - Updated `_Index.md`: Section 6 Complex Variables marked ✅.

### Session 46 — 2026-07-27
- **AI Used:** Claude (Anthropic)
- **Done:**
  - Created `05.1 - Fourier Series.md` — full zero-to-AIR1 deep-dive on Fourier Series (Special Topic).
  - Created `05 - Fourier Series.md` — Section Overview.
  - Covers: Periodic functions and period; Dirichlet conditions (4 criteria); Euler-Fourier formulas on $[-\pi,\pi]$ and $[-L,L]$; Orthogonality of trig functions (WHY the formulas work); Even/odd symmetry test and consequence (even→cosines only, $b_n=0$; odd→sines only, $a_0=a_n=0$); Even/odd simplified coefficient formulas (factor 2 → integrate over $[0,L]$); Half-range cosine series (even extension, Dirichlet BCs) and sine series (odd extension, Neumann BCs) with PDE connection; Parseval's theorem and Basel problem derivation $\sum 1/n^2 = \pi^2/6$; Complex exponential form $\sum c_n e^{inx}$ with $c_n$ formulas; 4 standard results (series for $x$, $x^2$, $|x|$, square wave); ACE-COB mnemonic; SOS sign-pattern mnemonic; 4 speed tricks (even/odd first, $a_0/2$ is mean value, Gibbs phenomenon 9%, coefficient decay $1/n$ vs $1/n^2$ vs $1/n^3$); 4 fully solved examples (piecewise $f(x)=x$ for $x>0$, half-range cosine for $\pi-x$, Basel sum via Parseval, $a_2$ for $x^2$); 4 exam traps.
  - Updated `_Index.md`: Section 5 Fourier Series now marked ✅ complete.

### Session 45 — 2026-07-27
- **AI Used:** Claude (Anthropic)
- **Done:**
  - Created `04.7 - Linear Interpolation.md` — final topic of Numerical Methods section.
  - Covers: Interpolation vs. Regression (key distinction); Two-point linear $y^* = y_0 + \frac{x^*-x_0}{x_1-x_0}(y_1-y_0)$ with Midpoint-is-average trick; Error bound $|E| \le \frac{h^2}{8}\max|f''|$ ($O(h^2)$); Newton's Forward Difference Interpolation (equal spacing, near beginning) — difference table, substitution $s=(x-x_0)/h$, formula $y=y_0+s\Delta y_0+\frac{s(s-1)}{2!}\Delta^2 y_0+\cdots$; Newton's Backward Difference Interpolation (near end, $s=(x-x_n)/h$, $s\le 0$); Lagrange Interpolation (unequal spacing) — basis $L_i(x)=\prod_{j\ne i}\frac{x-x_j}{x_i-x_j}$, Cardinal property, Partition of Unity $\sum L_i=1$ (verification trick); Newton's Divided Differences — DD table construction, general formula; FEB-BEN-LAG mnemonic; SOME-SQUARE-CUBE mnemonic; 4 speed tricks; 4 solved examples (2-point speed of sound, Newton Forward cubic $x^3$, Lagrange 3-point, Newton DD quadratic); 4 exam traps (backward sign, Lagrange denominator, wrong formula for position, partition of unity check).
  - Marked `04 - Numerical Methods` section COMPLETE (04.1–04.7) in `_Index.md`.
  - Added new "### 5. Interpolation" sub-section in `04 - Numerical Methods.md`.

### Session 44 — 2026-07-27
- **AI Used:** Claude (Anthropic)
- **Done:**
  - Created `04.6b - Least Squares Method.md` — general method of least squares (extending beyond linear regression).
  - Covers: LSQ criterion $S = \sum(y_i - \hat{y}_i)^2$; Why squared (not abs): differentiable, penalizes outliers, Gauss-Markov; Polynomial regression — quadratic $a_0 + a_1 x + a_2 x^2$ with 3×3 normal equations via 7-column table; General Matrix Formulation: Design matrix $\mathbf{A}$ (size $n \times (m+1)$), Gram matrix $\mathbf{A}^T\mathbf{A}$, master formula $\mathbf{A}^T\mathbf{A}\mathbf{a} = \mathbf{A}^T\mathbf{y}$, solution $\mathbf{a} = (\mathbf{A}^T\mathbf{A})^{-1}\mathbf{A}^T\mathbf{y}$; Quality metrics: SSR, Standard Error $S_E = \sqrt{\text{SSR}/(n-m-1)}$, $R^2 = 1 - \text{SSR/SST}$; Linearity-in-coefficients test (when to linearize first); PANAM mnemonic; 4 speed tricks; 3 examples (quadratic parabola fit on 4 points, Gram matrix MCQ, jet engine SFC linear fit with physical interpretation).
  - Linked into `_Index.md` (04.6b marked ✅) and `04 - Numerical Methods.md` (Regression section complete).

### Session 43 — 2026-07-27
- **AI Used:** Claude (Anthropic)
- **Done:**
  - Integrated dedicated deep-dive zero-to-AIR1 topic note for `Numerical Methods: Linear Regression & Least Squares` (`02 - SUBJECTS/Engineering Mathematics/04.6 - Linear Regression.md`).
  - Covers: Least squares criterion $\min S = \sum(y_i - a_0 - a_1 x_i)^2$; Normal equations derivation via $\partial S/\partial a_0 = 0$ and $\partial S/\partial a_1 = 0$ giving 2×2 linear system; Explicit formulas: Slope $a_1 = \frac{n\sum x_i y_i - \sum x_i \sum y_i}{n\sum x_i^2 - (\sum x_i)^2}$, Intercept $a_0 = \bar{y} - a_1\bar{x}$; 5-column summation table method (SNOV mnemonic); Pearson Correlation Coefficient $r$ (strong $|r|>0.9$, no correlation $r=0$); Non-linear linearization — Power law $y=ax^b \to \ln y = \ln a + b\ln x$, Exponential $y=ae^{bx} \to \ln y = \ln a + bx$, Reciprocal; Aerospace drag polar $C_D = C_{D0} + kC_L^2$ linearized via $X=C_L^2$; 4 AIR-1 speed tricks (line always passes through $(\bar{x},\bar{y})$, numerator of $a_1$ = numerator of $r$, mean-centered shortcut, sign of $r$ = sign of $a_1$); 3 fully solved GATE examples (standard regression on 5-point data, prediction, power law linearization); 3 exam traps.
  - Cross-linked into `04 - Numerical Methods.md` (Regression section updated) and `_Index.md` (04.6 marked ✅).

### Session 42 — 2026-07-27
- **AI Used:** Claude (Anthropic)
- **Done:**
  - Note `04.5 - Simpsons Rules.md` was already created in Session 41 (same session, re-request). Confirmed file exists and is complete.
  - Updated `_Index.md` to formally link 04.5 Simpson's Rules (04.5 marked ✅).
  - Covers: Simpson's 1/3 Rule composite formula $\frac{h}{3}[(y_0+y_n)+4\sum y_{odd}+2\sum y_{even}]$ (requires $n$ EVEN); Simpson's 3/8 Rule composite formula $\frac{3h}{8}[(y_0+y_n)+3\sum y_{non-mult3}+2\sum y_{mult3}]$ (requires $n$ multiple of 3); Stencil weights [1,4,2,4,1] and [1,3,3,2,3,3,1]; Degree of Precision = 3 for both (exact for cubics, including surprise gain for 1/3 rule); $O(h^4)$ error analysis; Master comparison table (Trap vs 1/3 vs 3/8); O-4-E-2 mnemonic; 4 AIR-1 speed tricks (polynomial exactness test, sub-interval applicability rule, fast stencil labeling, multiplier memory); 3 solved examples.

### Session 41 — 2026-07-27
- **AI Used:** Gemini (Google DeepMind)
- **Done:**
  - Integrated dedicated deep-dive zero-to-AIR1 topic note for `Numerical Methods: Trapezoidal Rule` (`02 - SUBJECTS/Engineering Mathematics/04.4 - Trapezoidal Rule.md`).
  - Covers: Geometric concept & single-segment formula $\frac{h}{2}(y_0+y_1)$; Composite Trapezoidal Rule Master Formula $\frac{h}{2}[(y_0+y_n) + 2\sum_{i=1}^{n-1} y_i]$; Stencil weight pattern $[1, 2, 2, \dots, 2, 1]$; Degree of precision $= 1$ (exact for linear polynomials); Truncation error analysis $E_n = -\frac{(b-a)h^2}{12}f''(\xi) = O(h^2)$; Minimum sub-intervals formula $n_{min} \ge \sqrt{\frac{(b-a)^3 M_2}{12\epsilon}}$; Convexity over/under-estimation test ($f''>0$ concave up $\implies$ Overestimate, $f''<0$ concave down $\implies$ Underestimate); HALF mnemonic; 4 AIR-1 speed tricks (1-2-2-2-1 fast stencil, $N=n+1$ ordinates vs sub-intervals rule, 3-second over/under-estimation test, 10-second min sub-intervals formula); 4 fully solved GATE examples ($\int_0^1 \frac{dx}{1+x}$ with $n=4$, minimum sub-intervals calculation, aerospace tabular flight-test lift integration, over/under estimation MCQ); 4 exam traps.
  - Cross-linked into `04 - Numerical Methods.md` (Integration section updated) and `_Index.md` (04.4 marked ✅).

### Session 40 — 2026-07-27
- **AI Used:** Gemini (Google DeepMind)
- **Done:**
  - Integrated dedicated deep-dive zero-to-AIR1 topic note for `Numerical Methods: Basic Numerical Differentiation` (`02 - SUBJECTS/Engineering Mathematics/04.3 - Numerical Differentiation.md`).
  - Covers: Taylor series derivation of finite difference schemes; First derivative formulas — Forward Difference $f'(x_0) \approx \frac{y_1-y_0}{h} + O(h)$, Backward Difference $f'(x_0) \approx \frac{y_0-y_{-1}}{h} + O(h)$, Central Difference $f'(x_0) \approx \frac{y_1-y_{-1}}{2h} + O(h^2)$ (2nd-order accuracy via odd-term cancellation); 3-point high-accuracy forward/backward formulas ($O(h^2)$); Second derivative central difference $f''(x_0) \approx \frac{y_1-2y_0+y_{-1}}{h^2} + O(h^2)$ with $[1,-2,1]/h^2$ stencil; Numerical differentiation from finite difference tables (Newton's Forward $\frac{1}{h}(\Delta y_0 - \frac{\Delta^2 y_0}{2} + \frac{\Delta^3 y_0}{3} \dots)$ vs Newton's Backward $\frac{1}{h}(\nabla y_n + \frac{\nabla^2 y_n}{2} + \frac{\nabla^3 y_n}{3} \dots)$); Error Analysis & Optimal Step Size $h_{opt}$ (Truncation vs Round-off balance); FBC mnemonic; 4 AIR-1 speed tricks (Central difference supremacy, 1-2-1 stencil memory, Symmetry error cancellation rule, Forward vs Backward sign pattern); 3 fully solved GATE examples (scheme error comparison for $x^3$, 2nd derivative from table, tabular data forward difference); 3 exam traps.
  - Cross-linked into `04 - Numerical Methods.md` (Differentiation section updated) and `_Index.md` (04.3 marked ✅).

### Session 39 — 2026-07-27
- **AI Used:** Gemini (Google DeepMind)
- **Done:**
  - Integrated dedicated deep-dive zero-to-AIR1 topic note for `Numerical Methods: Newton-Raphson Method` (`02 - SUBJECTS/Engineering Mathematics/04.2 - Newton Raphson Method.md`).
  - Covers: Tangent line geometric derivation & Master Formula $x_{n+1} = x_n - \frac{f(x_n)}{f'(x_n)}$; Taylor series derivation; Order of Convergence Analysis ($p=2$ Quadratic Convergence, error relation $e_{n+1} \approx \frac{f''(\alpha)}{2f'(\alpha)} e_n^2$, precision doubling); Sufficient condition for convergence $\left|\frac{f(x)f''(x)}{[f'(x)]^2}\right| < 1$; 4 Failure Modes ($f'=0$ stationary point, $f''=0$ inflection point, oscillations, multiple roots order drop to linear $p=1$); Modified Newton-Raphson for multiple roots ($x_{n+1} = x_n - m \frac{f(x_n)}{f'(x_n)}$); 4 Special Speed Formulas: Square root $\sqrt{N} \implies x_{n+1} = \frac{1}{2}(x_n + N/x_n)$, Reciprocal $1/N \implies x_n(2 - Nx_n)$ (division-free!), Cube root $\sqrt[3]{N} \implies \frac{1}{3}(2x_n + N/x_n^2)$, Inverse square root $1/\sqrt{N} \implies \frac{x_n}{2}(3 - N x_n^2)$; TAN mnemonic; 4 AIR-1 speed tricks; 4 fully solved GATE examples (standard 1-step iteration, reciprocal calculation, error constant $C$, convergence order MCQ); 4 exam traps.
  - Cross-linked into `04 - Numerical Methods.md` (Root finding section updated) and `_Index.md` (04.2 marked ✅).

### Session 38 — 2026-07-27
- **AI Used:** Gemini (Google DeepMind)
- **Done:**
  - Integrated dedicated deep-dive zero-to-AIR1 topic note for `Numerical Methods: Bisection Method` (`02 - SUBJECTS/Engineering Mathematics/04.1 - Bisection Method.md`).
  - Covers: Intermediate Value Theorem (IVT) foundation ($f(a)f(b)<0$ guarantee); Step-by-step Bisection algorithm & interval halving sequence ($L_n = (b_0-a_0)/2^n$); Absolute Error Bound ($|c_n - \alpha| \le \frac{b_0-a_0}{2^n}$); Minimum iterations formula $n_{min} = \lceil \frac{\ln(b_0-a_0)-\ln\epsilon}{\ln 2} \rceil$; Convergence Order $p=1$ (Linear, rate factor $C=0.5$); Master Comparison Table (Bisection vs Regula-Falsi vs Secant vs Newton-Raphson); HALVE mnemonic; 4 AIR-1 speed tricks (10-second min iterations formula with $\log_{10} 2 \approx 0.30103$, Decimal places accuracy formula $\epsilon = 0.5\times 10^{-k}$, Systematic 5-column iteration table method, Initial bracket selection strategy); 4 fully solved GATE examples (3-iteration root calculation, minimum iteration bound, transcendental equation root, convergence order MCQ); 4 exam traps.
  - Created `04 - Numerical Methods.md` section overview linking all sub-notes.
  - Cross-linked into `_Index.md` (Numerical Methods section updated, 04.1 marked ✅).
  - **MILESTONE: First topic of "Numerical Methods" section complete.**

### Session 37 — 2026-07-27
- **AI Used:** Gemini (Google DeepMind)
- **Done:**
  - Integrated dedicated deep-dive zero-to-AIR1 topic note for `Differential Equations: Heat Equation` (`02 - SUBJECTS/Engineering Mathematics/03.6 - Heat Equation.md`).
  - Covers: 1D Heat Equation $u_t = \alpha^2 u_{xx}$ (Parabolic, $\Delta=0$), thermal diffusivity $\alpha^2 = \frac{k}{\rho c_p}$, 1 IC + 2 BCs needed; Case 1 (Homogeneous Dirichlet BCs $u(0,t)=0, u(L,t)=0$) — 5-step Separation of Variables derivation, Fourier sine series coefficients $c_n$, exponential decay factor $e^{-(n\pi\alpha/L)^2 t}$; Case 2 (Insulated Ends Neumann BCs $u_x(0,t)=0, u_x(L,t)=0$) — cosine series solution; Case 3 (Non-Homogeneous End Temperatures $u(0,t)=T_1, u(L,t)=T_2$) — Steady-State ($u_{ss}(x) = T_1 + \frac{T_2-T_1}{L}x$) + Transient ($u_{tr}(x,t)$) breakdown; EST mnemonic; 4 AIR-1 speed tricks (Insulated rod average temp shortcut $u(x,\infty) = \frac{1}{L}\int_0^L f(x)dx$, Linear steady-state profile rule, Direct coefficient matching without integrals, Decay factor memory rule); 3 fully solved GATE examples (homogeneous sine input, non-homogeneous BC steady-state, insulated rod final temp); 3 exam traps.
  - Cross-linked into `03 - ODEs.md` (PDE section updated) and `_Index.md` (03.6 marked ✅ — **All 3 PDE Separation of Variables Topics Complete!**).
  - **MILESTONE: Entire Differential Equations (ODEs + PDEs) section is now COMPLETE.**

### Session 36 — 2026-07-27
- **AI Used:** Gemini (Google DeepMind)
- **Done:**
  - Integrated dedicated deep-dive zero-to-AIR1 topic note for `Differential Equations: Laplace Equation (PDE)` (`02 - SUBJECTS/Engineering Mathematics/03.5 - Laplace Equation PDE.md`).
  - Covers: 2D Laplace Equation $\nabla^2 u = u_{xx} + u_{yy} = 0$ (Elliptic, $\Delta=-4<0$), 3D Cartesian/Polar forms, Harmonic functions; Aerospace applications (incompressible potential flow $\nabla^2\phi=0$, steady heat conduction, stream function $\nabla^2\psi=0$); 3 BVP types (Dirichlet, Neumann, Robin); Separation of Variables in Cartesian coordinates for rectangular plates — 5-step derivation (SHIN mnemonic), Fourier sine series coefficients $E_n$; Polar coordinates $(r, \theta)$ solution — Master Interior Disk formula $u(r,\theta) = \frac{a_0}{2} + \sum (r/R)^n [a_n\cos n\theta + b_n\sin n\theta]$ vs Exterior Disk formula $(R/r)^n$; Fundamental Properties — Mean Value Property ($u(0,0) = \frac{1}{2\pi}\int_0^{2\pi} f(\theta)d\theta$), Maximum/Minimum Principle (max/min occurs ONLY on boundary $\partial D$), Uniqueness theorem; 4 AIR-1 speed tricks (Disk center average rule, Direct coefficient matching in polar, Max principle boundary evaluation, Constant boundary value rule); 3 fully solved GATE examples (rectangular plate, disk center temp, max principle on disk); 3 exam traps.
  - Cross-linked into `03 - ODEs.md` (PDE section updated) and `_Index.md` (03.5 marked ✅).

### Session 35 — 2026-07-27
- **AI Used:** Claude (Anthropic)
- **Done:**
  - Integrated dedicated deep-dive zero-to-AIR1 topic note for `Differential Equations: Wave Equation` (`02 - SUBJECTS/Engineering Mathematics/03.4 - Wave Equation.md`).
  - Covers: 1D Wave equation $u_{tt}=c^2u_{xx}$ (Hyperbolic, $\Delta=4c^2>0$), 2 ICs needed ($u(x,0)=f(x)$, $u_t(x,0)=g(x)$), 3 standard BCs (Fixed-Fixed, Free-Free, Fixed-Free); Full Separation of Variables — 6-step algorithm (ST-OCT mnemonic): assume $u=X(x)T(t)$, split → spatial+temporal ODEs, apply BCs → eigenvalues $\mu_n=n\pi/L$, eigenfunctions $\sin(n\pi x/L)$, superposition $u=\sum[a_n\cos\omega_n t+b_n\sin\omega_n t]\sin(n\pi x/L)$, Fourier coefficients from ICs; Special case $g(x)=0$ → all $b_n=0$; d'Alembert's formula for infinite domain ($u=[f(x+ct)+f(x-ct)]/2+\frac{1}{2c}\int g\,ds$); Natural frequencies $f_n=nc/2L$ (Fixed-Fixed) vs $(2n-1)c/4L$ (Fixed-Free, odd harmonics only); Normal modes / standing waves, resonance condition; 3 BC case eigenfunction table; 4 AIR-1 speed tricks (Fixed=Sine/Free=Cosine, d'Alembert for MCQs, Odd/Even symmetry, Resonance recognition); Fully solved GATE example (4-mark); 4 exam traps.
  - Cross-linked into `03 - ODEs.md` (PDE sub-list updated) and `_Index.md` (03.4 marked ✅).

### Session 34 — 2026-07-27
- **AI Used:** Claude (Anthropic)
- **Done:**
  - Integrated dedicated deep-dive zero-to-AIR1 topic note for `Differential Equations: Classification of PDEs` (`02 - SUBJECTS/Engineering Mathematics/03.3 - Classification of PDEs.md`).
  - Covers: General 2nd order linear PDE $Au_{xx}+Bu_{xy}+Cu_{yy}+Du_x+Eu_y+Fu=G$, Discriminant $\Delta=B^2-4AC$ master formula; Three Classes — Elliptic ($\Delta<0$: Laplace $\nabla^2u=0$, Poisson, steady-state BVP, incompressible potential flow, steady heat), Parabolic ($\Delta=0$: Heat equation $u_t=\alpha^2u_{xx}$, IBVP with 1 IC, infinite signal speed, Prandtl boundary layer), Hyperbolic ($\Delta>0$: Wave equation $u_{tt}=c^2u_{xx}$, IBVP with 2 ICs, finite signal speed $c$, shock waves, acoustics); Variable-Coefficient PDEs — classification varies by point (Tricomi equation for transonic flow); Order & Linearity analysis; 3-second classification trick; Standard equations memory table (Laplace/Wave/Heat by inspection); BCs needed for each type; EPH-Every Physics Has mnemonic; sign-of-$\Delta$ conic analogy mnemonic; 4 fully solved GATE examples (direct, mixed-coefficient, wave MCQ, variable-coefficient region); Master comparison table; 4 exam traps.
  - Cross-linked into `03 - ODEs.md` (Section 4 updated with all formulas) and `_Index.md` (03.3 marked ✅).

### Session 33 — 2026-07-27
- **AI Used:** Claude (Anthropic)
- **Done:**
  - Integrated dedicated deep-dive zero-to-AIR1 topic note for `Differential Equations: Higher Order Linear ODEs` (`02 - SUBJECTS/Engineering Mathematics/03.2 - Higher Order Linear ODEs.md`).
  - Covers: Standard form $a_ny^{(n)}+\cdots+a_0y=f(x)$, D-operator notation $F(D)y=f(x)$, Complete Solution $y=y_c+y_p$; CF via Characteristic Equation — Master CF Table (Real distinct $C_1e^{m_1x}+C_2e^{m_2x}$, Repeated $(C_1+C_2x)e^{mx}$, Complex $e^{\alpha x}(C_1\cos\beta x+C_2\sin\beta x)$, Pure imaginary $C_1\cos\beta x+C_2\sin\beta x$), DARCP mnemonic; PI via 6 D-Operator Rules (Rule 1: $e^{ax}/F(a)$, Rule 2: $\sin ax/F(-a^2)$ with resonance formula, Rule 3: Binomial expansion for $x^n$, Rule 4: Exponential Shift $e^{ax}[F(D+a)]^{-1}V$, Rule 5: $e^{ax}\sin bx$, Rule 6: $xV$ differentiation rule); UC Method + Modification Rule; VOP Method (Wronskian formula); 5-step Master Algorithm; 4 fully solved GATE examples (distinct roots+exp, complex+resonance, repeated+exp-shift, UC for $x\cos x$); 4 AIR-1 speed tricks; 4 exam traps.
  - Cross-linked into `03 - ODEs.md` (Section 2 updated with all formulas) and `_Index.md` (03.2 marked ✅).

### Session 32 — 2026-07-27
- **AI Used:** Claude (Anthropic)
- **Done:**
  - Integrated dedicated deep-dive zero-to-AIR1 topic note for `Differential Equations: First Order Linear ODEs` (`02 - SUBJECTS/Engineering Mathematics/03.1 - First Order Linear ODEs.md`).
  - Covers: Master Classification Tree for all 5 First-Order ODE Types; Type 1 Separable (half-life $t_{1/2}=\ln2/k$, time constant $\tau=1/k$); Type 2 Homogeneous (substitution $v=y/x$, reduces to separable, degree-check recognition shortcut); Type 3 Linear ($\mu=e^{\int P\,dx}$, IMAI mnemonic, standard IF patterns table: $1/x\to x$, $\tan x\to\sec x$, $\cot x\to\sin x$, etc.); Type 4 Bernoulli (substitution $v=y^{1-n}$, reduces to linear); Type 5 Exact ($M_y=N_x$ test, "My=Nx → My ex!" mnemonic, $F(x,y)=C$ solution); Integrating Factor for non-exact ($\mu(x)=e^{\int(M_y-N_x)/N\,dx}$); 5-step master algorithm; 4 fully solved GATE-standard examples; Quick-Fire formula sheet; 4 exam traps.
  - Rebuilt `03 - ODEs.md` as proper section overview linking to all ODE sub-notes.
  - Cross-linked into `_Index.md` (Differential Equations section updated, 03.1 marked ✅).
  - **MILESTONE: First major topic of new section "Differential Equations" begun.**

### Session 31 — 2026-07-27
- **AI Used:** Claude (Anthropic)
- **Done:**
  - Integrated dedicated deep-dive zero-to-AIR1 topic note for `Calculus: Green's Theorem` (`02 - SUBJECTS/Engineering Mathematics/02.2.10 - Greens Theorem.md`).
  - Covers: Two Forms — Circulation-Curl ($\oint_C P\,dx+Q\,dy = \iint_D(Q_x-P_y)\,dA$) and Flux-Divergence ($\oint_C\vec{F}\cdot\hat{n}\,ds = \iint_D\nabla\cdot\vec{F}\,dA$), Area Formulas ($\text{Area}=\frac{1}{2}\oint_C(x\,dy-y\,dx)=\oint_C x\,dy=-\oint_C y\,dx$), Standard areas table (Ellipse $\pi ab$, Circle $\pi R^2$, Triangle shoelace), Path Independence & Exact Differentials ($Q_x=P_y\implies\oint=0$), Multiply-Connected Regions with holes (singularity punch-out technique), Relation to Stokes (Green=Stokes with $\hat{n}=\hat{k}$ in $xy$-plane), 4 AIR-1 speed tricks (Exact Diff=0, Constant Curl×Area, Ellipse $\pi ab$, Convert hard line to easy double), "QP Rule" mnemonic ($Q_x-P_y$ always), 4 fully solved GATE examples, 3 exam traps (sign order, orientation, singularity).
  - Cross-linked into `02.2 - Several Variable Calculus.md` (Part XII), `_Index.md` (Integral Theorems — All Three Complete! ✅).
  - **MILESTONE: Entire Multivariable Calculus section of Engineering Mathematics is now COMPLETE.**

### Session 30 — 2026-07-27
- **AI Used:** Claude (Anthropic)
- **Done:**
  - Integrated dedicated deep-dive zero-to-AIR1 topic note for `Calculus: Gauss's Divergence Theorem` (`02 - SUBJECTS/Engineering Mathematics/02.2.9 - Gauss Divergence Theorem.md`).
  - Covers: Formal Statement ($\oiint_S \vec{F}\cdot\hat{n}\,dS = \iiint_V \nabla\cdot\vec{F}\,dV$), Physical interpretation (outward flux = total source strength), Aerospace applications (Continuity Equation, Gauss's Law, Fourier Heat), Solenoidal Zero-Flux corollary, Volume from Surface Integral ($V = \frac{1}{3}\oiint_S \vec{r}\cdot\hat{n}\,dS$), Position Vector Flux ($3V$, sphere $4\pi R^3$), Constant Vector Zero-Flux, Green's First & Second Identities, Open Surface Split-Cap Trick, 4-step GATE Algorithm, 4 AIR-1 speed tricks (Constant Div×Vol, Position Vector Sphere shortcut, Open Surface Cap subtraction, Solenoidal=0), DIVS mnemonic, 4 fully solved GATE examples, 3 exam traps, Big-3 Theorem comparison table.
  - Cross-linked into `02.2 - Several Variable Calculus.md` (Part XI), `_Index.md` (Integral Theorems section).

### Session 29 — 2026-07-27
- **AI Used:** Claude (Anthropic)
- **Done:**
  - Integrated dedicated deep-dive zero-to-AIR1 topic note for `Calculus: Stokes' Theorem` (`02 - SUBJECTS/Engineering Mathematics/02.2.8 - Stokes Theorem.md`).
  - Covers: Formal Statement ($\oint_C \vec{F}\cdot d\vec{r} = \iint_S (\nabla\times\vec{F})\cdot\hat{n}\,dS$), Right-Hand Rule orientation, Aerodynamic Circulation ($\Gamma = \iint_S \vec{\omega}\cdot\hat{n}\,dS$, Kutta-Joukowski Lift), Green's Theorem as 2D special case, Irrotational field corollary ($\oint_C=0$), Surface Independence Property, Flat Disk Replacement Trick for complex surfaces, Closed Surface Zero-Flux rule ($\nabla\cdot(\nabla\times\vec{F})=0$), 4-step GATE algorithm, 4 AIR-1 speed tricks (Flat Disk Replacement, Constant Curl$\times$Area shortcut, Closed Surface=0, Irrotational=0), 3 fully solved GATE examples, 3 exam traps.
  - Cross-linked into `02.2 - Several Variable Calculus.md` (Part X), `_Index.md` (Integral Theorems section).

### Session 28 — 2026-07-27
- **AI Used:** Gemini (Google DeepMind)
- **Done:**
  - Integrated dedicated deep-dive zero-to-AIR1 topic note for `Calculus: Volume Integrals` (`02 - SUBJECTS/Engineering Mathematics/02.2.7 - Volume Integrals.md`).
  - Covers: Scalar Volume Integrals ($\iiint_V f\,dV$, solid mass $M = \iiint_V \rho\,dV$, volume $V = \iiint_V 1\,dV$, Center of Mass $(\bar{x},\bar{y},\bar{z})$, Moments of Inertia $I_{zz}$), 3 Master Coordinate Systems & $dV$ elements: Cartesian ($dV = dx\,dy\,dz$), Cylindrical ($x=r\cos\theta, y=r\sin\theta, z=z \implies dV = r\,dr\,d\theta\,dz$, Jacobian $J=r$), Spherical Polar ($\rho, \phi, \theta \implies dV = \rho^2\sin\phi\,d\rho\,d\phi\,d\theta$, Jacobian $J=\rho^2\sin\phi$), Dirichlet's & Liouville's Formula ($\iiint_{x+y+z\le 1} x^{l-1}y^{m-1}z^{n-1}dV = \frac{\Gamma(l)\Gamma(m)\Gamma(n)}{\Gamma(l+m+n+1)}$), Extended Dirichlet Formula for scaled/power bounds, Standard Volumes Table (sphere $\frac{4}{3}\pi R^3$, ellipsoid $\frac{4}{3}\pi abc$, cylinder $\pi R^2 h$, cone $\frac{1}{3}\pi R^2 h$, tetrahedron $\frac{abc}{6}$, paraboloid cap $\frac{1}{2}\pi h^2$), 4 AIR-1 speed tricks (Dirichlet 10-sec evaluation, Spherical integrand 3-integral factorization, Tetrahedron $\frac{abc}{6}$ rule, Constant density symmetry center of mass rule), 4 solved GATE examples, 3 exam traps.
  - Cross-linked into `02.2 - Several Variable Calculus.md`, `02.2.6 - Surface Integrals.md`, `_Index.md`.

### Session 27 — 2026-07-27
- **AI Used:** Gemini (Google DeepMind)
- **Done:**
  - Integrated dedicated deep-dive zero-to-AIR1 topic note for `Calculus: Surface Integrals` (`02 - SUBJECTS/Engineering Mathematics/02.2.6 - Surface Integrals.md`).
  - Covers: Scalar Surface Integrals ($\iint_S f\,dS$, surface area, shell mass) vs Vector Surface Integrals / Flux ($\text{Flux} = \iint_S \vec{F} \cdot \hat{n}\,dS$, discharge, Fourier heat loss, electric/magnetic flux), 3 Evaluation Methods: Explicit surface $z = g(x,y)$ projection formula ($\iint_{R_{xy}} (-F_1 g_x - F_2 g_y + F_3) dx\,dy$), Implicit surface $G(x,y,z)=0$ projection formula ($dS = \frac{\|\nabla G\|}{\|G_z\|}dx\,dy$), Parametric surface $\vec{r}(u,v)$ ($dS = \|\vec{r}_u \times \vec{r}_v\| du\,dv$), Standard Geometry Surface Area & $dS$ Table (plane, sphere $4\pi R^2$, hemisphere $2\pi R^2$, cylinder lateral $2\pi R h$, cone $\sqrt{2}\pi R^2$), Gauss's Divergence Theorem connection for closed surfaces ($\iint_S \vec{F} \cdot \hat{n}\,dS = \iiint_V (\nabla \cdot \vec{F}) dV$), 4 AIR-1 speed tricks (explicit projection shortcut, position vector sphere flux $4\pi R^3$, constant field closed flux zero, flat surface normal vector recognition), 4 solved GATE examples, 3 exam traps.
  - Cross-linked into `02.2 - Several Variable Calculus.md`, `02.2.5 - Line Integrals.md`, `_Index.md`.

### Session 26 — 2026-07-27
- **AI Used:** Gemini (Google DeepMind)
- **Done:**
  - Integrated dedicated deep-dive zero-to-AIR1 topic note for `Calculus: Line Integrals` (`02 - SUBJECTS/Engineering Mathematics/02.2.5 - Line Integrals.md`).
  - Covers: Scalar Line Integrals ($\int_C f\,ds$ with arc length element $ds = \|\vec{r}'(t)\|dt$, mass of wire, total arc length) vs Vector Line Integrals ($\int_C \vec{F} \cdot d\vec{r}$, Work Done, Aerodynamic Circulation $\Gamma = \oint_C \vec{V} \cdot d\vec{r}$ & Kutta-Joukowski Lift Theorem $L' = \rho_\infty V_\infty \Gamma$), Standard Parametrizations Table (straight line $(1-t)A + tB$, circle, ellipse, parabola, helix), Fundamental Theorem of Line Integrals & 3 Equivalent Path Independence Conditions ($\vec{F}=\nabla\phi \iff \nabla\times\vec{F}=\vec{0} \iff \oint\vec{F}\cdot d\vec{r}=0$), Green's Theorem in the Plane ($\oint_C (Pdx+Qdy) = \iint_D (Q_x - P_y)dA$), Green's Area Formula ($\text{Area} = \frac{1}{2}\oint_C (x dy - y dx) = \oint_C x dy$), 4 AIR-1 speed tricks (path-independence test first, Green's constant-curl shortcut $k \times \text{Area}$, straight-line parametrization $(1-t)A + tB$, conservative loop zero-work), 4 solved GATE examples, 4 exam traps.
  - Cross-linked into `02.2 - Several Variable Calculus.md`, `02.2.4 - Curl.md`, `_Index.md`.

### Session 25 — 2026-07-27
- **AI Used:** Gemini (Google DeepMind)
- **Done:**
  - Integrated dedicated deep-dive zero-to-AIR1 topic note for `Calculus: Directional Derivatives` (`02 - SUBJECTS/Engineering Mathematics/02.2.2.1 - Directional Derivatives.md`).
  - Covers: Intuitive concept (rate of change along ANY unit vector $\hat{u}$ vs partials along coordinate axes), Limit definition & Dot Product Master Formula ($D_{\hat{u}}\phi = \nabla\phi \cdot \hat{u}$), 4 Extremal properties (Max rate $+\|\nabla\phi\|$ along $\nabla\phi$, Min rate $-\|\nabla\phi\|$ opposite, Zero rate $0$ perpendicular/tangent to level surface), 5 Standard GATE Question Types (Along vector $\vec{a}$, Toward point $Q$, Max/Min rate & direction, Zero rate direction, Finding unknown parameters), 4 AIR-1 speed tricks (Unit vector mandatory rule, 2D perpendicular shortcut $(-B, A)$, Angle formula $\phi_x\cos\alpha + \phi_y\cos\beta + \phi_z\cos\gamma$, Level surface tangent check), 5 solved GATE examples, 3 exam traps.
  - Cross-linked into `02.2.2 - Gradient.md`, `02.2 - Several Variable Calculus.md`, `_Index.md`.

### Session 24 — 2026-07-27
- **AI Used:** Gemini (Google DeepMind)
- **Done:**
  - Integrated dedicated deep-dive zero-to-AIR1 topic note for `Calculus: Curl & Irrotational Fields` (`02 - SUBJECTS/Engineering Mathematics/02.2.4 - Curl.md`).
  - Covers: Definition of Curl $\nabla \times \vec{F}$ (Vector output) via 3x3 determinant, 2D Curl formula $(Q_x - P_y)\hat{k}$, Physical interpretation (Rotation, Paddle wheel analogy, Vorticity vector $\vec{\omega} = \nabla \times \vec{V} = 2\vec{\Omega}$ in Aerodynamics), Irrotational Vector Fields ($\nabla \times \vec{F} = \vec{0}$), Conservative Fields & Scalar Potential ($\vec{F} = \nabla\phi$), Path independence of line integrals, Work done formula $W = \phi(B) - \phi(A)$ & closed loop zero work $\oint \vec{F} \cdot d\vec{r} = 0$, Fast Exact Differential Method for finding scalar potential $\phi$, Position Vector Identities ($\nabla \times \vec{r} = \vec{0}$, Central force irrotationality $\nabla \times (f(r)\vec{r}) = \vec{0}$, Rigid body rotation $\nabla \times (\vec{\Omega} \times \vec{r}) = 2\vec{\Omega}$), Master Vector Identities (Curl of Grad $\nabla \times (\nabla\phi) = \vec{0}$, Div of Curl $\nabla \cdot (\nabla \times \vec{F}) = 0$, Curl of Curl $\nabla \times (\nabla \times \vec{F}) = \nabla(\nabla \cdot \vec{F}) - \nabla^2\vec{F}$), Preview of Stokes' Theorem, 4 AIR-1 speed tricks, 4 solved GATE examples, 4 exam traps.
  - Cross-linked into `02.2 - Several Variable Calculus.md`, `02.2.3 - Divergence.md`, `02.2.2 - Gradient.md`, `_Index.md`.

### Session 23 — 2026-07-27
- **AI Used:** Gemini (Google DeepMind)
- **Done:**
  - Integrated dedicated deep-dive zero-to-AIR1 topic note for `Calculus: Divergence & Solenoidal Fields` (`02 - SUBJECTS/Engineering Mathematics/02.2.3 - Divergence.md`).
  - Covers: Definition of Divergence $\nabla \cdot \vec{F} = F_{1x} + F_{2y} + F_{3z}$ (Scalar output), Physical interpretation (Source $\nabla\cdot\vec{F}>0$, Sink $\nabla\cdot\vec{F}<0$, Solenoidal $\nabla\cdot\vec{F}=0$), Solenoidal Vector Fields & Aerodynamics Continuity Equation $\nabla\cdot\vec{V}=0$, Gauss's law for magnetism $\nabla\cdot\vec{B}=0$, Solenoidal constant-finding algorithm, Position Vector Identities ($\nabla\cdot\vec{r}=3$, $\nabla\cdot(f(r)\vec{r}) = r f'(r) + 3f(r)$, $\nabla\cdot(r^n\vec{r}) = (n+3)r^n$), Inverse-Square Law Solenoidal proof ($\nabla\cdot(\vec{r}/r^3)=0$), Laplacian Operator $\nabla^2\phi = \phi_{xx}+\phi_{yy}+\phi_{zz}$ & Harmonic Functions ($\nabla^2\phi=0$), Master Identities ($\nabla\cdot(\nabla\times\vec{F})=0$ Div of Curl is ALWAYS ZERO), Preview of Gauss's Divergence Theorem, 4 AIR-1 speed tricks, 5 solved GATE examples, 4 exam traps.
  - Cross-linked into `02.2 - Several Variable Calculus.md`, `02.2.2 - Gradient.md`, `_Index.md`.

### Session 22 — 2026-07-27
- **AI Used:** Gemini (Google DeepMind)
- **Done:**
  - Integrated dedicated deep-dive zero-to-AIR1 topic note for `Calculus: Gradient & Directional Derivative` (`02 - SUBJECTS/Engineering Mathematics/02.2.2 - Gradient.md`).
  - Covers: Vector Differential Operator $\nabla$, Definition of Gradient $\nabla\phi = \phi_x\hat{i} + \phi_y\hat{j} + \phi_z\hat{k}$, 3 Golden Theorems (Direction of steepest ascent, Maximum rate of increase magnitude $\|\nabla\phi\|$, Perpendicularity to level surface $\phi=c$), Unit Normal Vector $\hat{n} = \frac{\nabla\phi}{\|\nabla\phi\|}$, Tangent Plane $A(x-x_0)+B(y-y_0)+C(z-z_0)=0$ & Normal Line equations, Angle between surfaces $\cos\theta = \frac{\nabla\phi_1\cdot\nabla\phi_2}{\|\nabla\phi_1\|\|\nabla\phi_2\|}$ & Orthogonality condition ($\nabla\phi_1\cdot\nabla\phi_2 = 0$), Directional Derivative definition $D_{\hat{u}}\phi = \nabla\phi\cdot\hat{u}$ with step-by-step 4-step algorithm, Radial Gradient Master Table ($\nabla r = \frac{\vec{r}}{r}$, $\nabla(r^n) = n r^{n-2}\vec{r}$, $\nabla(1/r) = -\frac{\vec{r}}{r^3}$, $\nabla f(r) = f'(r)\frac{\vec{r}}{r}$), Aerospace & Physics applications (Potential flow velocity $\vec{V} = \nabla\phi$, Fourier heat flux $\vec{q} = -k\nabla T$, Conservative forces $\vec{F} = -\nabla U$), 4 AIR-1 speed tricks, 4 solved GATE examples, 4 exam traps.
  - Cross-linked into `02.2 - Several Variable Calculus.md`, `02.2.1 - Partial Derivatives.md`, `_Index.md`.

### Session 21 — 2026-07-27
- **AI Used:** Antigravity (Google DeepMind)
- **Done:**
  - Integrated dedicated deep-dive zero-to-AIR1 topic note for `Calculus: Partial Derivatives` (`02 - SUBJECTS/Engineering Mathematics/02.2.1 - Partial Derivatives.md`).
  - Covers: First Principles definitions of $f_x$ and $f_y$, Geometric interpretation & Tangent Plane equation ($z-z_0 = f_x(x-x_0) + f_y(y-y_0)$), Clairaut's/Schwarz's Theorem ($f_{xy}=f_{yx}$), Total Differential ($dz = f_x dx + f_y dy$), Error propagation & Power-Product Instant Percentage Error Rule ($\%\text{Error}(x^a y^b z^c) = |a|\%x + |b|\%y + |c|\%z$), Multivariable Differentiability Hierarchy (Continuous partials ⟹ Differentiable ⟹ Continuous & Partials exist), Multivariable Chain Rule (Tree Diagram Method for 1 & 2 parameter cases), Implicit Partial Derivatives ($z_x = -F_x/F_z$), Cyclic Implicit Identity ($\frac{\partial x}{\partial y}\frac{\partial y}{\partial z}\frac{\partial z}{\partial x} = -1$), Euler's Theorem for Homogeneous Functions (1st and 2nd order forms), Composite Homogeneous Functions Master Formula ($x u_x + y u_y = n \frac{F(u)}{F'(u)}$ with 4-entry standard table for $\sin^{-1}$, $\tan^{-1}$, $\ln$, $\cos^{-1}$), 4 AIR-1 speed tricks, 4 solved GATE examples, 4 exam traps.
  - Cross-linked into `02.2 - Several Variable Calculus.md`, `02 - Calculus.md`, `_Index.md`.

### Session 20 — 2026-07-27
- **AI Used:** Antigravity (Google DeepMind)
- **Done:**
  - Integrated dedicated deep-dive zero-to-AIR1 topic note for `Calculus: Functions of Several Variables` (`02 - SUBJECTS/Engineering Mathematics/02.2 - Several Variable Calculus.md`).
  - Covers: Partial Derivatives & Clairaut's/Schwarz's Theorem ($f_{xy}=f_{yx}$), Total Differential & Multivariable Chain Rule (Tree Diagram Method), Euler's Theorem for Homogeneous Functions ($x f_x + y f_y = n f$ & 2nd order corollary), Vector Differential Operators ($\nabla$ Del operator), Gradient ($\nabla\phi$ steep ascent & perpendicular to level surface), Divergence ($\nabla\cdot\vec{F}$ flux, solenoidal field $\nabla\cdot\vec{F}=0$), Curl ($\nabla\times\vec{F}$ rotation, irrotational field $\nabla\times\vec{F}=\vec{0}$), Laplacian ($\nabla^2\phi$), Master Vector Identities (Curl of Grad = $\vec{0}$, Div of Curl = $0$), Directional Derivative ($D_{\hat{u}}f = \nabla f\cdot\hat{u}$ & max magnitude $|\nabla f|$), Jacobians for 2D/3D transformations ($J=r$ for polar/cylindrical, $J=\rho^2\sin\phi$ for spherical), Maxima/Minima of 2 variables via Hessian discriminant ($D = f_{xx}f_{yy} - f_{xy}^2$), Lagrange Multipliers for constrained optimization ($\nabla f = \lambda \nabla g$), 6 AIR-1 speed tricks, 6 solved GATE examples, 5 exam traps.
  - Cross-linked into `02 - Calculus.md`, `02.1 - Single Variable Calculus.md`, and `_Index.md`.

### Session 19 — 2026-07-27
- **AI Used:** Antigravity (Google DeepMind)
- **Done:**
  - Integrated dedicated deep-dive zero-to-AIR1 topic note for `Calculus: Integration` (`02 - SUBJECTS/Engineering Mathematics/02.1.6 - Integration.md`).
  - Covers: Indefinite vs Definite integrals, FTC, Standard formulas in 4 groups (10 algebraic/exp, 10 trig, 9 inverse-trig), 7 Integration Techniques (U-Sub with instant $\ln|f|+C$ and $e^{f(x)}+C$ patterns, IBP with ILATE rule + Tabular method, Partial Fractions with cover-up method, Trig substitution $\sin\theta/\tan\theta/\sec\theta$ table, Trig integrals $\sin^m\cos^n$, Completing the Square, Weierstrass half-angle), 9 Definite Integral Properties (reversal, splitting, King's, even/odd symmetry, periodicity), Leibniz Rule (both forms + Type 1/2/3 applications), Special Functions (Gamma recurrence + half-integer values, Beta + trig form, Wallis' formula + $W_n$ table + recurrence), 6 AIR-1 speed tricks (num=deriv-of-denom $\to\ln$, King's pattern for $\int_0^\pi xf(\sin x)$, $e^x[f+f']=e^xf(x)$ magic, Gamma/Beta pattern recognition, add-and-subtract numerator, ILATE mantra "I Love All The Elephants"), 7 solved GATE examples, 5 exam traps.
  - Cross-linked into `02.1 - Single Variable Calculus.md` Part IV, `02.1.5 - Maxima and Minima.md`.

### Session 18 — 2026-07-27
- **AI Used:** Antigravity (Google DeepMind)
- **Done:**
  - Integrated dedicated deep-dive zero-to-AIR1 topic note for `Calculus: Maxima and Minima` (`02 - SUBJECTS/Engineering Mathematics/02.1.5 - Maxima and Minima.md`).
  - Covers: Local/Global/Stationary/Inflection/Saddle point definitions, full algorithm flowchart, First Derivative Test (sign-change table + visual), Second Derivative Test (frown/smile mnemonic), Higher-Order Derivative Test (ODD=inflection mnemonic), Global extrema closed-interval method (endpoint rule), Concavity (concave up/down) + points of inflection (sign-change requirement), Rolle's Theorem (3 conditions + same-height mnemonic), LMVT (secant=tangent mnemonic), CMVT, hierarchy (Rolle ⊂ LMVT ⊂ CMVT), Optimization strategy (5 steps + 4 Aerospace applications), 6 AIR-1 speed tricks (SDT 3-sec classification, AM-GM inequality shortcut, Rolle's root check, LMVT estimation, symmetry, critical-point counting from degree), 6 solved GATE examples, 5 exam traps.
  - Cross-linked into `02.1 - Single Variable Calculus.md`, `02.1.3 - Differentiability.md`, `02.1.4 - Chain Rule.md`.

### Session 17 — 2026-07-27
- **AI Used:** Antigravity (Google DeepMind)
- **Done:**
  - Integrated dedicated deep-dive zero-to-AIR1 topic note for `Calculus: Chain Rule` (`02 - SUBJECTS/Engineering Mathematics/02.1.4 - Chain Rule.md`).
  - Covers: Gear-system intuition, 4 formal versions (composition, direct, triple, $n$-layer), Peel-the-Onion method with step-by-step algorithm, GATE-speed identification table for 9 common composite function patterns ($\sin g$, $\cos g$, $e^g$, $\ln g$, $[g]^n$, $\sqrt{g}$, $\tan^{-1} g$, $\sin^{-1} g$, $a^g$), chain rule in 6 application contexts (with product rule, quotient rule, implicit diff., parametric equations, inverse functions, related rates), multivariable chain rule preview, 5 AIR-1 speed tricks (outside-inside mantra, power-chain instant formula, log-chain $f'/f$ shortcut, exp-chain $e^f \cdot f'$, GATE MCQ chain-factor filter), inverse-trig substitution master table ($x=\sin\theta$, $x=\tan\theta$, $x=\sec\theta$, double-angle results), 7 solved GATE examples, 5 exam traps.
  - Cross-linked into `02.1.3 - Differentiability.md`, `02.1 - Single Variable Calculus.md`.

### Session 16 — 2026-07-27
- **AI Used:** Antigravity (Google DeepMind)
- **Done:**
  - Integrated dedicated deep-dive zero-to-AIR1 topic note for `Calculus: Differentiability` (`02 - SUBJECTS/Engineering Mathematics/02.1.3 - Differentiability.md`).
  - Covers: Intuitive + formal definition, LHD/RHD, D-C-L hierarchy (Differentiable ⟹ Continuous ⟹ Limit exists), master counter-example table (6 functions), all differentiation rules (constant, power, sum, product [VdU+UdV mnemonic], quotient [Low d-High mnemonic], chain rule), derivatives of 7 algebraic, 6 trig, 6 inverse-trig functions, higher-order $n$-th derivative formulas ($e^{ax}$, $\sin(ax+b)$, $\ln x$, $1/(ax+b)$, power), Leibniz product formula, implicit differentiation ($dy/dx = -F_x/F_y$), logarithmic differentiation for $[f(x)]^{g(x)}$, parametric differentiation, 5 AIR-1 speed tricks (piecewise LHD/RHD algorithm, $x^n \sin(1/x)$ power threshold, $x^x$ log-diff, chain rule onion-peel, complementary inverse-trig pair), 6 solved GATE examples, 5 exam traps.
  - Cross-linked into `02.1 - Single Variable Calculus.md`, `02.1.2 - Continuity.md`.

### Session 15 — 2026-07-27
- **AI Used:** Antigravity (Google DeepMind)
- **Done:**
  - Integrated dedicated deep-dive zero-to-AIR1 topic note for `Calculus: Continuity` (`02 - SUBJECTS/Engineering Mathematics/02.1.2 - Continuity.md`).
  - Covers: Formal 3-condition continuity test, 4-type discontinuity classification (Removable/Jump/Infinite/Oscillatory) with RJIO mnemonic and decision tree, continuity of standard functions master table, algebra of continuous functions (5 operations), differentiability definition (LHD/RHD), critical hierarchy (Differentiable ⟹ Continuous, NOT vice versa) with $|x|$ counter-example, non-differentiable point types (corner, vertical tangent, break, oscillation), Intermediate Value Theorem (IVT) + root detection trick ($f(a) \cdot f(b) < 0$), Extreme Value Theorem (EVT), Uniform Continuity, Piecewise function strategy (LHL/RHL/f(a) algorithm), 5 AIR-1 speed tricks, 6 solved GATE examples, 5 exam traps.
  - Cross-linked into `02.1 - Single Variable Calculus.md` (both Limits and Continuity deep-dive links), `02 - Calculus.md`, `_Index.md`.

### Session 14 — 2026-07-27
- **AI Used:** Antigravity (Google DeepMind)
- **Done:**
  - Integrated dedicated deep-dive zero-to-AIR1 topic note for `Calculus: Limits` (`02 - SUBJECTS/Engineering Mathematics/02.1.1 - Limits.md`).
  - Covers: Intuitive & formal $\varepsilon$-$\delta$ definition, LHL/RHL existence condition, 20-entry Standard Limits Master Table (trig, exponential, logarithmic, algebraic groups), 7 Indeterminate Forms with resolution flowchart, L'Hôpital's Rule with 4 critical rules, Continuity definition & 4 types of discontinuities, Squeeze/Sandwich Theorem with 3 classic applications, 5 AIR-1 speed tricks ($1^\infty$ instant formula, Taylor series substitution, polynomial race hierarchy $\ln x \ll x^a \ll e^x \ll x^x$, $\infty-\infty$ rationalization, $\frac{\sin(mx)}{nx}$ direct ratio), 6 solved GATE examples, 5 exam traps.
  - Cross-linked into `02.1 - Single Variable Calculus.md`, `02 - Calculus.md`, `_Index.md`, and `Engineering Mathematics - Formulas.md`.

### Session 13 — 2026-07-27
- **AI Used:** Antigravity (Google DeepMind)
- **Done:**
  - Integrated dedicated deep-dive zero-to-AIR1 topic notes for `Linear Algebra: Eigenvectors` (`02 - SUBJECTS/Engineering Mathematics/01.4.1 - Eigenvectors.md`).
  - Covers Geometric definition ($A\vec{v}=\lambda\vec{v}, \vec{v}\neq\vec{0}$), Step-by-Step ERO Algorithm for Eigenspaces $E(\lambda)$, 2x2 Fast Eigenvector Shortcut $\vec{v}=(-b, a-\lambda)^T$, 6 Master Eigenvector Theorems (Linear Independence for distinct eigenvalues, Orthogonality for real symmetric matrices, Eigenspace dimension $\text{GM}=\text{Nullity}(A-\lambda I)$, Left vs Right eigenvectors and biorthogonality $\vec{w}_i^T \vec{v}_j = 0$, Matrix power/inverse eigenvector invariance, Commuting matrix common eigenvectors), Modal Matrix $P$ & Spectral Matrix $D$ Diagonalization ($A = P D P^{-1}$), Orthogonal Diagonalization ($A = Q D Q^T$), and Rank-1 Spectral Decomposition ($A = \sum \lambda_i \vec{q}_i \vec{q}_i^T$).
  - Included AIR-1 topper speed tricks (2-second eigenvector inspection filter $A\vec{v}=k\vec{v}$, symmetric orthogonality elimination, constant row/column sum eigenvectors), step-by-step solved GATE examples, and exam traps.
  - Cross-linked with `01.4 - Eigenvalues and Eigenvectors.md`, `01 - Linear Algebra.md`, `_Index.md`, and `Engineering Mathematics - Formulas.md`.

### Session 12 — 2026-07-27
- **AI Used:** Antigravity (Google DeepMind)
- **Done:**
  - Integrated complete zero-to-AIR1 topic notes for `Linear Algebra: Eigenvalues & Eigenvectors` (`02 - SUBJECTS/Engineering Mathematics/01.4 - Eigenvalues and Eigenvectors.md`).
  - Covers Geometric definition ($A\vec{v}=\lambda\vec{v}$), 3x3 Characteristic polynomial shortcut ($\lambda^3 - S_1\lambda^2 + S_2\lambda - S_3 = 0$), 10 Master Eigenvalue Properties ($\sum \lambda = \text{tr}, \prod \lambda = \det, \lambda(A^m)=\lambda^m, \lambda(A^{-1})=1/\lambda$), Eigenvalues of Special Matrices (Symmetric, Skew-Symmetric, Orthogonal, Idempotent, Involutory, Nilpotent, Hermitian, Skew-Hermitian, Unitary, Stochastic), Cayley-Hamilton Theorem & applications ($A^{-1}$ & $A^m$ power reduction algorithm), Algebraic Multiplicity (AM) vs Geometric Multiplicity (GM), and Diagonalizability criteria.
  - Included AIR-1 topper speed tricks (5-second trace/det option elimination, row/column sum rule, rank-1 matrix eigenvalues), step-by-step solved GATE examples, and exam traps.
  - Completed Section 1 (Linear Algebra) in `02 - SUBJECTS/Engineering Mathematics/_Index.md`, `01 - Linear Algebra.md`, and `Engineering Mathematics - Formulas.md`.

### Session 11 — 2026-07-27
- **AI Used:** Antigravity (Google DeepMind)
- **Done:**
  - Integrated dedicated deep-dive zero-to-AIR1 topic notes for `Linear Algebra: Rank of a Matrix` (`02 - SUBJECTS/Engineering Mathematics/01.3.1 - Rank of a Matrix.md`).
  - Covers 4 Equivalent Definitions of Rank (Minor/Submatrix, Row Space, Column Space, Pivot Count), 4 Computational Methods (Minor method, REF/Gaussian Elimination, Normal/Canonical Form $[I_r\ O; O\ O]$, Inspection), Master Rank Inequalities & Properties (Sylvester's Law of Nullity, Frobenius inequality, sum/difference rank bounds, outer product rank $\vec{u}\vec{v}^T=1$, idempotent matrix rank $\text{Rank}(A)=\text{tr}(A)$, nilpotent matrix rank), Gilbert Strang's 4 Fundamental Subspaces ($C(A), C(A^T), N(A), N(A^T)$) and dual Rank-Nullity theorems.
  - Included AIR-1 topper speed tricks (1-second outer product rule, row elimination by eye, submatrix determinant escalation), step-by-step solved GATE examples, and exam traps.
  - Cross-linked with `01.3 - Systems of Linear Equations.md`, `01 - Linear Algebra.md`, `_Index.md`, and `Engineering Mathematics - Formulas.md`.

### Session 10 — 2026-07-27
- **AI Used:** Antigravity (Google DeepMind)
- **Done:**
  - Integrated complete zero-to-AIR1 topic notes for `Linear Algebra: Systems of Linear Equations & Rank` (`02 - SUBJECTS/Engineering Mathematics/01.3 - Systems of Linear Equations.md`).
  - Covers Rank definition (Minor method, Row Echelon Form, Non-zero rows), 8 Rank Properties & Inequalities (Sylvester's Law of Nullity, product rank, transpose rank), Nullity & Rank-Nullity Theorem ($\text{Rank} + \text{Nullity} = n$), Non-Homogeneous Systems ($A\vec{x}=\vec{b}$) Rouché-Capelli consistency theorem (Inconsistent $\text{Rank}(A) < \text{Rank}([A \mid \vec{b}])$, Unique $r=n$, Infinite $r<n$ with $n-r$ free variables), Homogeneous Systems ($A\vec{x}=\vec{0}$) classification ($\det(A) \neq 0 \implies$ trivial solution, $\det(A) = 0 \implies$ non-trivial solutions with $n-r$ L.I. solutions), Cramer's Rule, and Gaussian / Gauss-Jordan elimination.
  - Included AIR-1 topper speed tricks (Parameter $\lambda, \mu$ 3-step strategy, 3-second rank inspection, system geometry rules), step-by-step solved GATE examples, and common exam traps.
  - Updated parent notes (`01 - Linear Algebra.md`), subject index (`_Index.md`), and formula sheet (`Engineering Mathematics - Formulas.md`).

### Session 9 — 2026-07-27
- **AI Used:** Antigravity (Google DeepMind)
- **Done:**
  - Integrated complete zero-to-AIR1 topic notes for `Linear Algebra: Matrix Algebra` (`02 - SUBJECTS/Engineering Mathematics/01.2 - Matrix Algebra.md`).
  - Covers Taxonomy of Special Matrices (Symmetric, Skew-Symmetric, Orthogonal, Idempotent, Involutory, Nilpotent, Periodic, Hermitian, Skew-Hermitian, Unitary), Matrix Operations & Properties (non-commutativity, zero product failure, cancellation failure, Trace properties & cyclic invariance, Transpose reversal rules, Symmetric + Skew-Symmetric decomposition), 10 Gold Rules of Determinants ($\det(kA) = k^n \det A$), Adjoint & Inverse (8 Master Adjoint Identities, 2x2 inverse 1-second shortcut, singular vs non-singular), and Block/Partitioned matrices.
  - Included AIR-1 topper speed tricks, mnemonics, step-by-step solved GATE-style examples, and common exam traps.
  - Updated parent notes (`01 - Linear Algebra.md`), subject index (`_Index.md`), and formula sheet (`Engineering Mathematics - Formulas.md`).

### Session 8 — 2026-07-27
- **AI Used:** Antigravity (Google DeepMind)
- **Done:**
  - Integrated complete zero-to-AIR1 topic notes for `Linear Algebra: Vector Algebra & Vector Spaces` (`02 - SUBJECTS/Engineering Mathematics/01.1 - Vector Algebra.md`).
  - Covers 3D Euclidean geometry (DCs, DRs, projections, dot/cross products, scalar & vector triple products, BAC-CAB rule, coplanarity, volumes), abstract linear algebra (vector spaces, subspaces, 10 axioms, high-yield GATE subspace classifier table), linear independence/dependence (rank & determinant quick tests), basis & dimension master tables, inner product spaces, and Gram-Schmidt orthogonalization.
  - Included AIR-1 topper speed tricks, 3-second inspection rules, mnemonics, step-by-step solved GATE examples, and exam traps.
  - Updated parent notes (`01 - Linear Algebra.md`), subject index (`_Index.md`), and formula sheet (`Engineering Mathematics - Formulas.md`).

### Session 7 — 2026-07-27
- **AI Used:** Antigravity (Google DeepMind)
- **Done:**
  - Diagnosed and fixed Git tracking issue for `.gitignore` files.
  - Cleared Git index cache (`git rm -r --cached .` followed by `git add .`) to untrack previously tracked ignored files (such as `.obsidian/graph.json` and `.obsidian/plugins/obsidian-local-rest-api/`).
  - Verified Git index now cleanly respects `.gitignore` without deleting local files.

### Session 6 — 2026-07-27
- **AI Used:** Gemini (Google DeepMind)
- **Done:**
  - Configured privacy protection in `.gitignore`.
  - Excluded personal journals (`journals/`), personal daily trackers (`03 - DAILY TRACKER/*.md`), individual mock test scores (`05 - MOCK TESTS/*.md`), and private directories (`Private/`, `Personal/`) from Git commits.
  - Added `.gitkeep` files to preserve folder structures in Git without leaking personal data.
  - Updated `README.md` with explicit **Shared vs. Private Content (Privacy Policy)** table.

### Session 5 — 2026-07-27
- **AI Used:** Gemini (Google DeepMind)
- **Done:** Integrated user's preferred Obsidian Local REST API (`obsidian-local-rest-api` plugin) + `mcp-remote` bridge pattern.

### Session 4 — 2026-07-27
- **AI Used:** Gemini (Google DeepMind)
- **Done:** Prepared vault for GitHub sharing. Created `.gitignore`, universal rules, and `.agents/skills/`.

### Session 3 — 2026-07-27
- **AI Used:** Gemini (Google DeepMind)
- **Done:** Integrated official GATE 2027 AE syllabus from IIT Madras into vault across all 5 sections.

### Session 2 — 2026-07-27
- **AI Used:** Antigravity (Google DeepMind)
- **Done:** Created missing folders (03-06), created formula sheets, daily tracker & mock test templates, linear algebra topic note, daily log.

### Session 1 — 2026-07-27
- **AI Used:** Claude (Anthropic, Sonnet 4.6)
- **Done:** Initial vault structure & initial roadmap setup.

### Session 87 — 2026-07-28
- **AI Used:** Antigravity/Gemini (Claude Sonnet 4.6 Thinking)
- **Done:**
  - Created `04.1 - Stability Derivatives.md` — complete zero-to-AIR1 deep-dive note for **Static Stability: Stability Derivatives** (the #1 most-asked FM topic in GATE AE).
  - Covers ALL stability derivatives: Longitudinal ($C_{m_\alpha}<0$, $C_{m_q}<0$, $C_{m_{\delta_e}}<0$), Lateral ($C_{l_\beta}<0$, $C_{l_p}<0$, $C_{l_{\delta_a}}<0$), Directional ($C_{n_\beta}>0$, $C_{n_r}<0$, $C_{n_{\delta_r}}<0$).
  - Neutral Point: $h_n = h_{ac,wb} + V_H(a_t/C_{L_\alpha})(1-d\epsilon/d\alpha)$; Static Margin: $K_n = h_n - h > 0$.
  - Stick-Free: $h_n^* < h_n$ (NP forward shift); $K_n^* < K_n$ (less stable = critical limit).
  - Tail Volume Ratios: $V_H = S_t l_t/(S\bar{c})$ uses chord; $V_v = S_v l_v/(Sb)$ uses span.
  - Mnemonics: "N-N-P Rule"; "H-chord, V-span"; 5-Second Shortcut $h_n = h - C_{m_\alpha}/C_{L_\alpha}$.
  - 4 solved GATE numerical examples + 6 critical exam traps.
  - Updated Formula Sheet Section 4.1 with comprehensive stability derivative tables.
  - Updated `_Index.md` (04.1 marked ✅, Section 4 Static Stability IN PROGRESS).
- **Next Actions:** 04.2 Longitudinal Static Stability | 04.3 Lateral/Directional Stability | 04.4 Hinge Moments.


### Session 88 — 2026-07-28
- **AI Used:** Antigravity/Gemini
- **Done:**
  - Created `04.2 - Control Derivatives.md` — complete note on **Static Stability: Control Derivatives**.
  - **Distinction established:** Stability derivatives = aircraft's natural tendency (subscript: $\alpha, \beta, p, q, r$). Control derivatives = pilot authority (subscript: $\delta_e, \delta_a, \delta_r$).
  - **Control Surface Effectiveness Factor $\tau$:** $\tau = f(c_f/c)$; typical 0.45–0.57 for conventional surfaces; all-moving tail = 1.0.
  - **Elevator ($C_{m_{\delta_e}}$):** $= -\eta_t V_H a_t \tau_e < 0$ always. Derivation from first principles. Also $C_{L_{\delta_e}} = +\eta_t(S_t/S)a_t\tau_e > 0$. Trim elevator: $\delta_{e,trim} = -(C_{m_0} + C_{m_\alpha}\alpha)/C_{m_{\delta_e}}$. Slope $d\delta_e/dC_L < 0$ for stable aircraft.
  - **Aileron ($C_{l_{\delta_a}}$):** $= -(2a_w\tau_a)/(Sb)\int cy\,dy < 0$ always. Strip theory derivation. Rectangular wing shortcut: $-a_w\tau_a(y_2^2-y_1^2)/b^2$. Non-dimensional: $-(a_w\tau_a/4)(\eta_2^2-\eta_1^2)$.
  - **Adverse Yaw ($C_{n_{\delta_a}}$):** Down aileron → more induced drag → yaw opposite to roll; $C_{n_{\delta_a}} < 0$.
  - **Aileron Reversal:** Effectiveness $= 1 - q/q_{rev}$; zero at reversal speed; reversed above it.
  - **Rudder ($C_{n_{\delta_r}}$):** $= -\eta_v V_v a_v \tau_r < 0$ always. Side force: $C_{y_{\delta_r}} = +\eta_v(S_v/S)a_v\tau_r > 0$. Relationship: $C_{n_{\delta_r}} = -(l_v/b)C_{y_{\delta_r}}$. Min control speed $V_{mc}$ formula.
  - **Proverse Roll ($C_{l_{\delta_r}} > 0$):** Rudder yaws aircraft; outside wing moves faster; rolls toward yaw.
  - **5 fully solved GATE-style examples:** (1) $C_{m_{\delta_e}}$ and $C_{L_{\delta_e}}$ from geometry; (2) trim elevator $\delta_e$ in degrees; (3) aileron strip theory with integration; (4) rudder power + $V_{mc}$; (5) elevator travel over CG range.
  - **6 critical exam traps** documented.
  - **Mnemonic:** "ALL moment control derivatives are NEGATIVE; $C_{y_{\delta_r}} > 0$ and $C_{L_{\delta_e}} > 0$ are exceptions".
  - Updated Formula Sheet Section 4.2 with complete control derivative tables.
  - Updated `_Index.md` (04.1 + 04.2 both ✅, Section 4 in progress, 04.3 & 04.4 next).
- **Next Actions:** 04.3 Longitudinal Static Stability (stick-fixed, stick-free, neutral point full derivation, maneuver margin) | 04.4 Lateral & Directional Stability.


### Session 89 — 2026-07-28
- **AI Used:** Antigravity/Gemini
- **Done:**
  - Created `04.3 - Longitudinal Static Stability.md` — complete zero-to-AIR1 note on **Longitudinal Stick-Fixed Static Stability**.
  - **Master Mental Model:** Elevator held locked/rigid. Two conditions for level flight: Trim ($C_{m,cg} = 0$) and Static Stability ($C_{m_\alpha} < 0$).
  - **Detailed Derivations:**
    - Non-dimensional positions ($h = x_{cg}/\bar{c}$, $h_{ac} = x_{ac}/\bar{c}$, $h_n = x_n/\bar{c}$).
    - Wing-body contribution: $C_{m,cg,wb} = C_{m,ac,wb} + C_{L,wb}(h - h_{ac,wb}) \implies (C_{m_\alpha})_{wb} = C_{L_{\alpha,wb}}(h - h_{ac,wb})$.
    - Tail contribution: Downwash $\alpha_t = \alpha_w(1 - d\epsilon/d\alpha) + (i_t - i_w) - \epsilon_0$. Pitch moment $C_{m,t} = -\eta_t V_H C_{L_t}$. Tail derivative $(C_{m_\alpha})_t = -\eta_t V_H a_t(1 - d\epsilon/d\alpha) < 0$ (always stabilizing).
    - Zero-lift pitch moment $C_{m_0} = C_{m,ac,wb} + \eta_t V_H a_t(i_w - i_t + \epsilon_0) > 0$.
    - Stick-fixed Neutral Point $h_n = h_{ac,wb} + \frac{\eta_t V_H a_t}{C_{L_\alpha}}(1 - d\epsilon/d\alpha)$ (independent of CG!).
    - Static Margin $K_n = h_n - h = -C_{m_\alpha}/C_{L_\alpha} = -dC_m/dC_L$.
  - **Component & Configuration Analysis:**
    - Fuselage: destabilizing ($\Delta h_n < 0$, shifts NP forward).
    - Canard: front surface is destabilizing ($\Delta h_n < 0$), CG must be far forward; canard must stall before wing.
    - Tailless/Flying wing: needs reflexed airfoil ($C_{m,ac} > 0$) or sweep + washout.
    - Propeller: tractor propeller is destabilizing.
  - **Elevator Trim Curves:** $\delta_{e,trim} = -C_{m_0}/C_{m_{\delta_e}} + \frac{K_n}{C_{m_{\delta_e}}/C_{L_\alpha}} C_L \implies \frac{d\delta_e}{dC_L} = \frac{h - h_n}{C_{m_{\delta_e}}} < 0$ for stable aircraft.
  - **CG Limits:** Aft CG limit = Neutral point ($h_n$), Forward CG limit = max elevator deflection during flare/rotation.
  - **3 Solved GATE-Style Examples:** (1) Full 4-step neutral point & static margin numerical; (2) Tail volume ratio sizing for target $K_n = 10\%$; (3) GATE AE classic: elevator trim curve slope shift finding $h_n = 0.40$.
  - **4 Critical GATE Traps & Shortcuts:** 5-Second Neutral Point shortcut $h_n = h - C_{m_\alpha}/C_{L_\alpha}$, units of $C_{m_\alpha}$ ($\text{rad}^{-1}$ vs $\text{deg}^{-1}$), downwash factor $(1 - d\epsilon/d\alpha)$.
  - Updated `06 - FORMULA SHEETS/Flight Mechanics - Formulas.md` with Section 4.3 formulas.
  - Updated `_Index.md` (04.3 marked ✅, 04.4 & 04.5 added to checklist).
- **Next Actions:** 04.4 Longitudinal Stick-Free Stability & Hinge Moments | 04.5 Lateral & Directional Stability.


### Session 89 — 2026-07-28
- **AI Used:** Gemini 3.6 Flash (High)
- **Done:**
  - Integrated and verified `04.3 - Longitudinal Static Stability.md` — complete zero-to-AIR1 deep-dive note for **Static Stability: Longitudinal Stick-Fixed Stability** under `02 - SUBJECTS/Flight Mechanics & Space Dynamics/`.
  - **Covers:**
    - Two golden conditions for longitudinal equilibrium & stability: $C_{m,cg} = 0$ (trim) and $C_{m_\alpha} < 0$ (negative slope/pitch stiffness).
    - $C_m - \alpha$ Diagram Analysis: Positive y-intercept $C_{m_0} > 0$ and Negative slope $C_{m_\alpha} < 0$ required simultaneously for positive trim angle $\alpha_{\text{trim}} > 0$.
    - Complete component-by-component pitch moment derivation:
      - Wing-body contribution: $(C_{m_\alpha})_{\text{wb}} = C_{L_{\alpha,\text{wb}}}(h - h_{ac,\text{wb}})$, destabilizing if CG is aft of wing AC.
      - Horizontal tail contribution: $(C_{m_\alpha})_t = -\eta_t V_H a_t (1 - d\epsilon/d\alpha)$, always stabilizing (negative).
      - Tail dynamic pressure ratio $\eta_t = q_t/q_\infty$ ($0.85-0.95$) and horizontal tail volume $V_H = S_t l_t / (S\bar{c})$.
      - Local tail angle of attack $\alpha_t = \alpha_w - i_w + i_t - \epsilon$.
    - Stick-Fixed Neutral Point ($h_n$) derivation: $h_n = h_{ac,\text{wb}} + \frac{\eta_t V_H a_t}{C_{L_\alpha}}(1 - d\epsilon/d\alpha)$.
    - Neutral Point is the Aerodynamic Center of the complete aircraft — depends strictly on geometry, completely independent of CG position $h$!
    - Static Margin ($K_n = h_n - h$): $C_{m_\alpha} = -C_{L_\alpha} K_n \iff K_n = -dC_m/dC_L$. $K_n > 0 \iff$ Statically Stable.
    - Component Effects on $h_n$: Fuselage (+$\Delta C_{m_\alpha}$, shifts $h_n$ forward/destabilizing), Downwash $d\epsilon/d\alpha$ (higher $AR_w \implies d\epsilon/d\alpha \downarrow \implies h_n$ aft/stabilizing), Tractor Propeller normal force (destabilizing).
    - Elevator Trim & Controls: $\delta_{e,\text{trim}} = -C_{m_0}/C_{m_{\delta_e}} + \frac{K_n}{C_{m_{\delta_e}}/C_{L_\alpha}} C_L$. Slope $d\delta_{e,\text{trim}}/dC_L = (h - h_n)/C_{m_{\delta_e}} < 0$ (Negative for stable aircraft — flying slower at higher $C_L$ requires more UP elevator).
    - Alternative Configurations: Canard ($h_n = h_{ac,w} - \eta_c V_c a_c (1 + d\epsilon_c/d\alpha)/C_{L_\alpha}$ — canard is destabilizing to wing, requires CG far forward, canard stalls first for safety) vs Tailless/Flying Wings (Reflexed airfoil $C_{m,ac} > 0$ or wing sweep + washout).
    - CG Limits: Aft CG limit set by Neutral Point $h_n$ (stability boundary); Forward CG limit set by elevator control power during flare/takeoff rotation.
    - 5-Second Neutral Point shortcut ($h_n = h - C_{m_\alpha}/C_{L_\alpha}$); 3 fully solved GATE numerical examples (Neutral point $h_n = 0.4816$, static margin $K_n = 18.16\%$ & $C_{m_\alpha} = -0.8717\text{ rad}^{-1}$ for transport; Tail volume sizing $V_H = 0.354$ for target $K_n = 10\%$; Neutral point derivation from elevator trim slopes $h_n = 0.40$); 4 critical exam traps.
  - Updated `06 - FORMULA SHEETS/Flight Mechanics - Formulas.md` with Section 4.3 Longitudinal Static Stability.
  - Updated `02 - SUBJECTS/Flight Mechanics & Space Dynamics/_Index.md` (04.3 marked ✅ under Section 4).
- **Next Actions:** 04.4 Lateral & Directional Static Stability (dihedral effect, sweep, fuselage & vertical tail sizing, cross-coupling) when requested.

