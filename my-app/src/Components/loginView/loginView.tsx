import { RouteComponentProps } from "react-router";
import {
  Avatar,
  Box,
  Button,
  Checkbox,
  Container,
  CssBaseline,
  Typography,
  TextField,
  FormControlLabel,
  Grid,
  Link,
  makeStyles,
  Snackbar,
  IconButton
} from "@material-ui/core";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import { Component } from "react";
import React from "react";
import Nav from "Components/navComponent/nav-component";
import CloseIcon from "@material-ui/icons/Close";

class LoginView extends Component<RouteComponentProps, { open: boolean }> {
  constructor(props: any) {
    super(props);
    this.state = { open: false };
  }

  render() {
    // const classes = this.useStyles();
    return (
      <Box>
        <Nav />
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <div className={"paper"}>
            <Avatar className={"avatar"}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography
              component="h1"
              variant="h5"
              onClick={() => this.openSnack()}
            >
              Sign in
            </Typography>
            <form className={"form"} noValidate>
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
              />
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />
              <Button
                type="button"
                fullWidth
                variant="contained"
                color="primary"
                className={"submit"}
                onClick={() => this.openSnack()}
              >
                Sign In
              </Button>
              <Grid container>
                <Grid item xs>
                  <Link href="#" variant="body2">
                    Forgot password?
                  </Link>
                </Grid>
                <Grid item>
                  <Link href="#" variant="body2">
                    {"Don't have an account? Sign Up"}
                  </Link>
                </Grid>
              </Grid>
            </form>
          </div>
          <Box mt={8}>
            <Typography variant="body2" color="textSecondary" align="center">
              {"Copyright © "}
              <Link color="inherit" href="https://material-ui.com/">
                Your Website
              </Link>{" "}
              {new Date().getFullYear()}
              {"."}
            </Typography>
          </Box>
        </Container>
        <Snackbar
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "left"
          }}
          open={this.state.open}
          autoHideDuration={6000}
          onClose={() => {}}
          message="Note archived"
          action={
            <React.Fragment>
              <Button color="secondary" size="small" onClick={() => {}}>
                UNDO
              </Button>
              <IconButton
                size="small"
                aria-label="close"
                color="inherit"
                onClick={() => {}}
              >
                <CloseIcon fontSize="small" />
              </IconButton>
            </React.Fragment>
          }
        />
      </Box>
    );
  }
  handleClick() {
    this.state.open
      ? this.setState({ open: false })
      : this.setState({ open: true });
  }
  openSnack() {
    this.setState({ open: true });
  }
}
export default LoginView;
