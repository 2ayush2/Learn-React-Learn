import React from "react";
import "bootstrap/dist/css/bootstrap.css";
class AddContact extends React.Component {
  state = {
    name: "",
    email: "",
  };
  submit = (e) => {
    e.preventDefault();
    if (this.state.name === "" || this.state.email === "") {
    }
    this.props.contactHandler(this.state);
    this.setState({ name: "", email: "" });
  };
  render() {
    return (
      <div className="ui main">
        <h2>Add Contact</h2>
        <form action="" onSubmit={this.submit} className="ui form">
          <div className="field">
            <label>Name</label>
            <input
              type="text"
              placeholder="Name"
              value={this.state.name}
              onChange={(e) => {
                this.setState({ name: e.target.value });
              }}
            />
          </div>
          <div className="field">
            <label>Email</label>
            <input
              type="email"
              placeholder="Email"
              value={this.state.email}
              onChange={(e) => {
                this.setState({ email: e.target.value });
              }}
            />
          </div>
          <button className="ui button blue">Add</button>
        </form>
      </div>
    );
  }
}
export default AddContact;
