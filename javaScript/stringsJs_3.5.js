/*
JavaScript String Padding
ECMAScript 2017 added two new string methods to JavaScript: 
padStart() and padEnd() to support padding at the beginning and at the end of a string.
*/
let text = "5";
// JavaScript String padStart()
/* The padStart() method pads a string from the start.
It pads a string with another string (multiple times) until it reaches a given length. */
let test1 = text.padStart(4,"0");
console.log("test1: "+test1); // outputs "test1: 0005"
//Note
//The padStart() method is a string method.
//To pad a number, convert the number to a string first.

// JavaScript String padEnd()
/*
The padEnd() method pads a string from the end.
It pads a string with another string (multiple times) until it reaches a given length.
*/
let test2 = text.padEnd(4,"0");
console.log("test2: "+ test2); // outputs "test2: 5000"


/* The repeat() method returns a string with a number of copies of a string.
- method returns a new string.
- method does not change the original string.    
*/
let text2 = "Hello world!"
let test3 = text2.repeat(2);
console.log(test3) // outputs "Hello world!Hello world!"
//returns a new string containing the copies.

/*
Replacing String Content
- The replace() method replaces a specified value with another value in a string:
- The replace() method does not change the string it is called on.
- The replace() method returns a new string.
- The replace() method replaces only the first match
*/ 
let text3 = "Please visit Microsoft!";
let test4= text3.replace("Microsoft", "W3Schools");
console.log(test4) // outputs "Please visit W3Schools!"

/*
 JavaScript String ReplaceAll()
 In 2021, JavaScript introduced the string method replaceAll(): 
 */
let text4 = "I love cats. Cats are very easy to love. Cats are very popular."
text4 = text4.replaceAll('Cats', 'Dogs');
text4 = text4.replaceAll('cats', 'dogs'); 
console.log(text4)