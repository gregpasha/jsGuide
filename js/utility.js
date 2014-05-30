var app = app || {};

app.log = function(condition, output) {
	var result = (condition) ? "test: " + 	condition + "  (" + output + ")" : output;
	//console.log(result);
}

// this is an evil global, but I'm tired of typing app.log
var log = app.log;



//function is(type, obj) {
//    var clas = Object.prototype.toString.call(obj).slice(8, -1);
//    return obj !== undefined && obj !== null && clas === type;
//}


// *** Flotsam ***
//todo: probably take this out
//throw {
//    name: "Argument Exception",
//    message: "Missing ISO code passed to formatCurrency",
//    toString: function () { return this.name + ": " + this.message; }
//};