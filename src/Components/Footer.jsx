import React from 'react';
import {Link} from 'react-router-dom';

const Footer = () => {
    return (
        <div className="foot-wrapper">
            <div className="top-footer">
            
                <p className="p">Join TEK-PRO, a community of Developers who are
                    committed to making a difference in the Tech World.
                </p>
               
                <div className="b-wrap">
                    <button>Join now</button>
                    <button>Collaborate</button>
                
                </div>
            
            </div>

            <div className="bottom-footer">
                <div className="foot-link">
                    <a href="http://localhost:3000/">TEK-PRO</a>
                    <a href="http://localhost:3000/">About</a>
                    <a href="http://localhost:3000/">Projects</a>
                    <Link to='/contact'> Contact</Link>
                    <a href="http://localhost:3000/">Blog</a>
                    <a href="http://localhost:3000/">Mission</a>
                </div>
                <div className="foot-link">
                    <a href="http://localhost:3000/">Collaborate</a>
                    <a href="http://localhost:3000/">Build Team</a>
                    {/* <Link to="/contactpro">Contact an Engineer</Link> */}
                    <a href="http://localhost:3000/">Submit a Project</a>
                    <a className="none" href="http://localhost:3000/">TEK-PRO</a>
                    <a className="none" href="http://localhost:3000/">ABOUT</a>
                    <a className="none" href="http://localhost:3000/">ABOUT</a>
                </div>
                <div className="foot-link">
                    <p>Stay Updated</p>
                  <input type="text" placeholder="Name" />
                    <input type="email" placeholder="email"/>
                    <button className="p" type="submit">Subscribe</button>
                </div>
            
            </div>
            
        </div>
    )
}

export default Footer;
