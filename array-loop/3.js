/**
 * Use a for...of loop to concatenate all the elements of an array into a single string.

Input: var numbers = ['Tom', 'Tim', 'Tin', 'Tik']

Output:

'TomTimTinTik'
 */

var numbers = ["Tom", "Tim", "Tin", "Tik"];
let concatenatedString = "";

for (const name of numbers) {
  concatenatedString += name; // Append each element to the concatenatedString
}

console.log(concatenatedString); // Output: 'TomTimTinTik'
