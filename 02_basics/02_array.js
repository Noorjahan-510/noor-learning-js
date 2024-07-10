const cricketersM=["MS Dhoni","Virat","Rohit Sharma","Siraj"];
const cricketersW=["Priya","Mithali","SMriti Mandhana","HarmanPreet"];

//cricketersM.push(cricketersW);
const allCricketers=cricketersM.concat(cricketersW);     //concat method used
console.log(allCricketers);

const all_cricketers=[...cricketersM,...cricketersW];    // spread operator 
console.log(all_cricketers);

const anArray= [1,2,3,[31,32,33],4, 5,[6,7,[8,9]]]
const real_array= anArray.flat(Infinity);
console.log(real_array);


console.log(Array.isArray("Noor"));    //false
console.log(Array.from("Noor")); //m[ 'N', 'o', 'o', 'r' ]convert Noor into array

console.log(Array.from({name:"Noor"}));  //[]      intresting case


const score=100;
const score1 =200;
const score2=300;

console.log(Array.of(score,score1,score2));  //[ 100, 200, 300 ]








