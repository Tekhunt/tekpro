import React from 'react';
// import '../App.css';

const Login = ({caption, placeholder, type, value}) => {
    return (
      
        <div className="wrapper">
            <from className="box" action="index.html" method="post">

                <h1>{caption}</h1>

                <input type={type} placeholder={placeholder} />

            </from>
                        
          
        </div>
    );
}

export default Login;