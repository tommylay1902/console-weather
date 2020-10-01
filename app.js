const geocode = require("./utils/geocode");
const forecast = require("./utils/forecast");

input = process.argv.splice(2, process.argv.length).join(" ");
geocode(input)
    .then(({ lat, lon, location }) => {
        forecast(lat, lon, location)
            .then((result) => {
                console.log(result);
            })
            .catch((error) => {
                console.log(error);
            });
    })
    .catch((error) => {
        console.log(error);
    });
