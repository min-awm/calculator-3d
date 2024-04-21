export default class CalcMath {
  constructor() {
    this.mAdd = 0;
    this.width = 2;
    this.result = 0;
    this.newSession = true;
    this.resultError = false;
  }

  calc(key) {
    switch (key) {
      case "mc":
        this.mAdd = 0;
        this.result = 0;
        this.newSession = true;
        this.resultError = false;
        break;
      case "m+":
        this.#calcResult();
        const resultNumber = Number(this.result);
        if (isNumber(resultNumber)) {
          this.result = Number(this.mAdd) + Number(resultNumber);
          this.mAdd = this.result;
          this.newSession = true;
        }
        break;
      case "=":
        this.#calcResult();
        break;
      default:
        if (this.newSession) {
          this.result = String(key);
          this.newSession = false;
        } else {
          this.result += String(key);
        }
        break;
    }

    return this.#formatResult(this.result);
  }

  #calcResult() {
    this.resultError = false;
    try {
      const result = eval(this.result);
      this.result = Math.round(result * 100) / 100
    } catch (error) {
      this.resultError = true;
      this.result = 0;
      this.newSession = true;
    }
  }

  #formatResult(result) {
    if (this.resultError) {
      return "ERROR";
    }
    const r1 = String(result).replaceAll("*", "×");
    const r2 = r1.replaceAll("/", "÷");
    return r2;
  }
}

function isNumber(value) {
  return /^-?\d+(\.\d+)?$/.test(value);
}
