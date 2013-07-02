'use strict';


var require = {
  baseUrl: '//static.jnrain.com/common/js',
  paths: {
    'select2': '../standalone/select2/select2'
  },
  shim: {
    'jquery.ui': ['jquery'],
    'jquery.backstretch': ['jquery'],
    'garlic': ['jquery'],
    'parsley': ['jquery'],
    'supersized.core': ['jquery'],
    'select2': ['jquery'],
    'angular': {
      deps: ['jquery'],  // force use of real jQuery
      exports: 'angular'
    },
    'angular-resource': ['angular'],
    'angular-sanitize': ['angular'],
    'angular-dragdrop': {
      deps: ['jquery.ui', 'angular'],
      exports: 'jqyoui'
    },
    'angular-ui-select2': ['select2', 'angular']
  }
};


// vim:set ai et ts=2 sw=2 sts=2 fenc=utf-8:
