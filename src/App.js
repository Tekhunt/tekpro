import './App.css';
import Login from './Components/Login'
import Register from './Components/Register'
import { HomePage } from './pages/HomePage';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
// import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    // <div className="app-wrap">
      <Router>
        <Switch>
          <Route  path="/register">
                <Register />
              </Route>
              <Route exact path="/login">
                <Login />
              </Route>
              <Route   path="/">
                <HomePage/>
          </Route>
        </Switch>
      </Router>
    // </div>
  );
}

export default App;
