---
type: topic-note
subject: Engineering Mathematics
topic: Numerical Methods — Section Overview
status: first-read
phase: 1-foundation
date_first_read: 2026-07-27
last_revised: 2026-07-27
pyqs_done: 0
---

# 📖 Numerical Methods — Section Overview
#subject/math #status/first-read #type/topic-note #phase/1-foundation

**Subject:** [[02 - SUBJECTS/Engineering Mathematics/_Index]]  
**Formula Sheet:** [[06 - FORMULA SHEETS/Engineering Mathematics - Formulas]]  
**Date First Read:** 2026-07-27 | **Last Revised:** 2026-07-27

> 🎯 **GATE Weightage:** 4–6 marks per year. Numerical Methods provide algorithmic solutions when analytical closed-form solutions are impossible or impractical.

---

## 📌 Section Map: Numerical Methods

### 1. Root Finding Algorithms
> 📖 **[[02 - SUBJECTS/Engineering Mathematics/04.1 - Bisection Method|Bisection Method (IVT Foundation, Halving Algorithm, Min. Iterations Formula $n > \frac{\ln(b-a)-\ln\epsilon}{\ln 2}$, Linear Convergence $p=1$, Speed Tricks, 4 Solved Examples)]]** `#status/first-read`

- [x] [[02 - SUBJECTS/Engineering Mathematics/04.1 - Bisection Method|Bisection Method]] ✅ `#status/first-read`
- [x] [[02 - SUBJECTS/Engineering Mathematics/04.2 - Newton Raphson Method|Newton-Raphson Method: Master Formula $x_{n+1}=x_n-\frac{f(x_n)}{f'(x_n)}$, Quadratic Convergence $p=2$, Error Formula $e_{n+1}=C e_n^2$, Failure Modes, Special Formulas ($\sqrt{N}, 1/N$), 4 Speed Tricks]] ✅ `#status/first-read`


---

### 2. Numerical Integration
- [x] [[02 - SUBJECTS/Engineering Mathematics/04.4 - Trapezoidal Rule|Trapezoidal Rule: Composite Master Formula $\frac{h}{2}[(y_0+y_n)+2\sum y_{mid}]$, Weight Stencil $[1,2,2,\dots,2,1]$, $O(h^2)$ Error Analysis, Min. Sub-intervals Formula, Convexity Test, 4 Speed Tricks]] ✅ `#status/first-read`
- [x] [[02 - SUBJECTS/Engineering Mathematics/04.5 - Simpsons Rules|Simpson's Rules (1/3 Rule $n$ EVEN & 3/8 Rule $n$ mult. 3): Composite Master Formulas, Weights Stencils [1,4,2,4,1] & [1,3,3,2,3,3,1], Degree of Precision 3, $O(h^4)$ Error, 4 Speed Tricks]] ✅ `#status/first-read`

---

### 3. Numerical Differentiation & Interpolation
- [x] [[02 - SUBJECTS/Engineering Mathematics/04.3 - Numerical Differentiation|Numerical Differentiation: Forward $O(h)$, Backward $O(h)$, Central $O(h^2)$, Second Derivative Stencil $[1,-2,1]/h^2$, Newton's Difference Formulas, 4 Speed Tricks]] ✅ `#status/first-read`
- [ ] Linear Interpolation & Lagrange Polynomials
- [ ] Newton's Forward & Backward Differences

---

### 4. Curve Fitting & Regression
- [x] [[02 - SUBJECTS/Engineering Mathematics/04.6 - Linear Regression|Linear Regression & Least Squares: Normal Equations, Slope $a_1 = \frac{n\sum xy - \sum x\sum y}{n\sum x^2 - (\sum x)^2}$, Intercept $a_0 = \bar{y}-a_1\bar{x}$, Pearson $r$, Power Law Linearization, Drag Polar Application]] ✅ `#status/first-read`
- [x] [[02 - SUBJECTS/Engineering Mathematics/04.6b - Least Squares Method|Method of Least Squares (General): Quadratic 3×3 Normal Equations, Design Matrix $\mathbf{A}$, Gram Matrix $\mathbf{A}^T\mathbf{A}\mathbf{a}=\mathbf{A}^T\mathbf{y}$, $R^2=1-\text{SSR/SST}$, $S_E = \sqrt{\text{SSR}/(n-m-1)}$, Linearity Test, PANAM Mnemonic]] ✅ `#status/first-read`

---

### 5. Interpolation
- [x] [[02 - SUBJECTS/Engineering Mathematics/04.7 - Linear Interpolation|Linear Interpolation: 2-Point Formula, Newton Forward $y=y_0+s\Delta y_0+\frac{s(s-1)}{2!}\Delta^2 y_0+\cdots$, Newton Backward Formula, Lagrange $P(x) = \sum y_i L_i(x)$, Partition of Unity $\sum L_i=1$, Divided Differences, FEB-BEN-LAG Mnemonic]] ✅ `#status/first-read`

---

## 🔄 Revision Log

| Date | Action | Status After |
|---|---|---|
| 2026-07-27 | Section complete: 04.1–04.6b all integrated | #status/first-read |

---
*Related Documents:* [[02 - SUBJECTS/Engineering Mathematics/_Index]] | [[02 - SUBJECTS/Engineering Mathematics/04.1 - Bisection Method]] | [[06 - FORMULA SHEETS/Engineering Mathematics - Formulas]]
