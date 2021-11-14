import React from 'react';
// import '../App.css';

const Login = ({caption, placeholder, type, value}) => {
    return (
      
        <div className="wrapper">
            <from className="box" action="index.html" method="post">

                <h1>LOGIN</h1>

                <input type="text" placeholder="Username" />

                <input type="password" placeholder="Password" />

                <input type="submit" value="Login" />

            </from>
                        
          
        </div>
    );
}

export default Login;