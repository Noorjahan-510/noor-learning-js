//------------------Object's de-structuring---------------------

const course={
    cname:"javaScript",
    price:"499",
    cInstructor:"Noorjahan"
}

//course.cInstructor     //normal caaling

//const {cInstructor}=course   //object de-structuring
//console.log(cInstructor);    //Noorjahan
const {cInstructor: instructor}=course   //object de-structuring
console.log(instructor);       //Noorjahan

// {
//     "name":"Noor",
//     "age":24,                       //JSON
//     "add":"ggn"
// }

[                           //APIs in array fromat 
    {},                     //array objects   
    {},
    {}
]
