// There are 4 methods for extracting string characters:
// 1.The at(position) Method
// 2.The charAt(position) Method
// 3.The charCodeAt(position) Method
// 4.Using property access [] like in arrays


// The charAt() method returns the character at a specified index (position) in a string:
let text = "Hello, how are you?"
let test1 = "test1: "+text.charAt(4)
console.log(test1) // outputs "o"

// The charCodeAt() method returns the code of the character at a specified index in a string:
// The method returns a UTF-16 code (an integer between 0 and 65535).
let test2 = "test2: "+ text.charCodeAt(4)
console.log(test2) // outputs "111" which is a code point of utf 16 for lowercase "o".

// ES2022 introduced the string method at()
// ***The at() method returns the character at a specified index (position) in a string.
// The at() method is supported in all modern browsers since March 2022:***
let test3 = text.at(2);
console.log("test3: "+ test3); //outputs "l" which is at the index 2.

// Property access using '[]'
let test4 = text[0];
console.log("test4: "+test4); // this outputs "H" which is at the index 0.


