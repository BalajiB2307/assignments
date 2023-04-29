// const str = 'hello world';
// const noVowels = str.replace(/[aeiou]/gi, '');
// console.log(noVowels);

// ---->g tells to find all matches, not just the first.
// ---->i tells to be case insensitive.
// ---->what goes inside the // is the pattern.
// ---->[] tells to match any character in a set.
// ---->aeiou are the characters in the set.

// const arrVowels=["a","e","i","o","u"];

// const arrStr=str.toLowerCase().split('');
// let fltrdStr="";


//     for(let chr of arrStr){
//         if(!arrVowels.includes(chr)){
//             fltrdStr=fltrdStr+chr;
//         }
//     }
// console.log(fltrdStr);


const str = 'hello world';
const arrVowels=['a','e','i','o','u'];
const arrStr=str.toLowerCase().split('');
let fltrdStr='';
console.log(arrStr.reduce((acc,i) => ((!(arrVowels.includes(i)))? i : ''), ''));

// for(let chr of arrStr){
//     console.log((!(arrVowels.includes(chr)))? chr : '');
// }

// console.log(fltrdStr);