

// events
 
// bad...
(function() {
	function handleClick(event) {
		var popup = document.getElementById("popup");
		popup.style.left = event.clientX + "px";
		//etc
	}

	//addListener(element,"click",handleClick);	
})();

// (better) separate event handling logic from application logic
(function( ){
	var MyApplication = {

		handleClick: function(event){
			this.showPopup(event);
		},

		showPopup: function(event) {
			var popup = document.getElementById("popup");	
			popup.style.left = event.clientX + "px";
			//etc.
		}

	};
})();

// (good) don't pass the event object around, event object is hard to test, 
// has way too much info on it, only pass what you need
(function( ){
	var MyApplication = {
		
		handleClick: function(event) {
			this.showPopup(event.clientX,event.clientY);
		},

		showPopup: function(x,y) {
			var popup = document.getElementById("popup");
			popup.style.left = x + "px";
			//etc.
		}

	}
})();