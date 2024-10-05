/* 
Write a while loop that adds numbers starting from 1, but stops (using break) as soon as the sum reaches or exceeds 100
*/

let sum = 0;
let i = 1;

while (true) {
  sum += i; // Add the current number to the sum

  if (sum >= 100) {
    break; // Exit the loop when the sum is greater than or equal to 100
  }

  i++; // Increment the number
}

console.log("The sum is:", sum);
