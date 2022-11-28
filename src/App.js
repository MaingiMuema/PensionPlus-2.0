import "./App.css";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import React from "react";
import Landingpage from "./Components/Landing_page";
import CreateAccount from "./Components/create-account";
import ClientDetails from "./Components/clientDetails";
import PensionDetails from "./Components/pensionDetails";
import ConfirmPage from "./Components/confirmPage";
import UserDashboard from "./Components/userDashboard";
import DashboardNavBar from "./Components/dashboardNavbar";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/">
            <Landingpage />
          </Route>
          <Route exact path="/create-account">
            <CreateAccount />
          </Route>
          <Route exact path="/clientDetails">
            <ClientDetails />
          </Route>
          <Route exact path="/pensionDetails">
            <PensionDetails />
          </Route>
          <Route exact path="/confirmPage">
            <ConfirmPage />
          </Route>
          <Route exact path="/userDashboard">
            <UserDashboard />
          </Route>
          <Route exact path="/dashboardNavbar">
            <DashboardNavBar />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
