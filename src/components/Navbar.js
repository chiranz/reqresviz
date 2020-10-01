import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  navHome: {
    textDecoration: "none",
    color: "#ffffff",
  },
}));

export default function Navbar() {
  const classes = useStyles();
  return (
    <AppBar position="relative" color="primary">
      <Container maxWidth="lg">
        <Toolbar>
          <Typography
            className={classes.navHome}
            component={Link}
            to="/"
            variant="h6"
          >
            ReqResViz
          </Typography>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
