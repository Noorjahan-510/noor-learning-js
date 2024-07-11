//const cafeCustomer= new Object();

const cafeCustomer={};

cafeCustomer.id=123;
cafeCustomer.gmail="user1@sharbat.com"
cafeCustomer.name="Noor";

console.log(cafeCustomer);

const regularCustomer={
    name:"Noork",
    id:123,
    gmail:"noork@sharbat.com",
    address:{
        currentAddress:{
            houseNo:147,
            street:"Jigrawan",
            landmark:"near makhtab school"
        }

    }
}

//console.log(regularCustomer.address.currentAddress.street);


const obj1={1:"a", 2:"b"}
const obj2={3:"c", 4:"d"}

//const objFinal={obj1, obj2}       //output=> { obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'c', '4': 'd' } }
//const objFinal=Object.assign({},obj1,obj2)  //o/p=> { '1': 'a', '2': 'b', '3': 'c', '4': 'd' }      
                   //{}-target obj & obj1 &obj2 are source obj
const objFinal={...obj1,...obj2}      //o/p=> { '1': 'a', '2': 'b', '3': 'c', '4': 'd' }  
//console.log(objFinal);


const users=[                  //array objects
    {
        id:1,
        email:"user1@gmail.com"
    },
    {
        id:2,
        email:"user2@gmail.com"
    },
    {
        id:3,
        email:"user3@gmail.com"
    },
]

console.log(users[1].email);

console.log(Object.keys(users[0]));
console.log(Object.values(users[1]));
console.log(Object.entries(users[2]));

console.log(Object.entries(cafeCustomer));
console.log(cafeCustomer.hasOwnProperty('email')); //false
console.log(cafeCustomer.hasOwnProperty('gmail'));  //true