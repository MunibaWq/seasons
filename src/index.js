import React, { Component } from "react";
import ReactDOM from "react-dom";

class App extends Component {
  state = { lat: null, errorMessage: "" };

  //componentDidMount is a good place to do data loading
  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      (position) => this.setState({ lat: position.coords.latitude }),
      (err) => this.setState({ errorMessage: err.message })
    );
  }

  render() {
    if (this.state.errorMessage && !this.state.lat) {
      return <div>Error: {this.state.errorMessage}</div>;
    } else if (!this.state.errorMessage && this.state.lat) {
      return <div>Latitude: {this.state.lat}</div>;
    } else return <div>Loading!!!</div>;
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
