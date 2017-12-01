import React, { Component } from "react";

import StudentProfile from "../Profiles/StudentProfile";
import "../../App.css";

export default class Dashboard extends Component<Props, State> {
  render() {
    return (
      <div className="dashboard-content">
        content here
        <StudentProfile />
      </div>
    );
  }
}
