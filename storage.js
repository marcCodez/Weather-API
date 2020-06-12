class Storage {
    constructor() {
        this.city
        this.country
        // Default incase nothing is in local storage
        this.defaultCity = 'London'
        this.defaultCountry = 'UK'
    }

    getLocationData() {
        // check if its null in local storage, set to default if so else set them
        // if(localStorage.getItem('city') === null){
        //     this.city = this.defaultCity;
        // } else {
        //     this.city = localStorage.getItem('city')
        // }
        
        // if(localStorage.getItem('country') === null){
        //     this.country = this.defaultCountry;
        // } else {
        //     this.country = localStorage.getItem('country')
        // }

        // Can rewrite it using ternary operator notation
        // using assign = not strict equality
        localStorage.getItem('city') === null
        ? (this.city = this.defaultCity)
        : (this.city = localStorage.getItem('city'));

        localStorage.getItem('country') === null
        ? (this.country = this.defaultCountry)
        : (this.country = localStorage.getItem('country'));



        return {
            city: this.city,
            country: this.country
        }
    }

    setLocationData(city, country){
        // dont need to worry about stringify or parse from previous projects
        // since we're now saving just strings
        localStorage.setItem('city', city);
        localStorage.setItem('country', country);


    }
}
