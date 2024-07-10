//Date is an object in JS

let myDate=new Date();
console.log(myDate);
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());
console.log(typeof myDate);     //object

let createdDate = new Date(2012, 11, 12);
console.log(createdDate.toDateString());

//let newCreatedDate = new Date(2012, 11, 12,13,50,9);   //month starts from index 0
let newCreatedDate = new Date("2012-11-13");          // in mm/dd/yyyy  , month start from 1
console.log(newCreatedDate.toLocaleString());

console.log(Math.floor(Date.now()/1000));   //timeStamp, for in sec ,devide from 1000

let newDate =new Date();
console.log(newDate);
console.log(newDate.getMonth());  //6 means july
console.log(newDate.getDay());
console.log(newDate.toLocaleString('default',{weekday:"long",month:"long"}));    //July Wednesday