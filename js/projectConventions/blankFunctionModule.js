define(function(require) {
	'use strict'

	var blankFunctionModule = function() {
		// sometimes your modules will be functions, meaning they have some action to perform,
		// they can also return a value, such as a primitive, object or another function
		// if you don't return anything then undefined is returned for you. I'm returning null just for kicks
		return null;
	}

	return blankFunctionModule;
});

