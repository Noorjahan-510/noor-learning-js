//array
//JavaScript arrays are resizable and can contain a mix of different data types. (When those characteristics are undesirable, use typed arrays instead.)
const arr=[1,2,3,4,5];
const myTech=["java","JavaScript","CSS","SQL"];
//console.log(arr[2]);

const myarr= new Array(1,2,4,6);

//Array methods

// myarr.push(8,10,12);
// console.log(myarr);
// myarr.pop();    //pop the last element from array
// console.log(myarr);

// myarr.unshift(9);
// console.log(myarr);   //[ 9, 1, 2, 4, 6 ]
// myarr.shift();    //[ 1, 2, 4, 6 ]
// myarr.shift();      //[2, 4, 6]
// console.log(myarr);   //[  2, 4, 6 ]


// console.log(myarr.includes(9));   //false bcz 9 is not present in array
// console.log(myarr.includes(2));   //true bcz 2 is  present in array
// console.log(myarr.indexOf(4));    //2


// const newarr= myarr.join();     // join() returns array in String
// console.log(myarr);   //[ 1, 2, 4, 6 ]
// console.log( newarr);   //1,2,4,6


//slice & splice

console.log("A ",myarr);
const mynewarr1=myarr.slice(1,3);              //doesn't manipulate the original array


console.log("B ",myarr);

console.log("slice ",mynewarr1);
console.log("after slice,original array is ",myarr);
const mynewarr2=myarr.splice(1,3);                   //splice manipulate the original Array

console.log("splice  ", mynewarr2);  

console.log("after splice,original array is ",myarr);



