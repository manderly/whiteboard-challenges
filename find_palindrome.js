//Create a function that detects if a string is a palindrome
//Return true if it's a palindrome, return false if it is not
//Console logs added so you can see that it works

var findPalindrome = function(str) {

  if (typeof str !== "string" || !str.length) {
    console.log("Invalid string input! " + str);
    return false;
  }

  //strip out spaces so things like "race car" still return true
  var str = str.toLowerCase().replace(/\s/g,'');

  //get the last letter and save its index to a var
  var last = str.length - 1;

  //stop building it once halfway through the inputted string
  var midpoint = last/2;

  for (var i = 0; i < midpoint; i ++) {
    if (str[i] !== str[last]) {
      console.log("FALSE! " + str + " is NOT a palindrome");
      return false;
    } else {
      last -= 1;
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
findPalindrome("race car"); //true

//questions: what to do about spaces?
