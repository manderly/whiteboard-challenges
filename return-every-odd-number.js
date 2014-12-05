//write a function that returns only the odd numbers in an array passed in
var returnOddNumbers = function(arr) {
  var returnArr = [];
  for (var i = 0; i < arr.length; i ++) {
    if (typeof arr[i] === 'number' && arr[i] % 2 !== 0) {
      returnArr.push(arr[i]);
    }
  }
  if (!returnArr.length) {
    return "No odd numbers found in this array: " + arr;
  } else {
    return returnArr;
  }
};

var simpleNumberArray = [1,2,-1,1,-2,3,0,1,1];
var allZeroes = [0,0];
var emptyArray = [];
var letterArray = ["a","b","c","d"];
var mixedArray = ["gadget","betta",0,1,"p",9,120001];

console.log(returnOddNumbers(simpleNumberArray));
console.log(returnOddNumbers(allZeroes));
console.log(returnOddNumbers(emptyArray));
console.log(returnOddNumbers(letterArray));
console.log(returnOddNumbers(mixedArray));


