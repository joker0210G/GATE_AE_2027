---
type: topic-note
subject: Engineering Mathematics
topic: Calculus & Vector Calculus
status: first-read
phase: 1
date_first_read: 2026-07-27
last_revised: 2026-07-27
pyqs_done: 0
---

# 📖 Calculus & Vector Calculus
#subject/math #status/first-read #type/topic-note #phase/1-foundation

**Subject:** [[_Index_Engineering Mathematics]]  
**Formula Sheet:** [[06 - FORMULA SHEETS/Engineering Mathematics - Formulas]]  
**Date First Read:** 2026-07-27  
**Last Revised:** 2026-07-27  

---

## 📌 What is This Topic?

Calculus is the mathematical study of continuous change. In GATE AE, Calculus is high-weightage (~4–6 marks) and powers fluid mechanics (Navier-Stokes equations), aerodynamics (pressure integration for lift/drag), structures (beam bending & strain energy), and flight dynamics (trajectory optimization).

---

## 🧠 Core Concepts & Subtopic Notes

### 1. Single Variable Calculus
- 📖 **Detailed Note:** [[02 - SUBJECTS/Engineering Mathematics/02.1 - Single Variable Calculus|Functions of Single Variable Notes]] `#status/first-read`
- **Limits & Continuity:** Standard limit identities, L'Hôpital's rule, $1^\infty$ form shortcut $e^{\lim g(f-1)}$, LHL = RHL continuity condition.
- **Differentiability & Mean Value Theorems:** Rolle's Theorem, Lagrange's Mean Value Theorem ($f'(c) = \frac{f(b)-f(a)}{b-a}$), Cauchy's MVT.
- **Series Expansions:** Taylor and Maclaurin series expansions for $e^x, \sin x, \cos x, \ln(1+x), (1+x)^n$.
- **Maxima & Minima:** Critical points, 1st & 2nd derivative tests, higher-order derivative tests, absolute maxima/minima on $[a,b]$.
- **Integration & Special Functions:** Leibniz rule for differentiation under integral sign $\frac{d}{dx} \int_u^v f(t) dt = f(v)v' - f(u)u'$, King's property, Gamma function $\Gamma(n)$, Beta function $B(m,n)$, Wallis' trigonometric integral formula.

### 2. Multivariable Calculus & Vector Calculus
- 📖 **Deep-Dive Note:** [[02 - SUBJECTS/Engineering Mathematics/02.2 - Several Variable Calculus|Functions of Several Variables (Partial Derivatives, Euler's Theorem, Gradient, Divergence, Curl, Laplacian, Directional Derivatives, Jacobian, 2-Variable Extrema, Lagrange Multipliers)]] `#status/first-read`
- Partial derivatives, Gradient $\nabla\phi$, Divergence $\nabla\cdot\vec{F}$, Curl $\nabla\times\vec{F}$, Directional derivatives.
- Line integrals, Surface integrals, Volume integrals.
- **Integral theorems:** Green's Theorem, Stokes' Theorem, Gauss Divergence Theorem.

---

## 📐 Key Formulas

| Formula / Rule | Description | When to Use |
|---|---|---|
| $\lim_{x \to a} [f(x)]^{g(x)} = e^{\lim g(x)[f(x)-1]}$ | $1^\infty$ Form limit shortcut | Limits resulting in $1^\infty$ |
| $f'(c) = \frac{f(b) - f(a)}{b - a}$ | Lagrange's Mean Value Theorem | Continuous $[a,b]$, differentiable $(a,b)$ |
| $\frac{d}{dx} \int_{u(x)}^{v(x)} f(t) dt = f(v)v' - f(u)u'$ | Leibniz Rule | Differentiating variable-bound integral |
| $\Gamma(n+1) = n!, \quad \Gamma(1/2) = \sqrt{\pi}$ | Gamma function identities | Factorials & improper integrals |
| $\int_0^{\pi/2} \sin^m x \cos^n x dx = \frac{\Gamma(\frac{m+1}{2})\Gamma(\frac{n+1}{2})}{2\Gamma(\frac{m+n+2}{2})}$ | Wallis' Formula | Definite trig integrals from $0$ to $\pi/2$ |

---

## 🔗 Related Topics

- **Prerequisites:** Basic algebra, trigonometry
- **Leads to:** [[02 - SUBJECTS/Engineering Mathematics/03 - ODEs]] (Differential equations), [[_Index_Aerodynamics]] (Fluid flow integration)
- **Also related:** [[02 - SUBJECTS/Engineering Mathematics/01.1 - Vector Algebra]]

---

## 🔄 Revision Log

| Date | Action | Status After |
|---|---|---|
| 2026-07-27 | Single Variable Calculus Note Created | #status/first-read |
