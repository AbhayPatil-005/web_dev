/* JavaScript String trim()
The trim() method removes whitespace from both sides of a string: 
*/

let text = "      Hello World!      ";
let test1 = "test1: "+ text.trim(); 
console.log(test1) // outputs "test1: Hello World!"

/*
JavaScript String trimStart()
ECMAScript 2019 added the String method trimStart() to JavaScript.
The trimStart() method works like trim(), but removes whitespace only from the start of a string.*/
let test2 = "    Hello World!    ";
console.log("test2: "+ test2.trimStart()); // outputs "test2: Hello World!    "


/*
JavaScript String trimEnd()
ECMAScript 2019 added the string method trimEnd() to JavaScript.
The trimEnd() method works like trim(), but removes whitespace only from the end of a string.
*/
let test3 = "    Hello World!    "
console.log("test3: "+ test3.trimEnd()); // outputs "test3:     Hello World!"