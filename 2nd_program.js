// Write a program that takes a string and returns the reverse of that string.

let str = "hello";
let chArrStr = str.split('');
let revStr='';

for(let i=chArrStr.length-1;i>=0;i--){
    revStr+=chArrStr[i];
}

console.log('Original String = '+str);
console.log('Reversed String = '+revStr);

console.log('Method Reversed String = '+chArrStr.reverse());
