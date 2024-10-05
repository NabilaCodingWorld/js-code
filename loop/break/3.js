/* 
Write a loop that goes from 1 to 100, but stops (using break) when it encounters the first square number (like 4, 9, 16, etc.)
*/

for (let i = 1; i <= 100; i++) {
  // Check if the current number is a perfect square
  if (Math.sqrt(i) % 1 === 0) {
    break; // Exit the loop when the first square number is found
  }
  console.log(i);
}
