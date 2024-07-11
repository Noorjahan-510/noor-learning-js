
let a=300;

if(true){let a=10;
const b=30;
var c=20;
//console.log("INNER:",a)
}



//console.log(a);
//console.log(b);
//console.log(c);    //var


function firstf(){
    const username="Noor";
    function secondf(){
        const web="youtube";
        //console.log(username)  //child function can access the variable of parent function
    }
    //console.log(web);   //will give error
    secondf();
}
firstf();


if(true){
    const username="Noor";
    if(username=="Noor"){
        const web=" youtube"
        //console.log(username + web);
    }
    //console.log(web);    //error
}
//console.log(username);   //error



//------------intresting------------------

console.log(addOne(5));
function addOne(num){
    return num+1;
}


//addTwo(5)       //Cannot access 'addTwo' before initialization
const addTwo=function(num){
    return num + 2
}

console.log(addTwo(5));