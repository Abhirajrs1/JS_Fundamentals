let a=12
let b=[]
let c=null
let d=false

let e=10
let f='5'
let g=5

// Data types (typeof)
console.log(typeof a);  //number
console.log(typeof b);  //object
console.log(typeof c);  //object
console.log(typeof d);  //boolean

// Comparison operator(<,>,==,!=,<=,>=,===)
console.log(e>f); //true
console.log(e<f); //false
console.log(f<=g); //true
console.log(e!=f); //true
console.log(g===f); //false (Used to check the type also)

// Logical operators (&&,||)

let h=5
let i=10
console.log(h<=5 && i<11); //true (Both condition true)
console.log((h<=5 || i>11)); //true (Any one condition true)

// Conditional operators (if else, Ternary operator(?:))

let x=10

if(x==10){
    console.log("value is 10");
}else{
    console.log("Value is 5");
}

let y=x==5?40:400
console.log(y);




