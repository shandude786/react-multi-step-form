import React, { Component } from "react";

export class Confirm extends Component {
  state = {
    items: [],
  };
  componentDidMount() {
    console.log(this.props.values);
    let data = this.props.values;
    console.log(data);
    let items = this.state.items;
    console.log(items);
    items.push(data);
    this.setState({ items: items });
    console.log(this.state.items);
  }
  render() {
    return (
      <React.Fragment>
        <h1>Successfully Done</h1>
        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">Address</th>
              <th scope="col">Phone</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {this.state.items.map((ele, i) => {
              return (
                <tr key={i}>
                  <td>{ele.id}</td>
                  <td>{ele.name}</td>
                  <td>{ele.email}</td>
                  <td>{ele.address}</td>
                  <td>{ele.phone}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </React.Fragment>
    );
  }
}

export default Confirm;
