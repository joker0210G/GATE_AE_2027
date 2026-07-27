---
type: formula-sheet
subject: Engineering Mathematics
subject_code: math
last_updated: 2026-07-27
---

# 📐 Engineering Mathematics — Formula Sheet
#type/formula #subject/math

> **Quick Reference** | Update this as you study each topic | Link topic notes here

---

## 1. Linear Algebra

### Matrices
| Formula / Rule | Description |
|---|---|
| $\det(AB) = \det(A)\det(B)$ | Determinant product rule |
| $\det(A^T) = \det(A)$ | Transpose determinant |
| $\det(A^{-1}) = 1/\det(A)$ | Inverse determinant |
| $(AB)^{-1} = B^{-1}A^{-1}$ | Inverse of product |
| $\text{rank}(A) + \text{nullity}(A) = n$ | Rank-nullity theorem |

### Eigenvalues & Eigenvectors
| Formula / Rule | Description |
|---|---|
| $\det(A - \lambda I) = 0$ | Characteristic equation |
| Sum of eigenvalues $= \text{tr}(A)$ | Trace property |
| Product of eigenvalues $= \det(A)$ | Determinant property |
| $Ax = \lambda x$ | Eigenvector definition |

**Related Notes:** [[02 - SUBJECTS/Engineering Mathematics/01 - Linear Algebra]]

---

## 2. Calculus & Differential Calculus

### Limits & Continuity
| Formula | Description |
|---|---|
| L'Hôpital's Rule: $\lim \frac{f}{g} = \lim \frac{f'}{g'}$ | For 0/0 or ∞/∞ forms |
| Taylor Series: $f(x) = \sum \frac{f^{(n)}(a)}{n!}(x-a)^n$ | Taylor expansion |

### Integration
| Formula | Description |
|---|---|
| $\int u\,dv = uv - \int v\,du$ | Integration by parts |
| $\int_a^b f\,dx = F(b) - F(a)$ | Fundamental theorem |
| Green's theorem, Stokes' theorem, Divergence theorem | Vector calculus |

**Related Notes:** [[02 - SUBJECTS/Engineering Mathematics/02 - Calculus]]

---

## 3. Ordinary Differential Equations (ODEs)

| Type | Standard Form | Solution Method |
|---|---|---|
| 1st order linear | $y' + P(x)y = Q(x)$ | Integrating factor: $e^{\int P\,dx}$ |
| Bernoulli | $y' + P(x)y = Q(x)y^n$ | Substitute $v = y^{1-n}$ |
| 2nd order homogeneous | $ay'' + by' + cy = 0$ | Characteristic equation $ar^2 + br + c = 0$ |

**Related Notes:** [[02 - SUBJECTS/Engineering Mathematics/03 - ODEs]]

---

## 4. Laplace & Fourier Transforms

| Transform | Definition | Key Property |
|---|---|---|
| Laplace: $\mathcal{L}\{f(t)\}$ | $\int_0^\infty f(t)e^{-st}\,dt$ | $\mathcal{L}\{f'\} = sF(s) - f(0)$ |
| Fourier Series | $f(x) = a_0 + \sum(a_n\cos + b_n\sin)$ | Period $2L$ |

**Related Notes:** [[02 - SUBJECTS/Engineering Mathematics/04 - Laplace and Fourier]]

---

## 5. Numerical Methods

| Method | Formula | Use Case |
|---|---|---|
| Bisection | $c = (a+b)/2$ | Root finding |
| Newton-Raphson | $x_{n+1} = x_n - f(x_n)/f'(x_n)$ | Faster root finding |
| Trapezoidal Rule | $\int \approx (h/2)[f_0 + 2f_1 + ... + f_n]$ | Numerical integration |
| Simpson's 1/3 Rule | $\int \approx (h/3)[f_0 + 4f_1 + 2f_2 + ... + f_n]$ | More accurate integration |

**Related Notes:** [[02 - SUBJECTS/Engineering Mathematics/05 - Numerical Methods]]

---

## 6. Probability & Statistics

| Formula | Description |
|---|---|
| $P(A \cup B) = P(A) + P(B) - P(A \cap B)$ | Addition rule |
| $P(A \mid B) = P(A \cap B) / P(B)$ | Conditional probability |
| Normal distribution: $\mu, \sigma$ | Mean, Standard Deviation |
| Binomial: $P(X=k) = \binom{n}{k}p^k(1-p)^{n-k}$ | Binomial distribution |

**Related Notes:** [[02 - SUBJECTS/Engineering Mathematics/06 - Probability and Statistics]]

---

## 7. Complex Variables

| Formula | Description |
|---|---|
| $e^{i\theta} = \cos\theta + i\sin\theta$ | Euler's formula |
| Cauchy-Riemann: $\partial u/\partial x = \partial v/\partial y$ | Analyticity condition |
| Cauchy's Integral Formula | $f(a) = \frac{1}{2\pi i}\oint \frac{f(z)}{z-a}\,dz$ |

**Related Notes:** [[02 - SUBJECTS/Engineering Mathematics/07 - Complex Variables]]

---

*Last Updated: 2026-07-27 | Full Index: [[02 - SUBJECTS/Engineering Mathematics/_Index]]*
