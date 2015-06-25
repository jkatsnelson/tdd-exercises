/* jshint -W117, -W030 */
describe('DashboardController', function() {
    var controller;
    var people = mockData.getMockPeople();

    beforeEach(function() {
        bard.appModule('app.dashboard');
        bard.inject('$controller', '$log', '$q', '$rootScope', 'dataservice', 'weatherService');
    });

    beforeEach(function () {
        sinon.stub(dataservice, 'getPeople').returns($q.when(people));
        sinon.stub(weatherService, 'findLocation').returns({
            then: function() {
                return;
            }
        });
        controller = $controller('DashboardController');
        $rootScope.$apply();
    });

    bard.verifyNoOutstandingHttpRequests();

    describe('Dashboard controller', function() {
        it('should be created successfully', function () {
            expect(controller).to.be.defined;
        });

        describe('after activate', function() {
            it('should have title of Dashboard', function () {
                expect(controller.title).to.equal('Dashboard');
            });

            it('should have logged "Activated"', function() {
                expect($log.info.logs).to.match(/Activated/);
            });

            it('should have news', function () {
                expect(controller.news).to.not.be.empty;
            });

            it('should have at least 1 person', function () {
                expect(controller.people).to.have.length.above(0);
            });

            it('should have people count of 5', function () {
                expect(controller.people).to.have.length(7);
            });
        });
        describe("weather functionality", function() {
            it('should have an empty weather input model', function() {
                expect(controller.weather.input).to.be.empty;
            });
            describe("inputChanged", function() {
                it("should be a function", function() {
                    expect(controller.weather.inputChanged).to.be.instanceOf(Function);
                });
                it("should call the weatherService's findLocation method", function() {
                    controller.weather.inputChanged();
                    expect(weatherService.findLocation.callCount).equal(1);
                });
            })
        });
    });
});
