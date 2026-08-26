/**
 * Official TCS iON GATE Scientific Calculator Engine
 * Exact replica of the official GATE Online Scientific Calculator interface,
 * key layout, unary/binary operations, post-fix logic, and memory registers.
 */

class GateCalculator {
  constructor() {
    this.currentInput = '0';
    this.expression = '';
    this.memory = 0;
    this.hasMemory = false;
    this.angleMode = 'deg'; // 'deg' or 'rad'
    this.isNewNumber = true;
    this.lastResult = null;
    this.logyBase = null; // For log_y(x)

    this.initDOM();
    this.bindEvents();
    this.updateDisplay();
  }

  initDOM() {
    this.formulaEl = document.getElementById('formula-display');
    this.mainEl = document.getElementById('main-display');
    this.degRadio = document.getElementById('mode-deg');
    this.radRadio = document.getElementById('mode-rad');
  }

  bindEvents() {
    // Mode changes
    if (this.degRadio) {
      this.degRadio.addEventListener('change', () => {
        this.angleMode = 'deg';
      });
    }
    if (this.radRadio) {
      this.radRadio.addEventListener('change', () => {
        this.angleMode = 'rad';
      });
    }

    // Keypad clicks
    document.querySelectorAll('.calc-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const action = btn.dataset.action;
        const val = btn.dataset.val;
        this.handleButton(action, val);
      });
    });

    // Keyboard support (Practice / Development)
    window.addEventListener('keydown', (e) => {
      if (e.key >= '0' && e.key <= '9') {
        this.inputDigit(e.key);
      } else if (e.key === '.') {
        this.inputDot();
      } else if (e.key === '+') {
        this.inputBinaryOp('+');
      } else if (e.key === '-') {
        this.inputBinaryOp('-');
      } else if (e.key === '*') {
        this.inputBinaryOp('*');
      } else if (e.key === '/') {
        e.preventDefault();
        this.inputBinaryOp('/');
      } else if (e.key === '(' || e.key === ')') {
        this.inputBracket(e.key);
      } else if (e.key === 'Enter' || e.key === '=') {
        e.preventDefault();
        this.calculateResult();
      } else if (e.key === 'Backspace') {
        this.backspace();
      } else if (e.key === 'Escape') {
        this.clearAll();
      }
      this.updateDisplay();
    });
  }

  handleButton(action, val) {
    switch (action) {
      case 'num':
        this.inputDigit(val);
        break;
      case 'dot':
        this.inputDot();
        break;
      case 'const':
        this.inputConstant(val);
        break;
      case 'op':
        this.inputBinaryOp(val);
        break;
      case 'bracket':
        this.inputBracket(val);
        break;
      case 'unary':
        this.executeUnary(val);
        break;
      case 'mem':
        this.executeMemory(val);
        break;
      case 'clear':
        this.clearAll();
        break;
      case 'backspace':
        this.backspace();
        break;
      case 'equal':
        this.calculateResult();
        break;
    }
    this.updateDisplay();
  }

  inputDigit(digit) {
    if (this.isNewNumber || this.currentInput === '0') {
      this.currentInput = digit;
      this.isNewNumber = false;
    } else {
      this.currentInput += digit;
    }
  }

  inputDot() {
    if (this.isNewNumber) {
      this.currentInput = '0.';
      this.isNewNumber = false;
    } else if (!this.currentInput.includes('.')) {
      this.currentInput += '.';
    }
  }

  inputConstant(name) {
    let val = 0;
    if (name === 'pi') val = Math.PI;
    if (name === 'e') val = Math.E;
    this.currentInput = val.toString();
    this.isNewNumber = false;
  }

  inputBracket(bracket) {
    if (bracket === '(') {
      this.expression += '(';
      this.isNewNumber = true;
    } else if (bracket === ')') {
      if (!this.isNewNumber) {
        this.expression += this.currentInput;
      }
      this.expression += ')';
      this.isNewNumber = true;
    }
  }

  inputBinaryOp(op) {
    if (!this.isNewNumber) {
      this.expression += this.currentInput;
    }

    if (op === '^') {
      this.expression += '**';
    } else if (op === 'root_y') {
      this.expression += '**(1/';
    } else if (op === 'mod') {
      this.expression += '%';
    } else if (op === 'exp') {
      this.expression += '*10**';
    } else if (op === 'log_y') {
      // Log base y of x: Evaluated as log(x)/log(y)
      const xVal = parseFloat(this.currentInput);
      this.expression = Math.log()/Math.log(;
      this.isNewNumber = true;
      return;
    } else {
      this.expression += op;
    }
    this.isNewNumber = true;
  }

  executeUnary(fn) {
    let x = parseFloat(this.currentInput);
    if (isNaN(x)) return;

    let res = 0;
    const toRad = (deg) => (deg * Math.PI) / 180;
    const toDeg = (rad) => (rad * 180) / Math.PI;

    switch (fn) {
      case 'sin':
        res = Math.sin(this.angleMode === 'deg' ? toRad(x) : x);
        break;
      case 'cos':
        res = Math.cos(this.angleMode === 'deg' ? toRad(x) : x);
        break;
      case 'tan':
        res = Math.tan(this.angleMode === 'deg' ? toRad(x) : x);
        break;
      case 'asin':
        if (x < -1 || x > 1) { alert('Invalid input for sin⁻¹ (Range [-1, 1])'); return; }
        res = Math.asin(x);
        if (this.angleMode === 'deg') res = toDeg(res);
        break;
      case 'acos':
        if (x < -1 || x > 1) { alert('Invalid input for cos⁻¹ (Range [-1, 1])'); return; }
        res = Math.acos(x);
        if (this.angleMode === 'deg') res = toDeg(res);
        break;
      case 'atan':
        res = Math.atan(x);
        if (this.angleMode === 'deg') res = toDeg(res);
        break;
      case 'sinh':
        res = Math.sinh(x);
        break;
      case 'cosh':
        res = Math.cosh(x);
        break;
      case 'tanh':
        res = Math.tanh(x);
        break;
      case 'asinh':
        res = Math.asinh(x);
        break;
      case 'acosh':
        if (x < 1) { alert('Invalid input for cosh⁻¹ (x >= 1)'); return; }
        res = Math.acosh(x);
        break;
      case 'atanh':
        if (x <= -1 || x >= 1) { alert('Invalid input for tanh⁻¹ (-1 < x < 1)'); return; }
        res = Math.atanh(x);
        break;
      case 'ln':
        if (x <= 0) { alert('Invalid input for ln (x > 0)'); return; }
        res = Math.log(x);
        break;
      case 'log10':
        if (x <= 0) { alert('Invalid input for log₁₀ (x > 0)'); return; }
        res = Math.log10(x);
        break;
      case 'log2':
        if (x <= 0) { alert('Invalid input for log₂ (x > 0)'); return; }
        res = Math.log2(x);
        break;
      case 'sqrt':
        if (x < 0) { alert('Invalid input for square root'); return; }
        res = Math.sqrt(x);
        break;
      case 'cbrt':
        res = Math.cbrt(x);
        break;
      case 'sqr':
        res = x * x;
        break;
      case 'cube':
        res = x * x * x;
        break;
      case 'recip':
        if (x === 0) { alert('Division by zero'); return; }
        res = 1 / x;
        break;
      case 'fact':
        if (x < 0 || !Number.isInteger(x)) { alert('Factorial valid for non-negative integers only'); return; }
        res = this.factorial(x);
        break;
      case '10pow':
        res = Math.pow(10, x);
        break;
      case 'epow':
        res = Math.exp(x);
        break;
      case 'abs':
        res = Math.abs(x);
        break;
      case 'percent':
        res = x / 100;
        break;
      case 'plusminus':
        res = -x;
        break;
    }

    if (Math.abs(res) < 1e-15) res = 0;

    this.currentInput = this.formatNumber(res);
    this.isNewNumber = true;
  }

  factorial(n) {
    if (n === 0 || n === 1) return 1;
    let r = 1;
    for (let i = 2; i <= n; i++) r *= i;
    return r;
  }

  executeMemory(action) {
    const val = parseFloat(this.currentInput) || 0;
    switch (action) {
      case 'MS':
        this.memory = val;
        this.hasMemory = true;
        break;
      case 'MR':
        if (this.hasMemory) {
          this.currentInput = this.formatNumber(this.memory);
          this.isNewNumber = true;
        }
        break;
      case 'M+':
        this.memory += val;
        this.hasMemory = true;
        break;
      case 'M-':
        this.memory -= val;
        this.hasMemory = true;
        break;
      case 'MC':
        this.memory = 0;
        this.hasMemory = false;
        break;
    }
  }

  clearAll() {
    this.currentInput = '0';
    this.expression = '';
    this.isNewNumber = true;
    this.lastResult = null;
  }

  backspace() {
    if (this.isNewNumber || this.currentInput.length <= 1) {
      this.currentInput = '0';
      this.isNewNumber = true;
    } else {
      this.currentInput = this.currentInput.slice(0, -1);
    }
  }

  calculateResult() {
    try {
      let fullExpr = this.expression;
      if (!this.isNewNumber || fullExpr === '') {
        fullExpr += this.currentInput;
      }

      // Auto close open parentheses
      const openCount = (fullExpr.match(/\(/g) || []).length;
      const closeCount = (fullExpr.match(/\)/g) || []).length;
      if (openCount > closeCount) {
        fullExpr += ')'.repeat(openCount - closeCount);
      }

      // Sanitize expression for safe eval
      const sanitized = fullExpr.replace(/[^0-9+\-*/().*%eEMath,]/g, '');
      const result = Function('use strict'; return ())();

      if (isNaN(result) || !isFinite(result)) {
        this.currentInput = 'Error';
      } else {
        this.currentInput = this.formatNumber(result);
        this.lastResult = result;
      }
      this.expression = '';
      this.isNewNumber = true;
    } catch (err) {
      this.currentInput = 'Error';
      this.expression = '';
      this.isNewNumber = true;
    }
  }

  formatNumber(num) {
    if (typeof num !== 'number') return num.toString();
    if (Math.abs(num) > 1e12 || (Math.abs(num) < 1e-6 && num !== 0)) {
      return num.toExponential(8).replace(/\.?0+e/, 'e');
    }
    return parseFloat(num.toFixed(10)).toString();
  }

  updateDisplay() {
    this.mainEl.value = this.currentInput;
    this.formulaEl.textContent = this.expression || '';
  }
}

// Initialize on DOM load
document.addEventListener('DOMContentLoaded', () => {
  window.gateCalc = new GateCalculator();
});
