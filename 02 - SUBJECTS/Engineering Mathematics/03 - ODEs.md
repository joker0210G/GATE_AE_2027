---
type: topic-note
subject: Engineering Mathematics
topic: Ordinary Differential Equations (ODEs & PDEs)
status: first-read
phase: 1-foundation
date_first_read: 2026-07-27
last_revised: 2026-07-27
pyqs_done: 0
---

# 📖 Ordinary & Partial Differential Equations — Section Overview
#subject/math #status/first-read #type/topic-note #phase/1-foundation

**Subject:** [[02 - SUBJECTS/Engineering Mathematics/_Index]]  
**Formula Sheet:** [[06 - FORMULA SHEETS/Engineering Mathematics - Formulas]]  
**Date First Read:** 2026-07-27 | **Last Revised:** 2026-07-27

> 🎯 **GATE Weightage:** 5–10 marks total across ODEs, PDEs, and Laplace Transforms. One of the highest-yield sections in Engineering Mathematics.

---

## 📌 Section Map: Differential Equations

### 1. First Order ODEs
> 📖 **[[02 - SUBJECTS/Engineering Mathematics/03.1 - First Order Linear ODEs|First Order Linear ODEs (Separable, Homogeneous, Linear IF Method, Bernoulli, Exact, Integrating Factor, 5-Type Master Algorithm, 4 Solved Examples)]]** `#status/first-read`

**Quick Reference Formulas:**
- **Separable:** $\int\frac{dy}{h(y)} = \int g(x)\,dx$
- **Linear IF:** $\mu = e^{\int P\,dx}$, solution $\mu y = \int\mu Q\,dx + C$
- **Bernoulli:** $v = y^{1-n}$ → reduces to Linear
- **Exact Test:** $M_y = N_x$ → solution $F(x,y) = C$
- **Homogeneous:** $v = y/x$ → reduces to Separable

---

### 2. Higher Order ODEs (Linear with Constant Coefficients)
> 📖 **[[02 - SUBJECTS/Engineering Mathematics/03.2 - Higher Order Linear ODEs|Higher Order Linear ODEs (CF from CE roots, PI via D-Operator Rules: e^ax/F(a), sin/cos D²→-a², Polynomial Binomial Expansion, Exp-Shift Theorem, VOP, UC Modification Rule, Resonance, 4 Worked Examples)]]** `#status/first-read`

**Quick Reference Formulas:**
- **Characteristic Equation:** Replace $D\to m$ in $F(D)$, solve for roots
- **Real distinct roots $m_1,m_2$:** CF $= C_1e^{m_1 x}+C_2e^{m_2 x}$
- **Repeated root $m$:** CF $= (C_1+C_2 x)e^{mx}$
- **Complex roots $\alpha\pm i\beta$:** CF $= e^{\alpha x}(C_1\cos\beta x+C_2\sin\beta x)$
- **PI for $e^{ax}$:** $y_p = e^{ax}/F(a)$ if $F(a)\ne 0$; else $x e^{ax}/F'(a)$
- **PI for $\sin ax$:** Replace $D^2\to -a^2$; Resonance if $F(-a^2)=0\implies$ multiply by $x$
- **PI for $x^n$:** Expand $[F(D)]^{-1}$ as binomial series
- **Exponential Shift:** $\frac{1}{F(D)}e^{ax}V(x) = e^{ax}\frac{1}{F(D+a)}V(x)$
- **VOP:** $y_p = -y_1\int\frac{y_2 f}{W}dx + y_2\int\frac{y_1 f}{W}dx$

---

### 3. Laplace Transforms
> 📖 **[[02 - SUBJECTS/Engineering Mathematics/04 - Laplace and Fourier]]** `#status/to-do`

---

### 4. Partial Differential Equations (PDEs)

> 📖 **[[02 - SUBJECTS/Engineering Mathematics/03.3 - Classification of PDEs|Classification of PDEs: Discriminant $\Delta=B^2-4AC$, Elliptic (Laplace/Poisson), Parabolic (Heat/Diffusion), Hyperbolic (Wave), Variable-Coefficient PDEs, BCs for Each Type, Aerospace Applications, 4 Solved Examples)]]** `#status/first-read`

**Master Classification Formula:**
- $\Delta = B^2 - 4AC$ where $Au_{xx}+Bu_{xy}+Cu_{yy}+\ldots = 0$
- $\Delta < 0$ → **Elliptic** (Laplace: $\nabla^2 u=0$) — Steady state, BVP
- $\Delta = 0$ → **Parabolic** (Heat: $u_t=\alpha^2 u_{xx}$) — Diffusion, IBVP, 1 IC
- $\Delta > 0$ → **Hyperbolic** (Wave: $u_{tt}=c^2 u_{xx}$) — Waves, IBVP, 2 ICs

**Separation of Variables Solutions:**
- [x] [[02 - SUBJECTS/Engineering Mathematics/03.4 - Wave Equation|Wave Equation: Separation of Variables, Eigenfunctions (Fixed/Free/Fixed-Free), Natural Frequencies $f_n=nc/2L$, d'Alembert's Formula, Resonance, 3 BC Cases]] ✅ `#status/first-read`
- [x] [[02 - SUBJECTS/Engineering Mathematics/03.5 - Laplace Equation PDE|Laplace Equation PDE: Rectangular Plate Sep. of Variables (SHIN), Polar Coordinates (r/R)^n (Interior vs Exterior), Mean Value Property, Maximum Principle, 4 Speed Tricks]] ✅ `#status/first-read`
- [x] [[02 - SUBJECTS/Engineering Mathematics/03.6 - Heat Equation|Heat/Diffusion Equation: Separation of Variables, Exponential Decay Factors e^(-λ_n α² t), 3 BC Cases (Fixed/Insulated/Non-Homogeneous), Steady-State Breakdown, 4 Speed Tricks]] ✅ `#status/first-read`

---

## 🔄 Revision Log

| Date | Action | Status After |
|---|---|---|
| 2026-07-27 | Section overview created; First Order ODEs note integrated | #status/first-read |

---
*Related Documents:* [[02 - SUBJECTS/Engineering Mathematics/_Index]] | [[02 - SUBJECTS/Engineering Mathematics/03.1 - First Order Linear ODEs]] | [[06 - FORMULA SHEETS/Engineering Mathematics - Formulas]]
