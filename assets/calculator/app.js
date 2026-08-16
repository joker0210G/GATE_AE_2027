/**
 * TCS iON GATE Scientific Calculator Engine
 * Replicates the exact button layout, post-fix logic, memory registers,
 * and precision rules of the official GATE Online Scientific Calculator.
 */

class GateCalculator {
  constructor() {
    this.currentInput = '0';
    this.expression = '';
    this.memory = 0;
    this.hasMemory = false;
    this.angleMode = 'deg'; // 'deg' or 'rad'
    this.examMode = true; // Mouse only by default
    this.isNewNumber = true;
    this.lastResult = null;

    this.initDOM();
    this.bindEvents();
    this.updateDisplay();
  }

  initDOM() {
    this.formulaEl = document.getElementById('formula-display');
    this.mainEl = document.getElementById('main-display');
    this.memIndicator = document.getElementById('mem-indicator');
    this.degRadio = document.getElementById('mode-deg');
    this.radRadio = document.getElementById('mode-rad');
    this.examToggleBtn = document.getElementById('exam-toggle-btn');
  }

  bindEvents() {
    // Mode changes
    this.degRadio.addEventListener('change', () => {
      this.angleMode = 'deg';
    });
    this.radRadio.addEventListener('change', () => {
      this.angleMode = 'rad';
    });

    // Exam mode toggle
    this.examToggleBtn.addEventListener('click', () => {
      this.examMode = !this.examMode;
      if (this.examMode) {
        this.examToggleBtn.textContent = '🔒 Exam Mode (Mouse Only)';
        this.examToggleBtn.classList.add('active');
      } else {
        this.examToggleBtn.textContent = '🔓 Practice Mode (Keyboard Allowed)';
        this.examToggleBtn.classList.remove('active');
      }
    });

    // Keypad clicks
    document.querySelectorAll('.calc-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const action = btn.dataset.action;
        const val = btn.dataset.val;
        this.handleButton(action, val);
      });
    });

    // Keyboard support when not in strict exam mode
    window.addEventListener('keydown', (e) => {
      if (this.examMode) {
        // Prevent typing into main display during exam mode simulation
        if (e.key >= '0' && e.key <= '9' || ['+', '-', '*', '/', '.', '(', ')', 'Enter', 'Backspace'].includes(e.key)) {
          e.preventDefault();
        }
        return;
      }

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
      case 'clear-entry':
        this.clearEntry();
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
      // y-th root of x: x**(1/y) -> formatted as binary
      this.expression += '**(1/';
    } else if (op === 'mod') {
      this.expression += '%';
    } else if (op === 'exp') {
      this.expression += '*10**';
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
        res = Math.asin(x);
        if (this.angleMode === 'deg') res = toDeg(res);
        break;
      case 'acos':
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
      case 'ln':
        if (x <= 0) { alert('Invalid input for ln'); return; }
        res = Math.log(x);
        break;
      case 'log10':
        if (x <= 0) { alert('Invalid input for log'); return; }
        res = Math.log10(x);
        break;
      case 'sqrt':
        if (x < 0) { alert('Invalid input for sqrt'); return; }
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
      case 'plusminus':
        res = -x;
        break;
    }

    // Fix JavaScript floating point quirks like sin(180 deg) = 1.22e-16
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

  clearEntry() {
    this.currentInput = '0';
    this.isNewNumber = true;
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
      const sanitized = fullExpr.replace(/[^0-9+\-*/().*%eE]/g, '');
      const result = Function(`'use strict'; return (${sanitized})`)();

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
    // High precision without scientific notation noise unless very small/large
    if (Math.abs(num) > 1e12 || (Math.abs(num) < 1e-6 && num !== 0)) {
      return num.toExponential(8).replace(/\.?0+e/, 'e');
    }
    // Round to max 10 decimal places to eliminate IEEE 754 precision artifacts
    return parseFloat(num.toFixed(10)).toString();
  }

  updateDisplay() {
    this.mainEl.value = this.currentInput;
    this.formulaEl.textContent = this.expression || '';
    if (this.hasMemory) {
      this.memIndicator.classList.add('active');
    } else {
      this.memIndicator.classList.remove('active');
    }
  }
}

// Initialize on DOM load
document.addEventListener('DOMContentLoaded', () => {
  window.gateCalc = new GateCalculator();
});
