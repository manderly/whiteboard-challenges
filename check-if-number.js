var checkIfNumber = function(num) {
  if (typeof num === 'number') {
    return num;
  } else {
    return "Not a number!";
  }
};


console.log(checkIfNumber(5));
console.log(checkIfNumber("5"));
