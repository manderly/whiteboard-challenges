/*
Fizz Buzz Chocolate
A twist on "Fizz Buzz" that abstracts the matching criteria into an object.
*/

var str = "";

var params = {
  3:"fizz",
  5:"buzz",
  8:"chocolate"
};

for (var i = 0; i < 100; i ++ ) {
  str = i + " ";
  for (var key in params) {
    if (params.hasOwnProperty(key) && i % key === 0) { //hasOwnProperty(key) restricts this check to properties I set manually
      str += params[key];
    }
  }
  console.log(str);
}
