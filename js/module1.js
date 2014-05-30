define([],function() {
	var returnModule = function() {
		var _name = "module 1 la name";
		this.getName = function() {
			return _name;
		}
	};
	return returnModule;
});
