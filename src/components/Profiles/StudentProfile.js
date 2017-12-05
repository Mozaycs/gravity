import React, { Component } from "react";

// import Header from "../Layout/Header";

type Props = {
  studentProfileCallback: Function
};

type State = {
  showStudentProfile: Boolean,
  firstName:string,
  lastName:string,
  email:string,
  age:string,
  address:string,
  attendance:string
};

export default class StudentProfile extends Component<Props, State> {
  props: Props;

  constructor(props: Object) {
    super(props);
    this.state = {
      showStudentProfile: false,
      firstName:"",
      lastName:"",
      email:"",
      age:"",
      address:"",
      attendance:""
    };
   
  }

  studentProfileCallback = () => {
    this.setState({ showStudentProfile: true });
  };


  onSubmit = e => {
    const {firstName} = this.state;
    e.preventDefault();
    this.props.onSubmit()
    console.log(this.state);
    this.setState({firstName :"harsha"});
}


  render() {
    // return <Header studentProfileCallback={this.props.studentProfileCallback()} />;

    return (
      <form>
        <div className="profile-details">
          <label name="FirstName">FirstName </label>
          <input palceholder="First name"
          value=""
          onChange={e => this.setState({firstName: e.target.value})}/>
          </div>
          <div className="profile-details">
          <label name="lastName">LastName </label>
           <input  palceholder="Last name"
          value={this.state.lastName}
          onChange={e => this.setState({lastName: e.target.value})}/>
          </div>
          <div className="profile-details">
          <label name="email">Email </label>
           <input palceholder="Email"
          value={this.state.email}
          onChange={e => this.setState({email: e.target.value})}/>
          </div>
          <div className="profile-details">
          <label name="Age">Age </label>
           <input palceholder="Age"
          value={this.state.age}
          onChange={e => this.setState({age: e.target.value})}/>
          </div>
          <div className="profile-details">
          <label name="Address">Address </label>
           <input palceholder="Address"
          value={this.state.address}
          onChange={e => this.setState({address: e.target.value})}/>
          </div>
          <div className="profile-details">
          <label name="Attendence">Attendence </label>
           <input palceholder="Attendence"
          value={this.state.attendance}
          onChange={e => this.setState({attendance: e.target.value})}/>
          </div>
          <button onClick={e => this.onSubmit(e)}>Submit</button>
        </form>
    );
  }
}
