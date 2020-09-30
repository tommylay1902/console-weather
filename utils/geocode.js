const request = require("request");
const access_key = 'insert api access key here'
const geocode = (address, callback) => {

    const url =
        `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(address)}.json?access_token=${access_key}&limit=1`;
    
    
    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback(
                "error: unable to connect to location services",
                undefined
            );
        } else if (body.features == undefined) {
            callback(
                "Unable to find location, try a different search",
                undefined
            );
        } else {
            const c = body.features[0].geometry.coordinates;

            callback(undefined, {
                lat: c[1],
                lon: c[0],
                location: body.features[0].place_name,
            });
        }
    });
};
module.exports = geocode;
