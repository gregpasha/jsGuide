
// Javascript has the concepts of truthy/falsy (long before Stephen Colbert)
// This means that Javascript will coerce values to true/false
define(function(require) {

	var truthyfalsy = function() {

		(function() {

			// Javascript has 6 falsy values that will convert to "false" when doing a boolean comparison
			// all other values convert to true
			undefined; 
			null;
			0;
			-0;
			NaN;
			''; 

			// to compare you could do something explicit
			var o;
			if (o !== null) {
				// do something
			}

			// or you can just compare a value for its truthy/falsy -ness
			if (o) {
			}
		})();

		// undefined
		(function() {
			// undefined is its own value type
			console.log("undefined is equal to undefined", undefined === undefined);

			// the void keyword + any number returns undefined
			// by convention, use void 0 to return undefined (although I've never had to return undefined)
			void 0; //undefined
			return void 0;

		})();

		// null

		// NaN	
	}

	return truthyfalsy;
});

