import { Component } from "react";
import React from "react";
import { RouteComponentProps } from "react-router";

class RegisterView extends Component<RouteComponentProps, {}> {
  constructor(props: any) {
    super(props);
    this.state = {};
  }
  render() {
    return <div>register</div>;
  }
}
export default RegisterView;
