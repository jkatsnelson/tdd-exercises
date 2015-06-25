describe("weatherService", function() {
  var SFWeather = mockData.getMockWeather();

  beforeEach(function() {
    module('app.dashboard');
    bard.inject('weatherService', '$http');
    sinon.stub($http, 'get', function() {
      return {
        then: function(cb) {
          return cb({data: SFWeather});
        }
      };
    });
  });

  describe("findLocation", function() {
    it("should be a method", function() {
      expect(weatherService.findLocation).to.be.instanceOf(Function);
    });
    it("should make a get request to an API", function() {
      weatherService.findLocation('city', {});
      expect($http.get.callCount).to.equal(1);
    });
    it("should take a city and a bound view model key and set the city data to the view model key", function() {
      var viewModel = {};
      weatherService.findLocation('city', viewModel);
      expect(viewModel.data.name).to.equal('San Francisco');
    });
  });
});
