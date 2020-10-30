import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Switch } from 'react-router';
import Home from "./pages/Home/index";
import About from "./pages/About/index";
import GetInvolved from "./pages/GetInvolved/index";
import Contact from "./pages/Contact/index";
import FAQ from "./pages/FAQ/index";
import Navbar from './components/Navbar/index';
import DonationLocations from './pages/DonationLocations/index';


function App() {
  return (
    <Router>
      <div class="background">
        <Navbar />
        <Switch>
          <Route exact={true} path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/faq" component={FAQ} />
          <Route path="/getinvolved" component={GetInvolved} />
          <Route path="/contact" component={Contact} />
          <Route path="/locations" component={DonationLocations} />
        </Switch>
      </div>
    </Router>
  )
}

export default App;
