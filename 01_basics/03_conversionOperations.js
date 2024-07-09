let score ="undefined";

 console.log(typeof score);
 console.log(typeof(score));

 let valInNum= Number(score);
 console.log(typeof valInNum);
 console.log(valInNum);

 //"33": 33
 //"33abc": NaN
 //true :1; false:0

 let isLoggedIn="ad";  // "" ,1,0

 let booleanIsLoggedIn= Boolean(isLoggedIn);
 console.log(booleanIsLoggedIn);

 //1:true; 0:false
 //"" :false
 //"Noor": true


 let anyNum= 40;
 let strNum= String(anyNum);
 console.log(typeof strNum);

 console.log("-----------Operations------------");
 //*******************Operations****************/

 let value=3;
 let negVal= -value;
 console.log(negVal);

 //console.log(2+2);
 //console.log(2-2);
 //console.log(2*2);
 //console.log(2**3);
 //console.log(2/3);
 //console.log(2%3);
 console.log("-----------------------");

 let str1="Hi";
 let str2=" Noor";
 let str3 = str1+str2;

 console.log(str3);

 console.log("-----------------------");

 console.log ("1"+2);
 console.log(1+"2");
 console.log("1"+2+2); //string in first so it;s treating as string
 console.log(1+2+"3"); //string in last so phle wali operation ho gyi

 //it's not a good way of doing code , it's confusing use paranthesis.
 
 console.log("-----------------------");
 console.log(+true);  //1
 console.log(+"");   //0

 console.log("-----------------------");

 let numCount = 100
 numCount++;   // or ++numCount
 console.log(numCount);   //101

