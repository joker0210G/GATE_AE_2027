---
type: topic-note
subject: Engineering Mathematics
topic: Linear Algebra
status: first-read
phase: 1
date_first_read: 2026-07-27
last_revised: 2026-07-27
pyqs_done: 0
---

# 📖 Linear Algebra
#subject/math #status/first-read #type/topic-note #phase/1-foundation

**Subject:** [[02 - SUBJECTS/Engineering Mathematics/_Index]]  
**Formula Sheet:** [[06 - FORMULA SHEETS/Engineering Mathematics - Formulas]]  
**Date First Read:** 2026-07-27  
**Last Revised:** 2026-07-27

---

## 📌 What is This Topic?

Linear algebra deals with vector spaces, matrices, and linear transformations. For GATE AE, it is foundational — eigenvalue problems appear in structural dynamics, flight dynamics, and differential equations. Expect 2–3 direct questions.

---

## 🧠 Core Concepts

### Vector Algebra & Vector Spaces
- 📖 **Detailed Note:** [[02 - SUBJECTS/Engineering Mathematics/01.1 - Vector Algebra|Vector Algebra & Vector Spaces Notes]] `#status/first-read`
- **Geometric Vector Algebra:** Dot product, cross product, scalar triple product, vector triple product (BAC-CAB rule), coplanarity, projections, work done, torque.
- **Abstract Vector Spaces:** Subspaces, linear combination, span, linear independence (rank/determinant test), basis, dimension theorems, Gram-Schmidt orthogonalization.

### Matrix Algebra & Determinants
- 📖 **Detailed Note:** [[02 - SUBJECTS/Engineering Mathematics/01.2 - Matrix Algebra|Matrix Algebra & Determinants Notes]] `#status/first-read`
- **Matrix Classifications:** Symmetric ($A^T=A$), Skew-Symmetric ($A^T=-A$, odd-order $\det=0$, $a_{ii}=0$), Orthogonal ($A^T A = I$, $A^{-1}=A^T$), Idempotent ($A^2=A$), Involutory ($A^2=I$), Nilpotent ($A^k=O$).
- **Trace Properties:** $\text{tr}(AB) = \text{tr}(BA)$, $\text{tr}(A) = \sum \lambda_i$.
- **Determinant Laws:** $\det(kA) = k^n \det(A)$, $\det(AB) = \det(A)\det(B)$, $\det(A^{-1}) = 1/\det(A)$.
- **Adjoint Identities:** $A \cdot \text{adj}(A) = \det(A) I$, $\det(\text{adj}(A)) = (\det A)^{n-1}$, $\det(\text{adj}(\text{adj}(A))) = (\det A)^{(n-1)^2}$, $\text{adj}(\text{adj}(A)) = (\det A)^{n-2} A$.
### Systems of Linear Equations & Rank
- 📖 **Detailed Note:** [[02 - SUBJECTS/Engineering Mathematics/01.3 - Systems of Linear Equations|Systems of Linear Equations & Rank Notes]] `#status/first-read`
- **Rank Properties:** REF non-zero rows, $\text{Rank}(A) = \text{Rank}(A^T) = \text{Rank}(A^T A)$, $\text{Rank}(AB) \le \min(\text{Rank}(A), \text{Rank}(B))$.
- **Rank-Nullity Theorem:** $\text{Rank}(A) + \text{Nullity}(A) = n$ (number of unknowns/columns).
- **Rouché-Capelli Consistency ($A\vec{x}=\vec{b}$):**
  - Inconsistent (No Solution): $\text{Rank}(A) < \text{Rank}([A \mid \vec{b}])$.
  - Unique Solution: $\text{Rank}(A) = \text{Rank}([A \mid \vec{b}]) = n$.
  - Infinite Solutions: $\text{Rank}(A) = \text{Rank}([A \mid \vec{b}]) = r < n$ (Free Variables $= n - r$).
- **Homogeneous Systems ($A\vec{x}=\vec{0}$):** Always consistent; Unique trivial solution $\vec{x}=\vec{0} \iff \det(A) \neq 0$; Non-trivial solutions $\iff \det(A) = 0$ (L.I. solutions $= n - r$).

### Eigenvalues & Eigenvectors
- 📖 **Detailed Note:** [[02 - SUBJECTS/Engineering Mathematics/01.4 - Eigenvalues and Eigenvectors|Eigenvalues & Eigenvectors Notes]] `#status/first-read`
- **Definition & Characteristic Equation:** $A\vec{v} = \lambda\vec{v} \iff \det(A - \lambda I) = 0$.
- **Fast 3x3 Characteristic Shortcut:** $\lambda^3 - S_1 \lambda^2 + S_2 \lambda - S_3 = 0$ ($S_1 = \text{tr}, S_2 = \sum M_{ii}, S_3 = \det$).
- **Commandments:** $\sum \lambda = \text{tr}(A)$, $\prod \lambda = \det(A)$, $\lambda(A^m) = \lambda^m$, $\lambda(A^{-1}) = 1/\lambda$, $\lambda(k A) = k\lambda$.
- **Special Matrices:** Real Symmetric $\implies$ Real $\lambda$; Real Skew-Symmetric $\implies \pm i b$ or $0$; Orthogonal $\implies |\lambda| = 1$; Idempotent $\implies \{0,1\}$; Involutory $\implies \{-1,+1\}$; Nilpotent $\implies \text{all } 0$.
- **Cayley-Hamilton Theorem:** $P(A) = O \implies A^{-1} = \frac{1}{\det A} (A^2 - S_1 A + S_2 I)$ for $3 \times 3$.
- **Diagonalizability:** $A$ is diagonalizable $\iff \text{GM}(\lambda_i) = \text{AM}(\lambda_i) \quad \forall i$. Distinct eigenvalues $\implies$ guaranteed diagonalizable!

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
