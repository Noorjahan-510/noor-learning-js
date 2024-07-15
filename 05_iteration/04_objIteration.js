//for in

const myObj={
    js:'javaScript',
    cpp:'C++',
    cs:"csharp",
    rb:'ruby',
    swift:"swift by apple"
}


for(const key in myObj){
    //console.log(`shortcut is for ${myObj[key]} is ${key}`);
}


const programming=["js","rb","py","java","cpp"];
for (const key in programming){
    //console.log(key);
}


// const newMap=new Map();
// newMap.set('IN',"India");
// newMap.set('USA',"united state of America");
// newMap.set('AU',"Australlia")
// //console.log(newMap);

// for(const [key,value] in newMap){
//     console.log(key,':-',value)
// }                                        //------Map is not iterable in 'for in' loop