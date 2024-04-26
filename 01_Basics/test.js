const accountId = 144553;
let accountEmail = "jparhi.parhi87@gmail.com";
var accountPassword = "12345";
accountCity= "Jaipur";
let accountState;

// accountId = 2;
console.log(accountId);
accountEmail = "hc@hc.com";
accountPassword= "21212311";
accountCity = "Bengalore";
/* 
Prefered not to use var because of issue in block scope and functional scope. 
*/
console.log(accountId);
console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);