import React from 'react';
import Help from './Help'
// import '../App.css';

const Register = () => {
    return (
      
        <div className="wrapper">
            <from className="box" action="index.html" method="post">

                <h1>REGISTER</h1>

                <input type="text" placeholder="Username" />

                <input type="email" placeholder="Email" />

                <input type="password" placeholder="Password" />
                
                <input type="password" placeholder="Confirm Password" />

                <input type="submit" value="Sign Up" />

                <div className="af-wrapper">
                    <p className="line1">By clicking the <b>“Sign Up”</b> button, you agree to</p>
                    <p className="line2">TEK-PRO’s <a href="#terms"> terms of acceptable use.</a></p>        
                </div>

            </from>

            <Help />



            
             
          
        </div>
    );
}

export default Register;