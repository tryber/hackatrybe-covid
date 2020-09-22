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
      'https://covid19-brazil-api.now.sh/api/report/v1'
    )
      .then(data => data.json())
      .then(res =>
        this.setState({
          globalData: res.data
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
          <div className="lastest_news_header">
            <h1>Últimas Informações</h1>
          </div>
          <Loading />
        </div>
      );
    }

    return (
      <div className="latest_news_wrapper">
        <div className="lastest_news_header">
          <h1>Últimas Informações</h1>
        </div>
        <div className="row_wrapper">
          <div className="map_wrapper">
            <div className="map_title">
              <p>Mapa do Covid-19 no Brasil e no Mundo</p>
            </div>
            <Map
              google={this.props.google}
              zoom={5}
              initialCenter={{ lat: -15.7801, lng: -47.9292 }}
              onClick={this.onMapClicked}
              mapTypeControl={false}
              style={{ width: "100%", height: "100vh" }}
            >
              {this.state.globalData.map(({ cases, deaths, suspects, state, uf }) => (
                <Marker
                  key={uf}
                  onClick={this.onMarkerClick}
                  position={this.findGeoLocation(state)}
                  name1={state}
                  name2={`Confirmados: ${cases}`}
                  name3={`Mortes: ${deaths}`}
                  name4={`Suspeitos: ${suspects}`}
                  title={`${uf}-${state}`}
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
