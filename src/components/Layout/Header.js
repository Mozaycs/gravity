import React, { Component } from "react";

// import StudentProfile from "../Profiles/StudentProfile";
import "../../App.css";

type Props = {
  studentProfileCallback: Function
};

export default class Header extends Component<Props, State> {
  props: Props;

  render() {
    return (
      <div>
        <header className="app-header">StudentProfile</header>
      </div>
    );
  }
}
