import { Component } from "react";
import React from "react";
import { RouteComponentProps, withRouter } from "react-router";

class FooterComponent extends Component<RouteComponentProps> {
  // eslint-disable-next-line @typescript-eslint/no-useless-constructor
  constructor(props: any) {
    super(props);
  }
  render() {
    return <footer></footer>;
  }
}
export default withRouter(FooterComponent);
