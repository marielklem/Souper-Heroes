import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import '../static/App.css';
import Navbar from "../components/Navbar"
import Categories from "../containers/Categories"
import Profile from "../containers/Profile"

function App() {
  
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Categories />
      </Switch>
      <Switch>
        <Profile />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
