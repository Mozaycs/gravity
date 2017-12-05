import React, { Component } from "react";
import SlideBar from "../Sidebar/SlideBar";
import StudentProfile from "../Profiles/StudentProfile";
import "../../App.css";

export default class Dashboard extends Component<Props, State> {
  render() {
    return (
      <div className="dashboard-content">
        <div>
          <SlideBar />
        </div>
        <StudentProfile />
      </div>
    );
  }
}
