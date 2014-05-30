define(["module1"],function (module1ref) {
	var mod1 = new module1ref();
	var returnModule = function() {
		this.getModuleName = function() {
			return mod1.getName();
		}
	};
	return returnModule;
});