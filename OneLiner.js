//Use arrow Function

const { set } = require("mongoose");

//Sum of Two Number
const sum=(a,b)=>a+b;
console.log(sum(5,10));

//to check all element in array satisfy given predicate
let arr=[2,4,6,8,10];
let isEven=arr.every((curValue)=>curValue%2==0);
console.log("Every Element is Even: "+isEven);

//spread operator to add 2 array
let arr1=[2,4,6,8,10];
let arr2=[1,3,5,7,9];
let arr3=[...arr1,...arr2];
console.log(arr3);

//square all lement of array
let arr4=[1,2,3,4,5,6,7];
let arr5=arr4.map((val)=>val=val*2);
console.log(arr5);

//if array containe specific value
let arr6=[7,58,9,1,3];
console.log(arr6.includes(57));

//use template latreals
let name="Kiran";
console.log(`${name} Kondawar`);
console.log(`${2*2 }`);
// can include expression in latreasl

//how many elemnts get devide by a no
let arr7=[2,4,6,7,8];
console.log("These ara 2 mul elemnts in given arr" +" "+arr7.filter((Value)=>Value%2==0));


//at least 1 elemnt satisfy predicate
let arr8=[3,7,4,9,2,8];
console.log(arr8.some((Value)=>Value%3==0));

//All elemnt satisfy predicate
let arr9=[4,10,2,8];
console.log(arr9.every((Value)=>Value%2==0));

//sec conversion to hr:mm:ss
let sec=6000;
const formatTime=(sec)=>new Date(sec*1000).toISOString().substr(11,8);
//substr(1st position,lenght) substr(11,8)
//slice(1st position,2nd position) slicee(11,19)
console.log(formatTime(sec))

//remove Duplicate from array
let dup=[1,23,4,5,67,7,7,7,7,7,7];
let dupRemoval=[...new Set(dup)];
console.log(dupRemoval);