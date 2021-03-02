import React, { Component } from "react";

export class AddDetails extends Component {
  continue = (e) => {
    e.preventDefault();
    this.props.nextStep();
  };

  back = (e) => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    const { values, inputChange } = this.props;

    return (
      <div className="form-container">
        <h1>Add Details</h1>

        <div className="form-group">
          <label htmlFor="username">UserName</label>
          <input
            type="text"
            className="form-control"
            name="username"
            onChange={inputChange("username")}
            value={values.username}
          />
        </div>

        <div className="form-group">
          <label htmlFor="companyDetails">Company Details</label>
          <input
            type="text"
            className="form-control"
            name="companyDetails"
            onChange={inputChange("companyDetails")}
            value={values.companyDetails}
          />
        </div>

        <div className="form-group">
          <label htmlFor="website">WebSite</label>
          <input
            type="text"
            className="form-control"
            name="website"
            onChange={inputChange("website")}
            value={values.website}
          />
        </div>
        <br />

        <div className="row">
          <div className="col-6">
            <button className="btn btn-danger" onClick={this.back}>
              Back
            </button>
          </div>
          <div className="col-6 text-right">
            <button className="btn btn-primary" onClick={this.continue}>
              Continue
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default AddDetails;
