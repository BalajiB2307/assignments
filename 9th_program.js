// program to check if the string is palindrome or not

let str = "sts";

let val=Palindrome(str);

console.log(val);

function Palindrome(string) {
    const length = string.length;
    for (let i = 0; i < length / 2; i++) {
        if (string[i] !== string[length - 1 - i]) {
            return 'not a palindrome';
        }
    }
    return 'palindrome';
}