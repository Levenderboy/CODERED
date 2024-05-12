const accountId = 144553
let accountEmail = "shivam@google.com"
var accountPassword = "12345"
accountCity = "Jabalpur" //not a good way
let accountState

//accountId = 2 // not allowed

accountEmail = "rishabh@google.com"
accountPassword= "54321"
accountCity = "Bengaluru"

console.log(accountId);

// rather than typing console.log() multiple times we write console.table([])

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])

/*
Prefer not to use var keyword
because of issue in bloack scope and functional scope
*/ 

//undefined is a value of the variable when nothing is stored in it