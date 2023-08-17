const accountId= 12345
let accountEmail = "kp@gmail.com"
var accountPassword ="1232123"
accountCity = "Pune"

console.log(accountId);

/*
Prefer not use "var"
because of issue in block scope and functional scope
*/

console.table([accountId, accountEmail,accountPassword, accountCity])