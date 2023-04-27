// Write a program that takes an array of integers and returns a new array containing only the positive numbers from the original array.

const arrOfMixedVals = [0,-1,4,54,-9,6,56];
if(arrOfMixedVals.length>0){
    let arrOfPosValPos = [];
    for(let i=0;i<arrOfMixedVals.length;i++){
        if(arrOfMixedVals[i]>0){
            arrOfPosValPos.push(i)
        }
    }

    console.log("Array of integers: "+arrOfMixedVals);
    console.log("Array with postive val index: "+arrOfPosValPos);
}