import React, { Component } from "react";
import AddEmployee from "./AddEmployee";
import AddDetails from "./AddDetails";
import Confirm from "./Confirm";
import Success from "./Success";
export class Form extends Component {
  state = {
    step: 1,
    name: "",
    email: "",
    address: "",
    phone: "",
    username: "",
    companyDetail: "",
    website: "",
    
  };

  nextStep = () => {
    const { step } = this.state;
    this.setState({ step: step + 1 });
  };

  prevStep = () => {
    const { step } = this.state;
    this.setState({ step: step - 1 });
  };
  
  inputChange = (input) => (e) => {
    this.setState({
      [input]: e.target.value,
    });
  };

  render() {
    const { step } = this.state;
    const {
      name,
      email,
      address,
      phone,
      username,
      companyDetail,
      website,
    } = this.state;
    const values = {
      name,
      email,
      address,
      phone,
      username,
      companyDetail,
      website,
    };

    switch (step) {
      case 1:
        return (
          <AddEmployee
            nextStep={this.nextStep}
            inputChange={this.inputChange}
            values={values}
          />
        );
      case 2:
        return (
          <AddDetails
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            inputChange={this.inputChange}
            values={values}
          />
        );
      case 3:
        return (
          <Confirm
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            values={values}
          />
        );
      case 4:
        return <Success values={values} />;
      default:
    }
  }
}

export default Form;
