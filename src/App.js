import './App.css';
import Nav from './Components/Nav'
import Footer from './Components/Footer'
import FooterMin from './Components/FooterMin'
import Login from './Components/Login'
import Register from './Components/Register'
import { HomePage } from './pages/HomePage';
import { DevProfiles } from './pages/DevProfiles';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import ForgotPassword from './Components/ForgotPassword';
import ContactTekpro from './pages/ContactTekpro';
import ContactEngr from './pages/ContactEngr';
// import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    // <div className="app-wrap">
      <Router>
        {/* <div className="to-nav">
          <Nav />
        </div> */}
        <Switch>
          <Route  path="/register">
            <Register />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/resetpassword">
              <ForgotPassword />
            </Route>
          <div className="to-nav">
            <Nav />
          
            {/* <Route exact path="/resetpassword">
              <ForgotPassword />
            </Route> */}
            <Route exact path="/">
              <HomePage />
            </Route>
            <Route path="/tekpros">
              <DevProfiles />
            </Route>
            <Route exact path="/contact">
              <ContactTekpro />
            </Route>
            <Route exact path="/contactpro">
              <ContactEngr />
            </Route>
            <div className="home-footer">
                <Footer />
                <FooterMin />
            </div> 
          </div>
        </Switch>
      </Router>
    // </div>
  );
}

export default App;
