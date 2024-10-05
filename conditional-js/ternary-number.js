/***

you have two numbers in two variables, called: num1, num2

now declare a variable called result. 
if num1 is bigger than num2 then result will be double of num1. if not, then the value of the variable result will be the sum of num1 and num2.

write a simple if-else. 

also, write it using ternary operator.

 */

// if-else
// const n1 = 20;
// const n2 = 10;

// let result;

// if (n1 > n2) {
//   result = n1 * 2;
//   // console.log(result);
// } else if (n1 < n2) {
//   result = n1 + n2;
// }

// console.log(result);

// ternary

const n1 = 20;
const n2 = 10;

let result;

result = n1 > n2 ? n1 * 2 : n1 + n2;

console.log(result);
