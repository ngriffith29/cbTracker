import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Link,useHistory } from "react-router-dom";
import "./getStarted.css";
function GetStarted() {
  return (
    <div className="starting-page">
      <div className="jumbotron jumbotron-fluid">
        <h1>
          Welcome to the Bellevue City Schools Chromebook Exchange click below
          to get started
        </h1>
      
      </div>

    <Link to={'/interface'} className="btn btn-lg text-white btn-dark" style={{width: '600px', height: '100px', paddingTop: '30px', marginTop: '15%'}}>Click me to return your broken Chromebook and get a spare</Link>

    <footer id="sticky-footer" className="py-4 bg-dark text-white-50">
        <div className="container text-center">
          <small>
            Bellevue City Schools Chromebook Tracker Handbuilt by Nathan
            Griffith
          </small>
        </div>
      </footer>
    </div>
  );
}
export default GetStarted;
