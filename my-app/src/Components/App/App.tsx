import Nav from "Components/navComponent/nav-component";
import GridViewTsx from "../gridView/gridView";
import { RouteComponentProps } from "react-router";
import { Component } from "react";
import React from "react";
import LogInModal from "Components/loginModalView/loginModal";
import FooterComponent from "Components/footerView/footer";
class App extends Component<RouteComponentProps, {}> {
  // eslint-disable-next-line @typescript-eslint/no-useless-constructor
  constructor(props: any) {
    super(props);
  }
  render() {
    return (
      <div>
        <Nav />
        <GridViewTsx />
        <LogInModal />
        <FooterComponent />
      </div>
    );
  }
}

export default App;
