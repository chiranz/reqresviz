import Axios from "axios";
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import { baseRequestAPI } from "./constant";
import LandingPage from "./pages/LandingPage";
import RequestResponseDetailsPage from "./pages/RequestResponseDetailsPage";
import Container from "@material-ui/core/Container";

Axios.defaults.baseURL = baseRequestAPI;
function App() {
  return (
    <Router>
      <Navbar />
      <Container maxWidth="md">
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/:uid" component={RequestResponseDetailsPage} />
        </Switch>
      </Container>
    </Router>
  );
}

export default App;
