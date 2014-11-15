//Create a function that detects if a string is a palindrome
//Return true if it's a palindrome, return false if it is not

var findPalindrome = function(str) {

  if (typeof str !== "string" || !str.length) {
    console.log("Not a string! " + str);
    return false;
  }

  var str = str.toLowerCase();
  var reversed = "";
  var right = str.length - 1; //get the last letter and set its index to "right"
  var left = 0; //left just starts at the first index

  //build up a reversed version of the input string
  //stop building it once halfway through the inputted string
  var midpoint = right/2;
  while (reversed.length - 1 < midpoint) {
    if (str[left] !== str[right]) {
      console.log("FALSE! " + str + " is NOT a palindrome");
      return false;
    } else {
      reversed += str[right];
      left += 1;
      right -= 1;
    }
  }
  console.log("TRUE! " + str + " is a palindrome!");
  return true;
};

findPalindrome("aaq"); //false
findPalindrome("aqa"); //true
findPalindrome("aaqq"); //false
findPalindrome("aqqa"); //true
findPalindrome("aqqqa"); //true
findPalindrome("aa"); //true
findPalindrome("a a"); //true
findPalindrome(" a "); //true
findPalindrome("race car");

//questions: what to do about spaces?
