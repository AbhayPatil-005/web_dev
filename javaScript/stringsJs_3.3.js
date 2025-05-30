// Converting to Upper and Lower Case
let text = "Hello World!"

//JavaScript String toUpperCase()
let test1 = "test1: " + text.toUpperCase();
console.log(test1);

//JavaScript String toLowerCase()
let test2 = "test2: " + text.toLocaleLowerCase();
console.log(test2);

//JavaScript String concat()
let test3 = "test3: " + test1.concat(" + ",test2);
console.log(test3);

/*
-> All string methods return a new string. They don't modify the original string.
Formally said-> Strings are immutable: Strings cannot be changed, only replaced.
*/