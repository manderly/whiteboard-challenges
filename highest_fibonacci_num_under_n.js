//Return to me the highest Fibonacci number under 100
//0,1,1,2,3,5,8,13,21,34,55,89

var maxNum = 100;
var sum = 0;
var findHighestFiboUnder = function(max, num1, num2) {
    //allows num1 and num2 to be optional
    num1 = typeof num1 !== 'undefined' ? num1: 1;
    num2 = typeof num2 !== 'undefined' ? num2: 1;
    sum = num1 + num2;

    if (sum < max) {
      num1 = num2;
      num2 = sum;
      return findHighestFiboUnder(max,num1,num2);
    } else {
      return num2;
    }
};

console.log("Highest Fibonacci number under " + maxNum + ": " + (findHighestFiboUnder(maxNum)));
