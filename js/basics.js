
// define is a requirejs function that declares our module to require, 
// we can get require as an argument to the function to load other modules
define(function(require) {

	// ECMA Script 5 strict mode makes javascript safer/better, use it.
    'use strict';

   	// require some other modules and set as variables, this is the preferred syntax 
    //var utils = require('./utils');
  
  	// we could really call the "basics" variableanything, but best practice is to name it the same as our module
  	// this is what we return from the function that gets created as our module, it could be a function or object literal
    var basics = function () {
       
        // it is good practice to store this as a variable, we prefer using "self", but others use "that"
        // this is not a variable, and can change depending on the calling context
        var self = this;

		// Declare Variables  - declare them at the top of functions, because they get "hoisted"
		// variables have function scope, not block scope
		self.variables = function() {

			// either declare separately
			var w = 234;
			var x = 123; 

			// or as comma separated list
			var y = 1,
				z = 2;

		};
	};

    return basics;
});

   

