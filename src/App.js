import React from 'react';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import "./App.css";
import Home from "./components/pages/Home";
import SignUp from "./components/pages/SignUp";

function App() {
  return (
    <>
        <Router>
                <Switch>
                <Route path="/" exact component = {Home} />
                <Route path="/sign-up" exact component = {SignUp} />
                </Switch>
        </Router>
    </>
  )
}

export default App

