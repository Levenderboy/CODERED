// Lets study the modern way of wrinting js codes for stinggs
const name = "shivam "
const repoCount = 50

console.log(name + repoCount + " Value");           // BAD WAY 

//STRING INTERPOLATION --> YOU MAKE PLACEHOLDERS.
//String interpolation
console.log(`Hello my name is ${name} and my repository count is ${repoCount}`);

const gameName = new String('shivammv')
console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('m'));

const newString = gameName.substring(0, 5)
console.log(newString);

const anotherString = gameName.slice(0, 6);
console.log(newString);

const anotherString1 = gameName.slice(-7, 5)
console.log(anotherString1)

const newStringOne = "    Shivam      "
console.log(newStringOne);
console.log(newStringOne.trim());

