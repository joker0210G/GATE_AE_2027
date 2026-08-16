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

### 1.1 Fluid Kinematics & Flow Field Properties
| Formula | Description | Key Condition / Use Case |
|---|---|---|
| $\frac{D}{Dt} = \frac{\partial}{\partial t} + (\vec{V}\cdot\nabla)$ | Material / Substantial Derivative | Rate of change following fluid parcel |
| $\vec{a} = \frac{\partial\vec{V}}{\partial t} + (\vec{V}\cdot\nabla)\vec{V}$ | Fluid Acceleration Field | Local + Convective acceleration |
| $a_x = \frac{\partial u}{\partial t} + u\frac{\partial u}{\partial x} + v\frac{\partial u}{\partial y} + w\frac{\partial u}{\partial z}$ | $x$-acceleration component | 3D Cartesian flow field |
| $\frac{dx}{u} = \frac{dy}{v} = \frac{dz}{w} \iff \frac{dy}{dx} = \frac{v}{u}$ | Streamline Differential Equations | Tangent to $\vec{V}$ at fixed instant $t=t_0$ |
| $\frac{dx}{dt} = u, \frac{dy}{dt} = v, \frac{dz}{dt} = w$ | Pathline Differential System | Particle trajectory over time $t$ |
| Eliminate $\tau$ from $x=f(t,\tau), y=g(t,\tau)$ | Streakline Equation | Locus of particles from injection port $(x_0, y_0)$ |
| $\dot{\Delta} = \nabla \cdot \vec{V} = \frac{\partial u}{\partial x} + \frac{\partial v}{\partial y} + \frac{\partial w}{\partial z} = 0$ | Incompressibility Condition | Volumetric dilatation rate $= 0$ |
| $\dot{\gamma}_{xy} = \frac{\partial v}{\partial x} + \frac{\partial u}{\partial y}$ | Shear Strain Rate (2D) | Rate of angular deformation |
| $\vec{\Omega} = \frac{1}{2}(\nabla \times \vec{V}), \quad \Omega_z = \frac{1}{2}\left(\frac{\partial v}{\partial x} - \frac{\partial u}{\partial y}\right)$ | Angular Velocity / Rate of Rotation | Average fluid element rotation |
| $\vec{\omega} = \nabla \times \vec{V} = 2\vec{\Omega}$ | Vorticity Vector | $\vec{\omega} = \vec{0} \iff$ Irrotational flow |
| $\omega_z = \frac{1}{r}\frac{\partial(r v_\theta)}{\partial r} - \frac{1}{r}\frac{\partial v_r}{\partial \theta}$ | Vorticity in Cylindrical Polar | Polar 2D flow field |
| $\Gamma = \oint_C \vec{V} \cdot d\vec{r} = \iint_S \omega_z\,dA$ | Circulation & Stokes' Theorem | Circulation = Net vorticity flux |
| $v_\theta = \omega_0 r \implies \omega_z = 2\omega_0, \Gamma = 2\pi\omega_0 r^2$ | Forced Vortex (Solid Body) | Rotational flow |
| $v_\theta = \frac{\Gamma_0}{2\pi r} \implies \omega_z = 0 \text{ }(r>0), \Gamma = \Gamma_0$ | Free Potential Vortex | Irrotational flow ($r > 0$) |
| $u = \frac{\partial\psi}{\partial y}, \quad v = -\frac{\partial\psi}{\partial x}$ | Stream Function ($\psi$) Definition | 2D Incompressible flow (Cartesian) |
| $v_r = \frac{1}{r}\frac{\partial\psi}{\partial\theta}, \quad v_\theta = -\frac{\partial\psi}{\partial r}$ | Stream Function ($\psi$) in Polar | 2D Incompressible flow (Polar) |
| $\Delta Q_{1\to 2} = \psi_2 - \psi_1$ | Volumetric Flow Rate per unit depth | Discharge across any curve between streamlines |
| $\vec{V} = \nabla\phi \iff u = \frac{\partial\phi}{\partial x}, v = \frac{\partial\phi}{\partial y}, w = \frac{\partial\phi}{\partial z}$ | Velocity Potential ($\phi$) Definition | Exists $\iff$ Flow is Irrotational ($\nabla\times\vec{V}=\vec{0}$) |
| $\nabla^2\phi = 0, \quad \nabla^2\psi = 0$ | Laplace Equations | 2D Incompressible Irrotational Potential Flow |
| $\frac{\partial\phi}{\partial x} = \frac{\partial\psi}{\partial y} = u, \quad \frac{\partial\phi}{\partial y} = -\frac{\partial\psi}{\partial x} = v$ | Cauchy-Riemann Relations | Potential Flow coupling |
| $\frac{dx}{u} = \frac{dy}{v} = \frac{dz}{w} \iff \frac{dy}{dx} = \frac{v}{u}$ | Streamline Differential Equations | Tangent to $\vec{V}$ at fixed instant $t=t_0$ |
| $V = \frac{\Delta\psi}{\Delta n} \implies V \propto \frac{1}{\Delta n}$ | Streamline Spacing Rule | Convergence $\implies$ Flow acceleration ($V\uparrow, p\downarrow$) |
| $\rho_1 A_1 V_1 = \rho_2 A_2 V_2 = \text{const}$ | Streamtube 1D Continuity | Zero mass flux across streamtube boundary |
| $a_s = \frac{\partial V}{\partial t} + V\frac{\partial V}{\partial s}, \quad a_n = \frac{V^2}{R}$ | Streamline Acceleration Components | Tangential ($s$) + Normal centripetal ($n$) |
| $-\frac{1}{\rho}\frac{\partial p}{\partial s} - g\frac{\partial z}{\partial s} = \frac{\partial V}{\partial t} + V\frac{\partial V}{\partial s}$ | Streamline Euler Momentum ($s$) | Momentum balance along streamline |
| $\frac{\partial p}{\partial n} = \frac{\rho V^2}{R} \iff \frac{\partial p}{\partial r} = +\frac{\rho V^2}{r}$ | Normal Pressure Gradient (Curvature) | Pressure climbs radially away from center of curvature |
| $p + \frac{1}{2}\rho V^2 + \rho g z = C(\psi)$ | Bernoulli Equation along Streamline | Steady, inviscid, incompressible flow |
| $x = X(t,\tau; x_0), y = Y(t,\tau; y_0)$ | Streakline Parametric Equations | Particles injected at $(x_0, y_0)$ at past times $\tau \le t$ |
| Eliminate $\tau \implies F(x,y,t_{\text{obs}}) = 0$ | Spatial Streakline Equation | Frozen snapshot connecting marked particles |
| $\text{Streamline} \equiv \text{Pathline} \equiv \text{Streakline}$ | Steady Flow Equivalence Theorem | Holds $\iff \partial\vec{V}/\partial t = 0$ |
| $\frac{dx}{dt} = u, \frac{dy}{dt} = v, \frac{dz}{dt} = w$ | Pathline Lagrangian System | Track single particle from $(x_0,y_0,z_0)$ at $t_0$ |
| $s = \int_{t_1}^{t_2} \|\vec{V}(t)\| dt$ | Pathline Arc Length | Total distance traveled along trajectory |
| $t_{\text{transit}} = \int_{x_1}^{x_2} \frac{dx}{u(x)}$ | Fluid Transit / Residence Time | Time taken to travel through duct/nozzle |
| $t_{\text{transit}} = \frac{L}{u_2 - u_1}\ln\left(\frac{u_2}{u_1}\right)$ | Linear Velocity Nozzle Transit Time | Logarithmic mean transit time formula |
| $r(\theta) = r_0 \exp\left[-\frac{\Lambda}{\Gamma}(\theta-\theta_0)\right]$ | Sink-Vortex Pathline | Inward logarithmic spiral path |
| $t_{\text{collapse}} = \frac{\pi r_0^2}{\Lambda}$ | Sink Collapse Time | Time to spiral into sink origin |
| $\tau_p = \frac{\rho_p d_p^2}{18\mu}$ | Particle Relaxation Time | Stokes drag momentum response timescale |
| $Stk = \frac{\tau_p}{\tau_f} = \frac{\rho_p d_p^2 U_0}{18\mu L}$ | Particle Stokes Number | $Stk \ll 0.1 \implies$ tracer; $Stk \gg 1 \implies$ icing impingement |

### 1.2 Conservation of Mass (Continuity Equation)
| Formula | Description | Key Condition / Use Case |
|---|---|---|
| $\frac{\partial}{\partial t}\iiint_{\text{CV}} \rho\,d\mathcal{V} + \iint_{\text{CS}} \rho(\vec{V}\cdot\hat{n})\,dA = 0$ | Universal Integral Continuity (RTT) | Finite control volume mass balance |
| $\sum \dot{m}_{\text{in}} = \sum \dot{m}_{\text{out}}$ | Steady Multi-Port Mass Balance | $\partial/\partial t = 0$ |
| $\rho_1 A_1 V_1 = \rho_2 A_2 V_2 = \dot{m}$ | Steady Quasi-1D Mass Conservation | 1D duct / streamtube |
| $\bar{V} = \frac{1}{A}\iint_A u(y,z)\,dA$ | Area-Averaged Mean Velocity | Cross-sectional mass flux |
| $\bar{V}_{\text{laminar pipe}} = 0.5 U_{\max}, \bar{V}_{\text{laminar 2D}} = \frac{2}{3} U_{\max}$ | Exact Analytical Mean Velocity Shortcuts | Poiseuille / Couette channels |
| $\delta^* = \int_0^\delta \left(1 - \frac{u}{U_\infty}\right) dy$ | Displacement Thickness | Boundary layer mass flow deficit |
| $\frac{\partial\rho}{\partial t} + \nabla \cdot (\rho\vec{V}) = 0$ | Conservative Differential Continuity | Pointwise conservation (Divergence form) |
| $\frac{D\rho}{Dt} + \rho(\nabla\cdot\vec{V}) = 0$ | Convective / Material Derivative Form | Lagrangian fluid parcel density rate |
| $\nabla \cdot \vec{V} = \frac{\partial u}{\partial x} + \frac{\partial v}{\partial y} + \frac{\partial w}{\partial z} = 0$ | 3D Incompressible Continuity | Solenoidal velocity field ($\rho = \text{const}$) |
| $\frac{1}{r}\frac{\partial(r v_r)}{\partial r} + \frac{1}{r}\frac{\partial v_\theta}{\partial \theta} + \frac{\partial v_z}{\partial z} = 0$ | Cylindrical Incompressible Continuity | Polar / Axisymmetric flows |
| $\frac{d\rho}{\rho} + \frac{dA}{A} + \frac{dV}{V} = 0$ | Logarithmic Differential Continuity | Quasi-1D compressible nozzle flow |
| $\frac{dA}{A} = (M^2 - 1)\frac{dV}{V}$ | Master Area-Mach-Velocity Relation | Convergent-divergent nozzle design |

### 1.3 Conservation of Linear Momentum (Navier-Stokes & Euler)
| Formula | Description | Key Condition / Use Case |
|---|---|---|
| $\sum\vec{F} = \frac{\partial}{\partial t}\iiint \rho\vec{V}d\mathcal{V} + \iint \rho\vec{V}(\vec{V}\cdot\hat{n})dA$ | Universal Integral Momentum (RTT) | Control volume force and momentum balance |
| $\beta = \frac{1}{A\bar{V}^2}\iint u^2 dA$ | Momentum Flux Correction Factor | $\beta = 4/3$ (laminar pipe), $6/5$ (2D channel) |
| $D' = \rho_\infty U_\infty^2 \theta \iff c_d = \frac{2\theta}{c}$ | Airfoil Profile Drag via Wake Deficit | Von Kármán momentum integral |
| $\theta = \int_0^\delta \frac{u}{U_\infty}\left(1 - \frac{u}{U_\infty}\right) dy$ | Von Kármán Momentum Thickness | Boundary layer momentum loss |
| $T = \dot{m}_e V_e - \dot{m}_a V_0 + (p_e - p_a)A_e$ | Jet Propulsion Net Thrust | Momentum + pressure thrust |
| $F_{\text{res}} = 2\dot{m}V\sin(\theta/2)$ | Turning Vane Deflection Force | Frictionless jet turning through $\theta$ |
| $\rho \frac{D\vec{V}}{Dt} = -\nabla p + \nabla\cdot\boldsymbol{\tau} + \rho\vec{g}$ | Cauchy Momentum Equation | General continuous fluid medium |
| $\tau_{ij} = \mu\left(\frac{\partial u_i}{\partial x_j} + \frac{\partial u_j}{\partial x_i}\right) - \frac{2}{3}\mu(\nabla\cdot\vec{V})\delta_{ij}$ | Newtonian Viscous Stress Tensor | Stokes' bulk viscosity hypothesis |
| $\rho \frac{D\vec{V}}{Dt} = -\nabla p + \mu\nabla^2\vec{V} + \rho\vec{g}$ | Incompressible Navier-Stokes Equations | Viscous incompressible ($\rho, \mu = \text{const}$) |
| $\rho \frac{D\vec{V}}{Dt} = -\nabla p + \rho\vec{g}$ | Inviscid Euler Equations | Frictionless fluid limit ($\mu = 0$) |
| $Q = \frac{\pi R^4 \Delta p}{8\mu L} = \frac{\pi D^4 \Delta p}{128\mu L}$ | Hagen-Poiseuille Flow Discharge | Fully developed laminar pipe flow ($Q \propto R^4$) |
| $u(y) = \frac{\Delta p}{2\mu L}(h^2 - y^2)$ | Plane Poiseuille Velocity Profile | 2D channel laminar flow |

### 1.4 Conservation of Energy (First Law & Dissipation)
| Formula | Description | Key Condition / Use Case |
|---|---|---|
| $\dot{Q} - \dot{W}_s = \frac{\partial}{\partial t}\iiint \rho e_t d\mathcal{V} + \iint \rho(h + \frac{V^2}{2} + gz)(\vec{V}\cdot\hat{n})dA$ | Universal Integral Energy (RTT) | Control volume energy balance |
| $q - w_s = (h_2 - h_1) + \frac{V_2^2 - V_1^2}{2} + g(z_2 - z_1)$ | Steady Flow Energy Equation (SFEE) | 1D steady flow per unit mass |
| $h_0 = h + \frac{1}{2}V^2 = c_p T_0 = \text{const}$ | Stagnation Enthalpy Invariant | Adiabatic workless flow ($q=0, w_s=0$) |
| $T_0 = T\left(1 + \frac{\gamma-1}{2}M^2\right)$ | Stagnation Temperature Relation | Valid even across shock waves |
| $V_e = \sqrt{2 c_p (T_{01} - T_e)}$ | Adiabatic Nozzle Exit Velocity | Gas expansion velocity |
| $V_{\max} = \sqrt{2 c_p T_0} = a_0 \sqrt{\frac{2}{\gamma-1}}$ | Maximum Theoretical Gas Speed | Complete expansion into vacuum ($T=0$) |
| $\rho c_v \frac{DT}{Dt} = -p(\nabla\cdot\vec{V}) + k\nabla^2 T + \Phi$ | Differential Thermal Energy Equation | Internal energy temperature balance |
| $\Phi = \tau_{ij}\frac{\partial u_i}{\partial x_j} = \mu\left(\frac{\partial u}{\partial y}\right)^2 \ge 0$ | Viscous Dissipation Function | Irreversible frictional heat generation |
| $T_{aw} = T_e\left(1 + r \frac{\gamma-1}{2}M_e^2\right)$ | Adiabatic Wall Recovery Temperature | Supersonic aerodynamic skin heating |
| $r_{\text{lam}} = \sqrt{Pr}, \quad r_{\text{turb}} = \sqrt[3]{Pr}$ | Temperature Recovery Factor | $r_{\text{lam}}\approx 0.84, r_{\text{turb}}\approx 0.89$ for air |
| $\vec{V}\times\vec{\omega} = \nabla h_0 - T\nabla s$ | Crocco's Theorem | Links energy, vorticity, and entropy |

### 1.5 Dimensional Analysis & Dynamic Similarity
| Formula | Description | Key Condition / Use Case |
|---|---|---|
| $N_\Pi = n - k$ | Buckingham Pi Theorem | Number of independent $\Pi$-groups |
| $Re = \frac{\rho V L}{\mu} = \frac{V L}{\nu}$ | Reynolds Number | $\frac{\text{Inertia Force}}{\text{Viscous Force}}$ |
| $M = \frac{V}{a} = \frac{V}{\sqrt{\gamma R T}}$ | Mach Number | $\sqrt{\frac{\text{Inertia Force}}{\text{Elastic / Compressibility Force}}}$ |
| $Fr = \frac{V}{\sqrt{g L}}$ | Froude Number | $\sqrt{\frac{\text{Inertia Force}}{\text{Gravity Force}}}$ (Surface waves) |
| $We = \frac{\rho V^2 L}{\sigma}$ | Weber Number | $\frac{\text{Inertia Force}}{\text{Surface Tension Force}}$ (Droplets/sprays) |
| $C_p = \frac{p - p_\infty}{\frac{1}{2}\rho_\infty V_\infty^2}$ | Pressure Coefficient / Euler Number | Aerodynamic pressure distribution |
| $Kn = \frac{\lambda}{L} = \sqrt{\frac{\gamma \pi}{2}}\frac{M}{Re}$ | Knudsen Number Bridge | $Kn < 0.01 \implies$ Continuum Navier-Stokes valid |
| $Pr = \frac{\mu c_p}{k} = \frac{\nu}{\alpha}$ | Prandtl Number | $\frac{\text{Momentum Diffusivity}}{\text{Thermal Diffusivity}}$ |
| $St = \frac{f L}{V}$ | Strouhal Number | Unsteady vortex shedding frequency |
| $\frac{F_m}{F_p} = \left(\frac{\rho_m}{\rho_p}\right)\left(\frac{\nu_m}{\nu_p}\right)^2$ | Incompressible Aerodynamic Force Ratio | Low-speed model force scaling |
| $\frac{P_m}{P_p} = \left(\frac{\rho_m}{\rho_p}\right)\left(\frac{\nu_m}{\nu_p}\right)^3\left(\frac{L_p}{L_m}\right)$ | Incompressible Aerodynamic Power Ratio | Low-speed model power scaling |
| $\frac{p_m}{p_p} = \left(\frac{L_p}{L_m}\right)\left(\frac{\mu_m}{\mu_p}\right)\sqrt{\frac{T_m}{T_p}}$ | Pressurized Tunnel Pressure Ratio | Simultaneous $Re-M$ scaling |
| $\frac{F_m}{F_p} = \lambda_L^3, \quad \frac{P_m}{P_p} = \lambda_L^{7/2}$ | Froude Scaling Laws | Towing tank scale model testing |
| $V_{\text{corrected}} = V_\infty(1 + \epsilon_{sb} + \epsilon_{wb})$ | Wind Tunnel Blockage Correction | Solid and wake constriction speed rise |

**Related Notes:** [[02 - SUBJECTS/Aerodynamics/01.1 - Fluid Kinematics]] | [[02 - SUBJECTS/Aerodynamics/01.1a - Streamlines and Streamline Curvature]] | [[02 - SUBJECTS/Aerodynamics/01.1b - Streaklines and Flow Visualization]] | [[02 - SUBJECTS/Aerodynamics/01.1c - Pathlines and Particle Dynamics]] | [[02 - SUBJECTS/Aerodynamics/01.2a - Conservation of Mass (Continuity Equation)]] | [[02 - SUBJECTS/Aerodynamics/01.2b - Conservation of Linear Momentum]] | [[02 - SUBJECTS/Aerodynamics/01.2c - Conservation of Energy]] | [[02 - SUBJECTS/Aerodynamics/01.3 - Dimensional Analysis and Dynamic Similarity]] | [[02 - SUBJECTS/Aerodynamics/01.3a - Dynamic Similarity and Wind Tunnel Model Testing]]

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

## 🃏 Interactive Foldable Flashcards Deck

> [!question]- 🃏 Flashcard: Oblique Shock Relation ($\theta\text{--}\beta\text{--}M$)
> **Question:** Write the $\theta\text{--}\beta\text{--}M$ relation for an oblique shock with flow deflection $\theta$, wave angle $\beta$, and Mach number $M_1$.
> > [!success]- **Answer & AIR 1 Traps:**
> > $$\tan\theta = 2\cot\beta \left[ \frac{M_1^2 \sin^2\beta - 1}{M_1^2(\gamma + \cos 2\beta) + 2} \right]$$
> > 
> > ⚠️ **IIT Traps to Watch:**
> > 1. For $\theta = 0$: Either $\beta = \mu = \sin^{-1}(1/M_1)$ (Mach wave) OR $\beta = 90^\circ$ (Normal Shock).
> > 2. Always compute $\beta$ in **Degrees** on the TCS calculator using `1/x` for $\cot\beta$.

> [!question]- 🃏 Flashcard: Prandtl-Glauert Compressibility Rule
> **Question:** What is the linearized subsonic compressibility correction for pressure coefficient $C_p$ and lift coefficient $C_L$? State the valid Mach range.
> > [!success]- **Answer & Formula:**
> > $$C_p = \frac{C_{p,0}}{\sqrt{1 - M_\infty^2}}, \quad C_L = \frac{C_{L,0}}{\sqrt{1 - M_\infty^2}}$$
> > 
> > ⚠️ **Validity Limit:** Valid only for **thin airfoils at small $\alpha$** and **$0.3 < M_\infty < 0.7$**. Fails as $M_\infty \to 1.0$.

> [!question]- 🃏 Flashcard: Thin Airfoil Aerodynamic Center & Lift Slope
> **Question:** For a thin symmetric airfoil in incompressible flow, state the location of the Aerodynamic Center and the lift-curve slope $C_{L\alpha}$.
> > [!success]- **Answer & Formula:**
> > 1. **Aerodynamic Center:** $x_{ac} = c/4 = 0.25c$ from the leading edge.
> > 2. **Lift Slope:** $C_{L\alpha} = 2\pi \text{ rad}^{-1} \approx 0.1097 \text{ deg}^{-1}$.
> > 3. **Pitching Moment:** $C_{M,ac} = 0$ (for symmetric airfoil).

> [!question]- 🃏 Flashcard: Prandtl-Meyer Expansion Relation
> **Question:** How is the turning angle $\theta$ related to the upstream and downstream Mach numbers across a centered Prandtl-Meyer expansion fan?
> > [!success]- **Answer & Formula:**
> > $$\theta = \nu(M_2) - \nu(M_1)$$
> > where $\nu(M)$ is the Prandtl-Meyer function. Flow expands isentropically ($p_{02} = p_{01}, T_{02} = T_{01}$).

---

*Last Updated: 2026-08-17 | Full Index: [[_Index_Aerodynamics]] | [[06 - FORMULA SHEETS/Master Flashcard Hub|Flashcard Hub ↗]]*

