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


