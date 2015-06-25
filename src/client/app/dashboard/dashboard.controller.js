(function () {
    'use strict';

    angular
        .module('app.dashboard')
        .controller('DashboardController', DashboardController);

    DashboardController.$inject = ['$q', 'dataservice', 'logger', 'weatherService'];
    /* @ngInject */
    function DashboardController($q, dataservice, logger, weatherService) {
        var vm = this;
        vm.news = {
            title: 'exerciseJune24',
            description: 'Hot Towel Angular is a SPA template for Angular developers.'
        };
        vm.weather = {
            title: 'Weather',
            description: "What weather are you looking for?",
            input: '',
            inputChanged: function(model, weatherData) {
                weatherService.findLocation(model, weatherData);
            }
        }
        vm.messageCount = 0;
        vm.people = [];
        vm.title = 'Dashboard';

        activate();

        function activate() {
            var promises = [getMessageCount(), getPeople()];
            return $q.all(promises).then(function() {
                logger.info('Activated Dashboard View');
            });
        }

        function getMessageCount() {
            return dataservice.getMessageCount().then(function (data) {
                vm.messageCount = data;
                return vm.messageCount;
            });
        }

        function getPeople() {
            return dataservice.getPeople().then(function (data) {
                vm.people = data;
                return vm.people;
            });
        }
    }
})();
