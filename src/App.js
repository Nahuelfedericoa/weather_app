import React, { Component } from 'react';
import './App.css';

import WeatherInfo from './components/WeatherInfo';
import WeatherForm from './components/WeatherForm';

// import { WEATHER_KEY} from './components/keys';

class App extends Component {

  state = {
      temperature: '',
      description: '',
      humidity: '',
      wind_speed: 0,
      city: '',
      country: '',
      error: null
  }

  getWeather = async (e) => {
    e.preventDefault();
    const { city, country } = e.target.elements;
    const cityValue = city.value;
    const countryValue = country.value;
    
    if (countryValue && cityValue) {
      const API_URL = `https://api.openweathermap.org/data/2.5/weather?q=${cityValue},${countryValue}&appid=517b832c2d9524251919ce3e541b7a75&units=metric`;

      const response = await fetch(API_URL);
      const data = await response.json();
      console.log(this.state)

      this.setState({
        temperature: data.main.temp,
        description: data.weather[0].description,
        humidity: data.main.humidity,
        wind_speed: data.wind.speed,
        city: data.name,
        country: data.sys.country
      }, () => console.log(this.state));
    }else{
      this.setState({
        error: 'Please, Enter a city and a country'
      })
    }

  }

    
  render(){

 
  return (
    <div className="container p-4">
      <div className="row">
        <div className="col-md-4 mx-auto">
          <WeatherForm getWeather={this.getWeather}/>
          <WeatherInfo {...this.state} />
        </div>
      </div>
    </div>
  );
}
}

export default App;
