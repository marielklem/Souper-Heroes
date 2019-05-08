import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import '../static/App.css';
import Navbar from "../components/Navbar"
import Categories from "../containers/Categories"

function App() {
  
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Categories />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
