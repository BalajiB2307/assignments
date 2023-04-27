// Write a program that takes a string and returns true if the string is a palindrome (i.e., the string is the same forwards and backwards), and false otherwise.

let str = "stsa";
let flg=true;
const length = str.length;

if(length>0){
    for (let i = 0; i < length / 2; i++) {
        if (str[i] !== str[length - 1 - i]) {
            flg=false;
            break;
        }
    }
    if(flg===true){
        console.log("String is Palindrome: "+str)
    }else{
        console.log("String is not a Palindrome: "+str)
    }
}else{
    console.log("Empty string cannot checked for palindrome");
}