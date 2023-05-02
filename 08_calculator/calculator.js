const add = function(...args) {
	let result = 0;
  for(let i = 0; i < args.length; i++){
    result += args[i];
  }
  return result;
};

const subtract = function(num1, num2) {
	let result = num1 - num2;
  return result;
};

const sum = function(arr) {
	let result = 0;
   for(let i = 0; i < arr.length; i++){;
   result += arr[i];
   }
  return result; 
};

const multiply = function(arr) {
  let result = arr[0];
   for(let i = 1; i < arr.length; i++){;
   result *= arr[i];
   }
  return result; 
};

const power = function(num1, num2) {
	let result = num1 ** num2;
  return result;
};

const factorial = function(num) {
	result = 1;
  for( let i = 1; i <= num; i++){
    result *= i;
  }
  return result;
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
