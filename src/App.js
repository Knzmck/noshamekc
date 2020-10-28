import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
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
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/faq" component={FAQ} />
        <Route exact path="/getinvolved" component={GetInvolved} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/locations" component={DonationLocations} />
      </div>
    </Router>
  )
}

export default App;
