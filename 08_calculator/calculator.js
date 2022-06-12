const add = function(operandOne, operandTwo) {
	return operandOne + operandTwo;
};

const subtract = function(operandOne, operandTwo) {
	return operandOne - operandTwo;
};

const sum = function(arr) {
  let total = 0;
	for (let i = 0; i < arr.length; i++) {
    total += arr[i];
  }
  return total;
};

const multiply = function(arr) {
  let total = 1;
  for (let i = 0; i < arr.length; i++) {
    total *= arr[i];
  }
  return total;
};

const power = function(base, exp) {
	return base ** exp;
};

const factorial = function(base) {
	let total = 1;
  for (let i = base; i > 0; i--) {
    total *= i
  }
  return total;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
