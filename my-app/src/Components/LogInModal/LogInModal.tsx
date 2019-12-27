import { Component } from "react";
import gridViewController from "controller/gridViewController";
import React from "react";
import { Box } from "@material-ui/core";

class LogInModal extends Component<{}, { active: boolean }> {
  _controller: gridViewController;
  constructor(props: any) {
    super(props);
    this._controller = new gridViewController();
    this.state = {
      active: false
    };
  }
  render() {
    if (this.state.active) {
      return (
        <Box className="modalLogInBackGround" onClick={() => this.closeModal()}>
          <div className="modalLogIn"></div>
        </Box>
      );
    } else {
      return "";
    }
  }
  closeModal() {}
}

export default LogInModal;
