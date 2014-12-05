//Write a function that determines if (x) is an integer

var checkIfInteger = function(x) {
	var flooredX = Math.floor(x);
	if (flooredX === x) {
		console.log(x + " is an integer");
		return true;
	} else {
		console.log(x + " is not an integer");
	}
};


var string = "string";
var number1 = 1;
var number2 = 1.5;
var number3 = -1;

checkIfInteger(string);
checkIfInteger(number1);
checkIfInteger(number2);
checkIfInteger(number3);