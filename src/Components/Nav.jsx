import React from 'react'
import {Link} from "react-router-dom";

const Nav = () => {
    return (
        <div>
            <div className="topnav">
                <Link to="/" className="active">TEK-PRO</Link>
                <span><Link to='/login'> Login </Link></span>
                <span><Link to='/register'> SignUp </Link></span>
                <div className="search-container">
                    <form action="/action_page.php">
                    <input type="text" placeholder="Search.." name="search"/>
                    <button type="submit"><i className="fa fa-search"></i></button>
                    </form>
                </div>
            </div>
            
        </div>
    )
}

export default Nav;
