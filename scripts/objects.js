// ye basic objects
(function() {
	// var x = 7;
	var obj1 = {};
	var obj2 = {x : 1};
	var obj3 = {
		x : 1,
		getX : function() {return this.x;},
		getGlobX : function() {return x;}

	}
})();

// property access errors
(function() {
	var book = { subtitle : "x marks the spot"};

	// var len1 = book.subtitle.length;
	//var len2 = book.title.length;	
	var len2 = book && book.subtitle && book.subtitle.length;
})();