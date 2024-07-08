const accountId=123;
let account_mail= "noor@gmail.com";
var accountcity="Patna";
accountnumber=123456;
let accountState;

//accountId=12; //not allowed bcz const keyword is used
account_mail="khatoonoor@gmail.com";
accountcity="jaipur";
accountnumber=91929394
/*
prefer not to use var
because of issue in block scope and functional scope
*/
console.log(accountId);
console.table([accountId,account_mail,accountcity,accountnumber,accountState])