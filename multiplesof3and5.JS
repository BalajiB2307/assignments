// Write a program that prints the numbers from 1 to 100. But for multiples of three, print “Fizz” instead of the number and for the multiples of five, print “Buzz”. For numbers which are multiples of both three and five, print “FizzBuzz”.

let start=1;
const max=100;

for(let i=start;i<=max;i++){
    if((i%3==0) && (i%5==0)){
        console.log(`FizzBuzz - `+i);
    }else if(i%3==0){
        console.log(`Fizz - `+i);
    }else if(i%5==0){
        console.log(`Bizz - `+i);
    }
}