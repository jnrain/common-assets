'use strict';


var require = (function() {
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
            'jquery.stellar': [JQUERY],
            'garlic': [JQUERY],
            'parsley': [JQUERY],
            'supersized.core': [JQUERY],
            'select2': [JQUERY],
            'waypoints': [JQUERY],

            // AngularJS components
            NG: {
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
            'angular-scrollevents': [NG],
            'stellar.directives': [NG, 'jquery.stellar'],
            'ui.jq': [JQUERY, NG]
          }
        };

    return result;
})();


// vim:set ai et ts=2 sw=2 sts=2 fenc=utf-8:
