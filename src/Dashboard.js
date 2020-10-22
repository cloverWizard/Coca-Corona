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
        <h2>State-level chart</h2>
        <div
          className="tableauPlaceholder"
          id="viz1603404214860"
          style="position: relative"
        >
          <noscript>
            <a href="https:&#47;&#47;covidtracking.com&#47;">
              <img
                alt=" "
                src="https:&#47;&#47;public.tableau.com&#47;static&#47;images&#47;KC&#47;KC7K8BB3W&#47;1_rss.png"
                style="border: none"
              />
            </a>
          </noscript>
          <object class="tableauViz" style="display:none;">
            <param
              name="host_url"
              value="https%3A%2F%2Fpublic.tableau.com%2F"
            />{" "}
            <param name="embed_code_version" value="3" />{" "}
            <param name="path" value="shared&#47;KC7K8BB3W" />{" "}
            <param name="toolbar" value="yes" />
            <param
              name="static_image"
              value="https:&#47;&#47;public.tableau.com&#47;static&#47;images&#47;KC&#47;KC7K8BB3W&#47;1.png"
            />{" "}
            <param name="animate_transition" value="yes" />
            <param name="display_static_image" value="yes" />
            <param name="display_spinner" value="yes" />
            <param name="display_overlay" value="yes" />
            <param name="display_count" value="yes" />
            <param name="language" value="en" />
            <param name="filter" value="publish=yes" />
            <param name="origin" value="viz_share_link" />
          </object>
        </div>{" "}
        <script type="text/javascript">
          {" "}
          var divElement = document.getElementById('viz1603404214860'); var
          vizElement = divElement.getElementsByTagName('object')[0];
          vizElement.style.width='330px';vizElement.style.height='687px'; var
          scriptElement = document.createElement('script'); scriptElement.src =
          'https://public.tableau.com/javascripts/api/viz_v1.js';
          vizElement.parentNode.insertBefore(scriptElement, vizElement);{" "}
        </script>
      </>
    );
  }
}

export default Dashboard;
