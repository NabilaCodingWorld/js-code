// Write a function called odd_even() which takes an integer value and tells whether this value is even or odd. If even return Even. If odd return Odd

function odd_even(num) {
  if (num % 2 === 0) {
    return "Even"; // Return 'Even' if the number is even
  } else {
    return "Odd"; // Return 'Odd' if the number is odd
  }
}

// Example usage:
const result1 = odd_even(4); // Even number
const result2 = odd_even(7); // Odd number

console.log(result1); // Output: Even
console.log(result2); // Output: Odd
