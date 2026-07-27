---
type: topic-note
subject: Engineering Mathematics
topic: Linear Algebra
status: to-do
phase: 1
date_first_read: 
last_revised: 
pyqs_done: 0
---

# 📖 Linear Algebra
#subject/math #status/to-do #type/topic-note #phase/1-foundation

**Subject:** [[02 - SUBJECTS/Engineering Mathematics/_Index]]  
**Formula Sheet:** [[06 - FORMULA SHEETS/Engineering Mathematics - Formulas]]  
**Date First Read:** —  
**Last Revised:** —

---

## 📌 What is This Topic?

Linear algebra deals with vector spaces, matrices, and linear transformations. For GATE AE, it is foundational — eigenvalue problems appear in structural dynamics, flight dynamics, and differential equations. Expect 2–3 direct questions.

---

## 🧠 Core Concepts

### Matrices
- **Types:** Square, symmetric, skew-symmetric, orthogonal, diagonal, identity, null
- **Rank of a matrix:** Maximum number of linearly independent rows/columns
- **Row Echelon Form (REF):** Gaussian elimination → pivot positions
- **Reduced Row Echelon Form (RREF):** Used to find rank, solve systems
- **Consistency of system $Ax = b$:**
  - Consistent if $\text{rank}(A) = \text{rank}([A|b])$
  - Unique solution if rank = n (number of unknowns)
  - Infinite solutions if rank < n
  - Inconsistent if rank(A) ≠ rank([A|b])

### Determinants
- $\det(A)$: Scalar quantity, exists only for square matrices
- $\det = 0$ ⟺ matrix is singular (non-invertible)
- Properties: $\det(AB) = \det(A)\det(B)$, $\det(kA) = k^n \det(A)$

### Eigenvalues & Eigenvectors
- **Definition:** $Av = \lambda v$ → $v$ is eigenvector, $\lambda$ is eigenvalue
- **Characteristic equation:** $\det(A - \lambda I) = 0$
- **Properties:**
  - Sum of eigenvalues = trace(A)
  - Product of eigenvalues = det(A)
  - Symmetric matrices have real eigenvalues
  - Orthogonal matrices have eigenvalues with |λ| = 1
- **Cayley-Hamilton Theorem:** Every matrix satisfies its own characteristic equation

---

## 📐 Key Formulas

| Formula | Description | When to Use |
|---|---|---|
| $\det(A - \lambda I) = 0$ | Characteristic equation | Finding eigenvalues |
| $\sum \lambda_i = \text{tr}(A)$ | Sum of eigenvalues | Quick check |
| $\prod \lambda_i = \det(A)$ | Product of eigenvalues | Quick check |
| $(A-\lambda I)v = 0$ | Eigenvector equation | After finding λ |
| $\text{rank} + \text{nullity} = n$ | Rank-nullity theorem | System analysis |
| $A^{-1} = \text{adj}(A)/\det(A)$ | Matrix inverse | 2×2 and 3×3 |

---

## 🔗 Related Topics

- **Prerequisites:** Basic arithmetic, set theory
- **Leads to:** [[02 - SUBJECTS/Engineering Mathematics/03 - ODEs]] (eigenvalue methods for systems)
- **Also related:** [[02 - SUBJECTS/Structures/08 - Thin Walled Structures]] (FEA uses matrices), [[02 - SUBJECTS/Flight Mechanics/05 - Dynamic Stability]] (matrix form of EOM)

---

## 📝 Worked Examples

### Example 1: Finding Eigenvalues
**Problem:** Find the eigenvalues of $A = \begin{pmatrix} 4 & 1 \\ 2 & 3 \end{pmatrix}$

**Solution:**
$$\det(A - \lambda I) = (4-\lambda)(3-\lambda) - 2 = \lambda^2 - 7\lambda + 10 = 0$$
$$(\lambda - 5)(\lambda - 2) = 0 \Rightarrow \lambda_1 = 5, \lambda_2 = 2$$

**Quick Check:** $\lambda_1 + \lambda_2 = 7 = \text{tr}(A) = 4+3$ ✅  
$\lambda_1 \times \lambda_2 = 10 = \det(A) = 12-2$ ✅

**Key Insight:** Always verify with trace and determinant. Saves time in GATE!

---

### Example 2: Solving System of Equations
**Problem:** Solve $x + 2y = 5$, $2x + 4y = 10$

**Solution:**
Augmented matrix: $\begin{pmatrix} 1 & 2 & | & 5 \\ 2 & 4 & | & 10 \end{pmatrix}$  
$R_2 \rightarrow R_2 - 2R_1$: $\begin{pmatrix} 1 & 2 & | & 5 \\ 0 & 0 & | & 0 \end{pmatrix}$

rank(A) = 1 = rank([A|b]) but n = 2, so **infinite solutions**: $x = 5-2t$, $y = t$ for any $t$.

---

## ❓ GATE PYQs from This Topic

> Create these in [[04 - PYQs/Engineering Mathematics/]] after solving.

- [[04 - PYQs/Engineering Mathematics/GATE-AE-2023-Q01]] — Eigenvalue problem
- [[04 - PYQs/Engineering Mathematics/GATE-AE-2022-Q03]] — System of equations

---

## ⚠️ Common Mistakes

- Forgetting that $\det(kA) = k^n \det(A)$ (not $k \cdot \det(A)$)
- Confusing rank with number of non-zero rows BEFORE reduction
- Sign errors when expanding 3×3 determinants (use cofactor expansion carefully)
- Eigenvectors: solve $(A - \lambda I)v = 0$, not $Av = \lambda$

---

## 🔄 Revision Log

| Date | Action | Status After |
|---|---|---|
| | First read | #status/first-read |
| | PYQ practice | #status/needs-revision |
| | Full revision | #status/mastered |
