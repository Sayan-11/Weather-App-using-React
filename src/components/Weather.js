import React from 'react';

class Weather extends React.Component{
    render(){
        return(
            <div>
                {this.props.city && <p> Location: {this.props.city}</p>}
                {this.props.temperature && <p>Temperature: {this.props.temperature} Kelvins </p>}
                {this.props.humdidty && <p>Humidity: {this.props.humidity} </p>}
                {this.props.description && <p>{this.props.description}</p>}
                {this.props.error && <p>{this.props.error}</p>}
            </div>
        )
    }
}

export default Weather;