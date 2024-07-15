const coding = ["c","c++","c#","java"]
// coding.forEach(function (item){
//     console.log(item);
// });

// coding.forEach( (item)=>{
//     console.log(item);
// });

// function printMe(item){
//     console.log(item);
// };

// coding.forEach(printMe);

// coding.forEach((item,index,arr)=>{
//     console.log(item,index,arr);
// })

const myCoding=[
    {
        langName:"javascript",
        fileName:"abc.js"
    },
    {
        langName:"java",
        fileName:"abc.java"
    },
    {
        langName:"python",
        fileName:"abc.py"
    }
]

myCoding.forEach((item)=>{
    console.log(item.langName);
})