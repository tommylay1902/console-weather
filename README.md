# Console-Weather-Application
simple node.js console application that calls to two APIs to figure out the temperature within your location

# How to use
Make sure you have node.js installed and after cloning repository:  
-Sign up for a weatherstack account : https://weatherstack.com/product, and get your API key  
-Sign up for a mapbox account : https://account.mapbox.com/auth/signup/, and get your API key  

Located within the utils/forecast.js, insert into access_key your API key  
Located within the utils/geocode.js, insert into access_key your API key  

Within the terminal, direct yourself to the directory that app.js is located in then the command:  
**node app.js**  

Followed by the location you want to check the weather in your location, the more specific the more easier it is for the api to find your exact location (city state country)  
So the following command like **node app.js Los Angeles California** will show the temperature for that location
