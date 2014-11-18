//Create a "dog" class and give it a few methods, including "bark" and "sniff"

var Dog = function(name,color,breed,sex) {
	this.name = name;
	this.color = color;
	this.breed = breed;
	this.sex = sex;
}

Dog.prototype.bark = function() {
	console.log("Woof!");
}

Dog.prototype.sniff = function() {
	console.log("Sniff!");
}

Dog.prototype.getInfo = function() {
	return this.name + ' ' + this.color + ' ' + this.breed + ' ' + this.sex;
}

var gadget = new Dog("Gadget","Tan","Chihuahua","Female");
gadget.color = "Fawn";
console.log(gadget.getInfo());