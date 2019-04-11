/**
 * @param {*} weatherData : it is object of object 
 * this module behavior it will respond Api
 * and it will distract Api and return an object
 * @returns an object
 */

module.exports.destractionWeatherFeed = (weatherData) => {

    let weatherFeed = {};
    weatherFeed.last_updated = weatherData.current.last_updated;
    weatherFeed.weather_status = weatherData.current.condition.text;
    weatherFeed.current_temp = weatherData.current.temp_c;
    weatherFeed.wind_speed = weatherData.current.wind_mph;

    return weatherFeed;
}