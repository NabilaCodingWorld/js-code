/**
 * What will be the result of the following codes:

var a = isNaN(‘11’);

var a = isNaN(2-10);

Explain your answers.
 */

/**
 * Let's analyze each line of code:

var a = isNaN('11');

The isNaN function checks whether the value is NaN (Not-a-Number). In this case, '11' is a string that can be coerced into a number, so isNaN('11') returns false. Thus, a will be false.
var a = isNaN(2 - 10);

Here, 2 - 10 evaluates to -8, which is a valid number. Therefore, isNaN(-8) also returns false. So, a will again be false.
In summary:

For isNaN('11'), the result is false.
For isNaN(2 - 10), the result is also false.
 */
