
// IIFE (Immediately Invoked Function Expression) 
// Used in these files to create scope for examples and run through debugger;
(function(){
	// put some stuff in here 

}());

// this is ok too
(function(){

})();


///wahtever.something
(function (global) { "use strict";
    var whatever = window.whatever || {};
    whatever.something = {
        
    };
})(this);

//var x3 = whatever;

// Literals
(function() {
	var arr1 = []; // array
	var obj1 = {}; // object
	var square = function(){ }; // function
})();

// booleans,  falsy/truthy values
(function() {
	// falsy values  - all other values including objects, arrays, functions, etc. conver to a truthy value
	undefined; 
	null;
	0;
	-0;
	NaN;
	""; // the empty string
	var o;
	// to compare you could do something explicit
	if (o !== null) {
		// do something
	}

	// or you can just compare a value for its truthy/falsy -ness
	if (o) {
	}

	// *** undefined ***

	// undefined is its own value type
	log("undefined is equal to undefined",undefined === undefined);

	// void  returns undefined
	// by convention, use void 0 to return undefined
	void 0; //undefined
	void 1; //undefined
	log("void 2+2 == undefined",void (2+2)); //undefined

})();



