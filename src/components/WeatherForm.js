import React from 'react';

const WeatherForm = props => (
    <div className="card card-body">
        <form onSubmit={props.getWeather}>
            <div className="form-group">
                <input
                    type="text"
                    name="city"
                    placeholder="City name"
                    className="form-control"
                    autoFocus
                />
                <input
                    type="text"
                    name="country"
                    placeholder="Country name"
                    className="form-control"
                />
                <button className="btn btn-success btn-block">
                    Get weather
                </button>
            </div>
        </form>
    </div>
)
export default WeatherForm;