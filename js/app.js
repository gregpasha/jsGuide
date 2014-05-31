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

// require(['jQuery','basics'], function($,basics){
//     console.log('jQuery version:', $.fn.jquery); 
//     var x = new basics();
//     console.log(x);
// });

require([
    'jQuery',
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

