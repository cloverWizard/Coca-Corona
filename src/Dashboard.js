import React from "react";
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
  }

  render() {
    return (
      <>
        <h1>Current U.S. values</h1>
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
      </>
    );
  }
}

export default Dashboard;
