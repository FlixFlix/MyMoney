/**
 * Created by robertmartindelcampo on 5/25/17.
 */
(function () {
  'use strict';

  angular
    .module('webApp')
    .directive('delayedValue', delayedValue)
    .directive('delayedDisplay', delayedDisplay);

  /* @ngInject */  
  function delayedValue () {
    var directive = {
      restrict: 'A',
      link: link
    };

    return directive;

    function link(scope, el, attrs) {
      var myTiming = setTimeout(function() {
        el.val(attrs.val);
        clearTimeout(myTiming);
      }, attrs.delay || 3000);
    }
  }

  function delayedDisplay() {
    var directive = {
      restrict: 'A',
      link: link
    };

    return directive;

    function link(scope, el, attrs) {
      var myTiming = setTimeout(function() {
        
        if (attrs.delayedDisplay === 'show') {
          el.css('display', 'flex');
        } else {
          el.css('display', 'none');
        }

        clearTimeout(myTiming);
      }, attrs.delay || 3000);
    }
  }

})();
