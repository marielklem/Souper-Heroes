import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import '../static/App.css';
import Navbar from "../components/Navbar"
import Categories from "../containers/Categories"
import Profile from "../containers/Profile"
import Checkout from "../containers/Checkout"
import Orders from "../containers/Orders"
import Welcome from "../containers/Welcome"

function App() {
  
  return (
    <React.Fragment>
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path="/" render={() => <Welcome />} />
        <div className="grapes">
        <Route exact path ="/shop" render={() => <Categories />} />
        <Route exact path ="/profile" render={() => <Profile />} />
        <Route exact path ="/checkout" render={() => <Checkout />} />
        <Route exact path ="/admin" render={() => <Orders />} />
        </div>
      </Switch>
    </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
