//Write a program that takes an array of integers and returns the sum of all the numbers in the array.

const arrOfInts = [1,82,3,5,23,54,78,81,4,23,54,76,12];
let sum=0;
let largest=0;
let secondLargest=0;
largest=arrOfInts[0];
secondLargest=arrOfInts[0];

console.log(arrOfInts.length);

if(arrOfInts.length>1){
    for(let i=0;i<arrOfInts.length;i++){
        sum+=arrOfInts[i];
        if(i<arrOfInts.length){
            if(largest<arrOfInts[i]){
                largest=arrOfInts[i];
            }
        }
    }

    for(let i=0;i<=arrOfInts.length;i++){
        if(i<arrOfInts.length){
            if(secondLargest<arrOfInts[i] && arrOfInts[i] < largest){
                secondLargest=arrOfInts[i];
            }
        }
    }

    console.log("Sum of array "+arrOfInts+" is : "+sum);
    console.log("Largest number in array : "+largest);
    console.log("Second largest number in array : "+secondLargest);
}


