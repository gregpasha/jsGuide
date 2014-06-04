define(function(require) {
	'use strict'

	var core = function() {

		// warning - give variables good names, mine are terrible in this sample module 
		// because it doesn't do anything and ... lazy
		(function(){

			// javascript is written in Unicode and is case senstive			
			var notEqual = ("x" !== "X"); // true;

			// javascript ignores whitespace, I tend to put plenty in
			// as it is more readable and it gets removed during the build process
			
			
			// this is a semi-colon, put one at the end of every line
			// if you don't, javascript will do it automatically
			// wars have been started over less then ASI (Automatic Semicolon Insertion), 
			// personally, I put them in.
			;

			// all numbers - integers and floats are both represented as 64 bit double floating point values
			var a = 7;
			var b = 77.45;

			// strings, you can use single quotes or double quotes, pick one and stick with it
			var c = 'this is b';
			var d = "this is e";

			// months use a 0 based index, so this is January 14, 2014
			var e = new Date(2014, 0, 14);

			var f = true;
			var g = false;

			// use = for variable assignment, === for comparison
			// == does a type coercion and then a comparison, avoid.
			var h = (f === g);

			// ternary operator, a handy shortcut for if else
			// this means if h is true then i = f, otherwise i = g;
			var i = (h === true) ? f : g;

			// array literal
			var arr1 = []; 
			var arr2 = [1, 2, 3];

			// object
			var obj1 = {}; 
			var obj2 = {x: 36, y: 77};

		})();

	}
	
	return core;
});

