import React, { Component } from "react";
import { FaMoon, FaSun } from "react-icons/fa";
import "./DarkTheme.css";
export default class DarkTheme extends Component {
  constructor() {
    super();
    this.state = {
      isDark: false,
    };
  }
  handleBtn = () => {
    this.setState({ isDark: !this.state.isDark });
  };
  render() {
    return (
      <div
        className={`theme-container ${this.state.isDark ? "dark" : "light"}`}
      >
        <h1>Dark Theme</h1>
        <button onClick={this.handleBtn}>
          {this.state.isDark ? <FaSun /> : <FaMoon />}
        </button>
      </div>
    );
  }
}
