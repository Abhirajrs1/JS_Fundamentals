// String methods

let a='DEBUG M M'
console.log(a.length); //find the length
console.log(a.indexOf('E')); //find the index position
console.log(a.lastIndexOf('M')); //find the last index position
console.log(a.search('D')); //Like the lastIndexOf 
console.log(a.includes('E')); //Returns boolean if includes in a word

// Number methods

let b='15'
let c=parseInt(b) //Change a string to number
console.log(typeof c);

let d=15
let e=d.toString() //Change a number to string
console.log(typeof e);

// Array methods

let arr=['A','B','C','F','G','H']
arr.push('D') //Add at the end
arr.pop() //Remove from the end
arr.unshift('Z') //Add from the beginning
arr.shift() //Remove from the beginning
arr.splice(0,1) //Delete the item (0-Index position,1-Number of items deleted from the index position)
arr.splice(2,0,'F') //Add the value from the index position 2
let z=arr.slice(3,5) //Slice the value from index 3 to before 5
console.log(z);
console.log(arr);


// Object methods

let obj={
    name:"Abhiraj",
    age:25
}
let obj2={
    name:"Alan",
    age:19
}

let result=Object.keys(obj) //Used to retrieve the keys of objects
let values=Object.values(obj) // Used to retrieve the values of objects
let entries=Object.entries(obj) //Used to retrieve the full entries in an object
let ab=Object.assign({},obj,obj2) //Used to merge the objects when the keys are different and when keys are same the latest object override the old objects
Object.freeze(obj) //Used to freeze an object and doesn't make any updations into that object
obj.name='Aravind'
console.log(obj);

Object.seal(obj2) //Used to seal an object and only make update the values
obj2.name="Aravind"
obj2.place="TVM"
console.log(obj2);
