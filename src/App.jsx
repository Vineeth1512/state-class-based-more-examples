import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import CounterApp from "./Components/CounterApp/CounterApp";
import RandomColor from "./Components/RandomColor/RandomColor";
import RandomQuote from "./Components/RandomQuote/RandomQuote";
import Home from "./Components/Home/Home";
import { Route, Routes } from "react-router-dom";
import DarkTheme from "./Components/DarkTheme/DarkTheme";
import LoginSignup from "./Components/LoginSignup/LoginSignup";
class App extends React.Component {
  render() {
    return (
      <>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/counter-app" element={<CounterApp />} />
          <Route path="/random-color" element={<RandomColor />} />
          <Route path="/random-quote" element={<RandomQuote />} />
          <Route path="/theme-change" element={<DarkTheme />} />
          <Route path="/login-signup" element={<LoginSignup />} />
        </Routes>
      </>
    );
  }
}
export default App;
