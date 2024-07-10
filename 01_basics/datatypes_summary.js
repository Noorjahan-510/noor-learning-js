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


//stack(primitive) & Heap memory management (Non primitive)
console.log("---------stack---------")

let myCityname="Siwan"

let myCurrentCity=myCityname;   //myCurrentCity is a copy of myCityName not reference of original

myCurrentCity="gurgaon";       //we changed the copy's value

console.log(myCityname);    //siwan  (myCityName is not affected by the change in myCurrentCity)
console.log(myCurrentCity); //gurgaon

console.log("---------Heap---------")    //non-primitive means it will go in heap, and it'will not give a copy it'll give reference of original value.
let userFirst ={                 //object
    email:"user1@google.com",
    upi:"user1@ybl",
}
let userSecond =userFirst;    //obj2(userSecond) is a reference to the same object in the heap

userSecond.email="noor@google.com";

console.log(userFirst.email);  //noor@google.com (obj1(userFirst) is affected by the change through obj2)
console.log(userSecond.email); //noor@google.com



/* Note:In Stack,When you assign a primitive value to a variable, a copy of the value is made. 

Changes to one variable do not affect copies stored in other variables.

When you store primitive data types (like numbers, strings, booleans, null, undefined, symbols, and bigints) in variables, these values are stored directly on the stack. Each variable has its own copy of the value, meaning:
Mutability: Changing one variable does not affect others.

*Heap (Reference Types):
Objects, arrays, and functions are stored in the heap. When you assign an object or an array to a variable, the variable stores a reference (or pointer) to the actual value in the heap, not the value itself. This means:
Mutability: Changing the contents of an object or array through one reference will affect all references to that object or array.

Reference Assignment: When you assign an object, array, or function to a variable, the variable stores a reference to the location in the heap where the actual value is stored.

Shared References: Multiple variables can reference the same object, and changes made through one reference are visible to others.

*Key Points to Remember
Primitive Types: Stored on the stack, each variable has its own independent copy. Changes to one variable do not affect others.
Reference Types: Stored on the heap, variables store references to the same object. Changes to the object through one reference are visible to all references.

*/