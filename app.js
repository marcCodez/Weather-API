// Initialise/Instantiate weather object
const weather = new Weather('Prestons', 'au');

// Initialise/Instantiate UI
const ui = new UI();

// Get weather on DOM load
document.addEventListener('DOMContentLoaded', getWeather);

// getWeather() will return a promise since its asynchronous in weather.js
// therefore we can use .then() to handle the response
function getWeather(){
weather.getWeather()
.then(results=> {
    // paint the ui with these results, paint method from ui.js
    ui.paint(results);
})
.catch(err => console.log(err));
}