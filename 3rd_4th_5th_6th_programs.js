//Write a program that takes an array of integers and returns the sum of all the numbers in the array.
//Write a program that takes an array of integers and returns the largest number in the array.
//Write a program that takes an array of integers and returns the second largest number in the array.
//Write a program that takes an array of integers and returns a new array containing only the even numbers from the original array.

const arrOfInts = [1,82,3,5,23,54,78,0,81,4,23,54,76,12];
let sum=0;
let largest=0;
let secondLargest=0;
let evenArr=new Array();
largest=arrOfInts[0];
secondLargest=arrOfInts[0];

if(arrOfInts.length>1){
    for(let i of arrOfInts){
        sum+=i;
        if(largest<i){
            largest=i;
        }
        if(i===0 || (i%2)==0){
            evenArr.push(i);
        }
    }

    for(let i of arrOfInts){
        if(secondLargest<i && i < largest){
            secondLargest=i;
        }
    }

    console.log("Sum of array "+arrOfInts+" : "+sum);
    console.log("Largest number in array : "+largest);
    console.log("Second largest number in array : "+secondLargest);
    console.log("Even numbers in array : "+evenArr);
}else{
    console.log("Array is empty")
}