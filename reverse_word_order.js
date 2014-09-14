/*
Write a function that accepts a string and reverses the
whitespace separated words contained within it.
Ie: "Hello world" becomes "world Hello"

Question given by: Aron Garavaglia
Question solution by: Mandi Grant
*/

var strReverse = function(str) {
  var reversedStr = "";
  var newStr = "";
  var stack = [];

  for (var i = 0; i < str.length; i++) {
    if (str[i] != " ") {
      newStr += str[i];
    } else {
      stack.push(newStr);
      newStr = "";
    }
  }
  stack.push(newStr);

  while (stack.length > 0) {
    reversedStr += stack.pop();
    if (stack.length > 0) {
      reversedStr += " ";
    }
  }

  return reversedStr;
};

var str = "the dog is cute";
console.log('"' + str + '" becomes "' + strReverse(str) + '"');

/*
CHANGES FROM ORIGINAL WHITEBOARD SOLUTION:

Line 13:
Var declarations have been moved inside the function.

Line 25:
This final push ensures the last word is on the stack.

Line 27:
while (stack) changed to while(stack.length > 0)

Line 29:
Whitespace is now added after the popped word
only if the stack has not been exhausted.
This prevents trailing whitespace in the returned string.

*/
