const numbers = [12, 98, 5, 41, 23, 78, 46];
const evenNumbers = [];

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] % 2 === 0) {
    // Check if the number is even
    evenNumbers.push(numbers[i]); // Add it to the evenNumbers array
  }
}

console.log(evenNumbers); // Output: [12, 98, 78, 46]
