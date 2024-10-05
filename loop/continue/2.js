/*
display odd number from 55 to 85 and skip the numbers divisible by 5.
*/

for (let i = 55; i <= 85; i++) {
  // Check if the number is divisible by 5 and skip it
  if (i % 5 == 0) {
    continue;
  }
  // Check if the number is odd and print it
  if (i % 2 !== 0) {
    console.log(i);
  }
}
