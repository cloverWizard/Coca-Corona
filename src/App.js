import React from "react";

import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

import "./App.css";

class App extends React.Component {
  renderNavbar() {
    return (
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home" className="order-md-0 mx-auto order-1">
          Coca-Corona
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className="order-md-1 order-0"/>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#dashboard">Dashboard</Nav.Link>
            <Nav.Link href="#map">Map</Nav.Link>
            <Nav.Link href="#contacts">Contacts</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <myuw-profile 
          login-url=""
          logout-url=""
          background-color=""
        ></myuw-profile>
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
            type="module"
            src="https://unpkg.com/@myuw-web-components/myuw-profile@latest?module"
          ></script>
          <script
            noModule
            src="https://unpkg.com/@myuw-web-components/myuw-profile@latest"
          ></script>
          <script>
            customElements .whenDefined('myuw-profile') .then(() =>
            {console.log("What")}) ;
          </script>
          {this.renderNavbar()}
        </header>
        <main>
          <h1>TEST!</h1>
        </main>
      </>
    );
  }
}

export default App;
