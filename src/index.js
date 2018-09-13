// FIRST IMPLEMENTATION (part test passing)
class SmartCalculator {
  constructor(initialValue) {
    this.numValue = initialValue;
  }

  toString() {
    return this.numValue;
  }

  valueOf() {
    return this.numValue;
  }

  add(number) {
    this.numValue+=number;
    return this;
  }
  
  subtract(number) {
    this.numValue-=number;
    return this;
  }

  multiply(number) {
    this.numValue*=number;
    return this;
  }

  devide(number) {
    this.numValue/=number;
    return this;
  }

  pow(number) {
    this.numValue = this.numValue**number;
    return this;
  }
}

module.exports = SmartCalculator;

//  SECOND IMPLEMENTATION (test passing)
class SmartCalculator {
  constructor(initialValue) {
    this.tempValue = initialValue.toString();
  }
  
  add(number) {
    this.tempValue += '+' + number;
    return this;
  }
  
  subtract(number) {
    this.tempValue += '-' + number;
    return this;
  }

  multiply(number) {
    this.tempValue += '*' + number;
    return this;
  }

  devide(number) {
    this.tempValue += '/' + number;
    return this;
  }

  pow(number) {
    this.tempValue+= '**' + number;
    return this;
  }
  valueOf(){
    return eval(this.tempValue);
  }
}

module.exports = SmartCalculator;
