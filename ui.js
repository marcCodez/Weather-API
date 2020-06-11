class UI {
    constructor(){
        this.location = document.querySelector('#w-location');
        this.desc = document.querySelector('#w-desc');
        this.string = document.querySelector('#w-string');
        this.details = document.querySelector('#w-details');
        this.icon = document.querySelector('#w-icon');
        this.humidity = document.querySelector('#w-humidity');
        this.dewpoint = document.querySelector('#w-dewpoint');
        this.wind = document.querySelector('#w-wind');
    }
    
    // weather is the result we pass in
    paint(weather){

        // we get this properties from the API JSON properties (https://openweathermap.org/current)
        this.location.textContent = weather.name;
        // unlike other properties, since weather object is surrounded by square array brackets we need to specify its position [0]
        this.desc.textContent = weather.weather[0].description;
        this.string.textContent = `${weather.main.temp}°C`;
        // For code 500 - light rain icon = "10d". See below a full list of codes
        //URL is http://openweathermap.org/img/wn/10d@2x.png
        this.icon.setAttribute('src',  `http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`);
        this.humidity.textContent = `Relative Humidity: ${weather.main.humidity}`;
        this.dewpoint.textContent = `Wind Direction: ${weather.wind.deg} degrees`;
        this.wind.textContent = `Wind Speed: ${weather.wind.speed} meters/sec`;




    }
}