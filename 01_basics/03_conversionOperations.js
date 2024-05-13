/*
let score = "33"    // 33
score = "33abc"     // NaN
score = null        // 0
score = true        // 1 // false => 0
score = undefined   // NaN
score = "shivam"    // NaN


console.log(typeof score);
console.log(typeof(score));

let valInNumber = Number(score)
console.log(typeof(valInNumber))
console.log(valInNumber)

let isLoggedIn = 1
let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn)

// Empty String "" => false 
// Full String "Shivam" => true 

let someNumber = 33
let stringNumber = String(someNumber)
console.log(stringNumber)
console.log(typeof(stringNumber))

*/
// ************* OPERATIONS **************//

let value = 3
let negValue = -value
console.log(negValue);

let str1 = "Hello"
let str2 = " Shivam"
console.log(str3 = str1 + str2);
console.log(typeof(str3));

console.log("1" + 2);
console.log(1 + "2");
console.log("1" + 2 + 2);
console.log(1 + 2 + "2");

console.log(+true);
console.log(+"");

let num1, num2, num3 
num1 = num2 = num3 = 2 + 2

let gameCounter = 1000
a = gameCounter++;
b = ++gameCounter
console.log(a, b);      //100 102

// ASSIGNMENT
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Increment
// https://tc39.es/ecma262/multipage/abstract-operations.html#sec-type-conversion
