// bootsrap app with requirejs
require.config({
    paths: {
        'jQuery': 'vendor/jQuery',
    },
    shim: {
        'jQuery': {
            exports: '$'
        },
    }
});

// load modules
require([
    'jQuery',
    'modules/blankObjectModule',
    'modules/blankFunctionModule',
    'basics/variableNames',
    'basics/core',
    'basics/truthyfalsy'
    ], function(
        $,
        variableNames,
        core,
        truthyfalsy) {
    
    var varNames = new variableNames();
    truthyfalsy();   
    console.log('jQuery version:', $.fn.jquery); 
});

