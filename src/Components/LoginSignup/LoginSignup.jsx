import React, { Component } from "react";
import "./LoginSignup.css";
export default class LoginSignup extends Component {
  constructor() {
    super();
    this.state = {
      isLogin: true,
    };
  }

  handleBtn = () => {
    this.setState({ isLogin: !this.state.isLogin });
  };
  render() {
    return (
      <>
        <div className="auth-container">
          <h1> {this.state.isLogin ? "SignUp" : "Login"}</h1>
          <div className="auth-form">
            {this.state.isLogin ? (
              <form action="">
                <input type="text" placeholder="Name" />
                <input type="email" placeholder="Email" />
                <input type="password" placeholder="Password" />
                <input type="password" placeholder="Confirm Password" />
              </form>
            ) : (
              <form action="">
                <input type="email" placeholder="Email" />
                <input type="password" placeholder="Password" />
              </form>
            )}
            <button onClick={this.handleBtn}>
              {this.state.isLogin ? "Switch to Login" : "Switch to Signup"}
            </button>
          </div>
        </div>
      </>
    );
  }
}
