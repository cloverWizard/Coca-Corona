import React from "react";
import Table from "react-bootstrap/Table";

import "./App.css";

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUSValues: "loading"
    };
  }

  getLatLon() {
    return new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(function(position) {
        const lat = position.coords.latitude;
        const lon = position.coords.longitude;
        return [lat, lon];
      });
    });
  }

  componentDidMount() {
    fetch("https://api.covidtracking.com/v1/us/current.json")
      .then(res => res.json())
      .then(json => json[0])
      .then(json => {
        this.setState({ currentUSValues: json });
      });
    this.getLatLon().then(([lat, lon]) => {
      fetch(
        "https://us1.locationiq.com/v1/reverse.php?key=65d6acbb182add541f5e458dbaf9bbd6&lat=" +
          lat +
          "&lon=" +
          lon +
          "&zoom=5&format=json"
      )
        .then(res => res.json())
        .then(json => {
        // not showing up... - Kesong
          console.log(json);
        });
    });
  }

  render() {
    return (
      <>
        <h2>Current U.S. values</h2>
        <Table responsive bordered hover>
          <tbody>
            <tr>
              <td rowSpan="2">Positive</td>
              <td>Total</td>
              <td>{this.state.currentUSValues.positive}</td>
            </tr>
            <tr>
              <td>Increase</td>
              <td>{this.state.currentUSValues.positiveIncrease}</td>
            </tr>
            <tr>
              <td rowSpan="2">Death</td>
              <td>Total</td>
              <td>{this.state.currentUSValues.death}</td>
            </tr>
            <tr>
              <td>Increase</td>
              <td>{this.state.currentUSValues.deathIncrease}</td>
            </tr>
            <tr>
              <td>Recovered</td>
              <td>Total</td>
              <td>{this.state.currentUSValues.recovered}</td>
            </tr>
          </tbody>
        </Table>
        <h2>State-level data</h2>
        <p>To be added...</p>
      </>
    );
  }
}

export default Dashboard;
