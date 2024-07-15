//for of

const arr=[1, 2, 3, 4, 5]

for (const num of arr){
    //console.log(num)
}

const greetings="Hello world!"
for(const greet of greetings){
    //console.log(`Each char is ${greet} `);

}


//Maps--------------

const newMap=new Map();
newMap.set('IN',"India");
newMap.set('USA',"united state of America");
newMap.set('AU',"Australlia")
//console.log(newMap);

for(const [key,value] of newMap){
    console.log(key,':-',value)
}

//Object iteration in next file-----

