import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import LandingPage from "./pages/LandingPage";
import RequestResponseDetailsPage from "./pages/RequestResponseDetailsPage";
import Container from "@material-ui/core/Container";
import { createMuiTheme, ThemeProvider } from "@material-ui/core";
import globalTheme from "./utils/theme";
const theme = createMuiTheme(globalTheme);

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Navbar />
        <Container maxWidth="lg">
          <Switch>
            <Route exact path="/" component={LandingPage} />
            <Route
              exact
              path="/:hostId"
              component={RequestResponseDetailsPage}
            />
          </Switch>
        </Container>
      </Router>
    </ThemeProvider>
  );
}

export default App;
