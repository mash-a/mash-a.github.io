import React, { Component } from "react";
import Main from "./components/Main/Main";
import Sidebar from "./components/SideBar/Sidebar";
import AboutMe from "./components/AboutMe/AboutMe";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Main />
        <Sidebar />
      </div>
    );
  }
}

export default App;
