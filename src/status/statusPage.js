import React from "react";
import { Map, GoogleApiWrapper, Marker, InfoWindow } from "google-maps-react";
import { data } from "./locationData";
import Circle from "../circle.png";

class StatusPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      apiData: "",
      showingInfoWindow: false,
      activeMarker: {},
      selectedPlace: {}
    };
  }

  componentDidMount() {
    const proxyUrl = "https://cors-anywhere.herokuapp.com/";
    fetch(
      proxyUrl +
        `https://api.covid19tracking.narrativa.com/api/${this.generateDate()}/country/brazil`
    )
      .then(data => data.json())
      .then(res =>
        this.setState({
          apiData: res.dates[this.generateDate()].countries.Brazil
        })
      );
  }

  onMarkerClick = (props, marker, e) =>
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });

  onMapClicked = props => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      });
    }
  };

  generateDate() {
    const today = new Date();
    const month = (today.getMonth() + 1).toLocaleString(undefined, {
      minimumIntegerDigits: 2
    });
    const date = today
      .getDate()
      .toLocaleString(undefined, { minimumIntegerDigits: 2 });
    const currentDate = today.getFullYear() + "-" + month + "-" + date;
    return currentDate;
  }

  findGeoLocation(name) {
    const currentName = data.find(each => each.estado === name);
    return { lat: currentName.latitude, lng: currentName.longitude };
  }

  render() {
    console.log(this.state.apiData);
    if (this.state.apiData === "") {
      return <div>Loading...</div>;
    }

    return (
      <div>
        <h1>COVID-19 NO BRASIL</h1>
        <Map
          google={this.props.google}
          zoom={5}
          initialCenter={{ lat: -15.7801, lng: -47.9292 }}
          onClick={this.onMapClicked}
          mapTypeControl={false}
          style={{width: '100%', height: '80%'}}
        >
          {this.state.apiData.regions.map(region => (
            <Marker
              onClick={this.onMarkerClick}
              position={this.findGeoLocation(region.name)}
              name={`${region.name} - Confirmados: ${region.today_confirmed} - Mortes: ${region.today_deaths} - Recuperados: ${region.today_recovered}`}
              icon={{
                url: Circle,
                scaledSize: {
                  width: Math.log(region.today_confirmed + 1) * 15,
                  height: Math.log(region.today_confirmed + 1) * 15
                }
              }}
              title={region.name}
              opacity={0.6}
            />
          ))}
          <InfoWindow
            marker={this.state.activeMarker}
            visible={this.state.showingInfoWindow}
          >
            <div>
              <h1>{this.state.selectedPlace.name}</h1>
            </div>
          </InfoWindow>
        </Map>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyCWoGhhC5t7sdxEZg1h3ggFz24RWoFHzuE"
})(StatusPage);
