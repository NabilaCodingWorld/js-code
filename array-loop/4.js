/**
 * Reverse the words of a sentence. Only the position of the word will be reversed. check out the output

Input: const statement = 'I am a hard working person'

Output:

'person working hard a am I'
 */

const statement = "I am a hard working person";

// Step 1: Split the sentence into an array of words
const wordsArray = statement.split(" ");

// Step 2: Reverse the array of words
const reversedWordsArray = wordsArray.reverse();

// Step 3: Join the reversed array back into a string
const reversedStatement = reversedWordsArray.join(" ");

console.log(reversedStatement); // Output: 'person working hard a am I'
