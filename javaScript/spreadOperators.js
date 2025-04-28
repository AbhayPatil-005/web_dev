// There is an Object which stores...
const obj1 = {
    key1: 'value1',
    key2: 'value2'
};
// Now you want to create an object with existing key-value pairs, then 
const obj2 = obj1; // but this creation actually doesn't create a new values instead it creates the reference to the obj1
// now if you try to change the key1's value from obj2
obj2.key1 = 'value3';
// but this actually creates changes in the obj1 key1 because obj2 is referring to obj1


// SO THIS WHERE THE " SPREAD OPERATOR " COMES IN HANDY (...)

// Expands arrays or objects into individual elements/properties.
// Useful for cloning, merging, and passing multiple values easily.
// If you are using "===" then the objects must have same memory reference to be true
// for integers and strings, if values are same then it gives true

// now we will actually create new object while copying the obj1 with same values using spread operators
const obj3 = {...obj1};
obj3.key1 = 'new values';
console.log(obj3); // { key1: 'new values', key2: 'value2' } -this is the newly created object with a new memory. 
console.log(obj1); // { key1: 'value3', key2: 'value2' } -this is the original object, you can see that the keypair values are not changed.
// we can also add the new values using spread operators
const obj4 = {...obj3, key3:'value3'};// it copies the elements from obj3 and also adds the new elements. 
console.log(obj4); //{ key1: 'new values', key2: 'value2', key3: 'value3' }