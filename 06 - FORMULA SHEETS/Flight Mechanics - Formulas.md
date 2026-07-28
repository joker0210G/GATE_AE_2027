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

| Quantity / Concept | Troposphere ($0 \le h \le 11$ km) | Stratosphere ($11 \le h \le 20$ km) |
|---|---|---|
| Temperature Profile | $T = T_0 - \lambda h = 288.15 - 0.0065 h$ | $T = \text{const} = 216.65\text{ K } (-56.5^\circ\text{C})$ |
| Lapse rate $\lambda = -dT/dh$ | $+6.5\text{ K/km } (0.0065\text{ K/m})$ | $0\text{ K/km}$ |
| Pressure Ratio $\delta = p/p_0$ | $(T/T_0)^{g_0/\lambda R} = (T/T_0)^{5.256}$ | $\frac{p_{11}}{p_0} e^{-\frac{g_0(h-11000)}{RT_{11}}} = \delta_{11} e^{-\frac{h-11000}{H_s}}$ |
| Density Ratio $\sigma = \rho/\rho_0$ | $(T/T_0)^{g_0/\lambda R - 1} = (T/T_0)^{4.256}$ | $\frac{\rho_{11}}{\rho_0} e^{-\frac{g_0(h-11000)}{RT_{11}}} = \sigma_{11} e^{-\frac{h-11000}{H_s}}$ |

**Key Constants & Conversion Rules:**
- **Sea Level Standards:** $T_0 = 288.15\text{ K}$, $p_0 = 101325\text{ Pa}$, $\rho_0 = 1.2250\text{ kg/m}^3$, $a_0 = 340.29\text{ m/s}$
- **Air Constants:** $g_0 = 9.80665\text{ m/s}^2$, $R = 287.053\text{ J/(kg}\cdot\text{K)}$, $\gamma = 1.40$, Earth radius $r_0 = 6356.766\text{ km}$
- **Geometric vs. Geopotential Altitude:** $h = \frac{r_0 h_g}{r_0 + h_g} \iff h_g = \frac{r_0 h}{r_0 - h}$
- **Hydrostatic Eq:** $dp = -\rho g_0 dh \implies \frac{dp}{p} = -\frac{g_0}{RT} dh$
- **Speed of Sound:** $a = \sqrt{\gamma R T} \approx 20.047 \sqrt{T}\text{ m/s}$ (depends ONLY on static $T$)
- **Master Identity:** $\delta = \sigma \cdot \theta$ where $\theta = T/T_0$
- **Stratosphere Scale Height:** $H_s = \frac{R T_{11}}{g_0} \approx 6.34\text{ km}$

**Related Note:** [[02 - SUBJECTS/Flight Mechanics & Space Dynamics/01.1 - Standard Atmosphere|01.1 Standard Atmosphere (ISA Model)]]

### 1.2 Aircraft Classification & Configurations

| Feature / Criteria | Category | Key Formula / Rule |
|---|---|---|
| **LTA vs. HTA** | Aerostats vs. Aerodynes | LTA: $F_B = \rho_{\text{air}} g V = W$; HTA: $L = \frac{1}{2}\rho V^2 S C_L = W$ |
| **Wing Position** | High / Mid / Low | High: $+3^\circ$ pendulum stability; Low: needs $+4^\circ$ dihedral |
| **Elliptical Wing** | Chord $c(y) = c_0 \sqrt{1 - (2y/b)^2}$ | $e = 1.0 \implies C_{Di,min} = \frac{C_L^2}{\pi AR}$ (min induced drag) |
| **Swept Wing** | Quarter-chord sweep $\Lambda$ | $M_{\text{eff}} = M_\infty \cos\Lambda$ (delays $M_{\text{crit}}$) |
| **Tail Trim Lift** | Canard vs. Conventional | Canard: $L_w + L_c = W$ (positive lift); Conv: $L_w - L_t = W$ |
| **Ground Stability** | Tricycle vs. Taildragger | Main gear behind CG $\implies$ STABLE; Main gear ahead of CG $\implies$ UNSTABLE (Ground loop) |
| **Autogyro** | Engine powers propeller ONLY | Rotor turns via **autorotation** (No anti-torque tail rotor needed!) |

**Related Note:** [[02 - SUBJECTS/Flight Mechanics & Space Dynamics/01.2 - Classification of Aircraft|01.2 Classification of Aircraft]]

### 1.3 Aircraft Components, Controls & Motion Axes

| Motion Axis | Moment / Rate | Primary Control | Deflection Sign & Aerodynamic Effect |
|---|---|---|---|
| **Longitudinal Axis ($X$)** | Roll ($L, p, \phi$) | **Ailerons** | Differential wing lift $\implies$ Bank angle |
| **Lateral Axis ($Y$)** | Pitch ($M, q, \theta$) | **Elevator** | Down ($\delta_e > 0$) $\implies$ Nose DOWN moment ($M < 0$) |
| **Vertical Axis ($Z$)** | Yaw ($N, r, \psi$) | **Rudder** | Left ($\delta_r > 0$) $\implies$ Nose RIGHT moment ($N > 0$) |

**Key Structural & High-Lift Formulas:**
- **Wing Load Member Roles:** Spars $\to$ Bending ($M_b$) & Shear ($V_y$); Ribs $\to$ Airfoil shape; Skin $\to$ Torsion ($T$); Stringers $\to$ Buckling stiffeners.
- **Aerodynamic Center ($AC$):** $\frac{d C_{m,ac}}{d\alpha} = 0 \implies AC = 0.25\bar{c}$ (Subsonic) $\to 0.50\bar{c}$ (Supersonic).
- **Stall Speed Formula:** $V_{\text{stall}} = \sqrt{\frac{2W}{\rho S C_{L,\max}}}$ (Fowler flap increases BOTH $S$ and $C_{L,\max}$).
- **Trim Tab Rule:** Deflects **OPPOSITE** to primary control surface to achieve $F_s = 0$.

**Related Note:** [[02 - SUBJECTS/Flight Mechanics & Space Dynamics/01.3 - Aircraft Components and Controls|01.3 Aircraft Components & Controls]]

### 1.3b Wing Geometry & Control Tab Mechanics

| Quantity / Concept | Formula / Mathematical Expression | Special Condition / Rule |
|---|---|---|
| **Wing Area ($S$)** | $S = \frac{b}{2} c_r (1 + \lambda)$ | Straight-tapered wing ($\lambda = c_t/c_r$) |
| **Mean Aerodynamic Chord ($\bar{c}$)** | $\bar{c} = \frac{2}{3} c_r \left( \frac{1 + \lambda + \lambda^2}{1 + \lambda} \right)$ | Delta Wing ($\lambda = 0 \implies \bar{c} = \frac{2}{3} c_r$) |
| **Spanwise MAC Location ($\bar{y}$)** | $\bar{y} = \frac{b}{6} \left( \frac{1 + 2\lambda}{1 + \lambda} \right)$ | Delta Wing ($\lambda = 0 \implies \bar{y} = \frac{b}{6}$) |
| **Aspect Ratio ($AR$)** | $AR = \frac{b^2}{S} = \frac{b}{\bar{c}_{\text{geom}}}$ | Rectangular wing $\bar{c} = c_r$ |
| **Spar Flange Stress** | $\sigma = \frac{M_{\text{bending}}}{h \cdot A_{\text{flange}}}$ | Spar flanges carry bending moment $M_b$ |
| **Control Tab Types** | Trim (Zero $F_s$), Balance (Reduces $F_s$), Anti-Servo (Increases $F_s$) | Balance/Trim move OPPOSITE; Anti-Servo moves SAME |

**Related Note:** [[02 - SUBJECTS/Flight Mechanics & Space Dynamics/01.3b - Airplane Parts and Wing Geometry|01.3b Airplane Parts & Wing Geometry]]

### 1.4 Pressure Altitude & Altimetry

| Quantity / Setting | Exact Formula / Value | Practical Shortcut / Meaning |
|---|---|---|
| **Pressure Altitude ($h_p$)** | $h_p = 44330.8 \left[ 1 - (p/p_0)^{0.190263} \right] \text{ m}$ | Kollsman set to $1013.25\text{ hPa} / 29.92\text{ inHg}$ |
| **Density Altitude ($h_d$)** | $h_d = 44330.8 \left[ 1 - (\rho/\rho_0)^{0.234968} \right] \text{ m}$ | $h_d \approx h_p + 120 \times (T_{\text{act}} - T_{\text{ISA}})_{^\circ\text{C}} \text{ (ft)}$ |
| **Temperature Altitude ($h_T$)** | $h_T = \frac{288.15 - T_{\text{act}}}{0.0065} \text{ m}$ | Altitude where $T_{\text{ISA}} = T_{\text{actual}}$ |
| **Altimeter Settings** | QFE = 0 at runway; QNH = MSL altitude; QNE = Flight Level ($h_p$) | QFE = Height AGL; QNH = Altitude MSL |
| **Cold Air Error** | $T_{\text{actual}} < T_{\text{ISA}} \implies h_{\text{true}} < h_{\text{ind}}$ | "High to Low, Look Out Below!" |

**Related Note:** [[02 - SUBJECTS/Flight Mechanics & Space Dynamics/01.4 - Pressure Altitude and Altitude Types|01.4 Pressure Altitude & Altimetry]]

### 1.5 Airspeed Types (IAS, CAS, EAS, TAS)

| Airspeed Concept | Mathematical Formula / Identity | Key Feature / Rule |
|---|---|---|
| **ICE-T Chain** | $\text{IAS} \to \text{CAS} \to \text{EAS} \to \text{TAS}$ | Order of corrections |
| **Equivalent Airspeed (EAS)** | $q = \frac{1}{2}\rho V_{\text{TAS}}^2 = \frac{1}{2}\rho_0 V_{\text{EAS}}^2$ | Produces identical dynamic pressure $q$ at sea level |
| **TAS from EAS** | $V_{\text{TAS}} = \frac{V_{\text{EAS}}}{\sqrt{\sigma}} = M \cdot a$ | $V_{\text{TAS}} > V_{\text{EAS}}$ ALWAYS at altitude ($h>0$) |
| **CAS to EAS** | $V_{\text{EAS}} = f_c \cdot V_{\text{CAS}}$ | Compressibility factor $f_c \le 1.0$ ($f_c=1.0$ for $M<0.3$) |
| **Stall Speed Behavior** | $V_{\text{EAS, stall}} = \sqrt{\frac{2W}{\rho_0 S C_{L,\max}}}$ | $V_{\text{EAS, stall}}$ is CONSTANT; $V_{\text{TAS, stall}} = V_{\text{EAS, stall}}/\sqrt{\sigma}$ |
| **Groundspeed ($V_G$)** | $V_G = V_{\text{TAS}} \mp V_{\text{wind}}$ | Headwind decreases $V_G$; Tailwind increases $V_G$ |

**Related Note:** [[02 - SUBJECTS/Flight Mechanics & Space Dynamics/01.5 - Airspeeds (IAS, CAS, EAS, TAS)|01.5 Airspeeds (IAS, CAS, EAS, TAS)]]

### 1.5b Indicated & Calibrated Airspeed (IAS / CAS) Mechanics

| Formula / Phenomenon | Mathematical Expression / Diagnostic Behavior | Key Feature / Rule |
|---|---|---|
| **CAS Definition** | $V_{\text{CAS}} = V_{\text{IAS}} + \Delta V_{\text{inst}} + \Delta V_{\text{pos}}$ | Position & instrument error free |
| **Incompressible CAS ($M<0.3$)** | $V_{\text{CAS}} = \sqrt{\frac{2(p_0 - p)}{\rho_0}} = \sqrt{\frac{2 q_c}{\rho_0}}$ | Sea-level calibration formula ($\rho_0 = 1.225\text{ kg/m}^3$) |
| **Compressible CAS ($M \ge 0.3$)** | $V_{\text{CAS}} = \sqrt{ 5 a_0^2 \left[ \left( 1 + \frac{q_c}{p_0} \right)^{0.2857} - 1 \right] }$ | Wantzel formula ($a_0 = 340.29\text{ m/s}, p_0 = 101325\text{ Pa}$) |
| **Trapped Pitot (Climb)** | $p_0 = \text{const}, p \downarrow \implies q_c \uparrow \implies \text{ASI OVERREADS}$ | Pitot blockage acts like an Altimeter in Climb! |
| **Trapped Pitot (Descent)** | $p_0 = \text{const}, p \uparrow \implies q_c \downarrow \implies \text{ASI UNDERREADS}$ | Trapped pitot in descent indicates dangerously slow! |
| **ASI Color Arcs** | White ($V_{S0} \to V_{\text{FE}}$), Green ($V_{S1} \to V_{\text{NO}}$), Yellow ($V_{\text{NO}} \to V_{\text{NE}}$), Red ($V_{\text{NE}}$) | Flap range (White), Normal (Green), Never-Exceed (Red) |

**Related Note:** [[02 - SUBJECTS/Flight Mechanics & Space Dynamics/01.5b - Calibrated and Indicated Airspeeds|01.5b Calibrated & Indicated Airspeeds]]

### 1.6a Primary Flight Instruments: Pressure Altimeter

| Altimetry Concept / Error | Mathematical Expression / Rule | Key Feature / Diagnostic |
|---|---|---|
| **Altimeter Hydrostatic Eq.** | $dp = -\rho g_0 dh \implies h = \frac{T_0}{\lambda} \left[ 1 - (p/p_{\text{ref}})^{0.190263} \right]$ | Aneroid capsules expand in climb ($p \downarrow$) |
| **Barometric Setting Error** | $h_{\text{true}} = h_{\text{ind}} + 27.3 \times (QNH_{\text{act}} - QNH_{\text{dialed}})_{\text{hPa}}$ | $\Delta h \approx 30 \text{ ft/hPa} \approx 1000 \text{ ft/inHg}$ |
| **Temperature Error (Exact)** | $h_{\text{true}} = h_{\text{station}} + (h_{\text{ind}} - h_{\text{station}}) \times \frac{T_{\text{actual, K}}}{T_{\text{ISA, K}}}$ | Cold air ($T < T_{\text{ISA}}$) $\implies h_{\text{true}} < h_{\text{ind}}$ ("Look Out Below!") |
| **Temp Error Approximation** | $\Delta h_{\text{temp}} \approx 0.004 \times h_{\text{ind}} \times (T_{\text{act}} - T_{\text{ISA}})_{^\circ\text{C}}$ | $4\%$ error for every $10^\circ\text{C}$ ISA temperature deviation |
| **Static Port Blocked** | Altimeter FREEZES at blockage altitude | Zero pointer response to climb or descent |
| **Alternate Static Opened** | Cockpit venturi suction $\implies p_{\text{cockpit}} < p_{\text{ambient}}$ | Altimeter OVERREADS by $100 - 200 \text{ ft}$ |

**Related Note:** [[02 - SUBJECTS/Flight Mechanics & Space Dynamics/01.6a - Pressure Altimeter|01.6a Pressure Altimeter]]

### 1.6b Primary Flight Instruments: Airspeed Indicator (ASI)

| ASI Concept / Diagnostic | Mathematical Formula / Failure Rule | Key Feature / Phenomenon |
|---|---|---|
| **ASI Pressure Inputs** | Diaphragm $= p_0$ (Pitot); Case $= p$ (Static) | Differential pressure gauge: $q_c = p_0 - p$ |
| **Incompressible CAS Formula** | $V_{\text{CAS}} = \sqrt{\frac{2(p_0 - p)}{\rho_0}} \approx 1.278 \sqrt{q_c \text{ in Pa}} \text{ m/s}$ | Calibrated to sea-level ISA density $\rho_0 = 1.225\text{ kg/m}^3$ |
| **Trapped Pitot in Climb** | $p_0 = \text{const}, p \downarrow \implies q_c = p_0 - p \uparrow$ | ASI OVERREADS (acts like an Altimeter in Climb!) |
| **Trapped Pitot in Descent** | $p_0 = \text{const}, p \uparrow \implies q_c = p_0 - p \downarrow$ | ASI UNDERREADS (indicates dangerously slow!) |
| **Trapped Static in Climb** | $p_{\text{trap}} = \text{const}, p_0 \downarrow \implies q_c \downarrow$ | ASI UNDERREADS (indicates lower speed than actual) |
| **Trapped Static in Descent** | $p_{\text{trap}} = \text{const}, p_0 \uparrow \implies q_c \uparrow$ | ASI OVERREADS (indicates higher speed than actual) |
| **Alternate Static Opened** | Cockpit suction $\implies p_{\text{case}} < p_{\text{ambient}}$ | ASI OVERREADS (reads slightly fast) |

**Related Note:** [[02 - SUBJECTS/Flight Mechanics & Space Dynamics/01.6b - Airspeed Indicator|01.6b Airspeed Indicator]]

### 1.6c Primary Flight Instruments: Vertical Speed Indicator (VSI)

| VSI Concept / Mechanics | Mathematical Formula / Failure Rule | Key Feature / Phenomenon |
|---|---|---|
| **VSI Diaphragm $\Delta p$** | $\Delta p = \tau \rho g_0 \left(\frac{dh}{dt}\right) = \tau \rho g_0 \dot{h}$ | Diaphragm $= p(t)$; Case $= p_c(t)$ via Capillary Leak |
| **Pressure Rate of Change** | $\frac{dp}{dt} = -\rho g_0 \dot{h} \approx -12.01 \times \dot{h} \text{ (Pa/s per m/s)}$ | Static pressure rate is proportional to climb rate |
| **VSI First-Order Lag** | $\dot{h}_{\text{ind}}(t) = \dot{h}_{\text{true}} (1 - e^{-t/\tau})$ | Standard VSI has $6 - 9\text{ s}$ lag ($\tau = R_{\text{cap}} C_{\text{case}}$) |
| **Instantaneous VSI (IVSI)** | Accelerometer-driven dashpot pistons | Eliminates lag instantly during pitch changes |
| **Static Port Blocked** | $p_c = p_{\text{diag}} \implies \Delta p = 0$ | VSI FREEZES AT ZERO ($\dot{h} = 0$) |

**Related Note:** [[02 - SUBJECTS/Flight Mechanics & Space Dynamics/01.6c - Vertical Speed Indicator|01.6c Vertical Speed Indicator]]

### 1.6d Primary Flight Instruments: Turn-and-Bank Indicator & Gyroscopes

| Gyro / Turn Concept | Mathematical Formula / Rule | Key Feature / Diagnostic |
|---|---|---|
| **Gyroscopic Precession** | $T_{\text{prec}} = I \omega r = K_s \cdot \theta_{\text{needle}}$ | Needle deflection $\theta_{\text{needle}}$ is proportional to yaw rate $r$ |
| **Turn Coordinator (Modern)** | Gimbal axis canted UP by $30^\circ$ | Responds to BOTH Roll Rate ($p$) and Yaw Rate ($r$) |
| **Coordinated Turn Bank Angle** | $\tan\phi = \frac{V^2}{g R} = \frac{V \dot{\psi}}{g}$ | Ball stays CENTERED in middle of inclinometer tube |
| **Skidding Turn (Over-Turning)** | Centrifugal force $>$ Gravity component | Ball moves to **OUTSIDE** of turn (too much rudder) |
| **Slipping Turn (Under-Turning)** | Gravity component $>$ Centrifugal force | Ball drops to **INSIDE** of turn (too much bank) |
| **Standard Rate Turn ($3^\circ/\text{s}$)** | $\dot{\psi} = 0.05236\text{ rad/s} \implies R_{\text{std}} \approx 19.1 \times V\text{ (m)}$ | $\phi_{\text{std}}(^\circ) \approx V_{\text{knots}} / 10 + 7$; 2-min $360^\circ$ circle |
| **Correction Rule** | **"STEP ON THE BALL"** | Press rudder pedal on SAME SIDE as ball displacement |

**Related Note:** [[02 - SUBJECTS/Flight Mechanics & Space Dynamics/01.6d - Turn-and-Bank Indicator|01.6d Turn-and-Bank Indicator]]

---

## 2. Aerodynamic Forces & Controls

### 2.1 Aerodynamic Forces, Moments & Center of Pressure

| Quantity / Concept | Mathematical Expression | Key Feature / Rule |
|---|---|---|
| **Body to Wind Transformation** | $L = N \cos\alpha - A \sin\alpha, \quad D = N \sin\alpha + A \cos\alpha$ | Lift has $-\sin\alpha$; Drag has $+\sin\alpha$ |
| **Wind to Body Transformation** | $N = L \cos\alpha + D \sin\alpha, \quad A = D \cos\alpha - L \sin\alpha$ | Body-axis components $N$ and $A$ |
| **Coefficient Transformations** | $C_L = C_N \cos\alpha - C_A \sin\alpha, \quad C_D = C_N \sin\alpha + C_A \cos\alpha$ | Small $\alpha$: $C_L \approx C_N$, $C_D \approx C_N \alpha + C_A$ |
| **Aerodynamic Center ($AC$)** | $\frac{d C_{m,ac}}{d\alpha} = 0$ | Subsonic: $0.25c$; Supersonic: $0.50c$ |
| **Center of Pressure ($CP$)** | $M_{CP} = 0 \implies \frac{x_{cp}}{c} = \frac{x_{ac}}{c} - \frac{C_{m,ac}}{C_L}$ | Symmetric airfoil: $x_{cp}/c = 0.25$ (STRICTLY FIXED) |
| **Cambered Airfoil CP Shift** | $\frac{x_{cp}}{c} = 0.25 + \frac{\|C_{m,ac}\|}{C_L}$ | CP moves FORWARD towards $0.25c$ as $\alpha \uparrow$ ($C_L \uparrow$) |

**Related Note:** [[02 - SUBJECTS/Flight Mechanics & Space Dynamics/02.1 - Aerodynamic Forces and Moments|02.1 Aerodynamic Forces and Moments]]

### 2.2 Angle of Attack ($\alpha$) & Sideslip Angle ($\beta$)

| Aerodynamic Angle | Mathematical Formula | Key Feature / Rule |
|---|---|---|
| **True Airspeed ($V$)** | $V = \sqrt{u^2 + v^2 + w^2}$ | Magnitude of body velocity vector |
| **Angle of Attack ($\alpha$)** | $\tan\alpha = \frac{w}{u} \implies \alpha = \arctan\left(\frac{w}{u}\right) \approx \frac{w}{u}\text{ (rad)}$ | Angle in symmetry plane ($X_b - Z_b$) |
| **Sideslip Angle ($\beta$)** | $\sin\beta = \frac{v}{V} \implies \beta = \arcsin\left(\frac{v}{V}\right) \approx \frac{v}{V}\text{ (rad)}$ | Lateral angle out of symmetry plane |
| **Body Velocity Resolution** | $u = V \cos\alpha \cos\beta, \quad v = V \sin\beta, \quad w = V \sin\alpha \cos\beta$ | Exact 3D kinematic vector resolution |
| **Absolute Alpha ($\alpha_{abs}$)** | $\alpha_{abs} = \alpha - \alpha_{L=0}$ | Measured from Zero-Lift Line ($ZLL$) |
| **Induced Alpha ($\alpha_i$)** | $\alpha_i = \frac{C_L}{\pi AR e} \text{ (rad)} = \frac{57.3 C_L}{\pi AR e} \text{ (deg)}$ | 3D finite wing downwash tilt angle |
| **Effective Alpha ($\alpha_{eff}$)** | $\alpha_{eff} = \alpha - \alpha_i = \alpha - \frac{C_L}{\pi AR e}$ | Local angle felt by 3D wing section |

**Related Note:** [[02 - SUBJECTS/Flight Mechanics & Space Dynamics/02.2 - Angle of Attack and Sideslip Angle|02.2 Angle of Attack and Sideslip Angle]]

### 2.2b Sideslip Mechanics, Stability Derivatives & Crosswind Trim

| Sideslip Concept / Derivative | Mathematical Formula / Rule | Key Feature / Stability Requirement |
|---|---|---|
| **Weathercock Stability** | $C_{n_\beta} = \frac{\partial C_n}{\partial \beta} > 0 \text{ (POSITIVE)}$ | Restores aircraft nose into oncoming wind |
| **Dihedral Effect** | $C_{l_\beta} = \frac{\partial C_l}{\partial \beta} < 0 \text{ (NEGATIVE)}$ | Positive sideslip ($\beta>0$) rolls aircraft LEFT |
| **Side Force Derivative** | $C_{y_\beta} = \frac{\partial C_y}{\partial \beta} < 0 \text{ (NEGATIVE)}$ | Side force opposes lateral sideslip motion |
| **Trim Rudder Deflection** | $\delta_r = -\left( \frac{C_{n_\beta}}{C_{n_{\delta_r}}} \right) \beta$ | Yaw equilibrium in straight steady sideslip |
| **Sideslip Bank Angle** | $C_{y_\beta} \beta + C_{y_{\delta_r}} \delta_r + C_L \sin\phi = 0$ | Side force equilibrium in wing-low flight |
| **Max Crosswind Speed** | $V_{\text{cross, max}} = V_\infty \sin(\beta_{\max})$ where $\beta_{\max} = \left\|\frac{C_{n_{\delta_r}}}{C_{n_\beta}}\right\| \delta_{r,\max}$ | Limited by maximum available rudder $\delta_{r,\max}$ |

**Related Note:** [[02 - SUBJECTS/Flight Mechanics & Space Dynamics/02.2b - Sideslip Mechanics and Trim|02.2b Sideslip Mechanics and Trim]]

### 2.3 High-Lift Devices (Flaps, Slats, Slots)

| Device / Aerodynamic Effect | Mathematical Formula / Graphical Shift | Key Feature / Phenomenon |
|---|---|---|
| **Stall Speed (Flapped)** | $V_{\text{stall, flapped}} = V_{\text{stall, clean}} \sqrt{\frac{S_{\text{clean}} C_{L,\max,\text{clean}}}{S_{\text{flapped}} C_{L,\max,\text{flapped}}}}$ | $C_{L,\max} \uparrow \implies V_{\text{stall}} \downarrow$ |
| **Landing Distance Ratio** | $\frac{S_{g,\text{flapped}}}{S_{g,\text{clean}}} = \left(\frac{V_{\text{stall,\text{flapped}}}}{V_{\text{stall,\text{clean}}}}\right)^2 = \frac{S_{\text{clean}} C_{L,\max,\text{clean}}}{S_{\text{flapped}} C_{L,\max,\text{flapped}}}$ | Landing roll distance scales with $V_{\text{stall}}^2$ |
| **Trailing-Edge Flaps Shift** | Shifts $C_L-\alpha$ curve **UP & LEFT** ($\alpha_{L=0}$ more negative) | $\Delta C_{L,\max} > 0$; $\alpha_{\text{stall}}$ constant or slight decrease |
| **Leading-Edge Slats Shift** | Extends $C_L-\alpha$ curve **RIGHT & UP** ($\alpha_{\text{stall}} \uparrow\uparrow$) | $\Delta C_{L,\max} > 0$; $\alpha_{L=0}$ unchanged |
| **Fowler Flap Mechanics** | Slides AFT & DOWN on tracks | Increases **Camber AND Wing Area ($S$)** simultaneously |
| **Flap Pitching Moment** | $\Delta C_{m,ac} < 0$ (Nose-Down pitching moment) | Requires pull-back elevator ($\delta_e < 0$) for trim |

**Related Note:** [[02 - SUBJECTS/Flight Mechanics & Space Dynamics/02.3 - High-Lift Devices|02.3 High-Lift Devices]]

### 2.4a Roll Axis Dynamics, Ailerons & Adverse Yaw

| Roll Concept / Derivative | Mathematical Formula | Key Feature / Rule |
|---|---|---|
| **Roll Equation of Motion** | $I_{xx} \dot{p} = q_\infty S b \left[ C_{l_{\delta_a}} \delta_a + C_{l_p} \left(\frac{p b}{2 V_\infty}\right) \right]$ | 1-DOF pure roll rotation about $X_b$ |
| **Steady Roll Rate ($p_{\text{ss}}$)** | $p_{\text{ss}} = -\left(\frac{2 V_\infty}{b}\right) \left(\frac{C_{l_{\delta_a}}}{C_{l_p}}\right) \delta_a$ | Balanced by roll damping $C_{l_p} < 0$ |
| **Roll Helix Angle** | $\left(\frac{p b}{2 V_\infty}\right)_{\text{ss}} = -\frac{C_{l_{\delta_a}}}{C_{l_p}} \delta_a$ | Non-dimensional steady roll parameter |
| **Roll Time Constant ($\tau_r$)** | $\tau_r = -\frac{I_{xx}}{\frac{1}{4} \rho_\infty V_\infty S b^2 C_{l_p}}$ | Time to reach $63.2\%$ of $p_{\text{ss}}$ |
| **Transient Roll Response** | $p(t) = p_{\text{ss}} (1 - e^{-t/\tau_r})$ | First-order exponential response |
| **Adverse Yaw Mitigation** | Differential Ailerons, Frise Ailerons, Spoilers | Eliminates yawing moment caused by differential $C_{D,i}$ |

**Related Note:** [[02 - SUBJECTS/Flight Mechanics & Space Dynamics/02.4a - Roll Dynamics and Control|02.4a Roll Dynamics and Control]]

### 2.4b Pitch Axis Dynamics, Elevator Controls & Longitudinal Trim

| Pitch Concept / Derivative | Mathematical Formula | Key Feature / Stability Requirement |
|---|---|---|
| **Master Pitch Moment Eq.** | $C_m = C_{m_0} + C_{m_\alpha} \alpha + C_{m_{\delta_e}} \delta_e + C_{m_q} \left(\frac{q \bar{c}}{2 V_\infty}\right)$ | Trim requires $C_m = 0$ |
| **Static Pitch Stability** | $C_{m_\alpha} = \frac{\partial C_m}{\partial \alpha} < 0 \text{ (NEGATIVE)}$ | Negative slope required for static stability |
| **Zero-Lift Intercept** | $C_{m_0} > 0 \text{ (POSITIVE)}$ | Positive intercept required for trim at $\alpha > 0$ |
| **Elevator Control Power** | $C_{m_{\delta_e}} = -\eta_t V_H a_t \tau_e < 0 \text{ (ALWAYS NEGATIVE)}$ | Trailing edge DOWN ($\delta_e>0$) $\implies C_m < 0$ |
| **Trim Elevator Deflection** | $\delta_{e,\text{trim}} = -\frac{C_{m_0} + C_{m_\alpha} \alpha_{\text{trim}}}{C_{m_{\delta_e}}}$ | Required deflection for steady pitch equilibrium |
| **Tail Volume Ratio ($V_H$)** | $V_H = \frac{S_t \cdot l_t}{S \cdot \bar{c}}$ | Horizontal tail volume geometry |

**Related Note:** [[02 - SUBJECTS/Flight Mechanics & Space Dynamics/02.4b - Pitch Dynamics and Control|02.4b Pitch Dynamics and Control]]

### 2.4c Yaw Axis Dynamics, Rudder Controls & Engine-Out Trim

| Yaw Concept / Derivative | Mathematical Formula | Key Feature / Stability Requirement |
|---|---|---|
| **Master Yaw Moment Eq.** | $C_n = C_{n_\beta} \beta + C_{n_{\delta_r}} \delta_r + C_{n_r} \left(\frac{r b}{2 V_\infty}\right)$ | Trim requires $C_n = 0$ |
| **Weathercock Stability** | $C_{n_\beta} = \frac{\partial C_n}{\partial \beta} > 0 \text{ (POSITIVE)}$ | Positive slope required for directional stability |
| **Rudder Control Power** | $C_{n_{\delta_r}} = -\eta_v V_v a_v \tau_r < 0 \text{ (ALWAYS NEGATIVE)}$ | Trailing edge LEFT ($\delta_r>0$) $\implies C_n < 0$ |
| **Vertical Tail Volume ($V_v$)** | $V_v = \frac{S_v \cdot l_v}{S \cdot b}$ | Vertical tail geometry (uses wingspan $b$!) |
| **Engine-Out Rudder Trim** | $\delta_{r,\text{trim}} = -\frac{T \cdot y_p}{q_\infty S b C_{n_{\delta_r}}}$ | Rudder balances asymmetric thrust moment $T \cdot y_p$ |
| **Min Control Speed ($V_{mc}$)** | $V_{mc} = \sqrt{\frac{2 T_{\max} y_p}{\rho_\infty S b \|C_{n_{\delta_r}}\| \delta_{r,\max}}}$ | Airspeed limit set by max available rudder $\delta_{r,\max}$ |

**Related Note:** [[02 - SUBJECTS/Flight Mechanics & Space Dynamics/02.4c - Yaw Dynamics and Control|02.4c Yaw Dynamics and Control]]

---

## 3. Airplane Performance

### 3.1 $C_L - \alpha$ Curve, Lift Slopes & Compressibility

| $C_L - \alpha$ Concept | Mathematical Expression | Key Feature / Rule |
|---|---|---|
| **2D Thin Airfoil Slope ($a_0$)** | $a_0 = \frac{dc_l}{d\alpha} = 2\pi\text{ rad}^{-1} \approx 0.1097\text{ deg}^{-1}$ | Theoretical incompressible thin airfoil slope |
| **3D Finite Wing Slope ($a$)** | $a = \frac{a_0}{1 + \frac{a_0}{\pi AR e}}$ | Prandtl Lifting-Line Theory ($a < a_0$) |
| **AR Equal-Lift Angle Shift** | $\Delta \alpha (^\circ) = \frac{57.3 C_L}{\pi e} \left[ \frac{1}{AR_2} - \frac{1}{AR_1} \right]$ | Angle shift to produce same $C_L$ on lower $AR$ |
| **Subsonic Compressible Slope** | $a_{0,\text{comp}} = \frac{2\pi}{\sqrt{1 - M_\infty^2}} = \frac{2\pi}{\beta}$ | Prandtl-Glauert compressibility correction |
| **Total Aircraft Lift Slope ($a_A$)** | $a_A = a_w + a_f + \eta_t \left(\frac{S_t}{S}\right) a_t \left(1 - \frac{d\epsilon}{d\alpha}\right)$ | Assembly of wing, fuselage, and tail slopes |

**Related Note:** [[02 - SUBJECTS/Flight Mechanics & Space Dynamics/03.1 - Lift-Alpha Curve|03.1 Lift-Alpha Curve]]

### 3.2 Drag Polar, Induced Drag & Performance Optimums

| Performance Condition | Mathematical Formula / Drag Rule | Key Feature / Speed Multiplier |
|---|---|---|
| **Parabolic Drag Polar** | $C_D = C_{D,0} + K C_L^2 = C_{D,0} + \frac{C_L^2}{\pi AR e}$ | $C_{D,0}$ Parasite drag; $K C_L^2$ Induced drag |
| **Max Lift-to-Drag Ratio $(L/D)_{\max}$** | $(L/D)_{\max} = \frac{1}{2\sqrt{K C_{D,0}}} = \frac{1}{2}\sqrt{\frac{\pi AR e}{C_{D,0}}}$ | **Parasite = Induced** ($C_{D,0} = K C_L^2$) |
| **Optimum $C_L$ for $(L/D)_{\max}$** | $C_{L,(L/D)_{\max}} = \sqrt{\frac{C_{D,0}}{K}}$ | Min Thrust Required ($T_{R,\min} = \frac{W}{(L/D)_{\max}}$) |
| **Min Power Speed ($V_{P_{R,\min}}$)** | $C_{L,P_{R,\min}} = \sqrt{\frac{3 C_{D,0}}{K}} \implies V_{P_R} = 0.760 \cdot V_{(L/D)_{\max}}$ | **Induced = 3 $\times$ Parasite** ($K C_L^2 = 3 C_{D,0}$) |
| **Jet Max Range Speed ($V_{\text{Jet}}$)** | $C_{L,\text{Jet}} = \sqrt{\frac{C_{D,0}}{3 K}} \implies V_{\text{Jet}} = 1.316 \cdot V_{(L/D)_{\max}}$ | **Parasite = 3 $\times$ Induced** ($C_{D,0} = 3 K C_L^2$) |

**Related Note:** [[02 - SUBJECTS/Flight Mechanics & Space Dynamics/03.2 - Drag Polar and Induced Drag|03.2 Drag Polar and Induced Drag]]

### 3.3a Take-off Performance, Ground Roll & Speeds

| Take-off Parameter | Mathematical Formula | Key Feature / Rule |
|---|---|---|
| **Ground Roll Motion Eq.** | $m V \frac{dV}{dx} = F_{\text{net}} = T - D - \mu_r(W - L)$ | Force balance along runway |
| **Average Force Ground Roll ($S_g$)** | $S_g = \frac{m V_{LOF}^2}{2 \bar{F}_{\text{net}}} = \frac{W V_{LOF}^2}{2 g \bar{F}_{\text{net}}}$ | $\bar{F}_{\text{net}}$ evaluated at $V_{av} = 0.707 V_{LOF}$ |
| **Optimum Ground Roll $C_L$** | $C_{L,g,\text{opt}} = \frac{\mu_r}{2 K} = \frac{\mu_r \pi AR e}{2}$ | Minimizes $(C_D - \mu_r C_L)$ drag |
| **Ground Roll Parametric Scaling** | $S_g \propto \frac{W^2}{\rho S C_{L,\max} T}$ | Proportional to $W^2$ and $1/\rho$ |
| **Headwind Reduction** | $S_{g,\text{headwind}} = S_{g,0} \left( 1 - \frac{V_w}{V_{LOF}} \right)^2$ | Headwind $V_w > 0$ reduces $S_g$ |
| **Takeoff Speeds Hierarchy** | $V_s < V_1 \le V_r (1.05 V_s) < V_{LOF} (1.1\text{--}1.2 V_s) < V_2 (1.2 V_s)$ | FAR safety speed regulations |

**Related Note:** [[02 - SUBJECTS/Flight Mechanics & Space Dynamics/03.3a - Take-off Performance|03.3a Take-off Performance]]

### 3.3b Landing Performance, Ground Roll & Braking

| Landing Parameter | Mathematical Formula | Key Feature / Rule |
|---|---|---|
| **Landing Motion Eq.** | $m V \frac{dV}{dx} = -F_{\text{retard}} = -\left[ \mu_b (W - L) + D + T_{\text{rev}} \right]$ | Retarding force balance along runway |
| **Average Force Landing Roll ($S_g$)** | $S_g = \frac{m V_{TD}^2}{2 \bar{F}_{\text{retard}}} = \frac{W V_{TD}^2}{2 g \bar{F}_{\text{retard}}}$ | $\bar{F}_{\text{retard}}$ evaluated at $V_{av} = 0.707 V_{TD}$ |
| **Spoilers Lift Dumping** | $L \to 0 \implies N \approx W \implies F_{\text{brake}} = \mu_b W$ | Spoilers dump lift to maximize wheel load |
| **Reverse Thrust Effect** | $\bar{F}_{\text{retard}} = \mu_b(W - L) + D + T_{\text{rev}}$ | Reverse thrust adds directly to braking |
| **Landing Speeds Hierarchy** | $V_a = 1.30 V_s, \quad V_{TD} = 1.15 V_s$ | Approach and touchdown speeds |

**Related Note:** [[02 - SUBJECTS/Flight Mechanics & Space Dynamics/03.3b - Landing Performance|03.3b Landing Performance]]

### 3.4a Steady Climb Performance, Rate of Climb & Ceilings

| Climb Parameter | Mathematical Formula | Key Feature / Rule |
|---|---|---|
| **Climb Angle ($\sin\gamma$)** | $\sin\gamma = \frac{T - D}{W} = \frac{\text{Excess Thrust}}{W}$ | $L = W\cos\gamma < W$ in climb |
| **Rate of Climb ($R/C$)** | $R/C = V \sin\gamma = \frac{P_{AV} - P_R}{W} = \frac{\text{Excess Power}}{W}$ | Vertical speed $\dot{h}$ |
| **Jet Best Angle ($V_x$)** | $\sin\gamma_{\max,\text{Jet}} = \frac{T_a}{W} - \frac{1}{(L/D)_{\max}}$ | Speed $V_x = V_{(L/D)_{\max}}$ |
| **Jet Best Rate ($V_y$)** | $V_y = 1.316 \cdot V_{(L/D)_{\max}}$ | Optimum $C_{L,y} = \sqrt{C_{D,0}/3K}$ |
| **Prop Best Rate ($V_y$)** | $V_y = V_{P_{R,\min}} = 0.760 \cdot V_{(L/D)_{\max}}$ | Occurs at $(C_L^{3/2}/C_D)_{\max}$ |
| **Service Ceiling ($h_{serv}$)** | $h_{serv} = h_{abs} \left( 1 - \frac{R/C_{\text{service}}}{R/C_0} \right)$ | $R/C = 100\text{ ft/min} = 0.508\text{ m/s}$ |
| **Time to Climb ($t_{\text{climb}}$)** | $t_{\text{climb}} = \frac{h_{abs}}{R/C_0} \ln \left( \frac{h_{abs} - h_1}{h_{abs} - h_2} \right)$ | Logarithmic climb time integration |

**Related Note:** [[02 - SUBJECTS/Flight Mechanics & Space Dynamics/03.4a - Steady Climb Performance|03.4a Steady Climb Performance]]

### 3.4b Steady Descent & Gliding Performance

| Glide Parameter | Mathematical Formula | Key Feature / Rule |
|---|---|---|
| **Glide Motion Eq. ($T=0$)** | $D = W \sin\gamma_d, \quad L = W \cos\gamma_d$ | Unpowered force balance |
| **Glide Angle ($\tan\gamma_d$)** | $\tan\gamma_d = \frac{D}{L} = \frac{1}{L/D} = \frac{C_D}{C_L}$ | Shallowest glide at $(L/D)_{\max}$ |
| **Max Glide Range ($R_{\text{glide}}$)** | $R_{\text{glide, max}} = h \cdot \left(\frac{L}{D}\right)_{\max}$ | **INDEPENDENT OF WEIGHT ($W$)** |
| **Min Glide Angle ($\gamma_{d,\min}$)** | $\tan\gamma_{d,\min} = \frac{1}{(L/D)_{\max}} = 2\sqrt{K C_{D,0}}$ | Speed $V = V_{(L/D)_{\max}}$ |
| **Rate of Descent ($R/D$)** | $R/D = V \sin\gamma_d = \frac{P_R}{W} = \sqrt{\frac{2 W}{\rho_\infty S}} \cdot \frac{C_D}{C_L^{3/2}}$ | Vertical sink rate $\dot{h}$ |
| **Min Sink Rate ($R/D_{\min}$)** | $R/D_{\min} = \sqrt{\frac{2 W}{\rho_\infty S}} \cdot \frac{1}{\left(C_L^{3/2}/C_D\right)_{\max}}$ | Speed $V = 0.760 \cdot V_{(L/D)_{\max}}$ |
| **Weight Effect on Glide** | Range & Angle unchanged; Speed $V \propto \sqrt{W}$ | Heavy glider glides faster, same range! |

**Related Note:** [[02 - SUBJECTS/Flight Mechanics & Space Dynamics/03.4b - Steady Descent and Glide Performance|03.4b Steady Descent & Gliding Performance]]

### 3.4c Absolute Ceiling, Service Ceiling & Time-to-Climb

| Ceiling Parameter | Mathematical Expression | Key Feature / Regulatory Rule |
|---|---|---|
| **Absolute Ceiling Threshold** | $R/C_{\max} = 0 \text{ m/s} \quad (P_{AV} = P_R \text{ or } T_a = D_{\min})$ | Theoretical maximum altitude limit |
| **Service Ceiling Threshold** | $R/C = 100\text{ ft/min} = 0.508\text{ m/s}$ (FAR-25) | Operational transport altitude limit |
| **Service Ceiling Formula** | $h_{serv} = h_{abs} \left( 1 - \frac{R/C_{\text{service}}}{R/C_0} \right)$ | Linear $R/C(h)$ altitude decay ratio |
| **Jet Ceiling Density Ratio** | $\left(\frac{\rho_{\text{abs}}}{\rho_0}\right)_{\text{Jet}} = \frac{W}{T_{a,0} \cdot (L/D)_{\max}}$ | Thrust scaling $T_a \propto \rho$ |
| **Prop Ceiling Density Ratio** | $\left(\frac{\rho_{\text{abs}}}{\rho_0}\right)_{\text{Prop}} = \left[ \frac{P_{R,\min,0}}{P_{AV,0}} \right]^{2/3}$ | Power scaling $P_{AV} \propto \rho$ |
| **Time to Absolute Ceiling** | $t_{\text{abs}} = \frac{h_{abs}}{R/C_0} \ln \left(\frac{h_{abs}}{0}\right) = \mathbf{\infty}$ | Requires infinite time to reach $h_{abs}$! |
| **Time to Service Ceiling** | $t_{\text{serv}} = \frac{h_{abs}}{R/C_0} \ln \left( \frac{R/C_0}{0.508} \right)$ | Finite time to reach service ceiling |

**Related Note:** [[02 - SUBJECTS/Flight Mechanics & Space Dynamics/03.4c - Absolute and Service Ceilings|03.4c Absolute and Service Ceilings]]

### 3.5a Aircraft Range & Breguet Range Equations

| Range Parameter | Mathematical Formula | Key Feature / Optimum Condition |
|---|---|---|
| **Propeller Range ($R_{\text{prop}}$)** | $R_{\text{prop}} = \frac{\eta_p}{c_p} \left(\frac{C_L}{C_D}\right) \ln\left(\frac{W_0}{W_1}\right)$ | Maximized at **$(L/D)_{\max}$** ($C_{D,0} = K C_L^2$) |
| **Propeller Max Range Speed** | $V_{\text{range, prop}} = V_{(L/D)_{\max}} = 1.000 \cdot V_{(L/D)_{\max}}$ | Speed $V_m$ at $(L/D)_{\max}$ |
| **Jet Range (Cruise-Climb)** | $R_{\text{jet}} = \frac{2}{c_t} \sqrt{\frac{2}{\rho_0 S}} \left(\frac{C_L^{1/2}}{C_D}\right) \left[ \sqrt{W_0} - \sqrt{W_1} \right]$ | Maximized at **$(C_L^{1/2}/C_D)_{\max}$** |
| **Jet Max Range Drag Ratio** | Parasite Drag = 3 $\times$ Induced Drag ($C_{D,0} = 3 K C_L^2$) | Optimum $C_{L,\text{jet}} = \frac{1}{\sqrt{3}} C_{L,(L/D)_{\max}}$ |
| **Jet Max Range Speed** | $V_{\text{range, jet}} = 3^{1/4} \cdot V_{(L/D)_{\max}} = 1.316 \cdot V_{(L/D)_{\max}}$ | Speed multiplier = $1.316$ |
| **Jet Range (Const $h, V$)** | $R_{\text{jet, Const}} = \frac{V}{c_t} \left(\frac{L}{D}\right)_{\text{avg}} \ln\left(\frac{W_0}{W_1}\right)$ | Constant altitude & speed profile |

**Related Note:** [[02 - SUBJECTS/Flight Mechanics & Space Dynamics/03.5a - Range and Breguet Equations|03.5a Range and Breguet Equations]]

### 3.5b Aircraft Endurance & Breguet Endurance Equations

| Endurance Parameter | Mathematical Formula | Key Feature / Optimum Condition |
|---|---|---|
| **Jet Endurance ($E_{\text{jet}}$)** | $E_{\text{jet}} = \frac{1}{c_t} \left(\frac{C_L}{C_D}\right) \ln\left(\frac{W_0}{W_1}\right)$ | Maximized at **$(L/D)_{\max}$** ($C_{D,0} = K C_L^2$) |
| **Jet Max Endurance Speed** | $V_{\text{endur, jet}} = V_{(L/D)_{\max}} = 1.000 \cdot V_{(L/D)_{\max}}$ | Golden twin of Propeller Range! |
| **Propeller Endurance ($E_{\text{prop}}$)** | $E_{\text{prop}} = \frac{\eta_p}{c_p} \sqrt{2\rho_\infty S} \left(\frac{C_L^{3/2}}{C_D}\right) \left[ \frac{1}{\sqrt{W_1}} - \frac{1}{\sqrt{W_0}} \right]$ | Maximized at **$(C_L^{3/2}/C_D)_{\max}$** |
| **Propeller Max Endurance Drag Ratio** | Induced Drag = 3 $\times$ Parasite Drag ($K C_L^2 = 3 C_{D,0}$) | Min Power Required ($P_{R,\min}$) |
| **Propeller Max Endurance Speed** | $V_{\text{endur, prop}} = V_{P_{R,\min}} = 0.760 \cdot V_{(L/D)_{\max}}$ | Speed multiplier = $0.760$ |

**Related Note:** [[02 - SUBJECTS/Flight Mechanics & Space Dynamics/03.5b - Endurance Performance|03.5b Endurance Performance]]

### 3.6a Load Factor, Maneuvering Flight & Accelerated Stall

| Maneuver Parameter | Mathematical Formula | Key Feature / Rule |
|---|---|---|
| **Load Factor Definition** | $n = \frac{L}{W}$ | $n=1$ level flight; $n>1$ maneuver |
| **Accelerated Stall Speed** | $V_{s,n} = V_s \sqrt{n}$ | Stall speed increases with $\sqrt{n}$ |
| **Turn Load Factor** | $n = \frac{1}{\cos\phi} = \sec\phi$ | Level turn banked at angle $\phi$ |
| **Turn Radius ($R$)** | $R = \frac{V^2}{g \tan\phi} = \frac{V^2}{g \sqrt{n^2 - 1}}$ | Radius of level turn |
| **Turn Rate ($\omega$)** | $\omega = \frac{V}{R} = \frac{g \tan\phi}{V} = \frac{g \sqrt{n^2 - 1}}{V}$ | Angular rate of turn ($\text{rad/s}$) |
| **Pull-Up Load Factor** | $n_{\text{pull-up}} = 1 + \frac{V^2}{g R} \implies R = \frac{V^2}{g(n - 1)}$ | Bottom of vertical loop |
| **Push-Over Load Factor** | $n_{\text{push-over}} = 1 - \frac{V^2}{g R}$ | Top of vertical crest |

**Related Note:** [[02 - SUBJECTS/Flight Mechanics & Space Dynamics/03.6a - Load Factor and Maneuvering Flight|03.6a Load Factor and Maneuvering Flight]]

### 3.6b Turning Flight Performance, Corner Velocity & Turn Optimums

| Turn Parameter | Mathematical Formula | Key Feature / Rule |
|---|---|---|
| **Corner Velocity ($V^*$)** | $V^* = V_s \sqrt{n_{\max}} = \sqrt{\frac{2 n_{\max} W}{\rho_\infty S C_{L,\max}}}$ | Speed where stall limit meets $n_{\max}$ |
| **Minimum Turn Radius ($R_{\min}$)** | $R_{\min} = \frac{(V^*)^2}{g \sqrt{n_{\max}^2 - 1}} = \frac{2 W}{\rho_\infty g S C_{L,\max} \sqrt{n_{\max}^2 - 1}}$ | Occurs at Corner Velocity $V^*$ |
| **Maximum Turn Rate ($\omega_{\max}$)** | $\omega_{\max} = \frac{g \sqrt{n_{\max}^2 - 1}}{V^*} = \frac{g \sqrt{n_{\max}^2 - 1}}{V_s \sqrt{n_{\max}}}$ | Occurs at Corner Velocity $V^*$ |
| **Sustained Load Factor ($n_{\text{sust}}$)** | $n_{\text{sust}} = \sqrt{\frac{q_\infty S}{K W^2} (T_a - q_\infty S C_{D,0})}$ | Thrust-limited turn ($T_a = D_{\text{turn}}$) |

**Related Note:** [[02 - SUBJECTS/Flight Mechanics & Space Dynamics/03.6b - Turning Flight Performance|03.6b Turning Flight Performance]]

### 3.6c V-n Diagram & Structural Flight Envelope

| Envelope Parameter | Mathematical Expression | Key Feature / Rule |
|---|---|---|
| **Stall Boundary Curve** | $n_{\text{stall}} = +\left(\frac{V}{V_s}\right)^2 = \frac{\frac{1}{2} \rho_\infty V^2 S C_{L,\max}}{W}$ | Parabolic aerodynamic limit |
| **Maneuver Speed ($V_A$)** | $V_A = V_s \sqrt{n_{\max}}$ | Intersection of stall & $n_{\max}$ |
| **Gust Load Factor ($\Delta n$)** | $\Delta n_{\text{gust}} = \frac{K_g \rho_\infty V S a U_{de}}{2 W}$ | Linear variation with velocity $V$ |
| **Total Gust Load Factor** | $n_{\text{gust}} = 1 \pm \frac{K_g \rho_\infty V S a U_{de}}{2 W}$ | Peak gust load factor |
| **Gust Alleviation Factor** | $K_g = \frac{0.88 \mu_g}{5.3 + \mu_g} \quad \left( \mu_g = \frac{2 W}{\rho_\infty \bar{c} S g a} \right)$ | Mass ratio mitigation factor |

**Related Note:** [[02 - SUBJECTS/Flight Mechanics & Space Dynamics/03.6c - Vn Diagram and Flight Envelope|03.6c V-n Diagram and Flight Envelope]]

### 3.7 Wind Effects on Aircraft Performance

| Wind Parameter | Mathematical Expression | Key Feature / Rule |
|---|---|---|
| **Groundspeed Vector** | $\vec{V}_G = \vec{V}_{\text{TAS}} + \vec{V}_W$ | $V_G = V_{\text{TAS}} \mp V_w$ (1D alignment) |
| **Takeoff Roll with Wind** | $S_{g,\text{headwind}} = S_{g,0} \left( 1 - \frac{V_w}{V_{\text{LOF}}} \right)^2$ | Headwind reduces ground roll |
| **Ground Glide Distance** | $R_{\text{ground}} = h \left(\frac{L}{D}\right) \left[ 1 \mp \frac{V_w}{V_{\text{TAS}} \cos\gamma_d} \right]$ | Headwind shortens ground glide |
| **Ground Range ($R_{\text{ground}}$)** | $R_{\text{ground}} = R_{\text{air}} \pm V_w \cdot E$ | Headwind reduces ground range |
| **Endurance & $R/C$ in Wind** | **100% UNAFFECTED BY WIND** | Air-mass rate properties (0% change) |
| **Crosswind Crab Angle** | $\sin\beta_{\text{crab}} = \frac{V_{\text{cross}}}{V_{\text{TAS}}}$ | Heading correction into wind |

**Related Note:** [[02 - SUBJECTS/Flight Mechanics & Space Dynamics/03.7 - Wind Effects on Performance|03.7 Wind Effects on Performance]]

---

## 4. Equations of Motion

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


### 4.1 Static Stability — Stability Derivatives (Comprehensive)

#### 4.1A Longitudinal Stability Derivatives

| Derivative | Formula / Expression | Sign | Physical Meaning |
|------------|---------------------|------|------------------|
| $C_{m_\alpha}$ (Pitch Stiffness) | $C_{L_\alpha}(h - h_n) = -C_{L_\alpha} K_n$ | **< 0** for stability | Restoring pitching moment with AoA change |
| $C_{m_q}$ (Pitch Damping) | $\approx -2 a_t V_H (l_t/\bar{c})$ | < 0 always | Damping of pitch oscillations |
| $C_{m_{\delta_e}}$ (Elevator Power) | $-\eta_t V_H a_t \tau_e$ | < 0 always | Elevator control effectiveness |
| $C_{L_\alpha}$ (Lift Slope) | $a_0 / (1 + a_0/\pi AR e)$ | > 0 | Lift increase per radian AoA |

#### 4.1B Neutral Point & Static Margin (Stick Fixed)

| Quantity | Formula | Notes |
|----------|---------|-------|
| **Neutral Point** $h_n$ | $h_{ac,wb} + \frac{\eta_t V_H a_t}{C_{L_\alpha}}\left(1 - \frac{d\epsilon}{d\alpha}\right)$ | CG location where $C_{m_\alpha} = 0$ |
| **Static Margin** $K_n$ | $h_n - h > 0$ for stability | Dimensionless fraction of $\bar{c}$ |
| **Pitch Stiffness** $C_{m_\alpha}$ | $-C_{L_\alpha} K_n = -C_{L_\alpha}(h_n - h)$ | Must be $< 0$ for stability |
| **5-Second NP Shortcut** | $h_n = h - C_{m_\alpha}/C_{L_\alpha}$ | When $C_{m_\alpha}$ and $C_{L_\alpha}$ are given |
| **Elevator Trim Slope** | $d\delta_e/dC_L = (h - h_n)/C_{m_{\delta_e}} = -K_n/|C_{m_{\delta_e}}|$ | Negative $d\delta_e/dC_L < 0$ for stable |
| **Speed Stability** | $d\delta_e/dV = -\frac{2 C_L K_n}{V |C_{m_{\delta_e}}|}$ | $> 0$ for stable (push stick forward at high $V$) |
| **Canard Neutral Point** | $h_{ac,w} - \frac{\eta_c V_c a_c}{C_{L_\alpha}}(1 + d\epsilon_c/d\alpha)$ | Canard is **destabilizing** (minus sign!) |
| **Supersonic Shift** | $\Delta h_n \approx +0.25\bar{c}$ (AFT shift) | Causes "Mach Tuck" / high static margin |
| **Ground Effect Shift** | $d\epsilon/d\alpha \downarrow \implies h_n$ shifts **AFT** | Aircraft becomes MORE stable near ground |
| **Horizontal Tail Volume** $V_H$ | $S_t l_t / (S \bar{c})$ | Uses MAC $\bar{c}$ |
| **Stability Boundary ($h_{\text{aft}}$)** | $\left(\frac{S_t}{S}\right) \ge \frac{\bar{c}}{l_t \eta_t a_t (1-d\epsilon/d\alpha)} [C_{L_{\alpha,wb}}(h_{\text{aft}}-h_{ac,wb}) + C_{L_\alpha} K_{n,\min}]$ | Positive slope line on Scissor Plot |
| **Control Boundary ($h_{\text{fwd}}$)** | $\left(\frac{S_t}{S}\right) \ge \frac{C_{m,ac,wb} + C_{L,\text{land}}(h_{\text{fwd}}-h_{ac,wb})}{\eta_t a_t (l_t/\bar{c}) |\tau_e \delta_{e,\max}|}$ | Negative slope line on Scissor Plot |
| **V-Tail Equivalence** | $S_{H,\text{equiv}} = S_{v\text{-tail}} \cos^2\Gamma_v, S_{V,\text{equiv}} = S_{v\text{-tail}} \sin^2\Gamma_v$ | $\Gamma_v$ = V-tail dihedral angle |
| **Downwash Gradient** $d\epsilon/d\alpha$ | $2 C_{L_\alpha} / (\pi AR e)$ | Typically 0.3 to 0.6 |

#### 4.1C Stick-Free Stability & Control Stick Forces

| Quantity | Formula | Notes |
|----------|---------|-------|
| **Hinge Moment** $C_{h_e}$ | $C_{h_0} + C_{h_\alpha} \alpha_t + C_{h_{\delta_e}} \delta_e + C_{h_{\delta_t}} \delta_t$ | Both $C_{h_\alpha}$ & $C_{h_{\delta_e}}$ negative |
| **Floating Angle** $\delta_{e,\text{float}}$ | $-\left(\frac{C_{h_\alpha}}{C_{h_{\delta_e}}}\right) \alpha_t = f \cdot \alpha_t$ | $f = -\frac{C_{h_\alpha}}{C_{h_{\delta_e}}} < 0$ (floats UP) |
| **Stick-Free Tail Slope** $a_t^*$ | $a_t\left(1 - \frac{C_{h_\alpha}}{C_{h_{\delta_e}}}\tau_e\right) = a_t (1 + f \tau_e)$ | $a_t^* < a_t$ ALWAYS |
| **Stick-Free NP** $h_n^*$ | $h_{ac,wb} + \frac{\eta_t V_H a_t^*}{C_{L_\alpha}} \left(1 - \frac{d\epsilon}{d\alpha}\right)$ | $\mathbf{h_n^* < h_n}$ (ALWAYS forward shift!) |
| **Stick-Free Margin** $K_n^*$ | $h_n^* - h < K_n$ | More critical design requirement |
| **Stick Force** $F_s$ | $G \cdot H_e = G q_\infty S_e c_e \eta_t \frac{C_{h_{\delta_e}}}{C_{m_{\delta_e}}} C_{L_\alpha} K_n^* (C_L - C_{L,\text{trim}})$ | $F_s > 0 \implies$ PULL; $F_s < 0 \implies$ PUSH |
| **Trim Tab Rule** | $\delta_{t,\text{trim}} = -\frac{C_{h_0} + C_{h_\alpha}\alpha_t + C_{h_{\delta_e}}\delta_{e,\text{trim}}}{C_{h_{\delta_t}}}$ | Tab deflects **OPPOSITE** to elevator |
| **Maneuver Point (Fixed)** $h_m$ | $h_n + \frac{\rho_\infty g l_t}{2 (W/S)} \left[\eta_t V_H a_t \frac{l_t}{\bar{c}} - C_{m_q}\right]$ | $h_m > h_n$ (ALWAYS aft of NP!) |
| **Maneuver Point (Free)** $h_m^*$ | $h_n^* + \frac{\rho_\infty g l_t}{2 (W/S)} \left[\eta_t V_H a_t^* \frac{l_t}{\bar{c}} - C_{m_q}^*\right]$ | $h_m^* > h_n^*$ |
| **Stick Force Per g** $dF_s/dn$ | $-G S_e c_e \eta_t \left(\frac{C_{h_{\delta_e}}}{C_{m_{\delta_e}}}\right) \left(\frac{W}{S}\right) C_{L_\alpha} K_m^*$ | Force per $1g$ load factor increment |
| **Master Point Hierarchy** | $\mathbf{h_{ac,wb} < h_n^* < h_n < h_m^* < h_m}$ | "A-N-N-M-M" Golden Chord Sequence |

#### 4.1D Lateral-Directional Derivatives & Directional Trim

| Quantity / Derivative | Formula | Required Sign / Value | Physical Meaning / Rule |
|-----------------------|---------|----------------------|-------------------------|
| **Directional Stiffness** $C_{n_\beta}$ | $C_{n_\beta,\text{fuse}} + C_{n_\beta,\text{sweep}} + \eta_v V_v a_v \left(1 + \frac{d\sigma}{d\beta}\right)$ | **> 0 (POSITIVE)** | Weathercock restoring yaw moment ("Positive Points Home") |
| **Vertical Tail Volume** $V_v$ | $\frac{S_v l_v}{S b}$ | $0.04 - 0.09$ | Uses **wingspan $b$** (NOT chord $\bar{c}$!) |
| **Rudder Control Power** $C_{n_{\delta_r}}$ | $-\eta_v V_v a_v \tau_r$ | **< 0 (NEGATIVE)** | Trailing edge LEFT ($\delta_r > 0$) $\implies$ Nose LEFT moment ($C_n < 0$) |
| **Engine-Out Rudder Trim** | $\delta_{r,\text{trim}} = -\frac{T y_p}{q_\infty S b C_{n_{\delta_r}}}$ | Deflect into working engine | Counteracts thrust moment $N = T y_p$ |
| **Minimum Control Speed** $V_{mc}$ | $\sqrt{\frac{2 T_{\max} y_p}{\rho_\infty S b |C_{n_{\delta_r}}| \delta_{r,\max}}}$ | Safe approach limit | Lowest speed to trim max thrust failure with full rudder |
| **Crosswind Trim** | $\delta_{r,\text{trim}} = -\left(\frac{C_{n_\beta}}{C_{n_{\delta_r}}}\right) \beta$ | Rudder into wind | Bank INTO wind ($\phi > 0$), opposite rudder ($\delta_r < 0$) |
| **Dorsal Fin Purpose** | Forward root fillet extension | Delays vertical tail stall | Prevents **Rudder Lock** at high sideslip ($\beta > 15^\circ$) |
| **Ventral Fin Purpose** | Lower fuselage fin extension | High $\alpha$ stability | Maintains $C_{n_\beta} > 0$ when top tail is in wing wake |

#### 4.1E Sources of Dihedral Effect $C_{l_\beta}$ & Cross-Coupling

| Source / Derivative | Mathematical Formula | Sign / Effect | Design Role / Rule |
|---------------------|----------------------|---------------|--------------------|
| **Dihedral Angle ($\Gamma > 0$)** | $C_{l_\beta,\Gamma} = -\frac{C_{L_\alpha}}{4} \Gamma$ | **$< 0$ (Stabilizing)** | $\approx -0.012\text{ rad}^{-1}$ per degree of dihedral |
| **Wing Sweep ($\Lambda > 0$)** | $C_{l_\beta,\Lambda} \approx -\frac{C_L}{3} \sin(2\Lambda)$ | **$< 0$ (Stabilizing)** | **Lift-dependent** ($C_{l_\beta,\Lambda} \propto -C_L$) |
| **High-Wing Position** | $\Delta \Gamma_{\text{eff}} \approx +2^\circ \text{ to } +3^\circ$ | **$< 0$ (Stabilizing)** | Fuselage bowing flow increases windward root AoA |
| **Low-Wing Position** | $\Delta \Gamma_{\text{eff}} \approx -2^\circ \text{ to } -3^\circ$ | **$> 0$ (Destabilizing)** | Requires extra geometric dihedral ($\Gamma \approx +5^\circ - 7^\circ$) |
| **Anhedral ($\Gamma < 0$)** | Negative geometric dihedral angle | **$> 0$ (Reduces $|C_{l_\beta}|$ )** | Applied to high-wing swept jets to prevent Dutch Roll |
| **Vertical Tail Roll** | $C_{l_\beta,v} = -\eta_v V_v a_v (1+d\sigma/d\beta) (z_v/b)$ | **$< 0$ (Stabilizing)** | Side force at height $z_v > 0$ above CG |
| **Roll-due-Yaw ($C_{l_r}$)** | $C_{l_r} = \frac{\partial C_l}{\partial (rb/2V_\infty)} \approx \frac{C_L}{4}$ | **$> 0$ (POSITIVE)** | Yawing right makes left wing faster $\implies$ rolls right |
| **Yaw-due-Roll ($C_{n_p}$)** | $C_{n_p} = \frac{\partial C_n}{\partial (pb/2V_\infty)} \approx -\frac{C_L}{8}$ | **$< 0$ (NEGATIVE)** | Adverse yaw: down-going wing produces more induced drag |
| **Aileron Power ($C_{l_{\delta_a}}$)** | $\frac{\partial C_l}{\partial \delta_a} < 0$ | **$< 0$ (NEGATIVE)** | $\delta_a > 0$ (left flap down) $\implies$ rolls left |

#### 4.1F Master Sign Summary — "N-N-P Rule"

| Axis | Stability Derivative | Required Sign | Mnemonic |
|------|---------------------|--------------|----------|
| Longitudinal | $C_{m_\alpha}$ | **< 0 (N)egative** | "Negative is Nice" |
| Lateral | $C_{l_\beta}$ | **< 0 (N)egative** | "Negative is Nice" |
| Directional | $C_{n_\beta}$ | **> 0 (P)ositive** | "Positive Points home" |
| All damping | $C_{m_q}, C_{l_p}, C_{n_r}$ | < 0 always | "Damping always negative" |
| All control | $C_{m_{\delta_e}}, C_{l_{\delta_a}}, C_{n_{\delta_r}}$ | < 0 always | "Control always negative" |

**Related Note:** [[02 - SUBJECTS/Flight Mechanics & Space Dynamics/04.1 - Stability Derivatives]]


### 4.2 Control Derivatives — Complete Reference

#### 4.2A Control Surface Effectiveness Factor $\tau$

| Chord Ratio $c_f/c$ | Effectiveness $\tau$ | Typical Use |
|--------------------|---------------------|-------------|
| 0.20 | ~0.45 | Small elevator |
| 0.25–0.30 | ~0.48–0.52 | Typical elevator/rudder |
| 0.30–0.40 | ~0.52–0.57 | Large aileron |
| 1.00 | 1.00 | All-moving tail (stabilator) |

**Control surface lift change:** $C_{L_{\delta}} = a \cdot \tau$ (surface lift slope times effectiveness)

#### 4.2B Elevator Control Derivatives (Longitudinal)

| Formula | Expression | Sign | Notes |
|---------|-----------|------|-------|
| **Elevator Control Power** $C_{m_{\delta_e}}$ | $-\eta_t V_H a_t \tau_e$ | **< 0** always | Most important control derivative |
| **Elevator Lift** $C_{L_{\delta_e}}$ | $+\eta_t (S_t/S) a_t \tau_e$ | **> 0** always | Lift change due to elevator |
| **Relationship** | $C_{m_{\delta_e}} = -(l_t/\bar{c}) \cdot C_{L_{\delta_e}} \cdot (S_t/S)/(S_t/S)$ | | See exact form |
| **Trim elevator** $\delta_{e,trim}$ | $-(C_{m_0} + C_{m_\alpha}\alpha) / C_{m_{\delta_e}}$ | | Zero net pitching moment |
| **$\delta_e$-to-$C_L$ slope** | $d\delta_e/dC_L = -C_{m_\alpha}/(C_{L_\alpha} C_{m_{\delta_e}}) < 0$ | Negative for stable | Forward CG: steeper slope |

#### 4.2C Aileron Control Derivatives (Lateral)

| Formula | Expression | Sign | Notes |
|---------|-----------|------|-------|
| **Aileron Roll Power** $C_{l_{\delta_a}}$ | $-\frac{2 a_w \tau_a}{Sb}\int_{y_1}^{y_2} c(y)y\,dy$ | **< 0** always | Strip theory integration |
| **Rectangular wing shortcut** | $C_{l_{\delta_a}} = -\frac{a_w \tau_a}{b^2}(y_2^2 - y_1^2)$ | | Only for constant chord |
| **Non-dimensional ($\eta=2y/b$)** | $C_{l_{\delta_a}} = -\frac{a_w \tau_a}{4}(\eta_2^2 - \eta_1^2)$ | | Useful shortcut |
| **Adverse yaw** $C_{n_{\delta_a}}$ | $< 0$ typically | Negative | Yaw opposite to roll direction |
| **Aileron reversal** | Effectiveness $= 1 - q/q_{rev}$ | Zero at reversal | Above $V_{rev}$: control reverses |

#### 4.2D Rudder Control Derivatives (Directional)

| Formula | Expression | Sign | Notes |
|---------|-----------|------|-------|
| **Rudder Yaw Power** $C_{n_{\delta_r}}$ | $-\eta_v V_v a_v \tau_r$ | **< 0** always | OEI sizing critical |
| **Rudder Side Force** $C_{y_{\delta_r}}$ | $+\eta_v (S_v/S) a_v \tau_r$ | **> 0** always | Crosswind capability |
| **Relationship** | $C_{n_{\delta_r}} = -(l_v/b) C_{y_{\delta_r}}$ | | Quick conversion |
| **Proverse roll** $C_{l_{\delta_r}}$ | $\approx +\eta_v (S_v/S) a_v \tau_r (z_v/b)$ | **> 0** usually | Roll same way as yaw |
| **Min. control speed** $V_{mc}$ | $\sqrt{2T_{max}y_e / (\rho S b |C_{n_{\delta_r}}|\delta_{r,max})}$ | | OEI directional control |

#### 4.2E Master Sign Summary — Control Derivatives

| Control | Moment Deriv. | Sign | Force Deriv. | Sign |
|---------|--------------|------|-------------|------|
| Elevator $\delta_e$ | $C_{m_{\delta_e}}$ | **−** | $C_{L_{\delta_e}}$ | **+** |
| Aileron $\delta_a$ | $C_{l_{\delta_a}}$ | **−** | — | — |
| Rudder $\delta_r$ | $C_{n_{\delta_r}}$ | **−** | $C_{y_{\delta_r}}$ | **+** |
| Cross: Aileron on yaw | $C_{n_{\delta_a}}$ | **−** (adverse) | — | — |
| Cross: Rudder on roll | $C_{l_{\delta_r}}$ | **+** (proverse) | — | — |

**Related Note:** [[02 - SUBJECTS/Flight Mechanics & Space Dynamics/04.2 - Control Derivatives]]


### 4.3 Static Stability — Longitudinal Stick-Fixed Stability

#### 4.3A Fundamental Criteria & Equations
- **Trim Condition:** $C_{m,cg} = 0$
- **Static Stability Criterion:** $C_{m_\alpha} = \frac{d C_m}{d\alpha} < 0$
- **Combined Requirements:** $C_{m_0} > 0$ AND $C_{m_\alpha} < 0$
- **Total Pitching Moment Eq:** $C_{m,cg} = C_{m_0} + C_{m_\alpha}\alpha + C_{m_{\delta_e}}\delta_e$

#### 4.3B Neutral Point & Static Margin Formulas
- **Stick-Fixed Neutral Point:** $h_n = h_{ac,wb} + \frac{\eta_t V_H a_t}{C_{L_\alpha}} \left(1 - \frac{d\epsilon}{d\alpha}\right)$
- **Static Margin:** $K_n = h_n - h = -\frac{C_{m_\alpha}}{C_{L_\alpha}} = -\frac{dC_m}{dC_L}$
- **Pitch Stiffness vs Static Margin:** $C_{m_\alpha} = -C_{L_\alpha} K_n$
- **Shortcut NP Formula:** $h_n = h - \frac{C_{m_\alpha}}{C_{L_\alpha}}$

#### 4.3C Tail Volume & Downwash
- **Horizontal Tail Volume Ratio:** $V_H = \frac{S_t l_t}{S \bar{c}}$ (uses MAC $\bar{c}$)
- **Downwash Gradient:** $\frac{d\epsilon}{d\alpha} \approx \frac{2 C_{L_{\alpha,w}}}{\pi AR_w e}$
- **Tail AoA:** $\alpha_t = \alpha_w(1 - d\epsilon/d\alpha) + (i_t - i_w) - \epsilon_0$

#### 4.3D Elevator Trim Curves & CG Limits
- **Trim Elevator Angle:** $\delta_{e,trim} = -\frac{C_{m_0} + C_{m_\alpha}\alpha}{C_{m_{\delta_e}}} = -\frac{C_{m_0}}{C_{m_{\delta_e}}} + \frac{K_n}{C_{m_{\delta_e}}/C_{L_\alpha}} C_L$
- **Elevator Trim Slope:** $\frac{d\delta_{e,trim}}{dC_L} = \frac{h - h_n}{C_{m_{\delta_e}}} = -\frac{K_n}{|C_{m_{\delta_e}}|/C_{L_\alpha}} < 0$ (for stable aircraft)
- **Aft CG Limit:** $h_{\text{aft}} = h_n$ (Stability boundary)
- **Forward CG Limit:** Max UP elevator deflection at max $C_L$ (Landing flare limit)

#### 4.3E Component Effects
- **Horizontal Tail:** STABILIZING ($\Delta h_n > 0$, shifts NP aft)
- **Fuselage:** DESTABILIZING ($\Delta h_n < 0$, shifts NP forward)
- **Canard:** DESTABILIZING to main wing ($\Delta h_n < 0$, requires CG far forward)
- **Propeller (Tractor):** DESTABILIZING (propeller normal force ahead of CG)

**Related Note:** [[02 - SUBJECTS/Flight Mechanics & Space Dynamics/04.3 - Longitudinal Static Stability]]


### 4.3 Longitudinal Static Stability (Stick-Fixed) — Reference Summary

#### 4.3A The Two Conditions for Longitudinal Flight

$$\text{1. Trim Equilibrium:} \quad C_{m,cg} = 0 \quad (\text{at desired } \alpha_{\text{trim}})$$
$$\text{2. Static Stability Criterion:} \quad C_{m_\alpha} = \frac{d C_m}{d\alpha} < 0 \quad (\text{Negative Slope})$$
$$\text{Simultaneous Requirement:} \quad C_{m_0} > 0 \quad \text{and} \quad C_{m_\alpha} < 0$$

#### 4.3B Longitudinal Pitching Moment Equation

$$C_{m,cg} = C_{m_0} + C_{m_\alpha} \cdot \alpha + C_{m_{\delta_e}} \cdot \delta_e$$

- **Wing-Body Pitch Stiffness:** $(C_{m_\alpha})_{\text{wb}} = C_{L_{\alpha,\text{wb}}}(h - h_{ac,\text{wb}})$ (Destabilizing if $h > h_{ac,\text{wb}}$)
- **Tail Pitch Stiffness:** $(C_{m_\alpha})_t = -\eta_t V_H a_t \left(1 - \frac{d\epsilon}{d\alpha}\right)$ (ALWAYS Stabilizing)
- **Total Pitch Stiffness:** $C_{m_\alpha} = C_{L_{\alpha,\text{wb}}}(h - h_{ac,\text{wb}}) - \eta_t V_H a_t \left(1 - \frac{d\epsilon}{d\alpha}\right)$

#### 4.3C Stick-Fixed Neutral Point ($h_n$) & Static Margin ($K_n$)

| Parameter | Formula | Key Characteristic |
|-----------|---------|---------------------|
| **Stick-Fixed Neutral Point ($h_n$)** | $h_n = h_{ac,\text{wb}} + \frac{\eta_t V_H a_t}{C_{L_\alpha}} \left(1 - \frac{d\epsilon}{d\alpha}\right)$ | Aircraft Aerodynamic Center; Purely aerodynamic (independent of $h$) |
| **Static Margin ($K_n$)** | $K_n = h_n - h = -\frac{C_{m_\alpha}}{C_{L_\alpha}} = -\frac{dC_m}{dC_L}$ | Non-dimensional CG margin; $K_n > 0 \iff \text{Stable}$ |
| **5-Second Shortcut** | $h_n = h - \frac{C_{m_\alpha}}{C_{L_\alpha}}$ | Instant NP calculation when derivatives are given |

#### 4.3D Elevator Trim Curves & CG Boundaries

- **Trim Elevator Deflection:** $\delta_{e,\text{trim}} = -\frac{C_{m_0} + C_{m_\alpha}\alpha_{\text{trim}}}{C_{m_{\delta_e}}} = -\frac{C_{m_0}}{C_{m_{\delta_e}}} + \frac{K_n}{C_{m_{\delta_e}}/C_{L_\alpha}} C_L$
- **Elevator Trim Curve Slope:** $\frac{d\delta_{e,\text{trim}}}{dC_L} = \frac{h - h_n}{C_{m_{\delta_e}}} = -\frac{K_n}{|C_{m_{\delta_e}}|/C_{L_\alpha}} < 0$ (Negative slope for stable aircraft)
- **Aft CG Limit ($h_{\text{aft}}$):** Set by Neutral Point $h_n$ (Stability boundary)
- **Forward CG Limit ($h_{\text{fwd}}$):** Set by Elevator Control Power (Trim/Flare rotation limit)

**Related Note:** [[02 - SUBJECTS/Flight Mechanics & Space Dynamics/04.3 - Longitudinal Static Stability]]


---

## 5. Rigid Body Dynamics — Formula Reference

### 5.1 Linear Momentum Balance & 3D Translational Equations of Motion

| Axis | Linear Momentum Equation | Gravity Force Component | Physical Meaning |
|------|--------------------------|-------------------------|------------------|
| **X-Body (Axial)** | $X_A + X_T - m g \sin\theta = m (\dot{u} + q w - r v)$ | $-m g \sin\theta$ | Forward acceleration & pitch tilt |
| **Y-Body (Lateral)** | $Y_A + Y_T + m g \cos\theta \sin\phi = m (\dot{v} + r u - p w)$ | $+m g \cos\theta \sin\phi$ | Side-force & bank angle tilt |
| **Z-Body (Normal)** | $Z_A + Z_T + m g \cos\theta \cos\phi = m (\dot{w} + p v - q u)$ | $+m g \cos\theta \cos\phi$ | Downward force & normal acceleration |

#### Key Rotational Centripetal Accelerations:
- **Axial Centripetal Term:** $a_x = \dot{u} + q w - r v$
- **Lateral Centripetal Term:** $a_y = \dot{v} + r u - p w$
- **Normal Centripetal Term:** $a_z = \dot{w} + p v - q u$

#### Pull-Up Maneuver Relationships:
- **Normal Acceleration:** $a_z = \dot{w} - q u \approx -q V_\infty$
- **Load Factor Increment:** $\Delta n = n - 1 = \frac{q V_\infty}{g}$

**Related Note:** [[02 - SUBJECTS/Flight Mechanics & Space Dynamics/05.1 - Linear Momentum Balance for Rigid Bodies]]


### 5.2 Angular Momentum Balance & 3D Rotational Equations of Motion

| Axis / Moment | Euler Rotational Equation (Body Axes) | Principal Axes Form ($I_{xz}=0$) | Gyroscopic Coupling Term |
|---------------|--------------------------------------|-----------------------------------|--------------------------|
| **Roll ($L$)** | $L = I_{xx} \dot{p} - I_{xz} \dot{r} + (I_{zz} - I_{yy}) q r - I_{xz} p q$ | $L = I_{xx} \dot{p} + (I_{zz} - I_{yy}) q r$ | $(I_{zz} - I_{yy}) q r$ |
| **Pitch ($M$)** | $M = I_{yy} \dot{q} + (I_{xx} - I_{zz}) p r + I_{xz} (p^2 - r^2)$ | $M = I_{yy} \dot{q} + (I_{xx} - I_{zz}) p r$ | $(I_{xx} - I_{zz}) p r$ |
| **Yaw ($N$)** | $N = I_{zz} \dot{r} - I_{xz} \dot{p} + (I_{yy} - I_{xx}) p q + I_{xz} q r$ | $N = I_{zz} \dot{r} + (I_{yy} - I_{xx}) p q$ | $(I_{yy} - I_{xx}) p q$ |

#### Engine Gyroscopic Precession:
- **Pitching moment due to engine gyro:** $\Delta M = -I_e \cdot \omega_e \cdot r$
- **Yawing moment due to engine gyro:** $\Delta N = +I_e \cdot \omega_e \cdot q$

**Related Note:** [[02 - SUBJECTS/Flight Mechanics & Space Dynamics/05.2 - Angular Momentum Balance for Rigid Bodies]]


---

## 7. Dynamic Stability (Special Topics) — Formula Reference

### 7.1 Euler Kinematic Equations & Subsystem Decoupling

| Euler Angle Rate | Kinematic Formula (in terms of $p, q, r, \phi, \theta$) | Level Flight Approx ($\phi, \theta \to 0$) |
|------------------|--------------------------------------------------------|-------------------------------------------|
| **Roll Angle Rate ($\dot{\phi}$)** | $\dot{\phi} = p + q \sin\phi \tan\theta + r \cos\phi \tan\theta$ | $\dot{\phi} \approx p$ |
| **Pitch Angle Rate ($\dot{\theta}$)** | $\dot{\theta} = q \cos\phi - r \sin\phi$ | $\dot{\theta} \approx q$ |
| **Yaw Angle Rate ($\dot{\psi}$)** | $\dot{\psi} = (q \sin\phi + r \cos\phi) \sec\theta$ | $\dot{\psi} \approx r$ |

#### Decoupled 3-DOF Subsystems:
- **Longitudinal States:** $\mathbf{x}_{\text{long}} = [\Delta u, \Delta w, \Delta q, \Delta \theta]^T$ (Governs Pitching, Altitude & Speed)
- **Lateral-Directional States:** $\mathbf{x}_{\text{lat}} = [\Delta v, \Delta p, \Delta r, \Delta \phi]^T$ (Governs Rolling, Yawing & Sideslip)
- **Gimbal Lock Singularity:** $\theta = \pm 90^\circ$ ($\tan\theta \to \infty$)

**Related Note:** [[02 - SUBJECTS/Flight Mechanics & Space Dynamics/07.1 - Full 6-DOF Aircraft Equations of Motion and Euler Angles]]


### 7.2 Longitudinal Dynamic Modes (Short Period & Phugoid)

| Mode | Key Physical Assumption | Undamped Natural Frequency ($\omega_n$) | Damping Ratio ($\zeta$) | Time Period ($T$) |
|------|------------------------|----------------------------------------|-------------------------|-------------------|
| **Short Period (SPPO)** | Speed Constant ($\Delta u \approx 0$) | $\omega_{n,sp} \approx \sqrt{-M_\alpha} = \sqrt{\frac{-q_\infty S \bar{c} C_{m_\alpha}}{I_{yy}}}$ ($\propto U_0$) | $\zeta_{sp} \approx \frac{-(M_q + M_{\dot{\alpha}} + Z_\alpha/U_0)}{2\omega_{n,sp}}$ (Heavy: $0.5\text{--}0.8$) | $T_{sp} = \frac{2\pi}{\omega_{n,sp}} \approx 1\text{--}5\text{ s}$ |
| **Phugoid Mode (Long Period)** | AoA Constant ($\Delta \alpha \approx 0$) | $\omega_{n,ph} = \frac{\sqrt{2} g}{U_0} \approx \frac{13.87}{U_0\text{ (m/s)}}$ ($\propto 1/U_0$) | $\zeta_{ph} \approx \frac{1}{\sqrt{2} (L/D)} \approx \frac{0.707}{L/D}$ (Light: $0.04\text{--}0.08$) | $T_{ph} = \frac{\sqrt{2}\pi U_0}{g} \approx 0.452 \cdot U_0\text{ (m/s)}$ |

#### Quick Longitudinal Derivatives:
- **Dimensional Pitch Stiffness:** $M_\alpha = \frac{q_\infty S \bar{c} C_{m_\alpha}}{I_{yy}} < 0$ (rad/s$^2$)
- **Dimensional Pitch Damping:** $M_q = \frac{q_\infty S \bar{c}^2 C_{m_q}}{2 U_0 I_{yy}} < 0$ (1/s)
- **Lanchester Phugoid Rules:** $\omega_{n,ph} = \frac{\sqrt{2} g}{U_0}, \quad \zeta_{ph} = \frac{1}{\sqrt{2} (L/D)}$

**Related Note:** [[02 - SUBJECTS/Flight Mechanics & Space Dynamics/07.2 - Decoupling of Longitudinal Dynamics and Dynamic Modes]]


### 7.3 Lateral-Directional Dynamic Modes (Dutch Roll, Roll Subsidence & Spiral)

| Mode | Motion Characteristics | Root / Eigenvalue Form | Natural Frequency ($\omega_n$) / Time Constant ($\tau$) | Damping Ratio ($\zeta$) / Stability Criterion |
|------|------------------------|------------------------|----------------------------------------|-----------------------------------------------|
| **Dutch Roll Mode** | Coupled Yaw ($r$), Roll ($p$), Sideslip ($\beta$) | Complex conjugate pair ($-\zeta \omega_n \pm j \omega_d$) | $\omega_{n,\text{dr}} \approx \sqrt{N_\beta'} = \sqrt{\frac{q_\infty S b C_{n_\beta}}{I_{zz}}}$ ($\approx 1\text{--}3\text{ rad/s}$) | $\zeta_{\text{dr}} \approx \frac{-(Y_\beta + N_r')}{2 \omega_{n,\text{dr}}}$ (Light: $0.05\text{--}0.20$) |
| **Roll Subsidence Mode** | Pure 1-DOF Roll ($\Delta p$) around velocity axis | Single real negative root ($s_{\text{roll}} \approx L_p' < 0$) | Time Constant $\tau_{\text{roll}} = -\frac{1}{L_p'} = \frac{2 U_0 I_{xx}}{q_\infty S b^2 \|C_{l_p}\|}$ ($\approx 0.1\text{--}0.5\text{ s}$) | Heavy Damping (Fast non-oscillatory exponential decay) |
| **Spiral Mode** | Slow Bank ($\phi$), Yaw ($r$), Sideslip ($\beta$) | Real root near origin ($s_{\text{spiral}} \approx \frac{g}{U_0} \frac{L_\beta N_r - N_\beta L_r}{N_\beta L_p}$) | Non-oscillatory ($T_{1/2}$ or $T_2 \approx 20\text{--}100\text{ s}$) | **Spirally Stable $\iff \frac{C_{l_\beta} C_{n_r}}{C_{n_\beta} C_{l_r}} > 1.0$** ($E > 0$) |

#### Master Lateral-Directional Stability Ratios & Shortcuts:
- **Dutch Roll Natural Frequency:** $\omega_{n,\text{dr}} \propto \sqrt{C_{n_\beta}}$ (Increases with directional stiffness)
- **Dutch Roll Damping:** Driven by yaw damping $C_{n_r} < 0$; high dihedral $\|C_{l_\beta}\|$ **degrades** Dutch Roll damping!
- **Roll Subsidence Root:** $L_p' = \frac{q_\infty S b^2 C_{l_p}}{2 U_0 I_{xx}} < 0 \implies \tau_{\text{roll}} \propto I_{xx}$
- **Golden Lateral Conflict:** High dihedral $\|C_{l_\beta}\|$ needed for Spiral Stability ($C_{l_\beta} C_{n_r} > C_{n_\beta} C_{l_r}$), but LOW dihedral needed for Dutch Roll damping.

**Related Note:** [[02 - SUBJECTS/Flight Mechanics & Space Dynamics/07.3 - Decoupling of Lateral-Directional Dynamics and Dynamic Modes]]





