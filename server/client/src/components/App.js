import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import '../static/App.css';
import Navbar from "../components/Navbar"
import Categories from "../containers/Categories"
import Profile from "../containers/Profile"
import Checkout from "../containers/Checkout"

function App() {
  
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path="/" render={() => <Redirect to="/shop" />} />
        <Route exact path ="/shop" render={() => <Categories />} />
        <Route exact path ="/profile" render={() => <Profile />} />
        <Route exact path ="/checkout" render={() => <Checkout />} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
