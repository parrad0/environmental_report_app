import { Component } from "react";
import React from "react";
import { BrowserRouter, Route, Redirect } from "react-router-dom";
import App from "Components/app/App";
import LoginView from "Components/loginView/loginView";
import RegisterView from "Components/registerView/registerView";
import ProfileView from "Components/profileView/profileView";
import CardView from "Components/cardView/cardView";
export default class RouterViewsPath extends Component {
  render() {
    return (
      <React.Fragment>
        <BrowserRouter>
          <Route exact path="/Home" component={App}></Route>
          <Route exact path="/Login" component={LoginView}></Route>
          <Route exact path="/Register" component={RegisterView}></Route>
          <Route exact path="/Profile" component={ProfileView}></Route>
          <Route exact path="/Card" component={CardView}></Route>
          <Redirect from="/" to="/Login" />
        </BrowserRouter>
      </React.Fragment>
    );
  }
}
