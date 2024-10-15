// Object

// Shallow copy

let obj={
    name:"Abhiraj",
    age:25
}
let result=obj
result.name="Alan"
console.log(obj); //{ name: 'Alan', age: 25 }
console.log(result); //{ name: 'Alan', age: 25 }

// Deep copy

let obj2={
    name:"Aravind",
    age:22
}

let result1=JSON.parse(JSON.stringify(obj2))
result1.name="Amal"
console.log(obj2);  // { name: 'Aravind', age: 22 }
console.log(result1); //{ name: 'Amal', age: 22 }