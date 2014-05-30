(function() {
    'use strict';
    window.initRequire = function(serviceUrl) {

        require.config({
            baseUrl: serviceUrl + '/js',
            paths: {
                // // Load jquery from CDN, fallback to local
                 'jquery': ['//ajax.googleapis.com/ajax/libs/jquery/1.8.2/jquery.min', 'jquery/jquery-1.8.2.min.js'],
                // 'jquery-ui': ['//ajax.googleapis.com/ajax/libs/jqueryui/1.10.3/jquery-ui.min', 'jquery/jquery-1.8.2.min.js'],

                // //Mustache
                // 'mustache': 'vendor/mustache',

                // // knockout and kendo
                // 'knockout': 'knockout/knockout-3.0.0.debug',
                // 'knockout-validation': 'vendor/knockout-validation',
                // 'knockout-sortable': 'knockout/knockout-sortable',

                // 'kendo': 'vendor/kendo/kendo.web.min',
                // 'kendo-dataviz': 'vendor/kendo/kendo.dataviz.min',
                // 'knockout-kendo': 'vendor/knockout-kendo',

                // // MomentJS
                // 'moment': 'vendor/moment',

            },
            shim: {
                // // jquery UI plugins
                // 'jquery': {exports: 'jQuery'},
                // 'jquery-ui': { deps: ['jquery'] },

                // // kendo plugins
                // // yes, kend-dataviz before kendo
                // 'kendo-dataviz': { deps: ['jquery'] },
                // 'kendo': { deps: ['jquery', 'kendo-dataviz'] },

                // // knockout plugins
                // 'knockout': { exports: 'ko',  deps: ['jquery']},
                // 'knockout-kendo': { deps: ['knockout', 'kendo'] },
                // 'knockout-validation': { deps: ['knockout'] },
                // 'knockout-sortable': { deps: ['knockout'] },
            }
        });

    };
}());