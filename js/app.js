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
require(['jQuery','2_intermediate/ooProgramming'], function($,ooProgramming) {    
    ooProgramming();
    console.log('jQuery version:', $.fn.jquery); 
});

