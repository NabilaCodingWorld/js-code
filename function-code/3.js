/**
 * Write a function called make_avg() which will take an array of integers and the size of that array and return the average of those values.
 */
function make_avg(arr, size) {
  let sum = 0;

  // Calculate the sum of the array elements
  for (let i = 0; i < size; i++) {
    sum += arr[i];
  }

  // Calculate the average
  const average = sum / size;

  return average; // Return the average
}

// Example usage:
const numbers = [10, 20, 30, 40, 50];
const size = numbers.length; // Size of the array
const avg = make_avg(numbers, size);
console.log(avg); // Output: 30
