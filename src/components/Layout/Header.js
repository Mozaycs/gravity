import React, { Component } from "react";

// import StudentProfile from "../Profiles/StudentProfile";

type Props = {
  studentProfileCallback: Function
};

export default class Header extends Component<Props, State> {
  props: Props;

  render() {
    return (
      <div>
        <header className="app-header">
          <button onClick={this.props.studentProfileCallback}>StudentProfile</button>
        </header>
      </div>
    );
  }
}
