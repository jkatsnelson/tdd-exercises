(function() {
  'use strict';
  var api = 'http://api.openweathermap.org/data/2.5/weather?q=';
  angular
      .module('app.dashboard')
      .service('weatherService', weatherService);

  weatherService.$inject = ['$http'];
  function weatherService($http) {
    this.findLocation = function(city, vmWeather) {
      if (!city) { city = 'San+Francisco'; }
      $http.get(api + city).then(function(data) {
        vmWeather.data = data.data;
      });
    };
  }
})();
