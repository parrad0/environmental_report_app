import React, { Component } from "react";
import "Assets/CSS/App.css";
import Nav from "Components/nav_component/nav-component";
import GridViewTsx from "../gridView/gridView";
import LogInModal from "Components/LogInModal/LogInModal";

class App extends Component {
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
