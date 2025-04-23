// Shadowing behaves differently depending on the type of variable declaration:

var x = 5;
{
  let x = 10; // Allowed — block scope doesn't interfere with var's function scope
  console.log(x); // 10
}

let y = 5;
{
  var y = 10; // ❌ SyntaxError: Identifier 'y' has already been declared
}
// You cannot shadow a let with a var — it's considered unsafe as it is illegal shadowing.
// let x = 10; creates a block-scoped variable in the global scope. 
// var x = 20; tries to declare another x in the same global scope 
// (because var is not block-scoped — it’s function/global scoped)