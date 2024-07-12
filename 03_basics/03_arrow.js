const user ={
    username:"Noor",
    price:999,

    welcomeMessage:function(){
        console.log(`${this.username}, welcome to website`);
        console.log(this);
    }
    }
    //  user.welcomeMessage();
    //  user.username="Sachin";
    //  user.welcomeMessage();

    //console.log(this);

    // function chai(){
    //     let username="Noor"
    //     console.log(this)     //this will work with function
    //     // console.log(this.username);   //undefined, not working with object
    // }
    // chai();

    // const chai=function(){
    //     let username="hitesh"
    //     console.log(this.username)//undefined
    // }


    // const chai=()=>{
    //     let username="hitesh"
    //     console.log(this.username)//undefined
    //     console.log(this); //{}  empty paranthesis
    // }
    // chai();

// const addNum=(num1,num2)=>{
//     return num1+num2       //in curley brasis need to write 'return'
// }

//const addNum=(num1,num2)=> num1+num2
//const addNum=(num1,num2)=> (num1+num2)  //in paranthesis, no need to write 'return'

const addNum=(num1,num2)=> ({username:"Noori"})

console.log(addNum(8,9));


// const myArr=[2,4,6,8];    //will see later
// myArr.forEach()