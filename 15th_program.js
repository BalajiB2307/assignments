// Write a program that takes a string and returns true if the string is a pangram (i.e., it contains all the letters of the alphabet at least once), and false otherwise.


atoz = 'abcdefghijklmnopqrstuvwxyz'.split("");
function checkPangram(str) {
    str = str.toLowerCase();
    return atoz.every(val => str.includes(val));
}

console.log(checkPangram("abcd efgh ijkl mnop qrst uvwx yz"));
console.log(checkPangram("The quick brown fox jumps over the lazy dog"));