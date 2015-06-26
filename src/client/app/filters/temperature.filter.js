(function() {
    'use strict';

    angular.module('app.filters')
          .filter('temperature', temperature);
    
    function temperature() {
      return function(input, params) {
        if (params === "KF") {
          return Math.round((9/5) * (input - 273) + 32) + "F";
        }
      }
    }
})();
