class Forecast {
    constructor(){
        this.key = '';
        this.weatherURI = 'http://dataservice.accweather.com/currentconditions/v1/';
        this.cityURI = 'http://dataservice.accweather.com/locations/v1/cities/search';
    }

    async updateCity(city){
        const cityDets  = await this.getCity(city);
        const weather = await this.getWeather(cityDets.key);
    
        // return {
        //     cityDets: cityDets,
        //     weather: weather
        // };
    
        // object shorthand notation
        return { cityDets, weather };
    }

    // Get city information
    async getCity(city){
        const query = `?apikey=${this.key}&q=${city}`;
    
        const response = await fetch(this.cityURI + query);
        const data = await response.json();
        
        return data[0];
    }

    // Get weather information
    async getWeather(){
        const query = `${id}?apikey=${this.key}`;
        const response = await fetch(this.weatherURI + query);
        const data = await response.json();
    
        return data[0];
    }
}



