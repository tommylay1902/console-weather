const geocode = require("./utils/geocode");
const forecast = require("./utils/forecast");

input = process.argv.splice(2, process.argv.length).join(" ");
geocode(input, (error, { lat, lon, location } = {}) => {
    if (error) return console.log(error);

    forecast(lat, lon, (error, forecastData) => {
        if (error) return console.log(error);
        console.log(location);
        console.log(forecastData);
    });
});
