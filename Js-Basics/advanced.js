// Spread Operator

// With Object
let global1={
    name:"Abhiraj",
    age:25,
    place:"TVM"
}
let global2={...global1}
let a=global2.name="Alan"
console.log(a); //Output:Alan
console.log(global1.name); //output:Abhiraj

// With array

let player1=['Alan','Ijaz','Abhiraj']
let player2=['Aravind','Ajith','AMAL']
let ans=[...player1,...player2]
console.log(ans);

// Destructuring

let player3=['Alan','Ijaz','Abhiraj']
let[first,second,third]=player3
console.log(first); //Alan

let obj={
    name:"Abu",
    id:1,
    age:20
}
const{id,name,age}=obj
console.log(id);

// Rest operator

let obj={
    name:"Abu",
    id:1,
    age:20
}

const{id,...rest}=obj
console.log(id);
console.log(rest);

// forEach

let obj=[{
    name:'Abhiraj',
    age:20,
    salary:25000
},
{
name:"Alan",
age:30,
salary:34000
}]

obj.forEach((value,index)=>console.log(value.name))

// Map

const newOne = obj.map((value)=>value.name)
console.log(newOne);

// Filter

const filter=obj.filter((value)=>value.age<25)
console.log(filter);

// Reduce

let total=obj.reduce((sum,obj)=>sum+obj.salary,0)
let ans1=total/obj.length
console.log(ans1);

// Find

let find1=obj.find((value)=>value.name=='Alan')
console.log(find1);