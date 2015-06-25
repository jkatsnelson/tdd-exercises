/* jshint -W079 */
var mockData = (function() {
    return {
        getMockPeople: getMockPeople,
        getMockStates: getMockStates,
        getMockWeather: getMockWeather
    };

    function getMockStates() {
        return [
            {
                state: 'dashboard',
                config: {
                    url: '/',
                    templateUrl: 'app/dashboard/dashboard.html',
                    title: 'dashboard',
                    settings: {
                        nav: 1,
                        content: '<i class="fa fa-dashboard"></i> Dashboard'
                    }
                }
            }
        ];
    }

    function getMockPeople() {
        return [
            {firstName: 'John', lastName: 'Papa', age: 25, location: 'Florida'},
            {firstName: 'Ward', lastName: 'Bell', age: 31, location: 'California'},
            {firstName: 'Colleen', lastName: 'Jones', age: 21, location: 'New York'},
            {firstName: 'Madelyn', lastName: 'Green', age: 18, location: 'North Dakota'},
            {firstName: 'Ella', lastName: 'Jobs', age: 18, location: 'South Dakota'},
            {firstName: 'Landon', lastName: 'Gates', age: 11, location: 'South Carolina'},
            {firstName: 'Haley', lastName: 'Guthrie', age: 35, location: 'Wyoming'}
        ];
    }

    function getMockWeather() {
        return {  
            "coord":{  
                "lon":-88.1,
                "lat":13.7
            },
            "sys":{  
                "message":0.0082,
                "country":"SV",
                "sunrise":1435231629,
                "sunset":1435278188
            },
            "weather":[  
                {  
                    "id":801,
                    "main":"Clouds",
                    "description":"few clouds",
                    "icon":"02d"
                }
            ],
            "base":"stations",
            "main":{  
                "temp":305.302,
                "temp_min":305.302,
                "temp_max":305.302,
                "pressure":962.8,
                "sea_level":1022.13,
                "grnd_level":962.8,
                "humidity":52
            },
            "wind":{  
                "speed":3.12,
                "deg":74
            },
            "clouds":{  
                "all":20
            },
            "dt":1435268643,
            "id":3583747,
            "name":"San Francisco",
            "cod":200
        }
    }
})();
