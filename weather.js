class Weather {
    constructor(city, country){
        this.apiKey = '642ac4c8b53c4a9cbf92e0301699d00d'
        this.city = city;
        this.country = country;
    }

    // Fetch weather from API
    async getWeather() {

        // create response variable
        // add metic units at the end of the url for conversion
        const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${this.city},${this.country}&APPID=${this.apiKey}&units=metric`);
        
        // create
        const responseData = await response.json();

        // can check the properties we are working with
         console.log(responseData);

        return responseData;

    }

    // Change weather location
    changeLocation(city, country) {
        this.city = city;
        this.country = country;
    }
}