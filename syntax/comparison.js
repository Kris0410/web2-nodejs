console.log(1==1); // ture Equal Operator
console.log(1===1); // ture Strict Equal Operator
console.log(1>2); // false

var a = 1; 
var b = "1"; 
console.log(a == b); // true 
console.log(a === b); // false 

console.log(null == undefined); // true 
console.log(null === undefined); // false 

console.log(true == 1); // true 
console.log(true === 1); // false 

console.log(0 == "0"); // true 
console.log(0 === "0"); // false 
console.log(0 == ""); // true 
console.log(0 === ""); // false 

console.log(NaN == NaN); // false 
console.log(NaN === NaN); // false 

var a = [1,2,3]; 
var b = [1,2,3]; 
console.log(a == b); // false 
console.log(a === b); // false 

var a = [1,2,3]; 
var b = [1,2,3]; 
var c = b; 
console.log(b === c); // true 
console.log(b == c); // ture 

var x = {}; 
var y = {}; 
var z = y; 
console.log(x == y) // false 
console.log(x === y) // false 
console.log(y === z) // true 
console.log(y == z) // true 