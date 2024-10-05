// Write a function called count_zero() which will take a binary string (Binary string is a string which is consist of only 0 and 1) as parameter and count how many 0’s are there in that string.

function count_zero(binaryString) {
  let count = 0;

  // Loop through each character in the string
  for (let char of binaryString) {
    if (char === "0") {
      count++; // Increment count if the character is '0'
    }
  }

  return count; // Return the total count of '0's
}

// Example usage:
const binaryStr = "1101001010";
const zeroCount = count_zero(binaryStr);
console.log(zeroCount); // Output: 5
