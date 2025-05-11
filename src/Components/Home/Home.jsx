import React, { Component } from "react";
import "./Home.css";
import { Link } from "react-router-dom";
export default class Home extends Component {
  render() {
    return (
      <div class="card-row">
        <Link to={"/counter-app"}>
          <div class="card">
            <h3>Counter App</h3>
            <p>Click to view the Counter App</p>
          </div>
        </Link>
        <Link to={"/random-color"}>
          <div class="card">
            <h3>Random Color Generator</h3>
            <p>Click to view the Random Color Generator</p>
          </div>
        </Link>
        <Link to={"/random-quote"}>
          <div class="card">
            <h3>Random Quote Generator</h3>
            <p>Click to view the Random Quote Generator</p>
          </div>
        </Link>
        <Link to={"/theme-change"}>
          <div class="card">
            <h3>DarkTheme</h3>
            <p>Click to view the Random Quote Generator</p>
          </div>
        </Link>
        <Link to={"/login-signup"}>
          <div class="card">
            <h3>Login/Signup</h3>
            <p>Click to view the Random Quote Generator</p>
          </div>
        </Link>
      </div>
    );
  }
}
