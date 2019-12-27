import { Component } from "react";
import React from "react";
import Button from "@material-ui/core/Button";
import Select from "@material-ui/core/Select";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import InputLabel from "@material-ui/core/InputLabel";
import PersonIcon from "@material-ui/icons/Person";
import {
  Icon,
  Typography,
  IconButton,
  AppBar,
  Toolbar
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";

class Nav extends Component<{}, { loged: boolean; params: string[] }> {
  constructor(props: any) {
    super(props);
    this.state = {
      loged: false,
      params: ["f", "d"]
    };
  }
  render() {
    //TODO logged in
    if (true) {
      return (
        <AppBar position="static" className="navBar">
          <Toolbar variant="dense">
            <Typography variant="h6" color="inherit">
              Environment
            </Typography>
            {this.state.loged ? (
              <Icon className="contactICon">
                <PersonIcon />
              </Icon>
            ) : (
              <div className="contactICon">
                <Button
                  variant="outlined"
                  size="small"
                  color="secondary"
                  className="buttonLogin"
                >
                  Log in
                </Button>
                <Button variant="contained" size="small" color="primary">
                  Register
                </Button>
              </div>
            )}
          </Toolbar>
        </AppBar>
      );
    } else {
      return (
        <div className="nav">
          <i className="fas fa-user"></i>
        </div>
      );
    }
  }
}
export default Nav;
