import React from "react";
import "./App.css";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";

class App extends React.Component {
  constructor(props) {
    super(props);
  }


  render() {
    return (
      <>
        <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
          integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
          crossOrigin="anonymous"
        />

        <Tabs
          defaultActiveKey="search"
          style={{
            position: "fixed",
            zIndex: 1,
            width: "100%",
            backgroundColor: "white"
          }}
        >
          <Tab eventKey="search" title="Search" style={{ paddingTop: "5vh" }}>
            <div style={{ marginLeft: "20vw" }}></div>
          </Tab>

          <Tab eventKey="cart" title="Cart" style={{ paddingTop: "5vh" }}>
            <div style={{ marginLeft: "5vw" }}></div>
          </Tab>
        </Tabs>
      </>
    );
  }
}

export default App;
