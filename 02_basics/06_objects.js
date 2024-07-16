//object constructor

function Person(first, last, age, eye) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eye;
    this.nationality = "Indian";   //default value for all objects

  }
  
  // Create a Person object
  const myFather = new Person("John", "Doe", 50, "blue");
  
  // Display age
  console.log(`my Father age is: ${myFather.age}`);
  console.log(`my Father nationality is: ${myFather.nationality}`);

  const myMother= new Person("Maimun","Nisha",30,"brown");
  console.log(`mother's age is ${myMother.lastName}`);

/*Note:
In the constructor function, this has no value.

The value of this will become the new object when a new object is created.

A value given to a property will be a default value for all objects created by the constructor:


function Person(first, last, age, eye) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eye;
     this.nationality = "English";   //default value for all objects
  }
*/



//Object Protection Methods------------
//------------------------seal();-----------------
const objA={empId:12,empName:"Noor",empCity:"GGN"};

Object.seal(objA);
objA.empDesignation="Developer";
console.log(objA);     // { empId: 12, empName: 'Noor', empCity: 'GGN' } designation can't be added

console.log(Object.isSealed(objA));   

//------------------------preventExtensions------------------------------
// Object.preventExtensions(objA);
// objA.empDesignation="Developer";
// console.log(objA);     // { empId: 12, empName: 'Noor', empCity: 'GGN' } designation can't be added

// console.log(Object.isExtensible(objA));   //false


