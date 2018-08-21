import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

import Main from "./components/Main/Main";
import Sidebar from "./components/SideBar/Sidebar";
import AboutMe from "./components/AboutMe/AboutMe";

import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="main container">
          <Main />
          <Switch>
            <Route exact path="/" component={AboutMe} />
          </Switch>
        </div>
        <Sidebar />
      </div>
    );
  }
}

export default App;
