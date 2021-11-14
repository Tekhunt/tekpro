import React from "react";
import {Link} from "react-router-dom";
import '../style.css'
// import Register from "./Register";
// import $ from "jquery";
// import Login from "./Login";


function Caption({left, leftUrl, right, rightUrl}){

    return (
        <div >
            <div className="caption">
            <p className="cap1"><Link to={`/${leftUrl}`}> {left} </Link></p>
            <p className="cap2"> <Link to={`/${rightUrl}`}>{right}</Link></p>
            </div>
           
            {/* {!toggle ? <Register/> : <Login/>} */}
        </div>
    )
}

export default Caption;