import React, { Component } from "react";

export class AddEmployee extends Component {
  continue = (e) => {
    e.preventDefault();
    this.props.nextStep();
  };
  render() {
    const { values, inputChange } = this.props;

    return (
      <div className="form-container">
        <h1>Add Employee</h1>

        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            className="form-control"
            name="name"
            onChange={inputChange("name")}
            value={values.name}
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="text"
            className="form-control"
            name="email"
            onChange={inputChange("email")}
            value={values.email}
          />
        </div>

        <div className="form-group">
          <label htmlFor="address">Address</label>
          <input
            type="text"
            className="form-control"
            name="address"
            onChange={inputChange("address")}
            value={values.address}
          />
        </div>

        <div className="form-group">
          <label htmlFor="phone">Phone</label>
          <input
            type="text"
            className="form-control"
            name="phone"
            onChange={inputChange("phone")}
            value={values.phone}
          />
        </div>

        <br />

        <div className="text-right">
          <button className="btn btn-primary" onClick={this.continue}>
            Continue
          </button>
        </div>
      </div>
    );
  }
}

export default AddEmployee;
