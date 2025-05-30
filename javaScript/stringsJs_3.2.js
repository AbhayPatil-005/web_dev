/* Extracting String Parts
->There are 3 methods for extracting a part of a string:
1.slice(start, end)
2.substring(start, end)
3.substr(start, length)
*/

let text = "Apple, Banana, Kiwi";
// JavaScript String slice()
/* 
- slice() extracts a part of a string and returns the extracted part in a new string.
- The method takes 2 parameters: start position, and end position (end not included).
*/
let test1 = text.slice(7,13);
console.log("test1: " + test1); // outputs "Banana"

// If you omit the second parameter, the method will slice out the rest of the string:
let test2 = text.slice(7);
console.log("test2: "+ test2); // outputs "Banana, Kiwi"

// If a parameter is negative, the position is counted from the end of the string:
let test3 = text.slice(-12,-6);
console.log("test3: "+ test3); // outputs "Banana"

/* ---JavaScript String substring()---
substring() is similar to slice().
The difference is that start and end values less than 0 are treated as 0 in substring().
If you omit the second parameter, substring() will slice out the rest of the string.
*/
let test4 = text.substring(7,13);
console.log("test4: "+test4) // outputs "Banana"
