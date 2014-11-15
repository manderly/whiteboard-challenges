//write a function that accepts a string and returns it reversed

var reverseStr = function(str) {

  //validate string type and length
  if (typeof str !== "string") {
    throw new Error("Invalid input: " + str);
  }
  if (!str.length) {
    throw new Error("0 length string!" + str);
  }

  var reversedStr = "";
  var i = str.length - 1;
  while (i >= 0) {
    reversedStr += str[i];
    i --;
  }
  return reversedStr;
};

var stringA = "aa 123qweerrtyyyy!";
console.log(reverseStr(stringA));
