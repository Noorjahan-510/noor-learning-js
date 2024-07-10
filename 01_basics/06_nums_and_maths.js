const score= 100;

const balance =new Number(50);
console.log(balance);

console.log(balance.toString().length);
console.log(balance.toFixed(2));

const otherNum= 123.4564;

console.log(otherNum.toPrecision(4));

const anotherNum= 100000000;

console.log(anotherNum.toLocaleString('en-IN'));


///--------------------------Maths---------------------------
console.log('-------------Math-------------------');
console.log(Math);

console.log(Math.abs(-5));
console.log(Math.PI);

console.log(Math.ceil(4.5));  //5
console.log(Math.floor(4.5));  //4

console.log(Math.max(10,4,6,7,8));

console.log(Math.random());
console.log(Math.floor(Math.random()*10+1));  // 0-9 numbers will get

const min=10;
const max=20;

console.log(Math.floor(Math.random()*(max-min+1)+min)); //will get value b/w 10-20

