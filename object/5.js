/**
 * Loop through an object and print the key-value pairs with their types

Input:

let myObject = {

name: 'John Doe',
age: 25,
city: 'Example City',
isStudent: true
};
 */

let myObject = {
  name: "John Doe",
  age: 25,
  city: "Example City",
  isStudent: true,
};

for (let key in myObject) {
  if (myObject.hasOwnProperty(key)) {
    // Check if the key is a direct property of the object
    let value = myObject[key];
    console.log(`Key: ${key}, Value: ${value}, Type: ${typeof value}`);
  }
}
