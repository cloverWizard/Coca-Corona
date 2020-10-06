import React from "react";
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';

import "./App.css";

class App extends React.Component {
  renderNavbar() {
    return (
      <Navbar class="navbar navbar-expand-md navbar-light fixed-top bg-uw-gray-blue">
        <img
          src="https://upload.wikimedia.org/wikipedia/en/thumb/e/e0/University_of_Wisconsin-Madison_logo.svg/1200px-University_of_Wisconsin-Madison_logo.svg.png"
          height="50px"
          width="auto"
          class="navbar-brand border-round"
        />
        <a class="navbar-brand" href="#">
          Coca-Corona
        </a>
        <Button
          class="navbar-toggler collapsed"
          type="button"
          data-toggle="collapse"
          data-target="#navbarCollapse"
          aria-controls="navbarCollapse"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </Button>
        <div class="navbar-collapse collapse" id="navbarCollapse">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active align-self-center">
              <a class="nav-link" href="#">
                Home <span class="sr-only">(current)</span>
              </a>
            </li>
            <li class="nav-item align-self-center">
              <a class="nav-link" href="#overview">
                Overview
              </a>
            </li>
            <li class="nav-item align-self-center">
              <a class="nav-link" href="#accounts">
                Accounts
              </a>
            </li>
            <li class="nav-item align-self-center">
              <a class="nav-link" href="#beneficiary">
                Beneficiaries
              </a>
            </li>
          </ul>
          <ul class="navbar-nav ml-auto">
            <li class="nav-item align-self-center">
              <button
                type="button"
                onclick="logout()"
                class="btn btn-primary bg-uw-red mt-2 mt-md-0"
              >
                Log out
              </button>
            </li>
          </ul>
        </div>
      </Navbar>
    );
  }
  render() {
    return (
      <>
        <head>
          <link
            rel="stylesheet"
            href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
            integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
            crossOrigin="anonymous"
          />
        </head>

        <header>{this.renderNavbar()}</header>
        <body>
          <main>
            <h1>TEST!</h1>
          </main>
        </body>
      </>
    );
  }
}

export default App;
