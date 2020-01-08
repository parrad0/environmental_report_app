import "Components/app/node_modules/Assets/CSS/App.css";
import Nav from "Components/navComponent/nav-component";
import GridViewTsx from "../gridView/gridView";
import LogInModal from "Components/loginModal/LogInModal";
import { RouteComponentProps } from "react-router";
import { Component } from "react";
import React from "react";

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
      </div>
    );
  }
}

export default App;
