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

### Vector Algebra & Vector Spaces
| Formula / Rule | Description / Condition |
|---|---|
| $\cos^2\alpha + \cos^2\beta + \cos^2\gamma = 1$ | Direction Cosines identity ($l^2 + m^2 + n^2 = 1$) |
| $\text{proj}_{\vec{b}} \vec{a} = \frac{\vec{a} \cdot \vec{b}}{\|\vec{b}\|}$ | Scalar projection of $\vec{a}$ onto $\vec{b}$ |
| $\vec{p} = \left(\frac{\vec{a} \cdot \vec{b}}{\|\vec{b}\|^2}\right) \vec{b}$ | Vector projection of $\vec{a}$ onto $\vec{b}$ |
| $\vec{a} \times \vec{b} = \det \begin{pmatrix}\hat{i}&\hat{j}&\hat{k}\\a_x&a_y&a_z\\b_x&b_y&b_z\end{pmatrix}$ | Cross product determinant form |
| $[\vec{a}\ \vec{b}\ \vec{c}] = \vec{a} \cdot (\vec{b} \times \vec{c}) = \det([\vec{a},\vec{b},\vec{c}]^T)$ | Scalar Triple Product (STP) / Parallelepiped volume |
| $[\vec{a}\ \vec{b}\ \vec{c}] = 0$ | Condition for 3 vectors to be coplanar |
| $\vec{a} \times (\vec{b} \times \vec{c}) = \vec{b}(\vec{a} \cdot \vec{c}) - \vec{c}(\vec{a} \cdot \vec{b})$ | Vector Triple Product (BAC - CAB Rule) |
| $\det(A) \neq 0 \iff \text{Linearly Independent}$ | LI Test for $n$ vectors in $\mathbb{R}^n$ |
| $\dim(P_n(x)) = n + 1$ | Dimension of polynomials of degree $\le n$ |
| $\dim(\text{Symmetric } n \times n) = \frac{n(n+1)}{2}$ | Dimension of symmetric matrices |
| $\dim(W_1 + W_2) = \dim W_1 + \dim W_2 - \dim(W_1 \cap W_2)$ | Subspace dimension theorem |
| $u_2 = v_2 - \frac{\langle v_2, u_1 \rangle}{\|u_1\|^2} u_1$ | Gram-Schmidt second orthogonal vector |

### Matrices & Determinants
| Formula / Rule | Description / Condition |
|---|---|
| $\det(k A_{n \times n}) = k^n \det(A)$ | Scalar multiplication factor in determinant |
| $\det(AB) = \det(A)\det(B)$ | Determinant product rule |
| $\det(A^T) = \det(A)$ | Transpose determinant |
| $\det(A^{-1}) = 1/\det(A)$ | Inverse determinant |
| $(AB)^{-1} = B^{-1}A^{-1}$ | Inverse of product (Reversal law) |
| $(AB)^T = B^T A^T$ | Transpose of product (Reversal law) |
| $A \cdot \text{adj}(A) = \det(A) \cdot I_n$ | Fundamental Adjoint identity |
| $\det(\text{adj}(A)) = (\det A)^{n-1}$ | Determinant of Adjoint for $n \times n$ matrix |
| $\det(\text{adj}(\text{adj}(A))) = (\det A)^{(n-1)^2}$ | Determinant of double Adjoint |
| $\text{adj}(\text{adj}(A)) = (\det A)^{n-2} \cdot A$ | Double Adjoint matrix formula |
| $\text{tr}(AB) = \text{tr}(BA)$ | Trace cyclic property |
| $A^{-1} = \frac{1}{ad-bc}\begin{pmatrix}d&-b\\-c&a\end{pmatrix}$ | 2x2 Inverse Shortcut ($A = \begin{pmatrix}a&b\\c&d\end{pmatrix}$) |
| $\det(A) = 0$ | Odd-order Skew-Symmetric matrix determinant |
| $A^T A = I \iff A^{-1} = A^T$ | Orthogonal Matrix condition ($\det = \pm 1$) |

### Systems of Linear Equations & Rank
| Formula / Rule | Description / Condition |
|---|---|
| $\text{Rank}(A) + \text{Nullity}(A) = n$ | Rank-Nullity Theorem ($n = \text{number of columns/unknowns}$) |
| $\text{Rank}(A) < \text{Rank}([A \mid \vec{b}])$ | Inconsistent non-homogeneous system ($A\vec{x}=\vec{b}$) $\implies$ NO SOLUTION |
| $\text{Rank}(A) = \text{Rank}([A \mid \vec{b}]) = n$ | Consistent non-homogeneous system $\implies$ UNIQUE SOLUTION |
| $\text{Rank}(A) = \text{Rank}([A \mid \vec{b}]) = r < n$ | Consistent non-homogeneous system $\implies$ INFINITE SOLUTIONS |
| Free Variables $= n - \text{Rank}(A)$ | Number of free parameters in general solution |
| $\det(A) \neq 0$ (for $n \times n$ $A\vec{x}=\vec{0}$) | Homogeneous system $\implies$ ONLY TRIVIAL SOLUTION $\vec{x}=\vec{0}$ |
| $\det(A) = 0$ (for $n \times n$ $A\vec{x}=\vec{0}$) | Homogeneous system $\implies$ INFINITELY MANY NON-TRIVIAL SOLUTIONS |
| L.I. Solutions Count $= n - \text{Rank}(A)$ | Number of linearly independent solutions for $A\vec{x}=\vec{0}$ |
| $\text{Rank}(A^T A) = \text{Rank}(A A^T) = \text{Rank}(A)$ | Gram matrix rank identity |
| $\text{Rank}(AB) \le \min(\text{Rank}(A), \text{Rank}(B))$ | Product rank upper bound |

### Eigenvalues & Eigenvectors
| Formula / Rule | Description / Condition |
|---|---|
| $A \vec{v} = \lambda \vec{v} \iff \det(A - \lambda I) = 0$ | Eigenvalue definition & Characteristic equation |
| $\lambda^2 - \text{tr}(A)\lambda + \det(A) = 0$ | Fast 2x2 Characteristic polynomial shortcut |
| $\lambda^3 - S_1 \lambda^2 + S_2 \lambda - S_3 = 0$ | Fast 3x3 Characteristic shortcut ($S_1=\text{tr}, S_2=\sum M_{ii}, S_3=\det$) |
| $\sum_{i=1}^n \lambda_i = \text{tr}(A)$ | Sum of eigenvalues equals trace |
| $\prod_{i=1}^n \lambda_i = \det(A)$ | Product of eigenvalues equals determinant |
| $\lambda(A^m) = \lambda^m, \quad \lambda(A^{-1}) = \frac{1}{\lambda}, \quad \lambda(k A) = k\lambda$ | Matrix power, inverse, and scalar eigenvalue properties |
| Real Symmetric Matrix | All eigenvalues are purely REAL ($\lambda \in \mathbb{R}$) |
| Real Skew-Symmetric Matrix | Eigenvalues are purely IMAGINARY or ZERO ($\lambda = \pm i b$ or $0$) |
| Real Orthogonal Matrix | Absolute magnitude $|\lambda| = 1$ ($\pm 1$ or $e^{i\theta}$) |
| Idempotent ($A^2=A$) / Involutory ($A^2=I$) | Idempotent $\lambda \in \{0,1\}$; Involutory $\lambda \in \{-1,+1\}$ |
| Nilpotent Matrix ($A^k=O$) | ALL eigenvalues are ZERO ($\lambda_i = 0$) |
| Row / Column Sum $= k$ | $\lambda = k$ is GUARANTEED to be an eigenvalue |
| Rank-1 Matrix $A = \vec{u} \vec{v}^T$ | $n-1$ zero eigenvalues, single non-zero $\lambda = \text{tr}(A)$ |
| Cayley-Hamilton Theorem | $P(A) = O \implies A^{-1} = \frac{1}{\det A} (A^2 - S_1 A + S_2 I)$ for $3 \times 3$ |
| Diagonalizability Condition | $\text{GM}(\lambda_i) = \text{AM}(\lambda_i) \quad \forall i$ (Distinct eigenvalues $\implies$ Diagonalizable) |

**Related Notes:** [[02 - SUBJECTS/Engineering Mathematics/01 - Linear Algebra]] | [[02 - SUBJECTS/Engineering Mathematics/01.1 - Vector Algebra|Vector Algebra Notes]] | [[02 - SUBJECTS/Engineering Mathematics/01.2 - Matrix Algebra|Matrix Algebra Notes]] | [[02 - SUBJECTS/Engineering Mathematics/01.3 - Systems of Linear Equations|Systems of Linear Equations Notes]] | [[02 - SUBJECTS/Engineering Mathematics/01.4 - Eigenvalues and Eigenvectors|Eigenvalues & Eigenvectors Notes]]

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

*Last Updated: 2026-07-27 | Full Index: [[_Index_Engineering Mathematics]]*
