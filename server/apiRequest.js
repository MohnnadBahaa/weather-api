const request = require('request');


module.exports.fetchWeatherDataApi = (callback) => {
    const _apiRoute = "http://api.apixu.com/v1/current.json?key=2cb6b9c413914d02bc775202180507&q=Dubai";

    request(_apiRoute, (error, response, body) => {
        if (error) throw error;
        if (response.statusCode == 200) {

            callback(JSON.parse(body));
        }
    })
}