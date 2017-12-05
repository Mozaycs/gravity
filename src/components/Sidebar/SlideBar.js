import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class StudentProfile extends Component<Props, State> {
  props: Props;

  render() {
    return (
      <ul>
        <li>
          <button>StudentProfile</button>
          {/* <Link to="">StudentProfile</Link> */}
        </li>
        <li>
          Parent Profile
          {/* <Link to="">Parent Profile</Link> */}
        </li>
        <li>
          About us
          {/* <Link to="">About us</Link> */}
        </li>
      </ul>
    );
  }
}
