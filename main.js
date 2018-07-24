'use strict'

const Calculator = require("./calculator.js")

// execute function on calculator.js in here
let calculator = new Calculator(3)

calculator.add(0).multiply(3).squareRoot()
console.log(calculator.result());
