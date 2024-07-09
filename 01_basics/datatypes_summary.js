/* Primitive
7 types: String, Number, Boolean, null, Undefined, Symbol, BigInt
*/

const score=100;
const scoreVal=100.3;

const isLoggedIn=false;
const outSideTemp=null;
let userMail;

const id= Symbol('123');
const newId=Symbol('123');

console.log(id===newId);  //false bcz symbol return unique value

//const bigNum= 345678987655433222345566n;


/*Reference (non primitive)
Array, Objects, Functions
*/

const student=["Noor", "Phool","Shah"]; //Array type

let stuDetails={                       //this is Object
    name:"alia",
    age:28,
}

const myFunction= function(){          //Function type
    console.log("hi guys");
}


console.log(typeof myFunction);  //function   
console.log(typeof student);     //object
console.log(typeof stuDetails);  //object

/* for study link

https://262.ecma-international.org/5.1/#sec-11.4.3

*/