const request = require("request");
const access_key = 'insert api access key here';
const forecast = (lat, long, callback) => {
    const url = `http://api.weatherstack.com/current?access_key=${access_key}&query=${lat},${long}&units=f`;

    request({ url, json: true }, (error, { body }) => {
        if (error) callback("Can't connect to services", undefined);
        else if (body.error) callback("unable to find location", undefined);
        else
            callback(
                undefined,
                `It is ${body.current.temperature} but it feels like ${body.current.feelslike}`
            );
    });
};

module.exports = forecast;
