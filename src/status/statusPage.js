import React from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
import Circle from '../unnamed.png'

class StatusPage extends React.Component {

    constructor (props) {
        super(props);
        this.state = {apiData: ''}
    }

    componentDidMount() {
        const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
        fetch(proxyUrl + `https://api.covid19tracking.narrativa.com/api/${this.generateDate()}/country/brazil`).then(data => data.json()).then(res => 
        this.setState({apiData: res}))
    }

    generateDate() {
        const today = new Date();
        const date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
        return date;
    }


    render() {
        console.log(this.state.apiData)
        return (
            <Map
                google={this.props.google}
                zoom={5}
                initialCenter={{ lat: -15.7801, lng: -47.9292 }}
                style={{
                    width: '100%',
                    height: '100%',
                }}
            >
                {/* {
                    this.state.apiData
                } */}
                {/* <Marker
                title={'The marker`s title will appear as a tooltip.'}
                name={'SOMA'}
                position={{ lat: -15.7801, lng: -47.9292 }}
                icon= {{url: Circle, scale: '10%, 10%'}}
                /> */}
            </Map>
        );
    }
}

export default GoogleApiWrapper({
    apiKey: 'AIzaSyCWoGhhC5t7sdxEZg1h3ggFz24RWoFHzuE',
})(StatusPage); 