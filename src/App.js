import React from "react";
import Interface from "./components/interface";
import Dashboard from "./components/dashboard";
import GetStarted from "./components/getStarted";
import { BrowserRouter, Route, Link,useHistory } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route exact path="/" component={GetStarted} />
        <Route path="/interface" component={Interface} />
        <Route path="/dashboard" component={Dashboard} />
      </BrowserRouter>
    </div>
  );
}

export default App;
