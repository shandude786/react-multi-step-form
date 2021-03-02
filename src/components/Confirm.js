import React, { Component } from "react";

export class Confirm extends Component {
  continue = (e) => {
    e.preventDefault();
    this.props.nextStep();
  };

  back = (e) => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    const {
      values: { name, email, address, phone, username, companyDetail, website },
    } = this.props;

    return (
      <div className="form-container">
        <h1 className="mb-5">Confirm</h1>
        <ul className="list-group">
          <li className="list-group-item">Name: {name}</li>
          <li className="list-group-item">Email: {email}</li>
          <li className="list-group-item">Address: {address}</li>
          <li className="list-group-item">Phone: {phone}</li>
          <li className="list-group-item">User Name: {username}</li>
          <li className="list-group-item">Company Details: {companyDetail}</li>
          <li className="list-group-item">Web Site: {website}</li>
        </ul>

        <br />
        <br />

        <div className="row">
          <div className="col-6">
            <button className="btn btn-danger" onClick={this.back}>
              Back
            </button>
          </div>
          <div className="col-6 text-right">
            <button className="btn btn-primary" onClick={this.continue}>
              Submit
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Confirm;
