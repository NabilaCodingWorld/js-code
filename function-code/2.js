/**
 * Take a number if the number is odd multiply it by 2 and return the result. If the number is even divide it by two and return the result.
 */

function number(n) {
  if (n % 2 != 0) {
    return n * 2;
  } else {
    return n / 2;
  }
}

const num = number(8);
console.log(num);
