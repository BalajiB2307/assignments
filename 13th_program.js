// Write a program that takes a string and returns a new string with all the vowels removed.

const str = "hello world";

if(str.split("").length>0){
    const arrVowels=["a","e","i","o","u"];

    const arrStr=str.toLowerCase().split("");
    let fltrdStr="";
    
        for(let chr of arrStr){
            if(!arrVowels.includes(chr)){
                fltrdStr=fltrdStr+chr;
            }
        }
    
    console.log("String without vowels: "+fltrdStr);
}else{
    console.log("String is null")
}


// ================================================================

// const str = 'hello world';
// const arrVowels=['a','e','i','o','u'];
// const arrStr=str.toLowerCase().split('');
// let fltrdStr='';
// console.log(arrStr.reduce((acc,i) => ((!(arrVowels.includes(i)))? acc+i : ''), '')); // Not working fully
// 

// ================================================================

// const str = 'hello world';
// const arrVowels=['a','e','i','o','u'];
// const arrStr=str.toLowerCase().split('');
// for(let chr of arrStr){
//     console.log((!(arrVowels.includes(chr)))? chr : ''); 
// }


// ================================================================

// const str = 'hello world';
// const noVowels = str.replace(/[aeiou]/gi, '');
// console.log(noVowels);

// =======================================================================