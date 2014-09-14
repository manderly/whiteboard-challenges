/*
Design a stack with three functions: push, pop, and min.
Must run in O(1)
min() returns the smallest element in the stack
Ok to destroy stack in the process of finding the minimum value.

Question given by: Larry Scroggins
Question solution by: Mandi Grant
*/

/* begin whiteboard portion */
var Stack = function() {
  this.arr = [];
};

Stack.prototype.min = function() {
  var check = 0;
  var smallest = this.arr.pop();
  while (this.arr.length > 0) {
    check = this.arr.pop();
    if (check < smallest) {
      smallest = check;
    }
  }
  return smallest;
};
/* end whiteboard portion */

/* begin code needed to test this on a computer */
Stack.prototype.push = function(element) {
  this.arr.push(element);
};

Stack.prototype.pop = function() {
  return this.arr.pop();
};

var stack = new Stack();
stack.push(1);
stack.push(55);
stack.push(-41);
stack.push(-42);
stack.push(81910);
stack.push(15);
stack.push(444);
stack.push(81);
stack.push(-2);
console.log("stack min is: " + stack.min());
