// the many faces of this

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


(function() {
	// i will always be 5
	// because the handlers are asynchronous and the environment only has one i, 
	// so it iterates up to 5 then stores that value for all handlers
	for (var i =0; i < filePickerClientIDs.length; i++) {
	        document.getElementById("fileBrowser").addEventListener(
	        "change",
	        function () {
	            var $textBox = $("#" + filePickerClientIDs[i]);
	            $textBox.val($(this).val());
	            $textBox.change();
	        },
	        false);
	    }
	 
	 // use a closure to deal with the problem
	function setupFilePickers() {
	    if (filePickerClientIDs.length == 0)
	        return;
	    for (var i = 0; i < filePickerClientIDs.length; i++) {
	       // this is the iffe 
	       (function (inner_i) {
	            document.getElementById("fileBrowser").addEventListener(
	                "change",
	                function () {
	                    var $textBox = $("#" + filePickerClientIDs[inner_i]);
	                    //console.log(filePickerClientIDs[inner_i]);
	                    $textBox.val($(this).val());
	                    $textBox.change();
	                },
	            false);
	        })(i);
	    }
}
})
