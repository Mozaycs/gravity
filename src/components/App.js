import React, { Component } from "react";

import Dashboard from "./Dashboard/Dashboard";
import Footer from "./Layout/Footer";
import Header from "./Layout/Header.js";
import "../App.css";

export default class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Dashboard />
        <Footer />
      </div>
    );
  }
}
