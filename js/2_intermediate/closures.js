
// There are 3 things to remember about closures

/*
1) You can refer to varibles outside the current function, here the inner function - Make references magicIngredient
*/
(function( ){
	function makeSandwich() {
		var magicIngredient = "peanut butter";
		function make(filling) {
			return magicIngredient + " and " + filling;
		}
		return make("jelly");
	}
	var sandyType = makeSandwich();
	// console.log(sandyType); // peanut butter and jelly
}());

/*
2) Functions can refer to variables defined in outer functions even after those outer functions have returned
*/
(function() {
	function sandwhichMaker() {
		var magicIngredient = "almond butter";
		function make(filling) {
			return magicIngredient + " and " + filling;
		}
		return make;
	}
	var sandyMaker = sandwhichMaker();
	var sandyType = sandyMaker("honey");
	// console.log(sandyType); // almond butter and honey
	// console.log(sandyMaker("banana")); // almond butter and banana
}());

/*
Closures can refer to parameters in addition to variables
*/
(function() {
	function sandwhichMaker(magicIngredient) {
		function make(filling) {
			return magicIngredient + " and " + filling;
		}
		return make;
	}
	var hamSammy = sandwhichMaker("ham");
	var hamandcheese = hamSammy("cheese");
	// console.log(hamandcheese); // ham and cheese
	var hamandmustard = hamSammy("mustard");
	// console.log(hamandmustard); // ham and mustard
}());

/*
We can just make the inner function anonymous since we're only evaluating it to produce a new function value
*/
(function() {
	function sandwichMaker(magicIngredient) {
		return function (filling) {
			return magicIngredient + " and " + filling;
		}
	}
	var turkeySammy = sandwichMaker("turkey");
	var swissy = turkeySammy("swiss");
	// console.log(swissy); // turkey and swiss
}());

/*
3) Closures can update outer variables because they store references to them rather than copying their values.
This example returns an object literal with some methods (functions assigned to properties) 
that get/set the values of a local variable "val" of the box function
*/
(function() {
	function box() {
		var val = undefined;
		return {
			set: function(newVal) {
				val = newVal;
			},	
			get: function( ){return val;},
			type: function() {return typeof val;}
		};
	}
	var b = box();
	// console.log(b.type()); // undefined
	b.set(98.6);
	// console.log(b.get()); // 98.6
	// console.log(b.type()); // number
}());


// foreach with function closure
(function() {

var numberList = [123, 234, 345, 456, 457];
	
	numberList.forEach(function(num){
		var j = num + 1;
		console.log(j);
	})

})();

