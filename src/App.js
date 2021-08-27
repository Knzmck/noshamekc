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
import Partners from './pages/Partners/index';
import Contactq from './pages/Contactq/index';
import CovidResources from './pages/CovidResources/index';
import { AnimatedSwitch } from 'react-router-transition';
import styled from 'styled-components';
const Div = styled.div`
.switch-wrapper {
  position: relative;
}

`

  function App() {
    return (
      <Router>
        <Div>
        <div >
          <Navbar />
          <AnimatedSwitch
          atEnter={{ opacity: 0 }}
          atLeave={{ opacity: 0 }}
          atActive={{ opacity: 1 }}
          className="switch-wrapper"
        >
            <Route exact={true} path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/faq" component={FAQ} />
            <Route path="/getinvolved" component={GetInvolved} />
            <Route path="/contact" component={Contact} />
            <Route path="/locations" component={DonationLocations} />
            <Route path="/partners" component={Partners} />
            <Route path="/contactq" component={Contactq} />
            <Route path="/covid19" component={CovidResources} />
            </AnimatedSwitch>
        </div>
        </Div>
      </Router>
    )
  }

export default App;
