import React, { Component } from "react";
import history from "./history";
import "bootstrap/dist/css/bootstrap.min.css";

export class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: false,
      Email: "",
      Password: ""
    };
    this.Password = this.Password.bind(this);
    this.Email = this.Email.bind(this);
    this.login = this.login.bind(this);
  }
  Email(event) {
    this.setState({ Email: event.target.value });
  }
  Password(event) {
    this.setState({ Password: event.target.value });
  }

  login(event) {
    event.preventDefault();
    //history.push("./Components/Menu");

    if (!this.state.isLoggedIn) {
      //history.push(event.target.value);
      //this.setState({ isLoggedIn: true });
      //<Route path="/" component={Login}
      // this.props.history.push("./Menu"); //history.push("/Menu");
      this.setState({ isLoggedIn: true });
      this.props.history.push("./Menu");
    }
  }
  componentDidMount() {
    this.refs.Email.focus();
  }

  render() {
    return (
      <div className="container-login100  ">
        <div className="wrap-login100">
          <form onSubmit={this.login}>
            <h3>Collectorate Botad</h3>
            <div className="form-group">
              <label>Email address</label>
              <input
                type="email"
                className="form-control"
                placeholder="Enter email"
                onChange={this.Email}
                ref="Email"
              />
            </div>
            <div className="form-group">
              <label>Password</label>
              <input
                type="password"
                className="form-control"
                placeholder="Enter password"
                onChange={this.password}
              />
            </div>
            <div className="form-group">
              <div className="custom-control custom-checkbox">
                <input
                  type="checkbox"
                  className="custom-control-input"
                  id="customCheck1"
                />
                <label className="custom-control-label" htmlFor="customCheck1">
                  Remember me
                </label>
              </div>
            </div>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
            &nbsp;
            <button type="Cancel" className="btn btn-secondary">
              Cancel
            </button>
            <p className="forgot-password text-right">
              Forgot <a href="#">password?</a>
            </p>
          </form>
        </div>
      </div>
    );
  }
}

export default Login;
