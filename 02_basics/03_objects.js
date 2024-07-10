//singleton

//*if litrals ki trh declare karte h to singleton nhi bnta hai

//object litrals
const mysymbol= Symbol("key1");
const JsUser={
    name:"Noor",
    age:"21",
    location:"gurgaon",
    isLoggedyIn:false,
    gmail:"noor@google.com",
    loginDays:["Mon","wed"],
    "last name":"khatoon",
    [mysymbol]:"key1"       //syntax imp*
}

console.log(JsUser.gmail);
console.log(JsUser["gmail"]);                 //in some cases we can't access value from . then need to access from bracket []
console.log(JsUser["last name"]);
console.log(typeof JsUser[mysymbol]);  //*syntax
console.log(typeof mysymbol);


JsUser.age=24;
//Object.freeze(JsUser);          //freez the object, after freezing changes wont be done
JsUser.age=26;
console.log(JsUser);

JsUser.greetings=function(){
    console.log(`Namaste ${this.name}!`)
}

console.log(JsUser.greetings());