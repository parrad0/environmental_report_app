import { Component } from "react";
import React from "react";
import { RouteComponentProps } from "react-router";

class LoginView extends Component<RouteComponentProps, {}> {
  constructor(props: any) {
    super(props);
    this.state = {};
  }
  render() {
    return <div>login</div>;
  }
}
export default LoginView;
