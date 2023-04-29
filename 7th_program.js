// Write a program that takes a string and returns the number of vowels in that string.

let str1 = "hellohowareyouuuu";

if(str1.split('').length>0){
    const vowels1 = ["a","e","i","o","u"]
    let vowelCount=0;
    for(let letter of str1.toLowerCase()){
        if(vowels1.includes(letter)){
            vowelCount++;
        }
    }
    console.log(vowelCount);
}else{
    console.log("String is empty");
}

