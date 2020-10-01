const request = require("request");
const access_key = "insert api access key here";
const forecast = (lat, long, location) => {
    const url = `http://api.weatherstack.com/current?access_key=${access_key}&query=${lat},${long}&units=f`;

    return new Promise((resolve, reject) => {
        request({ url, json: true }, (error, { body }) => {
            if (error) reject("Can't connect to services");
            else if (body.error) reject("unable to find location");
            else
                resolve(
                    `It is ${body.current.temperature} but it feels like ${body.current.feelslike} in ${location}`
                );
        });
    });
};

module.exports = forecast;
