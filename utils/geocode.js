const request = require("request");
const access_key = "insert api access key here";
const geocode = (address) => {
    const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/"${encodeURIComponent(
        address
    )}.json?access_token=${access_key}&limit=1`;
    return new Promise((resolve, reject) => {
        request({ url, json: true }, (error, { body }) => {
            if (error) {
                reject("Could not connect to geocode service");
            } else if (body.features == undefined) {
                reject("No results found for you search... try again?");
            } else {
                const c = body.features[0].geometry.coordinates;
                resolve({
                    lat: c[1],
                    lon: c[0],
                    location: body.features[0].place_name,
                });
            }
        });
    });
};
module.exports = geocode;
