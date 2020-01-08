import { Component } from "react";
import React from "react";
import { BrowserRouter, Route, Redirect } from "react-router-dom";
import LoginView from "Components/loginView/loginView";
import RegisterView from "Components/registerView/registerView";
import ProfileView from "Components/profileView/profileView";
import App from "Components/App/App";
export default class RouterViewsPath extends Component {
  render() {
    return (
      <React.Fragment>
        <BrowserRouter>
          <Route exact path="/Home" component={App}></Route>
          <Route exact path="/Login" component={LoginView}></Route>
          <Route exact path="/Register" component={RegisterView}></Route>
          <Route exact path="/Profile" component={ProfileView}></Route>
          <Route exact path="/Card" component={App}></Route>
          <Redirect from="/" to="/Login" />
        </BrowserRouter>
      </React.Fragment>
    );
  }
}
