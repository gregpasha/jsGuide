// practice writing arrays, object, functions
(function() {
	var myArray = [];
	var myObject = {};
	var myFunction = function() {

	}
	myObject.fun = myFunction;
	myObject.array = myArray;

})();	

// objects with properties

(function() {

	var point = {x: 1, y: 2};
	var pointSystem = {
		x: 1,
		y: 2,
		getPoint: function() {
			return { x: this.x, y: this.y }	
		}
	}

	var ps = pointSystem.getPoint();
})();

// foreach with function closure
(function() {

var numberList = [123, 234, 345, 456, 457];
	
	numberList.forEach(function(num){
		var j = num + 1;
		console.log(j);
	})

})();

