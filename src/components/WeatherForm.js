import React from 'react';

const WeatherForm = props => (
    <div className="card">
        <div className="card-header">
            <h1 className="title">Weather App</h1>
        </div>
        <div className="card-body">
            <form onSubmit={props.getWeather}>
                <div className="form-group">
                    <input
                        type="text"
                        name="city"
                        placeholder="City name"
                        className="form-control mb-3"
                        autoFocus
                    />
                    <input
                        type="text"
                        name="country"
                        placeholder="Country name"
                        className="form-control mb-3"
                    />
                    <button className="btn btn-warning btn-block button">
                        Get weather
                    </button>
                </div>
            </form>
        </div>    
    </div>
)
export default WeatherForm;