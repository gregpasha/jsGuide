define(function(require) {
	'use strict'

	var ooProgramming = function() {
		
		// basic object
		 (function() {
			var person = new Object();
			person.name = "sam";
			person.age = 28;
			person.sayName = function() {
				console.log(this.name);
			};
		})();

		// basic object literal
		(function() {
			var person = {
				name: "sam",
				age: 28,
				sayName: function(){
					console.log(this.name)
				}
			};
		})();

		// factory pattern - doesn't address issue of object identification, not shown, don't use in js


		// constructor pattern
		/* creates a new object
		*  assign the value this value of the constructor to the new object	
		*  executes the code inside the constructor
		*  returns new object
		*  (p1 and p2 are both instanceof Person && instanceof Object)
		*  methods are created on each instance
		*/
		(function( ){
			function Person(name, age, job) {
				this.name = name;
				this.age = age;
				this.job = job;
				this.sayName = function( ){
					console.log(this.name);
				}
			}			
			var p1 = new Person('nick',29,'doctor');
			var p2 = new Person('greg',41,'se');
		})();

		// prototype pattern (basic)
		/* 
		* when a function is created, it's prototype property get a property called constructor 
		* that points back to the function of which it is a property.
		* ex: Person.prototype.constructor points to Person
		* 
		* Each time the constructor is called, the new instance has an internal pointer 
		* back to the constructor's prototype (but not the constructor)
		* 
		* Person.prototype points to the prototype object
		* but Person.prototype.constructor points to Person
		* Each instance of Person has an internal property that point back to Person.prototype only
		* each instance has no direct relationship to the constructor
		*
		* isPrototypeOf() returns true if [[Prototype]] points to the prototype on which the method is being called
		* console.log(Person.prototype.isPrototypeOf(person1)); // true
		* 
		* hasOwnProperty() method determines if a property exists from the instance or from the prototype
		*/
		(function() {
			function Person() {

			}

			Person.prototype.name = 'nick';
			Person.prototype.age = 28;
			Person.prototype.job = 'se';
			Person.prototype.sayName = function() {
				//console.log(this.name);
			};

			var p1 = new Person();
			p1.sayName();
		})();


		// combination constructor / prototype pattern
		/*
		* the most common and accepted way to define custom reference types is to combine the constructor and prototype patterns
		* the constructor pattern defines instance properties
		* the prototype pattern defines methods and shared properties
		*/
		(function( ){
			function Person(name, age, job) {
				this.name = name;
				this.age = age;
				this.job = job;
				this.friends = ['shelby','court'];				
			}

			Person.prototype = {
				constructor: Person,
				sayName: function() {
					//console.log(name);
				}
			}

			var p1 = new Person('nick',28,'se');
			var p2 = new Person('greg', 41, 'ye');
			p1.friends.push['van'];

		})();

		// dynamic prototype pattern
		/*
		* syntactic sugar to help you sleep at night, if this is your thing
		*/
		(function() {

			function Person(name, age, job) {
				this.name = name;
				this.age = age;
				this.job = job;

				// don't have to check for each method - just one
				// only called once during prototype initialization	
				if (typeof this.sayName !== 'function') {
					Person.prototype.sayName = function( ){
						//console.log(this.name);
					};
				}
			}

		})();

		// parasitic constructor pattern
		/* use this as a fallback when other patterns fail
		* create a constructor that wraps the creation and return of another object
		* this pattern allows you to create constructors for objects that my not be possible otherwise
		* ex: you may want to create a special array that has an extra method
		*/	
		(function() {
			function Person(name, age, job) {
				var o = new Object();
				o.name = name;
				o.age = age;
				o.job = job;
				o.sayName = function() {
					//console.log(this.name);
				};

				return o;
			}

			var friend = new Person('nick', 29, 'se');
			friend.sayName();
		})();

		(function() {
			function MyArray() {
				var values = new Array();
				values.push.apply(values, arguments);
				values.toPipedString = function() {
					return this.join(" | ");
				};
			}
		})();
		
		// durable constructor pattern
		
		// prototype chaining

		// constructor sealing

		// combination inhertiance

		// prototypal inheritance

		// parasitic inheritance

		// parasitic combination inheritance

		// summary




	// ***** Prototypal Inheritance *****
		/*
			* In prototypal inheritance, we directly create a new object from an existing object, without any notion of classes. 
			* Here we use “Object.create” to create a new object; it takes a parameter object which will be the prototype for the new object.
		*/
		(function() {
			var superhuman = {
				name: null,
				power: null,
				usePower: function( ){
					console.log("used power" + name);	
				}
			}

			var cptAmerica = Object.create(superhuman);
			cptAmerica.name = "Captain America";
			cptAmerica.power = 'Awesome Stuff';
			cptAmerica.usePower();
			
			var superMan = Object.create(superhuman);
			superMan.name = "SuperMan";
			superMan.power = "Flight";
				
		})();

		/***** PseudoClassical Inheritance (using new SuperHuman) *****
		/*
			*The pattern of pseudoclassical inheritance uses “constructor function” and the “new” operator to create objects, 
			*and uses the “prototype” property to build the inheritance chain. A constructor function is given a “prototype” property; 
			*this property is inherited by all instances.
		*/
		(function() {

			// SuperHuman
			function SuperHuman(name, power) {
				this.name = name;
				this.power = power;
			}

			SuperHuman.prototype.usePower = function() {
				console.log(this.name + " used the power " + this.power);
			};

			// SuperHero
			function SuperHero(name, power, allegiance) {
				SuperHuman.call(this, name, power);
				this.alignment = "good";
				this.allegiance = allegiance;
			}			
			SuperHero.prototype = new SuperHuman();			
			
			SuperHero.prototype.saveTheDay = function( ){
				this.usePower();
				console.log(this.name + " saved the day");
			};

			// SuperVillain
			function SuperVillain(name, power, allegiance) {
				SuperHuman.call(this, name, power);
				this.alignment = "evil";
				this.allegiance = allegiance;
			}
			SuperVillain.prototype = new SuperHuman();
			SuperVillain.prototype.executeMasterPlan = function( ){
				this.usePower();
				console.log(this.name + " executed master plan " );
			};

			// Fight!
			var cptAmerica = new SuperHero('Captain America', 'Athletics', 'Justice League');
			cptAmerica.saveTheDay();
			cptAmerica instanceof SuperHero; // true
			cptAmerica instanceof SuperHuman; // true

			var superMan = new SuperHero('Superman', 'Man of Steel', 'Indy');
			superMan.saveTheDay();
			var t = superMan instanceof SuperHero; // true
			t = superMan instanceof SuperHuman; // true

			var drDoom = new SuperVillain('Doctor Doom', 'Telepathy', 'Legion of Doom');			
			drDoom.executeMasterPlan();
			t = drDoom instanceof SuperHuman; // true
			t = drDoom instanceof SuperVillain; // true

		})();

		/***** PseudoClassical Inheritance (using Object.Create) *****
		/*
			*The pattern of pseudoclassical inheritance uses “constructor function” and the “new” operator to create objects, 
			*and uses the “prototype” property to build the inheritance chain. A constructor function is given a “prototype” property; 
			*this property is inherited by all instances.
		*/
		(function() {

			// SuperHuman
			function SuperHuman(name, power) {
				this.name = name;
				this.power = power;
			}

			SuperHuman.prototype.usePower = function() {
				console.log(this.name + " used the power " + this.power);
			};

			// SuperHero
			function SuperHero(name, power, allegiance) {
				SuperHuman.call(this, name, power);
				this.alignment = "good";
				this.allegiance = allegiance;
			}			
			SuperHero.prototype = Object.create(SuperHuman.prototype);	
			
			SuperHero.prototype.saveTheDay = function( ){
				this.usePower();
				console.log(this.name + " saved the day");
			};

			// Fight!
			var cptAmerica = new SuperHero('Captain America', 'Athletics', 'Justice League');
			cptAmerica.saveTheDay();
			cptAmerica instanceof SuperHero; // true
			cptAmerica instanceof SuperHuman; // true

			var superMan = new SuperHero('Superman', 'Man of Steel', 'Indy');
			superMan.saveTheDay();
			var t = superMan instanceof SuperHero; // true
			t = superMan instanceof SuperHuman; // true


		})();


}

	return ooProgramming;
});


