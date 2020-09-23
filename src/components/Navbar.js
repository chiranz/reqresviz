import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";

export default function Navbar() {
  return (
    <AppBar position="relative" color="primary">
      <Container maxWidth="md">
        <Toolbar>
          <Typography variant="h6">ReqResViz</Typography>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
