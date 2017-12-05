import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class StudentProfile extends Component<Props, State> {
  props: Props;

  render() {
    return (
      <div>
        <ul>
          <li>
            <Link>StudentProfile</Link>
          </li>
          <li>
            <Link>Parent Profile</Link>
          </li>
          <li>
            <Link>About us</Link>
          </li>
        </ul>
      </div>
    );
  }
}
