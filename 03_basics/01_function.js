function myName(){
    console.log("N");
    console.log("O");
    console.log("O");
    console.log("R");
}

//myName();

function addTwoNum(num1, num2){
    console.log(num1+num2);
}

// addTwoNum(4,6);     //10
// addTwoNum(4,"6");   //46
//const res=addTwoNum(4,6);
//console.log("Result: ", res); //Result:  undefined


function add2Num(no1, no2){
   return no1+no2;
}

const result= add2Num(4,5);
//console.log("Result: ",result);   //Result:  9


function loginMessage(user){
    if(user===undefined){
        console.log("please enter a username");
        return;
    }
  return `${user} just logged in`
}

//console.log(loginMessage());      //undefined 
//console.log(loginMessage("Noor"));  //Noor just logged in      



function addToCart(...data){     //here ... is rest operator
  return data;
}

//console.log(addToCart(100,200,499,598));   //[ 100, 200, 499, 598 ]

///Object
const user={
    userName:"Noor",
    id:123,
}
function handalObj(anyObj){
    console.log(`username is ${anyObj.userName} and id is ${anyObj.id}`)
}
handalObj(user)     //here passing the object name

handalObj({            //here direcxt paasing the object to the function
    userName:"Noork",
    id:987

})

///Array
const newArray=[20,30,10,40]

function returnValueFromArray(getArray){
    return getArray[2];
}

console.log(returnValueFromArray(newArray));            //paasing variable of array
console.log(returnValueFromArray([10,100,1000,500,200,50]));   //paasing array direct