//for 

for (let index = 0; index <= 10; index++) {
    const element = index;
    if(element==5){
        //console.log("yeiiiiiiii 5 is my num")
    }
    //console.log(element);
    
}

//console.log(element);     //error


for(let i=1;i<=10; i++){
    //console.log(`Outer loop value: ${i}  ==============`);
    for(let j=1;j<=10;j++){
        //console.log(`Inner loop value: ${j}`)
        //console.log(i+ '*'+ j +'=' +i*j);
    }
}


let myArr=["tennis", "badminton","TT","football"];
for(let i=0;i<myArr.length;i++){
    const element=myArr[i];
    console.log(element);
}



// break and continue keyword=========

for(let i=1; i<+20;i++){
    if(i==5){
        console.log(`detected 5`);
        break;
    }
    console.log(`value of i is ${i}`)
}

for(let i=1; i<+20;i++){
    if(i==5){
        console.log(`detected 5`);
        continue;   //5 will skip
    }
    console.log(`value of i is ${i}`)
}