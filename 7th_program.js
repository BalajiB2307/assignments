// Write a program that takes a string and returns the number of vowels in that string.

const vowels1 = ["a","e","i","o","u"]
let str1 = "hellohowareyouuuu";
let vowelCount=0;
for(let letter of str1.toLowerCase()){
    if(vowels1.includes(letter)){
        vowelCount++;
    }
}
console.log(vowelCount);
