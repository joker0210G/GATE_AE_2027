---
type: subject-index
subject: Aerodynamics
subject_code: aero
status: to-do
phase: 2
last_updated: 2026-07-27
syllabus_source: GATE 2027 Official (IIT Madras)
section: Section 3
---

# ✈️ Aerodynamics — Subject Index
#subject/aero #type/topic-note

**GATE Section:** Section 3  
**GATE Weightage:** ~18–22 marks (Highest Technical Priority 🔴)  
**Phase:** Phase 2 — Core Syllabus Part 1 (September 2026)  
**Formula Sheet:** [[06 - FORMULA SHEETS/Aerodynamics - Formulas]]  
**Official Syllabus:** [[00 - META/GATE 2027 Official Syllabus]]

> ℹ️ **Core Topics** account for ≥90% of questions. **Special Topics** account for ≤10% at most.

---

## 🔵 CORE TOPICS (≥90% of questions)

### 1. Basic Fluid Mechanics
- [x] [[02 - SUBJECTS/Aerodynamics/01.1 - Fluid Kinematics]] ✅ *(2026-08-09)*
  - Eulerian vs. Lagrangian descriptions, Material / Substantial derivative ($D/Dt$)
  - Streamlines ($dx/u = dy/v = dz/w$), Pathlines, Streaklines, Timelines
  - Helmholtz decomposition: translation, volumetric dilatation ($\nabla \cdot \vec{V}$), shear strain rates ($\dot{\gamma}_{ij}$)
  - Angular velocity ($\vec{\Omega} = \frac{1}{2}\vec{\omega}$), Vorticity ($\vec{\omega} = \nabla \times \vec{V}$), Circulation ($\Gamma = \oint \vec{V}\cdot d\vec{r} = \iint \omega_z dA$)
  - Forced vortex (rotational) vs. Free potential vortex (irrotational)
  - Stream function ($\psi$) and Velocity potential ($\phi$), Cauchy-Riemann coupling & mutual orthogonality
- [x] [[02 - SUBJECTS/Aerodynamics/01.1a - Streamlines and Streamline Curvature]] ✅ *(2026-08-09)*
  - 2D, 3D and Polar differential equations of streamlines
  - Streamline spacing and flow acceleration rule ($V \propto 1/\Delta n$)
  - Streamtubes, stream filaments, and 1D mass conservation ($\rho_1 A_1 V_1 = \rho_2 A_2 V_2$)
  - Natural streamline coordinate system $(s, n, b)$: tangential acceleration ($a_s$) and normal acceleration ($a_n = V^2/R$)
  - Euler equations along streamline ($s$) $\implies$ Bernoulli's equation ($p + \frac{1}{2}\rho V^2 + \rho g z = \text{const}$)
  - Normal pressure gradient ($\partial p/\partial n = \rho V^2/R \iff \partial p/\partial r = +\rho V^2/r$)
  - Streamline curvature mechanism of aerodynamic lift (convex suction vs. concave compression)
  - Special streamlines: Stagnation streamlines, dividing streamlines, Rankine half-body & circular cylinder flows
- [x] [[02 - SUBJECTS/Aerodynamics/01.1b - Streaklines and Flow Visualization]] ✅ *(2026-08-09)*
  - Definition of streakline: instantaneous locus of particles passing fixed injection point $(x_0, y_0, z_0)$ at $\tau \le t$
  - Systematic 3-step analytical derivation: Lagrangian pathline $\to$ freeze $t_{\text{obs}} \to$ eliminate injection parameter $\tau$
  - Steady flow equivalence theorem ($\text{Streamline} \equiv \text{Pathline} \equiv \text{Streakline}$) vs. unsteady flow divergence
  - Discrete wind direction shift problem ($90^\circ$ turn dynamics)
  - Tracer techniques: Smoke filaments, dye injection, surface oil flow, pulsed hydrogen bubble timelines
  - Modern digital velocimetry: Particle Image Velocimetry (PIV) and Particle Tracking Velocimetry (PTV)
  - Optical refractometric methods for high-speed compressible flows: Gladstone-Dale law ($n - 1 = K\rho$), Interferometry ($\rho$), Schlieren ($\nabla\rho$ with knife edge), Shadowgraph ($\nabla^2\rho$)
- [x] [[02 - SUBJECTS/Aerodynamics/01.1c - Pathlines and Particle Dynamics]] ✅ *(2026-08-09)*
  - Lagrangian initial value problem: $\frac{dx}{dt}=u, \frac{dy}{dt}=v, \frac{dz}{dt}=w$ with initial conditions $(x_0, y_0, z_0)$ at $t_0$
  - Analytical integration and elimination of time parameter to obtain spatial trajectory $y = f(x)$
  - Pathline arc length $s = \int \|\vec{V}\| dt$ and fluid transit / residence time calculations ($t_{\text{transit}} = \int \frac{dx}{u(x)}$)
  - Canonical flow pathlines: Sink-Vortex inward logarithmic spiral $r(\theta) = r_0 \exp[-\frac{\Lambda}{\Gamma}(\theta-\theta_0)]$ & sink collapse time $t = \pi r_0^2/\Lambda$
  - Multiphase tracer dynamics & Stokes number: $Stk = \frac{\tau_p}{\tau_f} = \frac{\rho_p d_p^2 U_0}{18\mu L}$ ($Stk \ll 0.1 \implies$ faithful tracer, $Stk \gg 1 \implies$ ballistic aircraft icing impingement)
- [x] [[02 - SUBJECTS/Aerodynamics/01.2a - Conservation of Mass (Continuity Equation)]] ✅ *(2026-08-09)*
  - Reynolds Transport Theorem (RTT) applied to mass ($\frac{\partial}{\partial t}\iiint \rho d\mathcal{V} + \iint \rho(\vec{V}\cdot\hat{n})dA = 0$)
  - Multi-port mass conservation and area-averaged mean velocity ($\bar{V} = \frac{1}{A}\iint u dA$)
  - Conservative differential form ($\frac{\partial\rho}{\partial t} + \nabla\cdot(\rho\vec{V}) = 0$) via Gauss's divergence theorem
  - Non-conservative material derivative form ($\frac{D\rho}{Dt} + \rho(\nabla\cdot\vec{V}) = 0$)
  - Incompressible solenoidal condition ($\nabla \cdot \vec{V} = 0$) in Cartesian, Cylindrical polar, and Spherical coordinates
  - Logarithmic differential form for Quasi-1D compressible nozzles ($\frac{d\rho}{\rho} + \frac{dA}{A} + \frac{dV}{V} = 0 \implies \frac{dA}{A} = (M^2-1)\frac{dV}{V}$)
- [x] [[02 - SUBJECTS/Aerodynamics/01.2b - Conservation of Linear Momentum]] ✅ *(2026-08-09)*
  - Reynolds Transport Theorem for linear momentum ($\sum\vec{F} = \frac{\partial}{\partial t}\iiint \rho\vec{V}d\mathcal{V} + \iint \rho\vec{V}(\vec{V}\cdot\hat{n})dA$)
  - Momentum flux correction factor ($\beta = \frac{1}{A\bar{V}^2}\iint u^2 dA$, $\beta=4/3$ laminar pipe, $\beta=6/5$ 2D channel)
  - Aerodynamic profile drag via wake momentum deficit ($D' = \rho_\infty U_\infty^2 \theta \iff c_d = 2\theta/c$)
  - Rocket and jet engine propulsion thrust ($T = \dot{m}_e V_e - \dot{m}_a V_0 + (p_e - p_a)A_e$)
  - Cauchy momentum equation ($\rho \frac{D\vec{V}}{Dt} = -\nabla p + \nabla\cdot\boldsymbol{\tau} + \rho\vec{g}$)
  - Navier-Stokes equations for incompressible Newtonian fluids ($\rho \frac{D\vec{V}}{Dt} = -\nabla p + \mu\nabla^2\vec{V} + \rho\vec{g}$)
- [x] [[02 - SUBJECTS/Aerodynamics/01.2c - Integral CV Conservation Laws and Bernoulli|01.2c-int — Integral CV Laws & Bernoulli (Day 1 Master Note)]] ✅ *(2026-10-01)*
  - RTT master equation — three laws from one theorem (mass $\eta=1$, momentum $\eta=\vec{V}$, energy $\eta=e$)
  - Integral continuity: steady compressible $\rho_1A_1V_1=\rho_2A_2V_2$; unsteady tank filling; log nozzle form $dA/A=(M^2-1)dV/V$
  - Integral momentum: gauge pressure discipline, $\beta=4/3$ laminar pipe, jet engine thrust $T=\dot{m}_eV_e-\dot{m}_aV_0+(p_e-p_a)A_e$
  - Bernoulli derivation from Euler, 5-assumption validity fence, 3 forms (pressure/head/energy)
  - Pressure vocabulary: static $p$, dynamic $q=\frac{1}{2}\rho V^2$, stagnation $p_0=p+q$, $C_p$
  - Decision matrix: when to use Bernoulli vs Momentum RTT
  - 5 worked PYQ-style problems with TCS keystrokes and GATE NAT tolerance bands
  - 7-trap catalog covering 80% of GATE fluid mechanics wrong-answer causes
- [x] [[02 - SUBJECTS/Aerodynamics/01.2e - Fluid Kinematics, Differential NS and Incompressibility|01.2e — Fluid Kinematics, Differential NS & Incompressibility (Day 2 Master Note)]] ✅ *(2026-10-02)*
  - Eulerian vs Lagrangian perspectives; Streamlines, Pathlines, Streaklines, and Timelines (steady vs unsteady divergence)
  - Material derivative derivation: local vs convective acceleration; 2D cross-term traps
  - Differential continuity four-form ladder: conservative divergence, material, solenoidal incompressibility, 1D compressible
  - Incompressibility condition $\nabla\cdot\vec{V}=0$, dilatation rate, and stream function $\psi$ existence
  - Newtonian viscous stress tensor $\tau_{ij}$, isotropic pressure vs deviatoric shear stress
  - Full Navier-Stokes equations: complete 5-term anatomy and physical roles (local/convective inertia, pressure gradient, viscous diffusion, body force)
  - NS special limits: Euler ($\mu=0$), Stokes/creeping ($Re \ll 1$), hydrostatics ($\vec{V}=0$), fully-developed channel
  - Dimensionless NS and Reynolds number physical interpretation
  - Complete boundary condition catalog (no-slip, no-penetration, free surface, inlet/outlet)
  - Systems of Linear Equations (SLE): Rouché-Capelli decision tree and row echelon shortcuts
  - 6 verified GATE PYQ problems with step-by-step solutions, TCS keystrokes, and 6-trap catalog
- [x] [[02 - SUBJECTS/Aerodynamics/01.2c - Conservation of Energy]] ✅ *(2026-08-09)*
  - Reynolds Transport Theorem for total energy and derivation of Steady Flow Energy Equation (SFEE)
  - Specific total enthalpy ($h_0 = h + \frac{1}{2}V^2$) and stagnation temperature invariant ($T_0 = \text{const}$) in adiabatic flows
  - Differential total energy equation and internal thermal energy equation ($\rho c_v \frac{DT}{Dt} = -p(\nabla\cdot\vec{V}) + k\nabla^2 T + \Phi$)
  - Viscous dissipation function $\Phi = \tau_{ij}\frac{\partial u_i}{\partial x_j} \ge 0$ and irreversible frictional heat generation
  - Aerodynamic kinetic heating, adiabatic wall recovery temperature ($T_{aw} = T_e[1 + r\frac{\gamma-1}{2}M_e^2]$), and recovery factors ($r_{\text{lam}}=\sqrt{Pr}, r_{\text{turb}}=\sqrt[3]{Pr}$)
- [x] [[02 - SUBJECTS/Aerodynamics/01.2d - Exact Solutions of Navier-Stokes Equations (Couette & Poiseuille)|01.2d — Exact Solutions of Navier-Stokes Equations (Day 3 Master Note)]] ✅ *(2026-10-03)*
  - Steady parallel flow reduction of Navier-Stokes equations in Cartesian and Cylindrical coordinates
  - Plane Couette flow (pure shear-driven, linear profile $u=Uy/h$, constant vorticity $\omega_z = -U/h$)
  - Generalized Couette flow with pressure gradient: $u(y) = U(y/h) + \frac{1}{2\mu}(-\frac{dp}{dx})y(h-y)$ and reverse flow boundary ($P \le -1$)
  - Two-fluid stratified Couette flow: interface velocity $u_{\text{int}} = U \frac{\mu_2}{\mu_1+\mu_2}$ and shear stress continuity
  - Plane Poiseuille flow between fixed plates: parabolic profile, $u_{\text{avg}} = \frac{2}{3}u_{\max}$, wall shear $\tau_w = \frac{h}{2}(-\frac{dp}{dx})$, friction factor $f = 96/Re_h$
  - Hagen-Poiseuille flow in circular pipes: parabolic profile, $u_{\text{avg}} = \frac{1}{2}u_{\max}$, discharge $Q = \frac{\pi D^4}{128\mu}(-\frac{dp}{dx})$, friction factor $f = 64/Re_D$
  - Scaling laws: $\Delta p \propto D^{-4}$ and pumping power $P_{\text{pump}} \propto D^{-4}$ at fixed flow rate $Q$
  - 4 verified GATE PYQ sprint problems with step-by-step solutions, TCS keystrokes, and official tolerance bands
- [x] [[02 - SUBJECTS/Aerodynamics/01.3 - Dimensional Analysis and Dynamic Similarity]] ✅ *(2026-08-09)*
  - Fundamental dimensions ($MLT\theta$ and $FLT\theta$ systems) and dimensional matrix rank $k$
  - Buckingham Pi theorem 6-step derivation algorithm ($N_\Pi = n - k$)
  - Aerodynamic dimensionless numbers ($Re, M, Fr, We, Eu, Kn, Pr, St, Gr$) and physical force ratios
  - Knudsen number regimes and continuum breakdown threshold ($Kn = \sqrt{\frac{\gamma\pi}{2}}\frac{M}{Re}$)
  - Geometric, kinematic, and dynamic similarity conditions
  - Reynolds-Mach scaling paradox in wind tunnels and engineering solutions (pressurized, cryogenic, heavy gas)
- [x] [[02 - SUBJECTS/Aerodynamics/01.3a - Dynamic Similarity and Wind Tunnel Model Testing]] ✅ *(2026-08-09)*
  - Similitude triad: Geometric ($\lambda_L$), Kinematic ($\lambda_V, \lambda_t = \lambda_L/\lambda_V$), and Dynamic ($\lambda_F$) similarity
  - Rigorous proof via non-dimensionalized Navier-Stokes equations ($\vec{V}^*, p^*$ identical when $Re_m=Re_p, Fr_m=Fr_p$)
  - Incompressible force/power scaling ($F_m/F_p = (\rho_m/\rho_p)(\nu_m/\nu_p)^2$) and water tunnel testing equivalence
  - Compressible pressurized wind tunnel pressure ratio ($p_m/p_p = (L_p/L_m)(\mu_m/\mu_p)\sqrt{T_m/T_p}$)
  - Free-surface Froude scaling laws ($V_m/V_p = \lambda_L^{1/2}, F_m/F_p = \lambda_L^3, P_m/P_p = \lambda_L^{7/2}$)
  - Wind tunnel blockage corrections (solid blockage $\epsilon_{sb}$, wake blockage $\epsilon_{wb}$) and boundary layer tripping
- [ ] [[02 - SUBJECTS/Aerodynamics/01.4 - Incompressibility Conditions and Newtonian Fluids]] 🔲
  - Incompressibility conditions ($\nabla \cdot \vec{V} = 0, M < 0.3$)
  - Newtonian fluids, Newton's law of viscosity, stress tensor, rheological classifications
- [x] [[02 - SUBJECTS/Aerodynamics/01.5 - Pressure Measurement and U-Tube Manometers]] ✅ *(2026-10-04)*
  - Differential hydrostatics equation $\nabla p = \rho \vec{g}$ and isobaric horizontal planes
  - 4-step golden jump protocol (down add, up subtract, horizontal static equivalence)
  - U-tube, differential, inverted, and inclined tube manometers (magnification $M \approx 1/\sin\theta$)
  - Two-fluid micromanometer with enlarged reservoirs and surface tension capillary correction
  - Hydrostatic forces on plane submerged surfaces and center of pressure ($h_{cp} > \bar{h}$)

### 2. Elementary Ideas of Viscous Flows
- [ ] [[02 - SUBJECTS/Aerodynamics/02.1 - Hagen-Poiseuille Flow and Couette Flow]] 🔲
- [ ] [[02 - SUBJECTS/Aerodynamics/02.2 - Boundary Layer Theory and Thickness Definitions]] 🔲

### 3. Two-Dimensional Potential Flow Theory
- [x] [[02 - SUBJECTS/Aerodynamics/03.1 - Elementary Potential Flows and Superposition]] ✅ *(2026-10-05)*
  - Velocity potential $\phi$ (irrotational $\nabla \times \vec{V} = 0$) and stream function $\psi$ (incompressible $\nabla \cdot \vec{V} = 0$)
  - Cauchy-Riemann equations and mutual orthogonality of streamlines and equipotential lines
  - Laplace's equation $\nabla^2\phi = 0, \nabla^2\psi = 0$ and principle of linear superposition
  - Elementary building blocks: Uniform flow, line source/sink ($\Lambda$), doublet ($\kappa$), and point vortex ($\Gamma$)
- [x] [[02 - SUBJECTS/Aerodynamics/03.2 - Flow Past a Circular Cylinder (With and Without Circulation) & D'Alembert Paradox]] ✅ *(2026-10-06)*
  - Superposition with circulation: $\psi = V_\infty \sin\theta (r - R^2/r) + \frac{\Gamma}{2\pi}\ln(r/R)$
  - Surface velocity $V_\theta = -2 V_\infty \sin\theta - \frac{\Gamma}{2\pi R}$ and $C_p(\theta)$ distribution
  - Stagnation point bifurcation: Subcritical ($|\Gamma| < 4\pi R V_\infty$), Critical ($4\pi R V_\infty$), and Supercritical ($r_{\text{stag}} > R$ in fluid)
  - Surface pressure integration: D'Alembert's paradox ($D' \equiv 0$) and Kutta-Joukowski theorem ($L' = \rho_\infty V_\infty \Gamma$)
  - Magnus effect, spinning cylinders, real fluid boundary layer separation, and drag crisis ($C_D \approx 1.2 \to 0.3$)

- [x] [[02 - SUBJECTS/Aerodynamics/04.1 - Airfoil Nomenclature, Kutta-Joukowski Theorem and Aerodynamic Coefficients]] ✅ *(2026-10-07)*
  - Airfoil geometric parameters: Chord line, mean camber line $y_c(x)$, max camber ($m$), location ($p$), thickness ($t$)
  - NACA 4-digit and 5-digit analytical decoding algorithms and camber line equations
  - Force transformations: Wind axes ($L, D$) to Body axes ($N, A$) and small-angle approximations
  - Aerodynamic center ($x_{ac} = c/4$, $dC_M/d\alpha \equiv 0$) vs Center of pressure ($x_{cp} = c/4 - c_{m,ac}/c_l \cdot c$)
  - Pitching moment sign conventions: Nose-down negative moment for positive camber, stability implications
- [ ] [[02 - SUBJECTS/Aerodynamics/04.2 - Thin Airfoil Theory, Kutta Condition and Starting Vortex]] 🔲
- [ ] [[02 - SUBJECTS/Aerodynamics/04.3 - Finite Wing Theory and Prandtl Lifting Line Theory]] 🔲
- [ ] [[02 - SUBJECTS/Aerodynamics/04.4 - Critical and Drag Divergence Mach Numbers]] 🔲

### 5. Compressible Flows
- [ ] [[02 - SUBJECTS/Aerodynamics/05.1 - 1D Compressible Flow and Isentropic Relations]] 🔲
- [ ] [[02 - SUBJECTS/Aerodynamics/05.2 - Normal and Oblique Shock Waves]] 🔲
- [ ] [[02 - SUBJECTS/Aerodynamics/05.3 - Prandtl-Meyer Expansion Waves]] 🔲
- [ ] [[02 - SUBJECTS/Aerodynamics/05.4 - Flow Through Quasi-1D Nozzles and Diffusers]] 🔲

---

## 🟡 SPECIAL TOPICS (≤10% of questions)

### 6. Special Aerodynamics Topics
- [ ] [[02 - SUBJECTS/Aerodynamics/06.1 - Fanno Flow and Rayleigh Flow]] 🔲 *(Special)*
- [ ] [[02 - SUBJECTS/Aerodynamics/06.2 - Pressure Measurement: Manometers and Pitot-Static Probes]] 🔲 *(Special)*

---

## 📊 Progress Tracker

| Topic | Type | Status | Date First Read | Date Revised | PYQs Done |
|---|---|---|---|---|---|
| 01.1 Fluid Kinematics | 🔵 Core | 🟢 First Read | 2026-08-09 | 2026-08-09 | 0 |
| 01.1a Streamlines & Curvature | 🔵 Core | 🟢 First Read | 2026-08-09 | 2026-08-09 | 0 |
| 01.1b Streaklines & Visualization | 🔵 Core | 🟢 First Read | 2026-08-09 | 2026-08-09 | 0 |
| 01.1c Pathlines & Particle Dynamics | 🔵 Core | 🟢 First Read | 2026-08-09 | 2026-08-09 | 0 |
| 01.2a Conservation of Mass | 🔵 Core | 🟢 First Read | 2026-08-09 | 2026-08-09 | 0 |
| 01.2b Conservation of Momentum | 🔵 Core | 🟢 First Read | 2026-08-09 | 2026-08-09 | 0 |
| 01.2c Conservation of Energy | 🔵 Core | 🟢 First Read | 2026-08-09 | 2026-08-09 | 0 |
| 01.3 Dimensional Analysis | 🔵 Core | 🟢 First Read | 2026-08-09 | 2026-08-09 | 0 |
| 01.3a Dynamic Similarity & Scaling | 🔵 Core | 🟢 First Read | 2026-08-09 | 2026-08-09 | 0 |
| 01.4 Incompressibility & Newtonian Fluids | 🔵 Core | 🔲 To-Do | | | 0 |
| 02 Viscous Flows & Boundary Layers | 🔵 Core | 🔲 To-Do | | | 0 |
| 03 Potential Flow Theory | 🔵 Core | 🔲 To-Do | | | 0 |
| 04 Airfoils and Wings | 🔵 Core | 🔲 To-Do | | | 0 |
| 05 Compressible Flows | 🔵 Core | 🔲 To-Do | | | 0 |
| 06 Special Topics (Fanno/Rayleigh/Pitot) | 🟡 Special | 🔲 To-Do | | | 0 |

---

## 🔗 Resources & Links
- **Formula Sheet:** [[06 - FORMULA SHEETS/Aerodynamics - Formulas]]
- **PYQ Folder:** [[04 - PYQs/Aerodynamics/]]
- **Roadmap:** [[01 - ROADMAP/GATE AE 2027 Master Roadmap]]
- **Official Syllabus:** [[00 - META/GATE 2027 Official Syllabus]]

---

## 💡 GATE AE Strategy for Aerodynamics

1. **Thin Airfoil & Lifting Line Theory:** Highly scoring and regularly tested in GATE AE.
2. **Normal & Oblique Shocks + Nozzle Flow:** Pure formula-based numericals.
3. **Viscous & Potential Flow:** Master superposition of elementary flows and BL thickness definitions.
4. **Special Topics:** Cover Fanno/Rayleigh flow basic relations and Pitot tube equation after mastering Core topics.
