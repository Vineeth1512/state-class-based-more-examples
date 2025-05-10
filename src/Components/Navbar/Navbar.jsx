import React, { Component } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { FaMoon, FaSun } from "react-icons/fa";

export default class Navbar extends Component {
  constructor() {
    super();
    this.state = {
      isDark: true,
    };
  }
  handleBtn = () => {
    this.setState({ isDark: !this.state.isDark });
  };
  render() {
    return (
      <>
        <header>
          <Link to={"/"}>
            <div className="logo">Vinfo-Solutions</div>
          </Link>
          <nav>
            <ul className="nav-links">
              <Link to={"/"}>
                <li>Home</li>
              </Link>
            </ul>
          </nav>
          {/* <button className="theme-toggle-btn" onClick={this.handleBtn}>
            {this.state.isDark ? <FaSun /> : <FaMoon />}
          </button> */}
        </header>
      </>
    );
  }
}
