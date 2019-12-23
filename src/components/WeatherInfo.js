import React from 'react';

const WeatherInfo = props => {
    console.log(props);
    return(
        <div className="card card-header">
            {
                props.error &&
                <div className="alert alert-info">
                    <p>{props.error}</p>
                </div>
            }
            {
                props.temperature ? 
                    <div className="card-body text-white">
                        <p>
                            Location: {props.city}, {props.country}
                        </p>
                        <p>
                            Temperature: {props.temperature} °C, {props.description}
                        </p>
                        <p>
                            Humidity: {props.humidity}%
                        </p>
                        <p>
                            Wind Speed: {props.wind_speed}
                        </p>
                    </div>
                :
                    <div className="card-body">
                        <p className="text-white request">
                            No request yet.
                        </p>
                    </div>    
            }

           

        </div>
        
    )
}
export default WeatherInfo;