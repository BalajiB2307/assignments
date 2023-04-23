//Write a program that takes an array of integers and returns the sum of all the numbers in the array.

const arrOfInts = [1,2,3,5,23,54,78,4,23,54,76,12];
let sum=0;

for(let i=0;i<arrOfInts.length;i++){
    sum+=arrOfInts[i];
}

console.log("Sum of array "+arrOfInts+" is: "+sum);