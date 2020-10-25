import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Landing from "./Pages/Landing";
import GetInvolved from "./Pages/GetInvolved";
// import ContributorPortal from "./Pages/ContributorPortal";
import Contact from "./Pages/Contact";
import Navigation from "./Components/Navbar/navbar"
import Footer from "./Components/Footer/footer";
import Team from "./Pages/Team";
import Welcome from "./Pages/Welcome";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div>
      <Router basename={process.env.PUBLIC_URL}>
        <Navigation />
        <Switch>
          <Route exact path="/">
            <Landing />
          </Route>
          <Route exact path="/getinvolved">
            <GetInvolved />
          </Route>
          {/* <Route exact path="/contributorportal">
            <ContributorPortal />
          </Route> */}
          <Route exact path="/contact">
            <Contact />
          </Route>
          <Route exact path="/ourteam">
            <Team />
          </Route>
          <Route exact path="/welcome">
            <Welcome />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
