//if


// const temprature=51;
// if(temprature<50){
//     console.log("less than 50")
// }
// else{
//     console.log("temprature is greater than 50");
// }

// const score =200;
//  if(score>100){
//     let power="fly";
//     console.log(`user power: ${power}`);
//  }
// console.log(`user power: ${power}`);  //erroe: power is not defined

const balance=1000;

//if(balance>500) console.log("test"),console.log("test1"); //not a good way

// if(balance<500){
//     console.log("less than 500");
// }else if(balance<750){
//     console.log("less than 750");
// }else if(balance<950){
//     console.log("less than 950");
// }else{
//     console.log("greater than 1000")
//}


const isuserLoggedIn =true;
const debitCard=true;
const loggedInFromGoogle=false;
const loggedInFromemail=true;

if(isuserLoggedIn && debitCard){
    console.log("Allow to buy courses")
}

if(loggedInFromGoogle||loggedInFromemail){
    console.log("user logged in");
}