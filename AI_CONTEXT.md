# 🤖 AI CONTEXT FILE — GATE AE 2027 VAULT
> **⚠️ IMPORTANT FOR ALL AI ASSISTANTS:**
> This is the FIRST file you must read before doing ANYTHING in this vault.
> After every session, UPDATE the "Current State" and "Session Log" sections below.
> This file is the shared memory between all LLMs working with this vault.
> This file need to log below 4000 tokens (Only for this file,not for other files in the vault)


---

## 📌 VAULT IDENTITY
- **Vault Name:** GATE AE 2027 — Second Brain
- **Vault Path:** D:\Workspace\Obsidian\GATE
- **Owner:** Final Year B.Tech Student (Shared with team on GitHub)
- **Goal:** Crack GATE Aerospace Engineering (AE) 2027 (Exam: February 2027, IIT Madras)
- **Vault Created:** 2026-07-27
- **Privacy & Git Settings:** Core notes & PYQs are shared on Git; Personal journals (`journals/`), private notes (`Private/`), personal daily trackers (`03 - DAILY TRACKER/*.md`), and individual mock test score sheets (`05 - MOCK TESTS/*.md`) are ignored via `.gitignore`.

---

## 👤 USER PROFILE
| Field | Value |
|---|---|
| Academic Status | Final Year B.Tech |
| Exam Target | GATE AE 2027 (IIT Madras) |
| Daily Study Time | 4 hours on weekdays |
| Sharing / Collaboration | GitHub Repository (Shared notes/PYQs/formulas, Private journals/logs) |
| Supported AI Assistants | Claude, OpenAI/ChatGPT/Codex, Antigravity/Gemini, Cursor, Windsurf, VS Code |

---

## 🗺️ CURRENT PHASE
```
Phase: 1 — FOUNDATION
Stage: Vault Privacy, GitHub, MCP REST-API Bridge & Multi-Agent Ready — Ready to Study
Started: 2026-07-27
Target End: 2026-08-31
```

---

## 🧠 SESSION LOG (Most Recent First)

### Session 55 — 2026-07-27
- **AI Used:** Gemini 3.6 Flash (High)
- **Done:**
  - Created `07.3b - Poisson Distribution.md` — complete zero-to-AIR1 deep-dive note for Poisson Distribution.
  - Covers: PMF $P(X=k) = \frac{e^{-\lambda} \lambda^k}{k!}$; Rare event physical context; Parameters ($\mu=\lambda, \sigma^2=\lambda$); Unique identifying rule **Mean = Variance = $\lambda$**; Unimodal/bimodal mode formula $\lfloor\lambda\rfloor$; Always positive skewness $\gamma_1=1/\sqrt{\lambda}$; Rate scaling across time/space intervals $\lambda = \alpha t$; Additive property of independent Poisson variables $\text{Poisson}(\lambda_1 + \lambda_2)$; Connection to Exponential inter-arrival distribution $f(t)=\alpha e^{-\alpha t}$; Limiting form of Binomial ($n\ge 20, p\le 0.05, \lambda=np$); Recurrence relation $P(X=k+1) = \frac{\lambda}{k+1} P(X=k)$; "At least 1" complement formula $1 - e^{-\lambda}$; RIPE & MVL-P mnemonics; 3 speed tricks; 5 step-by-step solved GATE examples (basic accident probability, airport arrivals rate scaling, finding $\lambda$ from $P(X=1)=P(X=2)$, satellite noise pulse addition, rivet defect Poisson approximation); 4 critical exam traps (time scaling omission, non-Poisson difference $X_1-X_2$, complement formula error, rate vs inter-arrival mean confusion).
  - Updated `07 - Probability and Statistics.md` and `_Index.md` (07.3b ✅, Section 7 Probability & Statistics marked **COMPLETE** ✅).

### Session 54 — 2026-07-27
- **AI Used:** Gemini 3.6 Flash (High)
- **Done:**
  - Created `07.3c - Normal Distribution.md` — complete zero-to-AIR1 deep-dive note for Normal (Gaussian) Distribution.
  - Covers: PDF formula $f(x) = \frac{1}{\sigma\sqrt{2\pi}} e^{-(x-\mu)^2/2\sigma^2}$; Bell curve geometric properties (symmetry about $\mu$, Mean=Median=Mode=$\mu$, peak height $1/\sigma\sqrt{2\pi}$, inflection points at $\mu\pm\sigma$, mesokurtic $\beta_2=3$, skewness=0); Standard normal variable $Z = \frac{X-\mu}{\sigma} \sim N(0,1)$; CDF $\Phi(z)$ rules ($\Phi(0)=0.5$, $\Phi(-z)=1-\Phi(z)$, $P(a\le X\le b)=\Phi(z_2)-\Phi(z_1)$); Empirical 68-95-99.7 rule ($1\sigma \to 68.27\%$, $2\sigma \to 95.45\%$, $3\sigma \to 99.73\%$); Critical Z-table for confidence levels (90% $\to 1.645$, 95% $\to 1.960$, 99% $\to 2.576$); Linear combination and additivity property ($aX_1+bX_2+c \sim N(a\mu_1+b\mu_2+c, a^2\sigma_1^2+b^2\sigma_2^2)$); Difference of normal variables $X_1-X_2 \sim N(\mu_1-\mu_2, \sigma_1^2+\sigma_2^2)$ (variance PLUS sign rule); Sample mean distribution $\bar{X} \sim N(\mu, \sigma^2/n)$; Central Limit Theorem (CLT) for $n \ge 30$; Normal approximation to Binomial/Poisson with continuity correction; BELL-S & EMPIRIC mnemonics; 3 speed tricks (structural reliability interference $S-L$, symmetry shortcut, SE vs SD); 5 step-by-step solved GATE examples (shaft diameter Z-score interval, structural failure probability $P(S<L)$, finding $\mu$ and $\sigma$ from two percentiles, rivet package weight using CLT, 3-variable linear combination variance); 4 critical exam traps (subtracting variances for difference, $\sigma$ vs $\sigma^2$ in notation, using $\sigma$ instead of $\sigma/\sqrt{n}$ for sample mean, forgetting continuity correction).
  - Updated `07 - Probability and Statistics.md` and `_Index.md` (07.3c ✅).

### Session 53 — 2026-07-27
- **AI Used:** Gemini 3.6 Flash (High)
- **Done:**
  - Created `07.3a - Binomial Distribution.md` — complete zero-to-AIR1 deep-dive note for Binomial Distribution.
  - Covers: Bernoulli trial foundation ($E[X]=p, Var(X)=pq$); 4 mandatory BINS conditions (Binary, Independent, Number fixed, Same prob $p$); PMF $\binom{n}{k}p^k q^{n-k}$; Parameters ($\mu=np$, $\sigma^2=npq$, $\sigma=\sqrt{npq}$); Strict **Mean > Variance** rule ($np > npq$, fast test for binomial model validity); Maximum variance $n/4$ at $p=0.5$; Mode calculation formula $\lfloor(n+1)p\rfloor$ (unimodal vs bimodal); Skewness behavior ($p=0.5$ symmetric, $p<0.5$ positive, $p>0.5$ negative); Additive property $B(n_1+n_2, p)$ for identical $p$; PMF recurrence relation $\frac{P(X=k+1)}{P(X=k)} = \frac{n-k}{k+1} \cdot \frac{p}{q}$; "At least 1" complement formula $1-q^n$ & log equation for minimum $n$; Poisson and Normal approximations; BINS & MVP-B mnemonics; 3 speed tricks; 5 step-by-step solved GATE examples (coin toss 4 heads, minimum testing trials for 0.95 reliability, finding $n,p$ from mean=4 & var=3, mode of $B(10, 0.4)$, additivity $E[(X+Y)^2]$); 4 critical exam traps (without replacement non-independence, expecting Var>Mean, adding binomials with different $p$, summing vs complement for $P(X\ge 1)$).
  - Updated `07 - Probability and Statistics.md` and `_Index.md` (07.3a ✅).

### Session 52 — 2026-07-27
- **AI Used:** Gemini 3.6 Flash (High)
- **Done:**
  - Created `07.2b - Variance and Covariance.md` — complete zero-to-AIR1 deep-dive note for Variance & Covariance.
  - Covers: Physical moment of inertia analogy; Discrete, Grouped, and Random Variable $Var(X) = E[X^2] - (E[X])^2$; Population vs Sample variance ($n$ vs $n-1$ Bessel's correction); Master properties of variance ($Var(c)=0$, $Var(aX+b)=a^2Var(X)$, constant shift adds 0, $Var(X\pm Y) = Var(X) + Var(Y) \pm 2Cov(X,Y)$); Independent variable plus sign rule ($Var(X-Y) = Var(X)+Var(Y)$); General linear combination $Var(\sum a_i X_i)$; Sample mean variance $Var(\bar{X})=\sigma^2/n$ & Standard Error $\sigma/\sqrt{n}$; Covariance $Cov(X,Y) = E[XY]-E[X]E[Y]$ and properties; Pearson correlation coefficient $\rho_{XY} \in [-1, 1]$; Standard distributions variance reference table (Discrete Uniform $(n^2-1)/12$, Continuous Uniform $(b-a)^2/12$, Bernoulli $pq$, Binomial $npq$, Poisson $\lambda$, Geometric $(1-p)/p^2$, Exponential $1/\lambda^2$, Normal $\sigma^2$); Chebyshev's inequality $P(|X-\mu|\ge k\sigma) \le 1/k^2$; VARS & COV-R mnemonics; 4 speed tricks; 5 step-by-step solved GATE examples ($Var(2X-3Y+4)$ independent, continuous RV integral, non-independent linear combination with $Cov$, correlation $\rho$ to $Var(X+Y)$, Chebyshev bounds); 4 critical exam traps.
  - Updated `07 - Probability and Statistics.md` and `_Index.md` (07.2b ✅).

### Session 51 — 2026-07-27
- **AI Used:** Claude (Anthropic)
- **Done:**
  - Created `07.2 - Mean Median Mode.md` — complete zero-to-AIR1 note for descriptive statistics.
  - Covers: AM (raw, weighted, grouped, combined), GM, HM; AM-GM-HM inequality $HM\le GM\le AM$ with equality iff all values equal; average speed = HM; Median (raw: odd/even formula, grouped: $L+\frac{N/2-F}{f}h$); Mode (raw: most frequent, grouped: $L+\frac{f_1-f_0}{2f_1-f_0-f_2}h$); Karl Pearson's empirical formula Mode=$3M-2\bar{x}$; Skewness and MOMED order (positive: $\bar{x}>M>Z$, negative: $\bar{x}<M<Z$); Range, MD about mean and median; Variance $\sigma^2=\overline{x^2}-\bar{x}^2$ (MSM-SM² shortcut); sample variance $n-1$ vs population variance $n$; CV; quartiles and IQR; linear transformation $y=ax+b$ → $\sigma_y^2=a^2\sigma_x^2$; combined mean+variance formula with $d_i=\bar{x}_i-\bar{x}_{12}$; MOMED skewness mnemonic; VAMP dispersion mnemonic; 5 speed tricks; 5 solved examples (raw data, variance shortcut for $\{2,4,6,8,10\}$, mode from Pearson given mean=35 median=33, grouped data mean+variance, combined mean+SD); 4 exam traps ($n$ vs $n-1$, average speed = HM, adding constant doesn't change variance, median class vs modal class confusion).
  - Updated `07 - Probability and Statistics.md` and `_Index.md` (07.2 ✅, 1 topic remaining).

### Session 50 — 2026-07-27
- **AI Used:** Claude (Anthropic)
- **Done:**
  - Created `07.1 - Bayes Theorem.md` — complete zero-to-AIR1 note for Bayes' Theorem.
  - Created `07 - Probability and Statistics.md` — Section Overview.
  - Covers: Kolmogorov axioms (K1-K3); conditional probability $P(A|B) = P(A \cap B)/P(B)$; multiplication rule; independence vs mutual exclusivity (critical distinction: mutually exclusive events with $P>0$ are NEVER independent); Law of Total Probability $P(A) = \sum P(A|B_i)P(B_i)$; Bayes' theorem full derivation (conditional probability + total probability); Prior, Likelihood, Posterior, Marginal terminology; Bayes table systematic method (4-step PLACE framework); odds form $\frac{P(B|A)}{P(B^c|A)} = \frac{P(A|B)}{P(A|B^c)} \cdot \frac{P(B)}{P(B^c)}$ (avoids denominator); Flip-the-Fraction trick; Odds form shortcut; Sum-to-1 posterior verification; Don't-swap-A-and-B trick; PLACE mnemonic; CLAP mnemonic; 5 solved examples (3-machine factory bolt problem, medical test with base rate fallacy, 2-machine problem, conditional from inclusion-exclusion, bag problem with fractions); 4 exam traps.
  - Updated `_Index.md`: Section 7 Probability opened (07.1 ✅, 2 topics remaining).

### Session 49 — 2026-07-27
- **AI Used:** Claude (Anthropic)
- **Done:**
  - Created `06.3 - Cauchy Riemann Equations.md` — dedicated standalone GATE reference for C-R equations.
  - Covers: Full derivation from first principles via two-direction limit (Path 1: real axis $\Delta z=\Delta x$; Path 2: imaginary axis $\Delta z=i\Delta y$) → setting equal → $u_x=v_y$ and $u_y=-v_x$; 4 equivalent forms of $f'(z)$ (choice of $u_x+iv_x$, $v_y-iu_y$, etc.); C-R in polar form $u_r=v_\theta/r$, $v_r=-u_\theta/r$ with $r$ factor emphasized; Necessary vs Sufficient conditions table; Comprehensive pattern table (Category A: always analytic, Category B: never analytic, Category C: only at isolated points); 4 C-R consequences (harmonic functions, orthogonality of level curves → streamlines ⊥ equipotentials, conformal mapping, real-imaginary part determination); Diagonal-Antidiagonal 2×2 grid trick; SAME-OPPOSITE rule; CURE mnemonic (4 steps); UV-Cross-Match mnemonic; 5 solved examples ($z^2+2iz$ full check with derivative, $|z|^2$ MCQ trap with answer (c), finding $b$ for $x^2-by^2+2ixy$ to be analytic, polar C-R for $\sqrt{z}$, harmonic conjugate of $2x(1-y)$ via Milne-Thomson); 4 exam traps (necessary vs sufficient, sign error on $u_y=-v_x$, forgotten $1/r$ in polar, isolated point ≠ analytic).
  - Updated `06 - Complex Variables.md` and `_Index.md` (06.3 added and marked ✅).

### Session 48 — 2026-07-27
- **AI Used:** Claude (Anthropic)
- **Done:**
  - Created `06.2 - Analytic Functions.md` — dedicated deep-dive on analytic functions (companion to 06.1).
  - Covers: Limit and continuity in $\mathbb{C}$ (direction-independence requirement); Formal definition of analyticity vs. differentiability-at-a-point; C-R equations derived from two-direction limit (real and imaginary axis approaches); C-R in polar form $u_r = v_\theta/r$, $v_r = -u_\theta/r$; Pattern recognition table (always analytic: polynomials, $e^z$, trig; never analytic: $\bar{z}$, $|z|$, Re(z), Im(z)); $|z|^2$ differentiable only at $z=0$ but not analytic anywhere; Harmonic connection via Laplace equation; Systematic harmonic conjugate procedure (Step 1-5 + substitution shortcut); Milne-Thomson method (fastest path: $f(z) = \int[u_x(z,0) - iu_y(z,0)]dz + C$); 5 key properties (infinite differentiability, power series with $R$ = dist to nearest singularity, isolated zeros, Liouville theorem, maximum modulus principle); Identity theorem; Conformal mapping (analytic + $f'(z_0)\ne 0$); Möbius transformation $w=(az+b)/(cz+d)$; Joukowski transform $w=z+a^2/z$ for airfoil shapes; CHAIN mnemonic; REAL mnemonic; 4 speed tricks; 5 solved examples (full C-R analysis, Milne-Thomson for $e^x\cos y$, max modulus principle, radius of convergence, finding $f(z)$ with initial condition); 4 exam traps.
  - Updated `06 - Complex Variables.md` section overview (06.2 added).
  - Updated `_Index.md` (06.2 added under Complex Variables section).

### Session 47 — 2026-07-27
- **AI Used:** Claude (Anthropic)
- **Done:**
  - Created `06.1 - Complex Variables.md` — full zero-to-AIR1 deep-dive (Special Topic).
  - Created `06 - Complex Variables.md` — Section Overview.
  - Covers: Complex number definition; Argand plane; Three forms (Rectangular, Polar $re^{i\theta}$, Euler $e^{i\theta}=\cos\theta+i\sin\theta$) with special values; Euler's identity $e^{i\pi}+1=0$; Algebraic operations (polar form for mult/div, conjugate for division); De Moivre's theorem $(re^{i\theta})^n=r^ne^{in\theta}$ and $n$-th roots equally spaced on circle; Cube roots of unity ($1+\omega+\omega^2=0$); Complex functions $f(z)=u+iv$; Cauchy-Riemann equations $u_x=v_y$, $u_y=-v_x$ (necessary & sufficient for analyticity); C-R in polar form; Harmonic functions (both $u,v$ satisfy Laplace); Harmonic conjugate construction procedure; Elementary functions (complex exponential, multi-valued log, trig, hyperbolic); Cauchy's theorem $\oint f\,dz=0$; Cauchy integral formula $\oint \frac{f(z)}{z-z_0}\,dz = 2\pi i f(z_0)$ and generalized derivative formula; Taylor vs Laurent series; Singularity classification (removable, simple pole, order-$m$ pole, essential); Three residue formulas (general, simple pole, quotient form); Residue theorem $\oint = 2\pi i\sum\text{Res}$; CAMP mnemonic; RIPE-SE mnemonic; 4 speed tricks ($i$-power cycle, polar mult/div, C-R cross pattern, circle check); 5 solved examples ($z^2$ analyticity, $(1+i)^{10}$ De Moivre, Cauchy integral $e^z/z(z-1)$ via partial fractions, order-2 pole residue, harmonic conjugate of $x^2-y^2-2y$); 4 exam traps.
  - Updated `_Index.md`: Section 6 Complex Variables marked ✅.

### Session 46 — 2026-07-27
- **AI Used:** Claude (Anthropic)
- **Done:**
  - Created `05.1 - Fourier Series.md` — full zero-to-AIR1 deep-dive on Fourier Series (Special Topic).
  - Created `05 - Fourier Series.md` — Section Overview.
  - Covers: Periodic functions and period; Dirichlet conditions (4 criteria); Euler-Fourier formulas on $[-\pi,\pi]$ and $[-L,L]$; Orthogonality of trig functions (WHY the formulas work); Even/odd symmetry test and consequence (even→cosines only, $b_n=0$; odd→sines only, $a_0=a_n=0$); Even/odd simplified coefficient formulas (factor 2 → integrate over $[0,L]$); Half-range cosine series (even extension, Dirichlet BCs) and sine series (odd extension, Neumann BCs) with PDE connection; Parseval's theorem and Basel problem derivation $\sum 1/n^2 = \pi^2/6$; Complex exponential form $\sum c_n e^{inx}$ with $c_n$ formulas; 4 standard results (series for $x$, $x^2$, $|x|$, square wave); ACE-COB mnemonic; SOS sign-pattern mnemonic; 4 speed tricks (even/odd first, $a_0/2$ is mean value, Gibbs phenomenon 9%, coefficient decay $1/n$ vs $1/n^2$ vs $1/n^3$); 4 fully solved examples (piecewise $f(x)=x$ for $x>0$, half-range cosine for $\pi-x$, Basel sum via Parseval, $a_2$ for $x^2$); 4 exam traps.
  - Updated `_Index.md`: Section 5 Fourier Series now marked ✅ complete.

### Session 45 — 2026-07-27
- **AI Used:** Claude (Anthropic)
- **Done:**
  - Created `04.7 - Linear Interpolation.md` — final topic of Numerical Methods section.
  - Covers: Interpolation vs. Regression (key distinction); Two-point linear $y^* = y_0 + \frac{x^*-x_0}{x_1-x_0}(y_1-y_0)$ with Midpoint-is-average trick; Error bound $|E| \le \frac{h^2}{8}\max|f''|$ ($O(h^2)$); Newton's Forward Difference Interpolation (equal spacing, near beginning) — difference table, substitution $s=(x-x_0)/h$, formula $y=y_0+s\Delta y_0+\frac{s(s-1)}{2!}\Delta^2 y_0+\cdots$; Newton's Backward Difference Interpolation (near end, $s=(x-x_n)/h$, $s\le 0$); Lagrange Interpolation (unequal spacing) — basis $L_i(x)=\prod_{j\ne i}\frac{x-x_j}{x_i-x_j}$, Cardinal property, Partition of Unity $\sum L_i=1$ (verification trick); Newton's Divided Differences — DD table construction, general formula; FEB-BEN-LAG mnemonic; SOME-SQUARE-CUBE mnemonic; 4 speed tricks; 4 solved examples (2-point speed of sound, Newton Forward cubic $x^3$, Lagrange 3-point, Newton DD quadratic); 4 exam traps (backward sign, Lagrange denominator, wrong formula for position, partition of unity check).
  - Marked `04 - Numerical Methods` section COMPLETE (04.1–04.7) in `_Index.md`.
  - Added new "### 5. Interpolation" sub-section in `04 - Numerical Methods.md`.

### Session 44 — 2026-07-27
- **AI Used:** Claude (Anthropic)
- **Done:**
  - Created `04.6b - Least Squares Method.md` — general method of least squares (extending beyond linear regression).
  - Covers: LSQ criterion $S = \sum(y_i - \hat{y}_i)^2$; Why squared (not abs): differentiable, penalizes outliers, Gauss-Markov; Polynomial regression — quadratic $a_0 + a_1 x + a_2 x^2$ with 3×3 normal equations via 7-column table; General Matrix Formulation: Design matrix $\mathbf{A}$ (size $n \times (m+1)$), Gram matrix $\mathbf{A}^T\mathbf{A}$, master formula $\mathbf{A}^T\mathbf{A}\mathbf{a} = \mathbf{A}^T\mathbf{y}$, solution $\mathbf{a} = (\mathbf{A}^T\mathbf{A})^{-1}\mathbf{A}^T\mathbf{y}$; Quality metrics: SSR, Standard Error $S_E = \sqrt{\text{SSR}/(n-m-1)}$, $R^2 = 1 - \text{SSR/SST}$; Linearity-in-coefficients test (when to linearize first); PANAM mnemonic; 4 speed tricks; 3 examples (quadratic parabola fit on 4 points, Gram matrix MCQ, jet engine SFC linear fit with physical interpretation).
  - Linked into `_Index.md` (04.6b marked ✅) and `04 - Numerical Methods.md` (Regression section complete).

### Session 43 — 2026-07-27
- **AI Used:** Claude (Anthropic)
- **Done:**
  - Integrated dedicated deep-dive zero-to-AIR1 topic note for `Numerical Methods: Linear Regression & Least Squares` (`02 - SUBJECTS/Engineering Mathematics/04.6 - Linear Regression.md`).
  - Covers: Least squares criterion $\min S = \sum(y_i - a_0 - a_1 x_i)^2$; Normal equations derivation via $\partial S/\partial a_0 = 0$ and $\partial S/\partial a_1 = 0$ giving 2×2 linear system; Explicit formulas: Slope $a_1 = \frac{n\sum x_i y_i - \sum x_i \sum y_i}{n\sum x_i^2 - (\sum x_i)^2}$, Intercept $a_0 = \bar{y} - a_1\bar{x}$; 5-column summation table method (SNOV mnemonic); Pearson Correlation Coefficient $r$ (strong $|r|>0.9$, no correlation $r=0$); Non-linear linearization — Power law $y=ax^b \to \ln y = \ln a + b\ln x$, Exponential $y=ae^{bx} \to \ln y = \ln a + bx$, Reciprocal; Aerospace drag polar $C_D = C_{D0} + kC_L^2$ linearized via $X=C_L^2$; 4 AIR-1 speed tricks (line always passes through $(\bar{x},\bar{y})$, numerator of $a_1$ = numerator of $r$, mean-centered shortcut, sign of $r$ = sign of $a_1$); 3 fully solved GATE examples (standard regression on 5-point data, prediction, power law linearization); 3 exam traps.
  - Cross-linked into `04 - Numerical Methods.md` (Regression section updated) and `_Index.md` (04.6 marked ✅).

### Session 42 — 2026-07-27
- **AI Used:** Claude (Anthropic)
- **Done:**
  - Note `04.5 - Simpsons Rules.md` was already created in Session 41 (same session, re-request). Confirmed file exists and is complete.
  - Updated `_Index.md` to formally link 04.5 Simpson's Rules (04.5 marked ✅).
  - Covers: Simpson's 1/3 Rule composite formula $\frac{h}{3}[(y_0+y_n)+4\sum y_{odd}+2\sum y_{even}]$ (requires $n$ EVEN); Simpson's 3/8 Rule composite formula $\frac{3h}{8}[(y_0+y_n)+3\sum y_{non-mult3}+2\sum y_{mult3}]$ (requires $n$ multiple of 3); Stencil weights [1,4,2,4,1] and [1,3,3,2,3,3,1]; Degree of Precision = 3 for both (exact for cubics, including surprise gain for 1/3 rule); $O(h^4)$ error analysis; Master comparison table (Trap vs 1/3 vs 3/8); O-4-E-2 mnemonic; 4 AIR-1 speed tricks (polynomial exactness test, sub-interval applicability rule, fast stencil labeling, multiplier memory); 3 solved examples.

### Session 41 — 2026-07-27
- **AI Used:** Gemini (Google DeepMind)
- **Done:**
  - Integrated dedicated deep-dive zero-to-AIR1 topic note for `Numerical Methods: Trapezoidal Rule` (`02 - SUBJECTS/Engineering Mathematics/04.4 - Trapezoidal Rule.md`).
  - Covers: Geometric concept & single-segment formula $\frac{h}{2}(y_0+y_1)$; Composite Trapezoidal Rule Master Formula $\frac{h}{2}[(y_0+y_n) + 2\sum_{i=1}^{n-1} y_i]$; Stencil weight pattern $[1, 2, 2, \dots, 2, 1]$; Degree of precision $= 1$ (exact for linear polynomials); Truncation error analysis $E_n = -\frac{(b-a)h^2}{12}f''(\xi) = O(h^2)$; Minimum sub-intervals formula $n_{min} \ge \sqrt{\frac{(b-a)^3 M_2}{12\epsilon}}$; Convexity over/under-estimation test ($f''>0$ concave up $\implies$ Overestimate, $f''<0$ concave down $\implies$ Underestimate); HALF mnemonic; 4 AIR-1 speed tricks (1-2-2-2-1 fast stencil, $N=n+1$ ordinates vs sub-intervals rule, 3-second over/under-estimation test, 10-second min sub-intervals formula); 4 fully solved GATE examples ($\int_0^1 \frac{dx}{1+x}$ with $n=4$, minimum sub-intervals calculation, aerospace tabular flight-test lift integration, over/under estimation MCQ); 4 exam traps.
  - Cross-linked into `04 - Numerical Methods.md` (Integration section updated) and `_Index.md` (04.4 marked ✅).

### Session 40 — 2026-07-27
- **AI Used:** Gemini (Google DeepMind)
- **Done:**
  - Integrated dedicated deep-dive zero-to-AIR1 topic note for `Numerical Methods: Basic Numerical Differentiation` (`02 - SUBJECTS/Engineering Mathematics/04.3 - Numerical Differentiation.md`).
  - Covers: Taylor series derivation of finite difference schemes; First derivative formulas — Forward Difference $f'(x_0) \approx \frac{y_1-y_0}{h} + O(h)$, Backward Difference $f'(x_0) \approx \frac{y_0-y_{-1}}{h} + O(h)$, Central Difference $f'(x_0) \approx \frac{y_1-y_{-1}}{2h} + O(h^2)$ (2nd-order accuracy via odd-term cancellation); 3-point high-accuracy forward/backward formulas ($O(h^2)$); Second derivative central difference $f''(x_0) \approx \frac{y_1-2y_0+y_{-1}}{h^2} + O(h^2)$ with $[1,-2,1]/h^2$ stencil; Numerical differentiation from finite difference tables (Newton's Forward $\frac{1}{h}(\Delta y_0 - \frac{\Delta^2 y_0}{2} + \frac{\Delta^3 y_0}{3} \dots)$ vs Newton's Backward $\frac{1}{h}(\nabla y_n + \frac{\nabla^2 y_n}{2} + \frac{\nabla^3 y_n}{3} \dots)$); Error Analysis & Optimal Step Size $h_{opt}$ (Truncation vs Round-off balance); FBC mnemonic; 4 AIR-1 speed tricks (Central difference supremacy, 1-2-1 stencil memory, Symmetry error cancellation rule, Forward vs Backward sign pattern); 3 fully solved GATE examples (scheme error comparison for $x^3$, 2nd derivative from table, tabular data forward difference); 3 exam traps.
  - Cross-linked into `04 - Numerical Methods.md` (Differentiation section updated) and `_Index.md` (04.3 marked ✅).

### Session 39 — 2026-07-27
- **AI Used:** Gemini (Google DeepMind)
- **Done:**
  - Integrated dedicated deep-dive zero-to-AIR1 topic note for `Numerical Methods: Newton-Raphson Method` (`02 - SUBJECTS/Engineering Mathematics/04.2 - Newton Raphson Method.md`).
  - Covers: Tangent line geometric derivation & Master Formula $x_{n+1} = x_n - \frac{f(x_n)}{f'(x_n)}$; Taylor series derivation; Order of Convergence Analysis ($p=2$ Quadratic Convergence, error relation $e_{n+1} \approx \frac{f''(\alpha)}{2f'(\alpha)} e_n^2$, precision doubling); Sufficient condition for convergence $\left|\frac{f(x)f''(x)}{[f'(x)]^2}\right| < 1$; 4 Failure Modes ($f'=0$ stationary point, $f''=0$ inflection point, oscillations, multiple roots order drop to linear $p=1$); Modified Newton-Raphson for multiple roots ($x_{n+1} = x_n - m \frac{f(x_n)}{f'(x_n)}$); 4 Special Speed Formulas: Square root $\sqrt{N} \implies x_{n+1} = \frac{1}{2}(x_n + N/x_n)$, Reciprocal $1/N \implies x_n(2 - Nx_n)$ (division-free!), Cube root $\sqrt[3]{N} \implies \frac{1}{3}(2x_n + N/x_n^2)$, Inverse square root $1/\sqrt{N} \implies \frac{x_n}{2}(3 - N x_n^2)$; TAN mnemonic; 4 AIR-1 speed tricks; 4 fully solved GATE examples (standard 1-step iteration, reciprocal calculation, error constant $C$, convergence order MCQ); 4 exam traps.
  - Cross-linked into `04 - Numerical Methods.md` (Root finding section updated) and `_Index.md` (04.2 marked ✅).

### Session 38 — 2026-07-27
- **AI Used:** Gemini (Google DeepMind)
- **Done:**
  - Integrated dedicated deep-dive zero-to-AIR1 topic note for `Numerical Methods: Bisection Method` (`02 - SUBJECTS/Engineering Mathematics/04.1 - Bisection Method.md`).
  - Covers: Intermediate Value Theorem (IVT) foundation ($f(a)f(b)<0$ guarantee); Step-by-step Bisection algorithm & interval halving sequence ($L_n = (b_0-a_0)/2^n$); Absolute Error Bound ($|c_n - \alpha| \le \frac{b_0-a_0}{2^n}$); Minimum iterations formula $n_{min} = \lceil \frac{\ln(b_0-a_0)-\ln\epsilon}{\ln 2} \rceil$; Convergence Order $p=1$ (Linear, rate factor $C=0.5$); Master Comparison Table (Bisection vs Regula-Falsi vs Secant vs Newton-Raphson); HALVE mnemonic; 4 AIR-1 speed tricks (10-second min iterations formula with $\log_{10} 2 \approx 0.30103$, Decimal places accuracy formula $\epsilon = 0.5\times 10^{-k}$, Systematic 5-column iteration table method, Initial bracket selection strategy); 4 fully solved GATE examples (3-iteration root calculation, minimum iteration bound, transcendental equation root, convergence order MCQ); 4 exam traps.
  - Created `04 - Numerical Methods.md` section overview linking all sub-notes.
  - Cross-linked into `_Index.md` (Numerical Methods section updated, 04.1 marked ✅).
  - **MILESTONE: First topic of "Numerical Methods" section complete.**

### Session 37 — 2026-07-27
- **AI Used:** Gemini (Google DeepMind)
- **Done:**
  - Integrated dedicated deep-dive zero-to-AIR1 topic note for `Differential Equations: Heat Equation` (`02 - SUBJECTS/Engineering Mathematics/03.6 - Heat Equation.md`).
  - Covers: 1D Heat Equation $u_t = \alpha^2 u_{xx}$ (Parabolic, $\Delta=0$), thermal diffusivity $\alpha^2 = \frac{k}{\rho c_p}$, 1 IC + 2 BCs needed; Case 1 (Homogeneous Dirichlet BCs $u(0,t)=0, u(L,t)=0$) — 5-step Separation of Variables derivation, Fourier sine series coefficients $c_n$, exponential decay factor $e^{-(n\pi\alpha/L)^2 t}$; Case 2 (Insulated Ends Neumann BCs $u_x(0,t)=0, u_x(L,t)=0$) — cosine series solution; Case 3 (Non-Homogeneous End Temperatures $u(0,t)=T_1, u(L,t)=T_2$) — Steady-State ($u_{ss}(x) = T_1 + \frac{T_2-T_1}{L}x$) + Transient ($u_{tr}(x,t)$) breakdown; EST mnemonic; 4 AIR-1 speed tricks (Insulated rod average temp shortcut $u(x,\infty) = \frac{1}{L}\int_0^L f(x)dx$, Linear steady-state profile rule, Direct coefficient matching without integrals, Decay factor memory rule); 3 fully solved GATE examples (homogeneous sine input, non-homogeneous BC steady-state, insulated rod final temp); 3 exam traps.
  - Cross-linked into `03 - ODEs.md` (PDE section updated) and `_Index.md` (03.6 marked ✅ — **All 3 PDE Separation of Variables Topics Complete!**).
  - **MILESTONE: Entire Differential Equations (ODEs + PDEs) section is now COMPLETE.**

### Session 36 — 2026-07-27
- **AI Used:** Gemini (Google DeepMind)
- **Done:**
  - Integrated dedicated deep-dive zero-to-AIR1 topic note for `Differential Equations: Laplace Equation (PDE)` (`02 - SUBJECTS/Engineering Mathematics/03.5 - Laplace Equation PDE.md`).
  - Covers: 2D Laplace Equation $\nabla^2 u = u_{xx} + u_{yy} = 0$ (Elliptic, $\Delta=-4<0$), 3D Cartesian/Polar forms, Harmonic functions; Aerospace applications (incompressible potential flow $\nabla^2\phi=0$, steady heat conduction, stream function $\nabla^2\psi=0$); 3 BVP types (Dirichlet, Neumann, Robin); Separation of Variables in Cartesian coordinates for rectangular plates — 5-step derivation (SHIN mnemonic), Fourier sine series coefficients $E_n$; Polar coordinates $(r, \theta)$ solution — Master Interior Disk formula $u(r,\theta) = \frac{a_0}{2} + \sum (r/R)^n [a_n\cos n\theta + b_n\sin n\theta]$ vs Exterior Disk formula $(R/r)^n$; Fundamental Properties — Mean Value Property ($u(0,0) = \frac{1}{2\pi}\int_0^{2\pi} f(\theta)d\theta$), Maximum/Minimum Principle (max/min occurs ONLY on boundary $\partial D$), Uniqueness theorem; 4 AIR-1 speed tricks (Disk center average rule, Direct coefficient matching in polar, Max principle boundary evaluation, Constant boundary value rule); 3 fully solved GATE examples (rectangular plate, disk center temp, max principle on disk); 3 exam traps.
  - Cross-linked into `03 - ODEs.md` (PDE section updated) and `_Index.md` (03.5 marked ✅).

### Session 35 — 2026-07-27
- **AI Used:** Claude (Anthropic)
- **Done:**
  - Integrated dedicated deep-dive zero-to-AIR1 topic note for `Differential Equations: Wave Equation` (`02 - SUBJECTS/Engineering Mathematics/03.4 - Wave Equation.md`).
  - Covers: 1D Wave equation $u_{tt}=c^2u_{xx}$ (Hyperbolic, $\Delta=4c^2>0$), 2 ICs needed ($u(x,0)=f(x)$, $u_t(x,0)=g(x)$), 3 standard BCs (Fixed-Fixed, Free-Free, Fixed-Free); Full Separation of Variables — 6-step algorithm (ST-OCT mnemonic): assume $u=X(x)T(t)$, split → spatial+temporal ODEs, apply BCs → eigenvalues $\mu_n=n\pi/L$, eigenfunctions $\sin(n\pi x/L)$, superposition $u=\sum[a_n\cos\omega_n t+b_n\sin\omega_n t]\sin(n\pi x/L)$, Fourier coefficients from ICs; Special case $g(x)=0$ → all $b_n=0$; d'Alembert's formula for infinite domain ($u=[f(x+ct)+f(x-ct)]/2+\frac{1}{2c}\int g\,ds$); Natural frequencies $f_n=nc/2L$ (Fixed-Fixed) vs $(2n-1)c/4L$ (Fixed-Free, odd harmonics only); Normal modes / standing waves, resonance condition; 3 BC case eigenfunction table; 4 AIR-1 speed tricks (Fixed=Sine/Free=Cosine, d'Alembert for MCQs, Odd/Even symmetry, Resonance recognition); Fully solved GATE example (4-mark); 4 exam traps.
  - Cross-linked into `03 - ODEs.md` (PDE sub-list updated) and `_Index.md` (03.4 marked ✅).

### Session 34 — 2026-07-27
- **AI Used:** Claude (Anthropic)
- **Done:**
  - Integrated dedicated deep-dive zero-to-AIR1 topic note for `Differential Equations: Classification of PDEs` (`02 - SUBJECTS/Engineering Mathematics/03.3 - Classification of PDEs.md`).
  - Covers: General 2nd order linear PDE $Au_{xx}+Bu_{xy}+Cu_{yy}+Du_x+Eu_y+Fu=G$, Discriminant $\Delta=B^2-4AC$ master formula; Three Classes — Elliptic ($\Delta<0$: Laplace $\nabla^2u=0$, Poisson, steady-state BVP, incompressible potential flow, steady heat), Parabolic ($\Delta=0$: Heat equation $u_t=\alpha^2u_{xx}$, IBVP with 1 IC, infinite signal speed, Prandtl boundary layer), Hyperbolic ($\Delta>0$: Wave equation $u_{tt}=c^2u_{xx}$, IBVP with 2 ICs, finite signal speed $c$, shock waves, acoustics); Variable-Coefficient PDEs — classification varies by point (Tricomi equation for transonic flow); Order & Linearity analysis; 3-second classification trick; Standard equations memory table (Laplace/Wave/Heat by inspection); BCs needed for each type; EPH-Every Physics Has mnemonic; sign-of-$\Delta$ conic analogy mnemonic; 4 fully solved GATE examples (direct, mixed-coefficient, wave MCQ, variable-coefficient region); Master comparison table; 4 exam traps.
  - Cross-linked into `03 - ODEs.md` (Section 4 updated with all formulas) and `_Index.md` (03.3 marked ✅).

### Session 33 — 2026-07-27
- **AI Used:** Claude (Anthropic)
- **Done:**
  - Integrated dedicated deep-dive zero-to-AIR1 topic note for `Differential Equations: Higher Order Linear ODEs` (`02 - SUBJECTS/Engineering Mathematics/03.2 - Higher Order Linear ODEs.md`).
  - Covers: Standard form $a_ny^{(n)}+\cdots+a_0y=f(x)$, D-operator notation $F(D)y=f(x)$, Complete Solution $y=y_c+y_p$; CF via Characteristic Equation — Master CF Table (Real distinct $C_1e^{m_1x}+C_2e^{m_2x}$, Repeated $(C_1+C_2x)e^{mx}$, Complex $e^{\alpha x}(C_1\cos\beta x+C_2\sin\beta x)$, Pure imaginary $C_1\cos\beta x+C_2\sin\beta x$), DARCP mnemonic; PI via 6 D-Operator Rules (Rule 1: $e^{ax}/F(a)$, Rule 2: $\sin ax/F(-a^2)$ with resonance formula, Rule 3: Binomial expansion for $x^n$, Rule 4: Exponential Shift $e^{ax}[F(D+a)]^{-1}V$, Rule 5: $e^{ax}\sin bx$, Rule 6: $xV$ differentiation rule); UC Method + Modification Rule; VOP Method (Wronskian formula); 5-step Master Algorithm; 4 fully solved GATE examples (distinct roots+exp, complex+resonance, repeated+exp-shift, UC for $x\cos x$); 4 AIR-1 speed tricks; 4 exam traps.
  - Cross-linked into `03 - ODEs.md` (Section 2 updated with all formulas) and `_Index.md` (03.2 marked ✅).

### Session 32 — 2026-07-27
- **AI Used:** Claude (Anthropic)
- **Done:**
  - Integrated dedicated deep-dive zero-to-AIR1 topic note for `Differential Equations: First Order Linear ODEs` (`02 - SUBJECTS/Engineering Mathematics/03.1 - First Order Linear ODEs.md`).
  - Covers: Master Classification Tree for all 5 First-Order ODE Types; Type 1 Separable (half-life $t_{1/2}=\ln2/k$, time constant $\tau=1/k$); Type 2 Homogeneous (substitution $v=y/x$, reduces to separable, degree-check recognition shortcut); Type 3 Linear ($\mu=e^{\int P\,dx}$, IMAI mnemonic, standard IF patterns table: $1/x\to x$, $\tan x\to\sec x$, $\cot x\to\sin x$, etc.); Type 4 Bernoulli (substitution $v=y^{1-n}$, reduces to linear); Type 5 Exact ($M_y=N_x$ test, "My=Nx → My ex!" mnemonic, $F(x,y)=C$ solution); Integrating Factor for non-exact ($\mu(x)=e^{\int(M_y-N_x)/N\,dx}$); 5-step master algorithm; 4 fully solved GATE-standard examples; Quick-Fire formula sheet; 4 exam traps.
  - Rebuilt `03 - ODEs.md` as proper section overview linking to all ODE sub-notes.
  - Cross-linked into `_Index.md` (Differential Equations section updated, 03.1 marked ✅).
  - **MILESTONE: First major topic of new section "Differential Equations" begun.**

### Session 31 — 2026-07-27
- **AI Used:** Claude (Anthropic)
- **Done:**
  - Integrated dedicated deep-dive zero-to-AIR1 topic note for `Calculus: Green's Theorem` (`02 - SUBJECTS/Engineering Mathematics/02.2.10 - Greens Theorem.md`).
  - Covers: Two Forms — Circulation-Curl ($\oint_C P\,dx+Q\,dy = \iint_D(Q_x-P_y)\,dA$) and Flux-Divergence ($\oint_C\vec{F}\cdot\hat{n}\,ds = \iint_D\nabla\cdot\vec{F}\,dA$), Area Formulas ($\text{Area}=\frac{1}{2}\oint_C(x\,dy-y\,dx)=\oint_C x\,dy=-\oint_C y\,dx$), Standard areas table (Ellipse $\pi ab$, Circle $\pi R^2$, Triangle shoelace), Path Independence & Exact Differentials ($Q_x=P_y\implies\oint=0$), Multiply-Connected Regions with holes (singularity punch-out technique), Relation to Stokes (Green=Stokes with $\hat{n}=\hat{k}$ in $xy$-plane), 4 AIR-1 speed tricks (Exact Diff=0, Constant Curl×Area, Ellipse $\pi ab$, Convert hard line to easy double), "QP Rule" mnemonic ($Q_x-P_y$ always), 4 fully solved GATE examples, 3 exam traps (sign order, orientation, singularity).
  - Cross-linked into `02.2 - Several Variable Calculus.md` (Part XII), `_Index.md` (Integral Theorems — All Three Complete! ✅).
  - **MILESTONE: Entire Multivariable Calculus section of Engineering Mathematics is now COMPLETE.**

### Session 30 — 2026-07-27
- **AI Used:** Claude (Anthropic)
- **Done:**
  - Integrated dedicated deep-dive zero-to-AIR1 topic note for `Calculus: Gauss's Divergence Theorem` (`02 - SUBJECTS/Engineering Mathematics/02.2.9 - Gauss Divergence Theorem.md`).
  - Covers: Formal Statement ($\oiint_S \vec{F}\cdot\hat{n}\,dS = \iiint_V \nabla\cdot\vec{F}\,dV$), Physical interpretation (outward flux = total source strength), Aerospace applications (Continuity Equation, Gauss's Law, Fourier Heat), Solenoidal Zero-Flux corollary, Volume from Surface Integral ($V = \frac{1}{3}\oiint_S \vec{r}\cdot\hat{n}\,dS$), Position Vector Flux ($3V$, sphere $4\pi R^3$), Constant Vector Zero-Flux, Green's First & Second Identities, Open Surface Split-Cap Trick, 4-step GATE Algorithm, 4 AIR-1 speed tricks (Constant Div×Vol, Position Vector Sphere shortcut, Open Surface Cap subtraction, Solenoidal=0), DIVS mnemonic, 4 fully solved GATE examples, 3 exam traps, Big-3 Theorem comparison table.
  - Cross-linked into `02.2 - Several Variable Calculus.md` (Part XI), `_Index.md` (Integral Theorems section).

### Session 29 — 2026-07-27
- **AI Used:** Claude (Anthropic)
- **Done:**
  - Integrated dedicated deep-dive zero-to-AIR1 topic note for `Calculus: Stokes' Theorem` (`02 - SUBJECTS/Engineering Mathematics/02.2.8 - Stokes Theorem.md`).
  - Covers: Formal Statement ($\oint_C \vec{F}\cdot d\vec{r} = \iint_S (\nabla\times\vec{F})\cdot\hat{n}\,dS$), Right-Hand Rule orientation, Aerodynamic Circulation ($\Gamma = \iint_S \vec{\omega}\cdot\hat{n}\,dS$, Kutta-Joukowski Lift), Green's Theorem as 2D special case, Irrotational field corollary ($\oint_C=0$), Surface Independence Property, Flat Disk Replacement Trick for complex surfaces, Closed Surface Zero-Flux rule ($\nabla\cdot(\nabla\times\vec{F})=0$), 4-step GATE algorithm, 4 AIR-1 speed tricks (Flat Disk Replacement, Constant Curl$\times$Area shortcut, Closed Surface=0, Irrotational=0), 3 fully solved GATE examples, 3 exam traps.
  - Cross-linked into `02.2 - Several Variable Calculus.md` (Part X), `_Index.md` (Integral Theorems section).

### Session 28 — 2026-07-27
- **AI Used:** Gemini (Google DeepMind)
- **Done:**
  - Integrated dedicated deep-dive zero-to-AIR1 topic note for `Calculus: Volume Integrals` (`02 - SUBJECTS/Engineering Mathematics/02.2.7 - Volume Integrals.md`).
  - Covers: Scalar Volume Integrals ($\iiint_V f\,dV$, solid mass $M = \iiint_V \rho\,dV$, volume $V = \iiint_V 1\,dV$, Center of Mass $(\bar{x},\bar{y},\bar{z})$, Moments of Inertia $I_{zz}$), 3 Master Coordinate Systems & $dV$ elements: Cartesian ($dV = dx\,dy\,dz$), Cylindrical ($x=r\cos\theta, y=r\sin\theta, z=z \implies dV = r\,dr\,d\theta\,dz$, Jacobian $J=r$), Spherical Polar ($\rho, \phi, \theta \implies dV = \rho^2\sin\phi\,d\rho\,d\phi\,d\theta$, Jacobian $J=\rho^2\sin\phi$), Dirichlet's & Liouville's Formula ($\iiint_{x+y+z\le 1} x^{l-1}y^{m-1}z^{n-1}dV = \frac{\Gamma(l)\Gamma(m)\Gamma(n)}{\Gamma(l+m+n+1)}$), Extended Dirichlet Formula for scaled/power bounds, Standard Volumes Table (sphere $\frac{4}{3}\pi R^3$, ellipsoid $\frac{4}{3}\pi abc$, cylinder $\pi R^2 h$, cone $\frac{1}{3}\pi R^2 h$, tetrahedron $\frac{abc}{6}$, paraboloid cap $\frac{1}{2}\pi h^2$), 4 AIR-1 speed tricks (Dirichlet 10-sec evaluation, Spherical integrand 3-integral factorization, Tetrahedron $\frac{abc}{6}$ rule, Constant density symmetry center of mass rule), 4 solved GATE examples, 3 exam traps.
  - Cross-linked into `02.2 - Several Variable Calculus.md`, `02.2.6 - Surface Integrals.md`, `_Index.md`.

### Session 27 — 2026-07-27
- **AI Used:** Gemini (Google DeepMind)
- **Done:**
  - Integrated dedicated deep-dive zero-to-AIR1 topic note for `Calculus: Surface Integrals` (`02 - SUBJECTS/Engineering Mathematics/02.2.6 - Surface Integrals.md`).
  - Covers: Scalar Surface Integrals ($\iint_S f\,dS$, surface area, shell mass) vs Vector Surface Integrals / Flux ($\text{Flux} = \iint_S \vec{F} \cdot \hat{n}\,dS$, discharge, Fourier heat loss, electric/magnetic flux), 3 Evaluation Methods: Explicit surface $z = g(x,y)$ projection formula ($\iint_{R_{xy}} (-F_1 g_x - F_2 g_y + F_3) dx\,dy$), Implicit surface $G(x,y,z)=0$ projection formula ($dS = \frac{\|\nabla G\|}{\|G_z\|}dx\,dy$), Parametric surface $\vec{r}(u,v)$ ($dS = \|\vec{r}_u \times \vec{r}_v\| du\,dv$), Standard Geometry Surface Area & $dS$ Table (plane, sphere $4\pi R^2$, hemisphere $2\pi R^2$, cylinder lateral $2\pi R h$, cone $\sqrt{2}\pi R^2$), Gauss's Divergence Theorem connection for closed surfaces ($\iint_S \vec{F} \cdot \hat{n}\,dS = \iiint_V (\nabla \cdot \vec{F}) dV$), 4 AIR-1 speed tricks (explicit projection shortcut, position vector sphere flux $4\pi R^3$, constant field closed flux zero, flat surface normal vector recognition), 4 solved GATE examples, 3 exam traps.
  - Cross-linked into `02.2 - Several Variable Calculus.md`, `02.2.5 - Line Integrals.md`, `_Index.md`.

### Session 26 — 2026-07-27
- **AI Used:** Gemini (Google DeepMind)
- **Done:**
  - Integrated dedicated deep-dive zero-to-AIR1 topic note for `Calculus: Line Integrals` (`02 - SUBJECTS/Engineering Mathematics/02.2.5 - Line Integrals.md`).
  - Covers: Scalar Line Integrals ($\int_C f\,ds$ with arc length element $ds = \|\vec{r}'(t)\|dt$, mass of wire, total arc length) vs Vector Line Integrals ($\int_C \vec{F} \cdot d\vec{r}$, Work Done, Aerodynamic Circulation $\Gamma = \oint_C \vec{V} \cdot d\vec{r}$ & Kutta-Joukowski Lift Theorem $L' = \rho_\infty V_\infty \Gamma$), Standard Parametrizations Table (straight line $(1-t)A + tB$, circle, ellipse, parabola, helix), Fundamental Theorem of Line Integrals & 3 Equivalent Path Independence Conditions ($\vec{F}=\nabla\phi \iff \nabla\times\vec{F}=\vec{0} \iff \oint\vec{F}\cdot d\vec{r}=0$), Green's Theorem in the Plane ($\oint_C (Pdx+Qdy) = \iint_D (Q_x - P_y)dA$), Green's Area Formula ($\text{Area} = \frac{1}{2}\oint_C (x dy - y dx) = \oint_C x dy$), 4 AIR-1 speed tricks (path-independence test first, Green's constant-curl shortcut $k \times \text{Area}$, straight-line parametrization $(1-t)A + tB$, conservative loop zero-work), 4 solved GATE examples, 4 exam traps.
  - Cross-linked into `02.2 - Several Variable Calculus.md`, `02.2.4 - Curl.md`, `_Index.md`.

### Session 25 — 2026-07-27
- **AI Used:** Gemini (Google DeepMind)
- **Done:**
  - Integrated dedicated deep-dive zero-to-AIR1 topic note for `Calculus: Directional Derivatives` (`02 - SUBJECTS/Engineering Mathematics/02.2.2.1 - Directional Derivatives.md`).
  - Covers: Intuitive concept (rate of change along ANY unit vector $\hat{u}$ vs partials along coordinate axes), Limit definition & Dot Product Master Formula ($D_{\hat{u}}\phi = \nabla\phi \cdot \hat{u}$), 4 Extremal properties (Max rate $+\|\nabla\phi\|$ along $\nabla\phi$, Min rate $-\|\nabla\phi\|$ opposite, Zero rate $0$ perpendicular/tangent to level surface), 5 Standard GATE Question Types (Along vector $\vec{a}$, Toward point $Q$, Max/Min rate & direction, Zero rate direction, Finding unknown parameters), 4 AIR-1 speed tricks (Unit vector mandatory rule, 2D perpendicular shortcut $(-B, A)$, Angle formula $\phi_x\cos\alpha + \phi_y\cos\beta + \phi_z\cos\gamma$, Level surface tangent check), 5 solved GATE examples, 3 exam traps.
  - Cross-linked into `02.2.2 - Gradient.md`, `02.2 - Several Variable Calculus.md`, `_Index.md`.

### Session 24 — 2026-07-27
- **AI Used:** Gemini (Google DeepMind)
- **Done:**
  - Integrated dedicated deep-dive zero-to-AIR1 topic note for `Calculus: Curl & Irrotational Fields` (`02 - SUBJECTS/Engineering Mathematics/02.2.4 - Curl.md`).
  - Covers: Definition of Curl $\nabla \times \vec{F}$ (Vector output) via 3x3 determinant, 2D Curl formula $(Q_x - P_y)\hat{k}$, Physical interpretation (Rotation, Paddle wheel analogy, Vorticity vector $\vec{\omega} = \nabla \times \vec{V} = 2\vec{\Omega}$ in Aerodynamics), Irrotational Vector Fields ($\nabla \times \vec{F} = \vec{0}$), Conservative Fields & Scalar Potential ($\vec{F} = \nabla\phi$), Path independence of line integrals, Work done formula $W = \phi(B) - \phi(A)$ & closed loop zero work $\oint \vec{F} \cdot d\vec{r} = 0$, Fast Exact Differential Method for finding scalar potential $\phi$, Position Vector Identities ($\nabla \times \vec{r} = \vec{0}$, Central force irrotationality $\nabla \times (f(r)\vec{r}) = \vec{0}$, Rigid body rotation $\nabla \times (\vec{\Omega} \times \vec{r}) = 2\vec{\Omega}$), Master Vector Identities (Curl of Grad $\nabla \times (\nabla\phi) = \vec{0}$, Div of Curl $\nabla \cdot (\nabla \times \vec{F}) = 0$, Curl of Curl $\nabla \times (\nabla \times \vec{F}) = \nabla(\nabla \cdot \vec{F}) - \nabla^2\vec{F}$), Preview of Stokes' Theorem, 4 AIR-1 speed tricks, 4 solved GATE examples, 4 exam traps.
  - Cross-linked into `02.2 - Several Variable Calculus.md`, `02.2.3 - Divergence.md`, `02.2.2 - Gradient.md`, `_Index.md`.

### Session 23 — 2026-07-27
- **AI Used:** Gemini (Google DeepMind)
- **Done:**
  - Integrated dedicated deep-dive zero-to-AIR1 topic note for `Calculus: Divergence & Solenoidal Fields` (`02 - SUBJECTS/Engineering Mathematics/02.2.3 - Divergence.md`).
  - Covers: Definition of Divergence $\nabla \cdot \vec{F} = F_{1x} + F_{2y} + F_{3z}$ (Scalar output), Physical interpretation (Source $\nabla\cdot\vec{F}>0$, Sink $\nabla\cdot\vec{F}<0$, Solenoidal $\nabla\cdot\vec{F}=0$), Solenoidal Vector Fields & Aerodynamics Continuity Equation $\nabla\cdot\vec{V}=0$, Gauss's law for magnetism $\nabla\cdot\vec{B}=0$, Solenoidal constant-finding algorithm, Position Vector Identities ($\nabla\cdot\vec{r}=3$, $\nabla\cdot(f(r)\vec{r}) = r f'(r) + 3f(r)$, $\nabla\cdot(r^n\vec{r}) = (n+3)r^n$), Inverse-Square Law Solenoidal proof ($\nabla\cdot(\vec{r}/r^3)=0$), Laplacian Operator $\nabla^2\phi = \phi_{xx}+\phi_{yy}+\phi_{zz}$ & Harmonic Functions ($\nabla^2\phi=0$), Master Identities ($\nabla\cdot(\nabla\times\vec{F})=0$ Div of Curl is ALWAYS ZERO), Preview of Gauss's Divergence Theorem, 4 AIR-1 speed tricks, 5 solved GATE examples, 4 exam traps.
  - Cross-linked into `02.2 - Several Variable Calculus.md`, `02.2.2 - Gradient.md`, `_Index.md`.

### Session 22 — 2026-07-27
- **AI Used:** Gemini (Google DeepMind)
- **Done:**
  - Integrated dedicated deep-dive zero-to-AIR1 topic note for `Calculus: Gradient & Directional Derivative` (`02 - SUBJECTS/Engineering Mathematics/02.2.2 - Gradient.md`).
  - Covers: Vector Differential Operator $\nabla$, Definition of Gradient $\nabla\phi = \phi_x\hat{i} + \phi_y\hat{j} + \phi_z\hat{k}$, 3 Golden Theorems (Direction of steepest ascent, Maximum rate of increase magnitude $\|\nabla\phi\|$, Perpendicularity to level surface $\phi=c$), Unit Normal Vector $\hat{n} = \frac{\nabla\phi}{\|\nabla\phi\|}$, Tangent Plane $A(x-x_0)+B(y-y_0)+C(z-z_0)=0$ & Normal Line equations, Angle between surfaces $\cos\theta = \frac{\nabla\phi_1\cdot\nabla\phi_2}{\|\nabla\phi_1\|\|\nabla\phi_2\|}$ & Orthogonality condition ($\nabla\phi_1\cdot\nabla\phi_2 = 0$), Directional Derivative definition $D_{\hat{u}}\phi = \nabla\phi\cdot\hat{u}$ with step-by-step 4-step algorithm, Radial Gradient Master Table ($\nabla r = \frac{\vec{r}}{r}$, $\nabla(r^n) = n r^{n-2}\vec{r}$, $\nabla(1/r) = -\frac{\vec{r}}{r^3}$, $\nabla f(r) = f'(r)\frac{\vec{r}}{r}$), Aerospace & Physics applications (Potential flow velocity $\vec{V} = \nabla\phi$, Fourier heat flux $\vec{q} = -k\nabla T$, Conservative forces $\vec{F} = -\nabla U$), 4 AIR-1 speed tricks, 4 solved GATE examples, 4 exam traps.
  - Cross-linked into `02.2 - Several Variable Calculus.md`, `02.2.1 - Partial Derivatives.md`, `_Index.md`.

### Session 21 — 2026-07-27
- **AI Used:** Antigravity (Google DeepMind)
- **Done:**
  - Integrated dedicated deep-dive zero-to-AIR1 topic note for `Calculus: Partial Derivatives` (`02 - SUBJECTS/Engineering Mathematics/02.2.1 - Partial Derivatives.md`).
  - Covers: First Principles definitions of $f_x$ and $f_y$, Geometric interpretation & Tangent Plane equation ($z-z_0 = f_x(x-x_0) + f_y(y-y_0)$), Clairaut's/Schwarz's Theorem ($f_{xy}=f_{yx}$), Total Differential ($dz = f_x dx + f_y dy$), Error propagation & Power-Product Instant Percentage Error Rule ($\%\text{Error}(x^a y^b z^c) = |a|\%x + |b|\%y + |c|\%z$), Multivariable Differentiability Hierarchy (Continuous partials ⟹ Differentiable ⟹ Continuous & Partials exist), Multivariable Chain Rule (Tree Diagram Method for 1 & 2 parameter cases), Implicit Partial Derivatives ($z_x = -F_x/F_z$), Cyclic Implicit Identity ($\frac{\partial x}{\partial y}\frac{\partial y}{\partial z}\frac{\partial z}{\partial x} = -1$), Euler's Theorem for Homogeneous Functions (1st and 2nd order forms), Composite Homogeneous Functions Master Formula ($x u_x + y u_y = n \frac{F(u)}{F'(u)}$ with 4-entry standard table for $\sin^{-1}$, $\tan^{-1}$, $\ln$, $\cos^{-1}$), 4 AIR-1 speed tricks, 4 solved GATE examples, 4 exam traps.
  - Cross-linked into `02.2 - Several Variable Calculus.md`, `02 - Calculus.md`, `_Index.md`.

### Session 20 — 2026-07-27
- **AI Used:** Antigravity (Google DeepMind)
- **Done:**
  - Integrated dedicated deep-dive zero-to-AIR1 topic note for `Calculus: Functions of Several Variables` (`02 - SUBJECTS/Engineering Mathematics/02.2 - Several Variable Calculus.md`).
  - Covers: Partial Derivatives & Clairaut's/Schwarz's Theorem ($f_{xy}=f_{yx}$), Total Differential & Multivariable Chain Rule (Tree Diagram Method), Euler's Theorem for Homogeneous Functions ($x f_x + y f_y = n f$ & 2nd order corollary), Vector Differential Operators ($\nabla$ Del operator), Gradient ($\nabla\phi$ steep ascent & perpendicular to level surface), Divergence ($\nabla\cdot\vec{F}$ flux, solenoidal field $\nabla\cdot\vec{F}=0$), Curl ($\nabla\times\vec{F}$ rotation, irrotational field $\nabla\times\vec{F}=\vec{0}$), Laplacian ($\nabla^2\phi$), Master Vector Identities (Curl of Grad = $\vec{0}$, Div of Curl = $0$), Directional Derivative ($D_{\hat{u}}f = \nabla f\cdot\hat{u}$ & max magnitude $|\nabla f|$), Jacobians for 2D/3D transformations ($J=r$ for polar/cylindrical, $J=\rho^2\sin\phi$ for spherical), Maxima/Minima of 2 variables via Hessian discriminant ($D = f_{xx}f_{yy} - f_{xy}^2$), Lagrange Multipliers for constrained optimization ($\nabla f = \lambda \nabla g$), 6 AIR-1 speed tricks, 6 solved GATE examples, 5 exam traps.
  - Cross-linked into `02 - Calculus.md`, `02.1 - Single Variable Calculus.md`, and `_Index.md`.

### Session 19 — 2026-07-27
- **AI Used:** Antigravity (Google DeepMind)
- **Done:**
  - Integrated dedicated deep-dive zero-to-AIR1 topic note for `Calculus: Integration` (`02 - SUBJECTS/Engineering Mathematics/02.1.6 - Integration.md`).
  - Covers: Indefinite vs Definite integrals, FTC, Standard formulas in 4 groups (10 algebraic/exp, 10 trig, 9 inverse-trig), 7 Integration Techniques (U-Sub with instant $\ln|f|+C$ and $e^{f(x)}+C$ patterns, IBP with ILATE rule + Tabular method, Partial Fractions with cover-up method, Trig substitution $\sin\theta/\tan\theta/\sec\theta$ table, Trig integrals $\sin^m\cos^n$, Completing the Square, Weierstrass half-angle), 9 Definite Integral Properties (reversal, splitting, King's, even/odd symmetry, periodicity), Leibniz Rule (both forms + Type 1/2/3 applications), Special Functions (Gamma recurrence + half-integer values, Beta + trig form, Wallis' formula + $W_n$ table + recurrence), 6 AIR-1 speed tricks (num=deriv-of-denom $\to\ln$, King's pattern for $\int_0^\pi xf(\sin x)$, $e^x[f+f']=e^xf(x)$ magic, Gamma/Beta pattern recognition, add-and-subtract numerator, ILATE mantra "I Love All The Elephants"), 7 solved GATE examples, 5 exam traps.
  - Cross-linked into `02.1 - Single Variable Calculus.md` Part IV, `02.1.5 - Maxima and Minima.md`.

### Session 18 — 2026-07-27
- **AI Used:** Antigravity (Google DeepMind)
- **Done:**
  - Integrated dedicated deep-dive zero-to-AIR1 topic note for `Calculus: Maxima and Minima` (`02 - SUBJECTS/Engineering Mathematics/02.1.5 - Maxima and Minima.md`).
  - Covers: Local/Global/Stationary/Inflection/Saddle point definitions, full algorithm flowchart, First Derivative Test (sign-change table + visual), Second Derivative Test (frown/smile mnemonic), Higher-Order Derivative Test (ODD=inflection mnemonic), Global extrema closed-interval method (endpoint rule), Concavity (concave up/down) + points of inflection (sign-change requirement), Rolle's Theorem (3 conditions + same-height mnemonic), LMVT (secant=tangent mnemonic), CMVT, hierarchy (Rolle ⊂ LMVT ⊂ CMVT), Optimization strategy (5 steps + 4 Aerospace applications), 6 AIR-1 speed tricks (SDT 3-sec classification, AM-GM inequality shortcut, Rolle's root check, LMVT estimation, symmetry, critical-point counting from degree), 6 solved GATE examples, 5 exam traps.
  - Cross-linked into `02.1 - Single Variable Calculus.md`, `02.1.3 - Differentiability.md`, `02.1.4 - Chain Rule.md`.

### Session 17 — 2026-07-27
- **AI Used:** Antigravity (Google DeepMind)
- **Done:**
  - Integrated dedicated deep-dive zero-to-AIR1 topic note for `Calculus: Chain Rule` (`02 - SUBJECTS/Engineering Mathematics/02.1.4 - Chain Rule.md`).
  - Covers: Gear-system intuition, 4 formal versions (composition, direct, triple, $n$-layer), Peel-the-Onion method with step-by-step algorithm, GATE-speed identification table for 9 common composite function patterns ($\sin g$, $\cos g$, $e^g$, $\ln g$, $[g]^n$, $\sqrt{g}$, $\tan^{-1} g$, $\sin^{-1} g$, $a^g$), chain rule in 6 application contexts (with product rule, quotient rule, implicit diff., parametric equations, inverse functions, related rates), multivariable chain rule preview, 5 AIR-1 speed tricks (outside-inside mantra, power-chain instant formula, log-chain $f'/f$ shortcut, exp-chain $e^f \cdot f'$, GATE MCQ chain-factor filter), inverse-trig substitution master table ($x=\sin\theta$, $x=\tan\theta$, $x=\sec\theta$, double-angle results), 7 solved GATE examples, 5 exam traps.
  - Cross-linked into `02.1.3 - Differentiability.md`, `02.1 - Single Variable Calculus.md`.

### Session 16 — 2026-07-27
- **AI Used:** Antigravity (Google DeepMind)
- **Done:**
  - Integrated dedicated deep-dive zero-to-AIR1 topic note for `Calculus: Differentiability` (`02 - SUBJECTS/Engineering Mathematics/02.1.3 - Differentiability.md`).
  - Covers: Intuitive + formal definition, LHD/RHD, D-C-L hierarchy (Differentiable ⟹ Continuous ⟹ Limit exists), master counter-example table (6 functions), all differentiation rules (constant, power, sum, product [VdU+UdV mnemonic], quotient [Low d-High mnemonic], chain rule), derivatives of 7 algebraic, 6 trig, 6 inverse-trig functions, higher-order $n$-th derivative formulas ($e^{ax}$, $\sin(ax+b)$, $\ln x$, $1/(ax+b)$, power), Leibniz product formula, implicit differentiation ($dy/dx = -F_x/F_y$), logarithmic differentiation for $[f(x)]^{g(x)}$, parametric differentiation, 5 AIR-1 speed tricks (piecewise LHD/RHD algorithm, $x^n \sin(1/x)$ power threshold, $x^x$ log-diff, chain rule onion-peel, complementary inverse-trig pair), 6 solved GATE examples, 5 exam traps.
  - Cross-linked into `02.1 - Single Variable Calculus.md`, `02.1.2 - Continuity.md`.

### Session 15 — 2026-07-27
- **AI Used:** Antigravity (Google DeepMind)
- **Done:**
  - Integrated dedicated deep-dive zero-to-AIR1 topic note for `Calculus: Continuity` (`02 - SUBJECTS/Engineering Mathematics/02.1.2 - Continuity.md`).
  - Covers: Formal 3-condition continuity test, 4-type discontinuity classification (Removable/Jump/Infinite/Oscillatory) with RJIO mnemonic and decision tree, continuity of standard functions master table, algebra of continuous functions (5 operations), differentiability definition (LHD/RHD), critical hierarchy (Differentiable ⟹ Continuous, NOT vice versa) with $|x|$ counter-example, non-differentiable point types (corner, vertical tangent, break, oscillation), Intermediate Value Theorem (IVT) + root detection trick ($f(a) \cdot f(b) < 0$), Extreme Value Theorem (EVT), Uniform Continuity, Piecewise function strategy (LHL/RHL/f(a) algorithm), 5 AIR-1 speed tricks, 6 solved GATE examples, 5 exam traps.
  - Cross-linked into `02.1 - Single Variable Calculus.md` (both Limits and Continuity deep-dive links), `02 - Calculus.md`, `_Index.md`.

### Session 14 — 2026-07-27
- **AI Used:** Antigravity (Google DeepMind)
- **Done:**
  - Integrated dedicated deep-dive zero-to-AIR1 topic note for `Calculus: Limits` (`02 - SUBJECTS/Engineering Mathematics/02.1.1 - Limits.md`).
  - Covers: Intuitive & formal $\varepsilon$-$\delta$ definition, LHL/RHL existence condition, 20-entry Standard Limits Master Table (trig, exponential, logarithmic, algebraic groups), 7 Indeterminate Forms with resolution flowchart, L'Hôpital's Rule with 4 critical rules, Continuity definition & 4 types of discontinuities, Squeeze/Sandwich Theorem with 3 classic applications, 5 AIR-1 speed tricks ($1^\infty$ instant formula, Taylor series substitution, polynomial race hierarchy $\ln x \ll x^a \ll e^x \ll x^x$, $\infty-\infty$ rationalization, $\frac{\sin(mx)}{nx}$ direct ratio), 6 solved GATE examples, 5 exam traps.
  - Cross-linked into `02.1 - Single Variable Calculus.md`, `02 - Calculus.md`, `_Index.md`, and `Engineering Mathematics - Formulas.md`.

### Session 13 — 2026-07-27
- **AI Used:** Antigravity (Google DeepMind)
- **Done:**
  - Integrated dedicated deep-dive zero-to-AIR1 topic notes for `Linear Algebra: Eigenvectors` (`02 - SUBJECTS/Engineering Mathematics/01.4.1 - Eigenvectors.md`).
  - Covers Geometric definition ($A\vec{v}=\lambda\vec{v}, \vec{v}\neq\vec{0}$), Step-by-Step ERO Algorithm for Eigenspaces $E(\lambda)$, 2x2 Fast Eigenvector Shortcut $\vec{v}=(-b, a-\lambda)^T$, 6 Master Eigenvector Theorems (Linear Independence for distinct eigenvalues, Orthogonality for real symmetric matrices, Eigenspace dimension $\text{GM}=\text{Nullity}(A-\lambda I)$, Left vs Right eigenvectors and biorthogonality $\vec{w}_i^T \vec{v}_j = 0$, Matrix power/inverse eigenvector invariance, Commuting matrix common eigenvectors), Modal Matrix $P$ & Spectral Matrix $D$ Diagonalization ($A = P D P^{-1}$), Orthogonal Diagonalization ($A = Q D Q^T$), and Rank-1 Spectral Decomposition ($A = \sum \lambda_i \vec{q}_i \vec{q}_i^T$).
  - Included AIR-1 topper speed tricks (2-second eigenvector inspection filter $A\vec{v}=k\vec{v}$, symmetric orthogonality elimination, constant row/column sum eigenvectors), step-by-step solved GATE examples, and exam traps.
  - Cross-linked with `01.4 - Eigenvalues and Eigenvectors.md`, `01 - Linear Algebra.md`, `_Index.md`, and `Engineering Mathematics - Formulas.md`.

### Session 12 — 2026-07-27
- **AI Used:** Antigravity (Google DeepMind)
- **Done:**
  - Integrated complete zero-to-AIR1 topic notes for `Linear Algebra: Eigenvalues & Eigenvectors` (`02 - SUBJECTS/Engineering Mathematics/01.4 - Eigenvalues and Eigenvectors.md`).
  - Covers Geometric definition ($A\vec{v}=\lambda\vec{v}$), 3x3 Characteristic polynomial shortcut ($\lambda^3 - S_1\lambda^2 + S_2\lambda - S_3 = 0$), 10 Master Eigenvalue Properties ($\sum \lambda = \text{tr}, \prod \lambda = \det, \lambda(A^m)=\lambda^m, \lambda(A^{-1})=1/\lambda$), Eigenvalues of Special Matrices (Symmetric, Skew-Symmetric, Orthogonal, Idempotent, Involutory, Nilpotent, Hermitian, Skew-Hermitian, Unitary, Stochastic), Cayley-Hamilton Theorem & applications ($A^{-1}$ & $A^m$ power reduction algorithm), Algebraic Multiplicity (AM) vs Geometric Multiplicity (GM), and Diagonalizability criteria.
  - Included AIR-1 topper speed tricks (5-second trace/det option elimination, row/column sum rule, rank-1 matrix eigenvalues), step-by-step solved GATE examples, and exam traps.
  - Completed Section 1 (Linear Algebra) in `02 - SUBJECTS/Engineering Mathematics/_Index.md`, `01 - Linear Algebra.md`, and `Engineering Mathematics - Formulas.md`.

### Session 11 — 2026-07-27
- **AI Used:** Antigravity (Google DeepMind)
- **Done:**
  - Integrated dedicated deep-dive zero-to-AIR1 topic notes for `Linear Algebra: Rank of a Matrix` (`02 - SUBJECTS/Engineering Mathematics/01.3.1 - Rank of a Matrix.md`).
  - Covers 4 Equivalent Definitions of Rank (Minor/Submatrix, Row Space, Column Space, Pivot Count), 4 Computational Methods (Minor method, REF/Gaussian Elimination, Normal/Canonical Form $[I_r\ O; O\ O]$, Inspection), Master Rank Inequalities & Properties (Sylvester's Law of Nullity, Frobenius inequality, sum/difference rank bounds, outer product rank $\vec{u}\vec{v}^T=1$, idempotent matrix rank $\text{Rank}(A)=\text{tr}(A)$, nilpotent matrix rank), Gilbert Strang's 4 Fundamental Subspaces ($C(A), C(A^T), N(A), N(A^T)$) and dual Rank-Nullity theorems.
  - Included AIR-1 topper speed tricks (1-second outer product rule, row elimination by eye, submatrix determinant escalation), step-by-step solved GATE examples, and exam traps.
  - Cross-linked with `01.3 - Systems of Linear Equations.md`, `01 - Linear Algebra.md`, `_Index.md`, and `Engineering Mathematics - Formulas.md`.

### Session 10 — 2026-07-27
- **AI Used:** Antigravity (Google DeepMind)
- **Done:**
  - Integrated complete zero-to-AIR1 topic notes for `Linear Algebra: Systems of Linear Equations & Rank` (`02 - SUBJECTS/Engineering Mathematics/01.3 - Systems of Linear Equations.md`).
  - Covers Rank definition (Minor method, Row Echelon Form, Non-zero rows), 8 Rank Properties & Inequalities (Sylvester's Law of Nullity, product rank, transpose rank), Nullity & Rank-Nullity Theorem ($\text{Rank} + \text{Nullity} = n$), Non-Homogeneous Systems ($A\vec{x}=\vec{b}$) Rouché-Capelli consistency theorem (Inconsistent $\text{Rank}(A) < \text{Rank}([A \mid \vec{b}])$, Unique $r=n$, Infinite $r<n$ with $n-r$ free variables), Homogeneous Systems ($A\vec{x}=\vec{0}$) classification ($\det(A) \neq 0 \implies$ trivial solution, $\det(A) = 0 \implies$ non-trivial solutions with $n-r$ L.I. solutions), Cramer's Rule, and Gaussian / Gauss-Jordan elimination.
  - Included AIR-1 topper speed tricks (Parameter $\lambda, \mu$ 3-step strategy, 3-second rank inspection, system geometry rules), step-by-step solved GATE examples, and common exam traps.
  - Updated parent notes (`01 - Linear Algebra.md`), subject index (`_Index.md`), and formula sheet (`Engineering Mathematics - Formulas.md`).

### Session 9 — 2026-07-27
- **AI Used:** Antigravity (Google DeepMind)
- **Done:**
  - Integrated complete zero-to-AIR1 topic notes for `Linear Algebra: Matrix Algebra` (`02 - SUBJECTS/Engineering Mathematics/01.2 - Matrix Algebra.md`).
  - Covers Taxonomy of Special Matrices (Symmetric, Skew-Symmetric, Orthogonal, Idempotent, Involutory, Nilpotent, Periodic, Hermitian, Skew-Hermitian, Unitary), Matrix Operations & Properties (non-commutativity, zero product failure, cancellation failure, Trace properties & cyclic invariance, Transpose reversal rules, Symmetric + Skew-Symmetric decomposition), 10 Gold Rules of Determinants ($\det(kA) = k^n \det A$), Adjoint & Inverse (8 Master Adjoint Identities, 2x2 inverse 1-second shortcut, singular vs non-singular), and Block/Partitioned matrices.
  - Included AIR-1 topper speed tricks, mnemonics, step-by-step solved GATE-style examples, and common exam traps.
  - Updated parent notes (`01 - Linear Algebra.md`), subject index (`_Index.md`), and formula sheet (`Engineering Mathematics - Formulas.md`).

### Session 8 — 2026-07-27
- **AI Used:** Antigravity (Google DeepMind)
- **Done:**
  - Integrated complete zero-to-AIR1 topic notes for `Linear Algebra: Vector Algebra & Vector Spaces` (`02 - SUBJECTS/Engineering Mathematics/01.1 - Vector Algebra.md`).
  - Covers 3D Euclidean geometry (DCs, DRs, projections, dot/cross products, scalar & vector triple products, BAC-CAB rule, coplanarity, volumes), abstract linear algebra (vector spaces, subspaces, 10 axioms, high-yield GATE subspace classifier table), linear independence/dependence (rank & determinant quick tests), basis & dimension master tables, inner product spaces, and Gram-Schmidt orthogonalization.
  - Included AIR-1 topper speed tricks, 3-second inspection rules, mnemonics, step-by-step solved GATE examples, and exam traps.
  - Updated parent notes (`01 - Linear Algebra.md`), subject index (`_Index.md`), and formula sheet (`Engineering Mathematics - Formulas.md`).

### Session 7 — 2026-07-27
- **AI Used:** Antigravity (Google DeepMind)
- **Done:**
  - Diagnosed and fixed Git tracking issue for `.gitignore` files.
  - Cleared Git index cache (`git rm -r --cached .` followed by `git add .`) to untrack previously tracked ignored files (such as `.obsidian/graph.json` and `.obsidian/plugins/obsidian-local-rest-api/`).
  - Verified Git index now cleanly respects `.gitignore` without deleting local files.

### Session 6 — 2026-07-27
- **AI Used:** Gemini (Google DeepMind)
- **Done:**
  - Configured privacy protection in `.gitignore`.
  - Excluded personal journals (`journals/`), personal daily trackers (`03 - DAILY TRACKER/*.md`), individual mock test scores (`05 - MOCK TESTS/*.md`), and private directories (`Private/`, `Personal/`) from Git commits.
  - Added `.gitkeep` files to preserve folder structures in Git without leaking personal data.
  - Updated `README.md` with explicit **Shared vs. Private Content (Privacy Policy)** table.

### Session 5 — 2026-07-27
- **AI Used:** Gemini (Google DeepMind)
- **Done:** Integrated user's preferred Obsidian Local REST API (`obsidian-local-rest-api` plugin) + `mcp-remote` bridge pattern.

### Session 4 — 2026-07-27
- **AI Used:** Gemini (Google DeepMind)
- **Done:** Prepared vault for GitHub sharing. Created `.gitignore`, universal rules, and `.agents/skills/`.

### Session 3 — 2026-07-27
- **AI Used:** Gemini (Google DeepMind)
- **Done:** Integrated official GATE 2027 AE syllabus from IIT Madras into vault across all 5 sections.

### Session 2 — 2026-07-27
- **AI Used:** Antigravity (Google DeepMind)
- **Done:** Created missing folders (03-06), created formula sheets, daily tracker & mock test templates, linear algebra topic note, daily log.

### Session 1 — 2026-07-27
- **AI Used:** Claude (Anthropic, Sonnet 4.6)
- **Done:** Initial vault structure & initial roadmap setup.
