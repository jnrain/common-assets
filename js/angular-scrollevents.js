(function(angular) {
    'use strict';

    var INTERVAL_DELAY = 150;

    angular.module('ngScrollEvent', [])
    .directive('ngScrollEvent', ['$parse', '$window', function($parse, $window) {
        return function(scope, element, attr) {
          var fn = $parse(attr.ngScrollEvent);

            var interval,
            handler,
            el = element[0],
            scrollEvent = 'scroll.ngscrollevent',
            scrollPosition = {
                x: 0,
                y: 0
            },
            isTargetWindow = attr.ngScrollEventSource === 'window',
            bindTarget = isTargetWindow ? angular.element($window) : element;
    
            var bindScroll = function() {
                handler = function(event) {
                    if (isTargetWindow) {
                        // TODO: IE compatibility
                        scrollPosition.x = $window.pageXOffset;
                        scrollPosition.y = $window.pageYOffset;
                    } else {
                        scrollPosition.x = el.scrollLeft;
                        scrollPosition.y = el.scrollTop;
                    }
    
                    startInterval(event);
                    unbindScroll();
                    scrollTrigger(event, false);
                };

                bindTarget.bind(scrollEvent, handler);
            };
    
            var startInterval = function(event) {
                interval = $window.setInterval(function() {
                    var currX, currY;

                    if (isTargetWindow) {
                        // TODO: IE compatibility
                        currX = $window.pageXOffset;
                        currY = $window.pageYOffset;
                    } else {
                        currX = el.scrollLeft;
                        currY = el.scrollTop;
                    }

                    if (scrollPosition.x == currX && scrollPosition.y == currY) {
                        $window.clearInterval(interval);
                        bindScroll();
                        scrollTrigger(event, true);
                    } else {
                        scrollPosition.x = currX;
                        scrollPosition.y = currY;
                    }
                }, INTERVAL_DELAY);
            };
    
            var unbindScroll = function() {
                // be nice to others, don't unbind their scroll handlers
                bindTarget.unbind(scrollEvent, handler);
            };
    
            var scrollTrigger = function(event, isEndEvent) {
                scope.$apply(function() {
                  fn(scope, {$event: event, isEndEvent: isEndEvent});
                });
            };
    
            bindScroll();
        };
    }]);
})(angular);


// vim:set ai et ts=4 sw=4 sts=4 fenc=utf-8:
