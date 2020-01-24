import React from "react";
import Interface from "./components/interface";
import Dashboard from './components/dashboard'
import {BrowserRouter, Route, Link} from 'react-router-dom';
import "./App.css";



function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route exact path='/' component={Interface} />
        <Route path='/dashboard' component={Dashboard} />
      </BrowserRouter>
    </div>
  );
}

export default App;
