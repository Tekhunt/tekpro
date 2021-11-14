import React from 'react';
// import '../App.css';

const Register = () => {
    return (
      
        <div className="wrapper">
            <from className="box" action="index.html" method="post">

                <h1>LOGIN</h1>

                <input type="text" placeholder="Username" />

                <input type="email" placeholder="Email" />

                <input type="password" placeholder="Password" />
                
                <input type="password" placeholder="Confirm Password" />

                <input type="submit" value="Login" />

            </from>
                        
          
        </div>
    );
}

export default Register;