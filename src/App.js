import './App.css';
import Music from './Components/music'
import Login from './Components/Login'
import Register from './Components/Register'
import Card from './Components/Card'
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';

function App() {
  return (
    <Router>
      <Switch>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact  path="/profile">
            <Card />
          </Route>
          <Route exact  path="/register">
            <Register />
          </Route>
          {/* <Route exact  path="/forgotpassword">
            <ForgotPassword />
          </Route> */}
       </Switch>
    </Router>
  );
}

export default App;
