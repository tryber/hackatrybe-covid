import React from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';

class StatusPage extends React.Component {
    render() {
        return (
            <Map
                google={this.props.google}
                zoom={5}
                initialCenter={{ lat: -15.7801, lng: -47.9292 }}
                style={{
                    width: '100%',
                    height: '100%',
                }}
            />
        );
    }
}

export default GoogleApiWrapper({
    apiKey: 'AIzaSyCWoGhhC5t7sdxEZg1h3ggFz24RWoFHzuE',
})(StatusPage); 