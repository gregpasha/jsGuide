define(function(require) {
	'use strict'

	var IIFE = function() {

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

	}

	return IIFE;
});




	