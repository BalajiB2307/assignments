// Write a program that takes two arrays of integers and returns a new array containing only the elements that appear in both arrays.

const arr1=[3,4,88,91,32,-99,23,89,100,827];
const arr2=[-99,89,100,0,12,23,3,78,5,88,9];

if(arr1.length>0 && arr2.length>0){
    let arrCommonVals=[];
    for(let i=0; i<arr1.length; i++){
        for(let j=0; j<arr2.length; j++){
            if(arr1[i]===arr2[j]){
                arrCommonVals.push(arr1[i]);
            }
        }
    }
    if(arrCommonVals.length>0){
        console.log("Array with common values: "+arrCommonVals);
    }else{
        console.log("There are no common values in given Arrays");
    }
    
}else{
    console.log("Comparison is not possible as one or both array(s) is empty");
}
