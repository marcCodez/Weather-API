// Initialise/Instantiate weather object
const weather = new Weather('Prestons', 'au');

// Get weather on DOM load
document.addEventListener('DOMContentLoaded', getWeather);

// getWeather() will return a promise since its asynchronous in weather.js
// therefore we can use .then() to handle the response
function getWeather(){
weather.getWeather()
.then(results=> {
    console.log(results);
})
.catch(err => console.log(err));
}