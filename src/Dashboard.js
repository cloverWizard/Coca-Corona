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

  componentDidMount() {
    fetch("https://api.covidtracking.com/v1/us/current.json")
      .then(res => res.json())
      .then(json => json[0])
      .then(json => {
        this.setState({ currentUSValues: json });
      });
    navigator.geolocation.getCurrentPosition(function(position) {
      console.log("Latitude is :", position.coords.latitude);
      console.log("Longitude is :", position.coords.longitude);
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
