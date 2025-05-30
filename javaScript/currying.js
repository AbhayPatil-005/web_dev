// Currying is a technique in JavaScript where a function with multiple arguments 
// is transformed into a sequence of functions, each taking a single argument.
// It helps create reusable and modular code — especially useful in functional programming.

// Original multiply function taking two arguments
let multiply = function (x, y) {
    console.log(x * y);
};

// Using .bind() to "pre-set" the first argument (x = 2)
// This is an example of partial application (a step toward currying)
let multiplyByTwo = multiply.bind(this, 2);
// Now multiplyByTwo is a new function expecting only y
multiplyByTwo(5); // Output: 10 (2 * 5)

// Another partially applied function with x = 3
let multiplyByThree = multiply.bind(this, 3);
multiplyByThree(5); // Output: 15 (3 * 5)

// Binding both arguments x = 2, y = 3 — full application
let multiplyByTwo1 = multiply.bind(this, 2, 3);
multiplyByTwo1(); // Output: 6 (2 * 3)