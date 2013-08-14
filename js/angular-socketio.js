(function(angular) {
  'use strict';

  angular.module('ngSocketIO', [])
  .factory('socket', ['$rootScope', function($rootScope) {
    var sockets = {};

    return {
      connect: function(uri, options) {
        // XXX: This does not respect different options concerning the same
        // URI!
        if (typeof sockets[uri] === 'undefined') {
          // instantiate a new socket, and inject some Angular-awareness
          sockets[uri] = (function(uri, options) {
            var socket = io.connect(uri, options),
                oldOn = socket.on,
                oldEmit = socket.emit;

            socket.on = socket.addListener = function(name, fn) {
              oldOn(name, function() {
                var args = arguments;

                $rootScope.$apply(function() {
                  fn.apply(socket, args);
                });
              });

              return socket;
            };

            socket.emit = function() {
              var r, args = arguments;

              $rootScope.$apply(function() {
                r = oldEmit.apply(socket, args);
              });

              return r;
            };

            return socket;
          })(uri, options);
        }

        return sockets[uri];
      }
    };
  }]);
})(angular);


// vim:set ai et ts=2 sw=2 sts=2 fenc=utf-8:
