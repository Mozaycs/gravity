import React, { Component } from "react";

import Dashboard from "./Dashboard";
import Footer from "./Footer";
import Header from "./Header.js";
import "../App.css";

class App extends Component {
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

export default App;
