const userMail=[];

if(userMail){
    console.log("got user email");
}else{
    console.log("don't have user email");
}

/*flase value==========
false, 0, -0, BigInt 0n, "", null, undefined, NaN

truthy value===========
"0", 'false', " ", [], {}, function(){},

*/

// if(userMail.length===0){
//     console.log("Array is empty")
// }

const emptyObj={};
if(Object.keys(emptyObj).length===0){
    console.log("Object is empty");
}


//Nullish coaliscing Operator(??):null undefined---------------

let val1;
//val1=5??10;       //5
//val1=null??10     //10
//val1= undefined??15    //15
val1=null??10??20     //10

console.log(val1);


//Ternary Operator-----------------------
//condition? true : false

const iceTeaPrice=100;
 iceTeaPrice<=80? console.log("less than 80") : console.log("more than 80");