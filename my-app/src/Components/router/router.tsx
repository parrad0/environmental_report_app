import { Component } from "react";
import React from "react";
import { BrowserRouter, Route, Redirect } from "react-router-dom";
import App from "Components/app/App";
export default class RouterViewsPath extends Component {
  render() {
    return (
      <React.Fragment>
        <BrowserRouter>
          <Route exact path="/Home" component={App}></Route>
          <Route exact path="/Login" component={App}></Route>
          <Route exact path="/Register" component={App}></Route>
          <Route exact path="/Profile" component={App}></Route>
          <Route exact path="/Card" component={App}></Route>
          <Redirect from="/" to="/Home" />
        </BrowserRouter>
      </React.Fragment>
    );
  }
}
