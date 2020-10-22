import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Image from "react-bootstrap/Image";
import Table from "react-bootstrap/Table";

import LoginScreen from "./LoginScreen.js";
import MenuBarMap from "./MenuBarMap.js";

import "./App.css";

class App extends React.Component {
  // Don't know if this is what we want but it can be placeholder for now -Tarun
  constructor(props) {
    super(props);
    this.state = {
      loggedIn: false,
      name: "User Name",
      currentPage: "dashboard",
      dashboard: {
        currentUSValues: "loading"
      }
    };
  }

  login(username, password) {
    console.log(username);
    this.setState({ loggedIn: true });
  }

  componentDidMount() {
    const script = document.createElement("script");
    script.async = true;
    script.type = "module";
    script.src =
      "https://unpkg.com/@myuw-web-components/myuw-profile@latest?module";
    //For head
    document.head.appendChild(script);
    customElements.whenDefined("myuw-profile").then(() => {
      document.dispatchEvent(
        new CustomEvent("myuw-login", {
          bubbles: true, // optional
          detail: {
            // required always
            person: {
              // required for generic session display
              firstName: this.state.name // required for full session display
            }
          }
        })
      );
    });
    fetch("https://api.covidtracking.com/v1/us/current.json")
      .then(res => res.json())
      .then(json => json[0])
      .then(json => {
        this.setState({ dashboard: { currentUSValues: json } });
      });
  }

  renderNavbar() {
    return (
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home" className="order-1">
          Coca-Corona
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className="order-0" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#dashboard">Dashboard</Nav.Link>
            <Nav.Link href="#map">Map</Nav.Link>
            <Nav.Link href="#contacts">Contacts</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <Nav className="order-12">
          <myuw-profile
            login-url="#"
            logout-url="#"
            background-color=""
          ></myuw-profile>
        </Nav>
      </Navbar>
    );
  }

  switchPage(page) {
    this.setState({ currentPage: page });
    console.log(page);
  }

  renderFooter() {
    return (
      <Navbar bg="light" className="d-flex justify-content-around">
        <Nav className="d-flex justify-content-around">
          <Nav.Link
            href="#dashboard"
            onClick={() => this.switchPage("dashboard")}
          >
            <Image src={process.env.PUBLIC_URL + "/map-fill.svg"} />
            <span>Dashboard</span>
          </Nav.Link>
          <Nav.Link href="#map" onClick={() => this.switchPage("map")}>
            <Image src={process.env.PUBLIC_URL + "/house-fill.svg"} />
            <span>Map</span>
          </Nav.Link>
          <Nav.Link
            href="#contacts"
            onClick={() => this.switchPage("contacts")}
          >
            <Image src={process.env.PUBLIC_URL + "/people-fill.svg"} />
            <span>Contacts</span>
          </Nav.Link>
        </Nav>
      </Navbar>
    );
  }

  renderDashboard() {
    console.log(this.state.dashboard.currentUSValues);
    return (
      <>
        <h1>Current U.S. values</h1>
        <Table striped bordered hover>
          <tbody>
            <tr>
              <td rowSpan="2">Positive</td>
              <td>Total</td>
              <td>{this.state.dashboard.currentUSValues.positive}</td>
            </tr>
            <tr>
              <td>Increase</td>
              <td>{this.state.dashboard.currentUSValues.positiveIncrease}</td>
            </tr>
            <tr>
              <td rowSpan="2">Death</td>
              <td>Total</td>
              <td>{this.state.dashboard.currentUSValues.death}</td>
            </tr>
            <tr>
              <td>Increase</td>
              <td>{this.state.dashboard.currentUSValues.deathIncrease}</td>
            </tr>
            <tr>
              <td>Recovered</td>
              <td>Total</td>
              <td>{this.state.dashboard.currentUSValues.recovered}</td>
            </tr>
          </tbody>
        </Table>
      </>
    );
  }

  mainRender() {
    if (this.state.currentPage === "dashboard") {
      return this.renderDashboard();
    } else if (this.state.currentPage === "map") {
      return <MenuBarMap />;
    } else {
      return (
        <>
          <h1>Contacts!</h1>
          <p>No content yet...</p>
        </>
      );
    }
  }

  // Not sure whether or not this is good, again, we should change this -Tarun
  // got you! - Kesong Oct 22 14:08 CST
  loginRender() {
    if (this.state.loggedIn) {
      return (
        <>
          <main>{this.mainRender()}</main>
          <footer className="footer">{this.renderFooter()}</footer>
        </>
      );
    } else {
      return <LoginScreen login={this.login.bind(this)} />;
    }
  }

  renderNothing() {
    return;
  }
  render() {
    return (
      <>
        <header>
          <link
            rel="stylesheet"
            href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
            integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
            crossOrigin="anonymous"
          />
          <script
            noModule
            src="https://unpkg.com/@myuw-web-components/myuw-profile@latest"
          ></script>
          {this.state.loggedIn ? this.renderNavbar() : this.renderNothing()}
        </header>
        {this.loginRender()}
      </>
    );
  }
}

export default App;
