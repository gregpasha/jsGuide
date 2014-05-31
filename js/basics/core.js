define(function(require) {

	var core = function() {

		// All code in this project is wrapped in an IIFE (Immediately Invoked Function Expression) 
		// An IIFE creates a function scope and then gets executed, I am using this technique so you can put breakpoints 
		// and watch all of the code in the project execute
		(function(){

		}());

		// You can also put the bottom parens that invoke the function on the outside of IIFEs
		// I think this is easier to read and prefer this syntax
		(function(){

		})();

		// You can pass variables into IIFEs, here we are passing "this", which gets assigned to "global"
		(function (global) { 
			var something = global.something;
		})(this);


		// literals are common way of declaring arrays, objects and functions in current javascript
		// as opposed to using the New operator
		(function() {

			// array 
			var arr1 = []; 

			// object
			var obj1 = {}; 

			// function
			var square1 = function(){}; 

		})();

	}

	return core;
});




