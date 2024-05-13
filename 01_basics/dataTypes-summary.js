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





