import React from 'react';
import {Link} from "react-router-dom";
import Help from './Help'
// import '../App.css';

const Login = () => {
    return (
      
        <div className="wrapper">
            <from className="box" action="index.html" method="post">

                <h1>LOGIN</h1>

                <input type="text" placeholder="Username" />

                <input type="password" placeholder="Password" />

                <input type="submit" value="Login" />

                <div className="af-wrapper">
                    <p className="line1">New to TEK-PRO? <Link to='/register'> Sign Up </Link></p>
                    <p className="line2"> <Link to='/resetpassword'> Forgot your password? </Link></p>        
                </div>
        

            </from>

            <Help />

            
          
        </div>
    );
}

export default Login;