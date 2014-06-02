define(function(require) {
	'use strict'

	var nullandundefined = {
		// undefined indicates that something hasn't been initialized, you get undefined for:
			// variables that haven't been initialized 
			// function paameters that haven't been set
			// when you try to access a property value that doesn't exist on an object
			// the return value of a function that doesn't return a value explicitly
			// in EcmaScript 3, it's read/write, but write only in EcmaScript 5

			console.log (typeof undefined); // "undefined";

			// so to check if something is undefined you would say
			if (typeof y === "undefined") {
				// do something
			}

		// null is a special object that indicates no value
		console.log (typeof null) // object

		// both undefined and null are falsy
		// javascript considers them == so (without coercion)
		var z = (undefined == null); // true
	}

	return nullandundefined;
});

