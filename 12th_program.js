// Write a program that takes an array of integers and returns a new array containing only the unique elements from the original array.

const arr = [1,2,2,3,4,4,43,0,32,43,5,6,77,6,0];
let setArr = new Set(arr);
let uniqueArr = Array.from(setArr);

console.log(uniqueArr);