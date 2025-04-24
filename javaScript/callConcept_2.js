//  CALL CONCEPT IN JAVASCRIPT

// An object with a property `val`
var obj = {
    val: 100
  }
  
  // A function that adds `this.val` and argument `a`
  function fun(a) {
    console.log("this.val:", this.val);
    console.log("a:", a);
    console.log("this.val + a:", this.val + a); // NaN if `a` is undefined
  }
  
  console.log("Calling fun without second argument:");
  fun.call(obj); // Output: NaN because a is undefined
  
  console.log("\nCalling fun with second argument:");
  fun.call(obj, 50); // Output: 150 because a is 50

  
  // 100 + undefined → NaN