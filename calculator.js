'use strict'

class Calculator {
  //write your code here
  constructor (num = 1) {
    this.num = num
  }

  add (inputNum) {
    this.num += inputNum
    return this
  }

  substract (inputNum) {
    this.num -= inputNum
    return this
  }

  multiply (inputNum) {
    this.num *= inputNum
    return this
  }

  divide (inputNum) {
    this.num /= inputNum
    return this
  }

  square () {
    this.num = Math.pow(this.num, 2)
    return this
  }

  squareRoot () {
    this.num = Math.sqrt(this.num)
    return this
  }

  result(){
    return this.num
  }
}
let hasil = new Calculator().add(2).substract(1).multiply(11).divide(2).square().result()
console.log(hasil)
/** note : you can use several features from ecmascript, such as:
* - Classes
* - Default Parameters
* - Destructured Assignment
* - Template Literals
* - Method Chaining
*/

module.exports = Calculator
