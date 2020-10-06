import React from "react";

import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";

import "./App.css";

class App extends React.Component {
  renderNavbar() {
    return (
      <Navbar bg="light" expand="lg">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#dashboard">Dashboard</Nav.Link>
            <Nav.Link href="#map">Map</Nav.Link>
            <Nav.Link href="#contacts">Contacts</Nav.Link>
            <Button variant="primary">Log out</Button>
          </Nav>
        </Navbar.Collapse>
        <Navbar.Brand href="#home">Coca-Corona</Navbar.Brand>
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
            document.dispatchEvent(new CustomEvent('myuw-login', {}))) ;
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
