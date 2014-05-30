// function in a grouping operator
(function() {

});

// IIFE (Immediately Invoked Function Expression)
(function(){

	// function declarations

	//function ()  {} // not this
	(function() {})

	function whatever() {}

	function whatever2() {
		return "";
	}

	// function expression - semi-colon after function
	// anonymous function expression
	var square = function(x) {
		return x*x;
	}; 

	// named function expression
	var f = function fact(x) {
		if (x<=1) {
			return 1;
		}
		else {
			return x*fact(x-1);
		}
	};

	//IIFE Assigned to variable
	var tensquared = (function(x) {
		return x*x;
	}(10));


	// nested functions
	function hypotenuse(a,b) {
		function square(x) {return x*x;}
		return Math.sqrt(square(a) + square(b));
	}

	// function invocation

	// method invocation

	// constructor invocation

	// undefined returned by default from function
	log("function returns undefined by default",(function(){}() === undefined))

	// Should you prefer a function declaration like the following?
	function id(x) {
	    return x;
	}
	// Or the equivalent combination of a var declaration plus a function expression?
	var id = function (x) {
	    return x;
	};
	// They are basically the same, but function declarations have two advantages over function expressions:
	// They are hoisted (see Hoisting), so you can call them before they appear in the source code.
	// They have a name (see The Name of a Function). However, JavaScript engines are getting better at inferring the names of anonymous function expressions.



})();


