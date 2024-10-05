// . Checking Array Membership with ‘includes’
// Instructions:

// Create an array of books containing different book.

// Use the includes method to check if the array contains a javascript book.

// Print a message to the console indicating whether the element is present in the array or not.

const books = ["Bangla", "CSE", "EEE", "ICT", "ME"];

console.log(books);

const hasJavaScriptBooks = books.includes("javascript");

console.log(hasJavaScriptBooks);

if (hasJavaScriptBooks) {
  console.log("Js book is present");
} else {
  console.log("missing");
}
