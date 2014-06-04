'use strict'

// this project is here to explain javascript via examples and debugging through them
// javascript doesn't (currently) have a built in system to write it in a modular fasion 
// there are libraries written on top of javascript to help you write modular javascript 
// this one uses "requirejs. 

// check out blankFunctionModule and blankObjectModule to see how we can define modules.
// by the way, functions and objects are two core building blocks in javascript and we get into them
// in the beginner section as they are fundamental

// You will also see a file named IIFE, this stands for Immediately Invoked Function Expression
// you may see them referred to Self Invoking Function Expressions, but that term is older and not used as much
// IIFEs are useful in javascript for many reasons, but I use them in this project to immediately invoke functions
// and provide a function scope so I don't have tons of global variables, this allows you to debug through
// the code and follow along what's happening.

// p.s.

// ECMAScript is the official name of Javascript
// version 3 (ES3) came out a long time ago
// version 5 (ES5) came out in 2009
// for compatibility see
// http://kangax.github.io/compat-table/es5/

// ES5 'strict mode' attempts to fix some language defects, you'll see I've defined it at the top of this file
// you can opt in to ES5 Strict Mode by putting 'use strict' at the top of your function or javascript file
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions_and_function_scope/Strict_mode

// p.s.s 

// this guide isn't a book and doesn't cover javsascript comprehensively
// it is only intended to help people get a basic understanding and 
// learn about some of the quirks of the language