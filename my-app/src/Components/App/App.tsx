import React, { Component } from "react";
import "Assets/CSS/App.css";
import FooterComponent from "Components/footer/footer";
import Nav from "Components/navComponent/nav-component";
import GridViewTsx from "Components/gridView/gridView";
import LogInModal from "Components/loginModal/loginModal";

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
        <FooterComponent />
      </div>
    );
  }
}

export default App;
