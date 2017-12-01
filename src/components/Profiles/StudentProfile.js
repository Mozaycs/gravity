import React, { Component } from "react";

// import Header from "../Layout/Header";

type Props = {
  studentProfileCallback: Function
};

type State = {
  showStudentProfile: Boolean
};

export default class StudentProfile extends Component<Props, State> {
  props: Props;

  constructor(props: Object) {
    super(props);
    this.state = {
      showStudentProfile: false
    };
  }

  studentProfileCallback = () => {
    this.setState({ showStudentProfile: true });
  };

  render() {
    // return <Header studentProfileCallback={this.props.studentProfileCallback()} />;
    return <div>profile</div>;
  }
}
