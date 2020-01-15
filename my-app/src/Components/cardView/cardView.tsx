import { render } from "@testing-library/react";
import { Component } from "react";
import React from "react";
import { RouteComponentProps } from "react-router-dom";
import { Box, Container } from "@material-ui/core";
import Nav from "Components/navComponent/nav-component";

class CardView extends Component<RouteComponentProps, { name: string }> {
  // eslint-disable-next-line @typescript-eslint/no-useless-constructor
  constructor(props: any) {
    super(props);
    this.state = {
      name: "not changed"
    };
  }
  render() {
    return (
      <Box>
        <Nav />
        <Container fixed>this.props.name</Container>
      </Box>
    );
  }
}
export default CardView;
