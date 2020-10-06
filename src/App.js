import React from "react";

import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Image from "react-bootstrap/Image";

import "./App.css";

class App extends React.Component {
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
              firstName: "User Name" // required for full session display
            }
          }
        })
      );
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

  renderFooter() {
    return (
      <Navbar bg="light" className="d-flex justify-content-around">
        <Nav className="d-flex justify-content-around">
          <Nav.Link href="#dashboard">
            <Image src={process.env.PUBLIC_URL + "/map-fill.svg"} />
            <span>Dashboard</span>
          </Nav.Link>
          <Nav.Link href="#map">
            <Image src={process.env.PUBLIC_URL + "/house-fill.svg"} />
            <span>Map</span>
          </Nav.Link>
          <Nav.Link href="#contacts">
            <Image src={process.env.PUBLIC_URL + "/people-fill.svg"} />
            <span>Contacts</span>
          </Nav.Link>
        </Nav>
      </Navbar>
    );
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
          {this.renderNavbar()}
        </header>
        <main>
          <h1>TEST!</h1>
        </main>
        <footer className="footer">{this.renderFooter()}</footer>
      </>
    );
  }
}

export default App;
