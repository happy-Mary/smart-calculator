class SmartCalculator {
  constructor(initialValue) {
    this.num = Number(initialValue) || 0;
    this.exprArr = [this.num];
  }
  
  add(number) {
    this.exprArr.push(`+${number}`);
    return this;
  }
  
  subtract(number) {
    this.exprArr.push(`-${number}`);
    return this;
  }

  multiply(number) {
    this.exprArr.push(`*${number}`);
    return this;
  }

  devide(number) {
    this.exprArr.push(`/${number}`);
    return this;
  }

  pow(number) {
    this.exprArr.push(`**${number}`);
    return this;
  }

  valueOf() {
    return eval(this.exprArr.join(''));
  }
}

module.exports = SmartCalculator;

