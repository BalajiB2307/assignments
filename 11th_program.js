// Write a program that takes an array of integers and returns the average of all the numbers in the array.

const arr = [1,23,4,12,-7,0,323];

if(arr.length>0){
    const average = arr.reduce((a,b)=> a+b)/arr.length;
// const average = arr.reduce((a, b) => a + b, 0) / arr.length;
// array.reduce(callbackfn(total, curValue, curIndex, array), initialValue)

// without array function
// const average = arr.reduce(function(a,b){return a+b})/arr.length;

console.log(average);
}else{
    console.log("Array is empty")
}
