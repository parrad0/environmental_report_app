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
  Toolbar,
  Link
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import { RouteComponentProps, withRouter } from "react-router";

class Nav extends Component<
  RouteComponentProps,
  { loged: boolean; params: string[] }
> {
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
        <AppBar className="navBar" position="static" color="primary">
          <Toolbar variant="dense">
            <Typography
              variant="h6"
              color="inherit"
              className="home"
              onClick={() => this.goHome()}
            >
              Environment
            </Typography>

            {this.state.loged ? (
              <Icon className="contactICon">
                <PersonIcon />
              </Icon>
            ) : (
              <div className="contactICon">
                <span
                  // variant="outlined"
                  // size="small"
                  color="secondary"
                  className="buttonLogin"
                  onClick={() => this.goLogIn()}
                >
                  Log in
                </span>
                <Button
                  variant="contained"
                  size="small"
                  color="secondary"
                  onClick={() => this.goRegister()}
                >
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
  goHome() {
    this.props.history.push("/Home");
  }
  goLogIn() {
    this.props.history.push("/Login");
  }
  goRegister() {
    this.props.history.push("/Register");
  }
}
export default withRouter(Nav);
