// PRIMITIVE
/*  1. String ✅
    2. Number ✅
    3. Boolean ✅
    4. Null(empty) ✅
    5. Undefined ✅
    6. Symbol(making value unique)
    7. BigInt
*/

// NON-PRIMITIVE (REFERENCE TYPE)
/*  8. Array 
    9. Objects 
    10. Functions 
*/

// Is JS a dynamic language or not ?

// EXAMPLES 

const score = 100
const scoreValue = 100.3
const isLoggedIn = false
const outsideTemp = null
let userEmail;              //undefined

console.log(typeof (userEmail));

const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id == anotherId)

const BigNumber = 4564554646465465465464n

// Arrays, Objects, Fnctions

const heros = ["Shaktiman", "naagraj", "doga"];

let myObj = {
    name: "Shivam",
    age: 20,
} 

const myFunction = function(){
    console.log("Hello World");
}

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

// -----------------------------------<Memory Allocation>-------------------------------------------

// stack(primitive) <copy>, Heap(non-primitive) <Reference> 
let myYoutubeName = "shivamthakurdotcom"

let anotherName = myYoutubeName
anotherName = "alliedbeats"

console.log(anotherName);
console.log(myYoutubeName);

let userOne = {
    email: "user1@gmail.com",
    upi: "user@ybl"
}

let userTwo = userOne;

userTwo.email = "Rishabh@google.com"

console.log(userOne.email);
console.log(userTwo.email);







