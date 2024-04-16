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
