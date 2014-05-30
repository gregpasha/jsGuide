// this shim is for libraries and whatnot that don't expose themselves as an AMD modules
require.config({
    paths: {
        'jQuery': 'vendor/jQuery',
        'underscore': 'vendor/underscore'
    },
    shim: {
        'jQuery': {
            exports: '$'
        },
        'underscore': {
            exports: '_'
        }
    }
});

require(['module1', 'module2','jQuery','underscore'], function(module1, module2,$,_){
    
    var module1 = new module1(),
       	module2 = new module2();
    
    console.log(module1.getName() === module2.getModuleName()); 
    console.log('jQuery version:', $.fn.jquery); 
    console.log(typeof _); // make sure underscore library is available
});
