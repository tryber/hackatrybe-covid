import React from "react";
import { Map, GoogleApiWrapper, Marker } from "google-maps-react";
import { data } from "./locationData";

class StatusPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { apiData: "" };
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
      <Map
        google={this.props.google}
        zoom={5}
        initialCenter={{ lat: -15.7801, lng: -47.9292 }}
        style={{
          width: "100%",
          height: "100%"
        }}
      >
        {this.state.apiData.regions.map(region => (
          <Marker
            position={this.findGeoLocation(region.name)}
            title={`Confirmados: ${region.today_confirmed} - Mortes: ${region.today_deaths} - Recuperados: ${region.today_recovered}`}
          />
        ))}
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyCWoGhhC5t7sdxEZg1h3ggFz24RWoFHzuE"
})(StatusPage);
