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

require(['basics','jQuery'], function(basics,$){
    
    var module1 = new basics();
    
    console.log('jQuery version:', $.fn.jquery); 
});

