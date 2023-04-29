// Write a program that takes an array of integers and returns a new array containing only the elements that appear more than once in the original array.

const arr = [1, 2, 1, 3,3,4,5,5, 4, 3, 51,1,1,1,];

const findDuplicates = arr => arr.filter((item, index) => arr.indexOf(item) !== index)
const duplicates = findDuplicates(arr);
let reUniArr = new Set(duplicates);
console.log("Array with elements which are present more than once:"+Array.from(reUniArr));
