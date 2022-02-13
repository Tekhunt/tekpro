import React from 'react';
import {Link} from "react-router-dom";
import Help from './Help'
// import '../App.css';

const ForgotPassword = ({caption, placeholder, type, value}) => {
    return (
      
        <div className="wrapper">
            <from className="box" action="index.html" method="post">

                <h1>Password Reset</h1>

                <input type="email" placeholder="Email" />


                <input type="submit" value="Reset" />

                <div className="af-wrapper">
                    <p className="line1">Remember your password? <Link to='/Login'> Login </Link></p>       
                </div>
        

            </from>

            <Help />
            
        </div>
    );
}

export default ForgotPassword;