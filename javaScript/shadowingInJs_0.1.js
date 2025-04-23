// Shadowing in Js

let a = 10;

function example() {
  let a = 20; // This 'a' shadows the outer 'a' inside this function
  console.log(a); // Output: 20
}

example();
console.log(a); // Output: 10

// "The global a is 10 Inside the function, a new a = 20 is declared → this shadows the global a. 
// So, inside the function, the global a is inaccessible