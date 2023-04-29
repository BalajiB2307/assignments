var x = 1;
var y = 2;
(function(x, y) {
  x = x + y; //3
  y = x - y; //3-2 = 1
  x = x - y; // 3-1 = 2
})(x, y); // 1,2
console.log(x, y);

// Print x=1 and y=2 due to IIFE in effect after console.log(x, y); is called

x=2,y=1
x = x + y; //3
y = x - y; //3-1 = 2
x = x - y; // 3-2 = 1
