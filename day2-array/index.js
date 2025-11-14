const name1=["Isha","Anju","Sejal","Palak","Raj"];
console.log(name1.length);
// toString
console.log(name1.toString());
// at
console.log(name1.at(2));
// join
console.log(name1.join(' | '));

// pop
console.log(name1.pop());
console.log(name1);
// push
console.log(name1.push('Diya'));
console.log(name1);
// shift
console.log(name1.shift());
console.log(name1);

// unshift
console.log(name1.unshift('Isha'));
console.log(name1);
// isArray
let isValid=Array.isArray(name1);
console.log(isValid);

// delete
delete name1[1];
console.log(name1);

const num1=[1,2,3,4,5];
const num2=[6,7,8,9,10];
let num3=num1.concat(num2);
console.log(num3);

const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
const citrus = fruits.slice(1, 3);