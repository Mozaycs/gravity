import React, { Component } from "react";
import SlideBar from "../Sidebar/SlideBar";
import StudentProfile from "../Profiles/StudentProfile";

export default class Dashboard extends Component<Props, State> {
  render() {
    return (
      <div className="dashboard-content">
        <div className="sidebar">
          <SlideBar />
        </div>
        <div className="profile-content">
          <StudentProfile />
        </div>
      </div>
    );
  }
}
