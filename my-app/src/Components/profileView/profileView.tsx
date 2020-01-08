import { Component } from "react";
import React from "react";
import { RouteComponentProps } from "react-router";

class ProfileView extends Component<RouteComponentProps, {}> {
  constructor(props: any) {
    super(props);
    this.state = {};
  }
  render() {
    return <div>profile</div>;
  }
}
export default ProfileView;
