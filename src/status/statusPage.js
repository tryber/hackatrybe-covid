import React from "react";
import { Map, GoogleApiWrapper, Marker, InfoWindow } from "google-maps-react";
import NewsFeed from "../news/components/NewsFeed";
import { data } from "./locationData";
import Circle from "./circle.png";
import Loading from "../components/loading";
import "../style/statusPage.css";

class StatusPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      apiData: "",
      globalData: "",
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
    fetch(
      proxyUrl + `https://coronavirus-tracker-api.herokuapp.com/v2/locations`
    )
      .then(data => data.json())
      .then(res =>
        this.setState({
          globalData: res
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
    if (this.state.apiData === "" || this.state.globalData === "") {
      return (
        <div className="loading-container">
          <h1 className="map_title">Covid-19 no Brasil e no Mundo</h1>
          <Loading />
        </div>
      );
    }

    return (
      <div className="latest_news_wrapper">
        <h1 className="map_title">Covid-19 no Brasil e no Mundo</h1>
        <div className="row_wrapper">
          <div className="map_wrapper">
            <Map
              google={this.props.google}
              zoom={5}
              initialCenter={{ lat: -15.7801, lng: -47.9292 }}
              onClick={this.onMapClicked}
              mapTypeControl={false}
              style={{ width: "100%", height: "100vh" }}
            >
              {this.state.globalData.locations.map(location => (
                <Marker
                  onClick={this.onMarkerClick}
                  position={{
                    lat: location.coordinates.latitude,
                    lng: location.coordinates.longitude
                  }}
                  name1={location.province || location.country}
                  name2={`Confirmados: ${location.latest.confirmed}`}
                  name3={`Mortes: ${location.latest.deaths}`}
                  name4={`Recuperados: ${location.latest.recovered}`}
                  icon={{
                    url: Circle,
                    scaledSize: {
                      width: Math.log(location.latest.confirmed + 2) * 10,
                      height: Math.log(location.latest.confirmed + 2) * 10
                    }
                  }}
                  title={`${location.province || location.country}`}
                  opacity={0.6}
                />
              ))}
              {this.state.apiData.regions.map(region => (
                <Marker
                  onClick={this.onMarkerClick}
                  position={this.findGeoLocation(region.name)}
                  name1={region.name}
                  name2={`Confirmados: ${region.today_confirmed}`}
                  name3={`Mortes: ${region.today_deaths}`}
                  name4={`Recuperados: ${region.today_recovered}`}
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
                  <h2>{this.state.selectedPlace.name1}</h2>
                  <p>{this.state.selectedPlace.name2}</p>
                  <p>{this.state.selectedPlace.name3}</p>
                  <p>{this.state.selectedPlace.name4}</p>
                </div>
              </InfoWindow>
            </Map>
          </div>
          <NewsFeed />
        </div>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyCWoGhhC5t7sdxEZg1h3ggFz24RWoFHzuE"
})(StatusPage);
