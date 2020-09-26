import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import LandingPage from "./pages/LandingPage";
import RequestResponseDetailsPage from "./pages/RequestResponseDetailsPage";
import Container from "@material-ui/core/Container";

function App() {
  return (
    <Router>
      <Navbar />
      <Container maxWidth="md">
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/:hostId" component={RequestResponseDetailsPage} />
        </Switch>
      </Container>
    </Router>
  );
}

export default App;
