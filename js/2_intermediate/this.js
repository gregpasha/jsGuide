this// the many faces of this

(function(){
// this refers to window in inner functions
function Car()  {

	this.transmition = "manual";
	this.speed = 5;

	this.go = function go() {
		//console.log(this.transmition);
		//console.log(goHelper());
	}

	function goHelper() {
		//console.log(this.speed); 
	}
}

var  c = new Car();
c.go();

}());


