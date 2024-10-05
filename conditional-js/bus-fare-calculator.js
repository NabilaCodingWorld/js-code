/***

Ticket fare Calculator
    - Children (age < 10): free
    - Students get a 50% discount
    - Senior citizens (age >= 60) gets a 15% Discount
    - Otherwise Regular ticket fare 800 tk
*/

let age = 17;

let ticketFare = 800;

if (age < 10) {
  console.log("free");
} else if (age >= 60) {
  let discount = 800 * 0.15;
  let finalFare = ticketFare - discount;
  console.log("Their T:", finalFare);
} else if ((age >= 10 && age <= 18) || (age >= 18 && age <= 25)) {
  let discount = 800 * 0.5;
  let finalFare = ticketFare - discount;
  console.log("Their TK: ", finalFare);
} else {
  console.log("Regular ticket fare 800 tk");
}
