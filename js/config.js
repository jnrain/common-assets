var require = (function() {
  'use strict';

  var JQUERY = 'jquery',
      NG = 'angular',
      result = {
          baseUrl: '//static.jnrain.com/common/js',
          paths: {
            'select2': '../standalone/select2/select2'
          },
          shim: {
            // jQuery plugins
            'jquery.ui': [JQUERY],
            'jquery.backstretch': [JQUERY],
            'jquery.fullscreen': [JQUERY],
            'jquery.stellar': [JQUERY],
            'jquery.transit': [JQUERY],
            'garlic': [JQUERY],
            'parsley': [JQUERY],
            'supersized.core': [JQUERY],
            'select2': [JQUERY],
            'waypoints': [JQUERY],

            // AngularJS components
            // the name NG is NOT a variable here!!!
            'angular': {
              deps: [JQUERY],  // force use of real jQuery
              exports: NG
            },
            'angular-resource': [NG],
            'angular-sanitize': [NG],
            'angular-dragdrop': {
              deps: ['jquery.ui', NG],
              exports: 'jqyoui'
            },
            'angular-ui-select2': ['select2', NG],
            'angular-smoothscroll': [JQUERY, NG],
            // Socket.IO.js is AMD-compatible
            'angular-socketio': ['socket.io', NG],
            'angular-scrollevents': [NG],
            'stellar.directives': [NG, 'jquery.stellar'],
            'ui.jq': [JQUERY, NG],

            // other libraries
            'd3.v3': {
              deps: [],
              exports: 'd3'
            },
            'qrcode': {
              exports: 'QRCode'
            }
          }
        };

    return result;
})();


// vim:set ai et ts=2 sw=2 sts=2 fenc=utf-8:
