// Checking if it's an Array
// Instructions:

// Create different variables, each containing either an array or a non-array value.

// Now use isArray to check if each variable is an array.

// Print a message to the console indicating whether each variable is an array or not.

const food = ["Rice", "Ice Cream", "Potato", "Mango"];
const place = "Netrokona";
const foodList = Array.isArray(food);
const placeList = Array.isArray(place);
console.log(foodList);
console.log(placeList);

if (foodList) {
  console.log("It is an array");
} else {
  console.log("Not Array");
}

if (placeList) {
  console.log("It is an array");
} else {
  console.log("Not Array");
}
