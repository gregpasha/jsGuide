define(function(require) {
	'use strict'

	var functionBasics = function() {

		// there are multiple ways to define and use functions

		// function declaration
		// just your basic function, it does some work and returns a value
		function addXY(x, y) {
			return x + y;
		}

		// anonymous function expression 
		// this creates an anonymous function and assigns it to a variable (square)
		var square = function(x) {
			return x*x;
		}; 

		// you can then call it like this 
		var x2 = square(2); // 4

		// named function expression
		// it is somewhate useful to assign names to your function expressions
		// to help with debugging, so you can see the name in the browser's debugger
		var f = function fact(x) {
			if (x<=1) {
				return 1;
			}
			else {
				return x*fact(x-1);
			}
		};

		//IIFE Assigned to variables
		var tensquared = (function(x) {
			return x*x;
		}(10));

		// functions can be nested and inner functions have access to
		// ourter function variables (but not the this keyword)
		function hypotenuse(a,b) {
			function square(x) {
				return x*x;
			}
			return Math.sqrt(square(a) + square(b));
		}	

	}
	
	return functionBasics;
});

