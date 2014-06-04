
function inherit(p) {
	if (p == null) throw TypeError();
	if (Object.create) {
		return Object.create(p);
	}
	var t = typeof p;
	if (t !== "object" && t !== "function") throw TypeError();
	function f() {};
	f.prototype = p;
	return new f();	
}

// opq
(function (){
	var o = {};
	o.x = 1;
	var p = inherit(o);
	p.y = 2;
	var q = inherit(p);
	q.z = 3;
	var s = q.toString();
	q.x + q.y;
})();

//unitcircle
(function (){
	var unitcircle = { r: 1};
	var c = inherit(unitcircle);
	c.x = 1;c.y = 1;
	c.r = 2;

	//console.log(unitcircle.r);
	unitcircle.r = 3;
	//console.log(c.r);
})();

