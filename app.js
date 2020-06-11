// Initialise/Instantiate Storage
const storage = new Storage();

// Get stored location data
const weatherLocation = storage.getLocationData();

// Initialise/Instantiate weather object
// instead of hardcoding the city and country we can get it from local storage
// if not got to default in the storage.js
const weather = new Weather(weatherLocation.city, weatherLocation.country);

// Initialise/Instantiate UI
const ui = new UI();

// Get weather on DOM load
document.addEventListener('DOMContentLoaded', getWeather);

// Change Location event
document.querySelector('#w-change-btn').addEventListener('click', e => {
    const city = document.querySelector('#city').value;
    const country = document.querySelector('#country').value;

    // Change location
    weather.changeLocation(city, country);

    // Set location in local storage
    storage.setLocationData(city, country);


    // Get and display weather
    getWeather();

    //close modal - need to use jQuery
    $('#locModal').modal('hide');
});




// getWeather() will return a promise since its asynchronous in weather.js
// therefore we can use .then() to handle the response
function getWeather(){
weather.getWeather()
.then(results => {
    // paint the ui with these results, paint method from ui.js
    ui.paint(results)
})
.catch(err => console.log(err));
}