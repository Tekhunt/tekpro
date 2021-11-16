import React from 'react'

const Footer = () => {
    return (
        <div className="foot-wrapper">
            <div className="top-footer">
            
                <p className="p">Join Tek-Pro, a community of Developers who are
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
                    <a href="http://localhost:3000/">ABOUT</a>
                    <a href="http://localhost:3000/">PROJECTS</a>
                    <a href="http://localhost:3000/">CONTACT</a>
                    <a href="http://localhost:3000/">BLOG</a>
                    <a href="http://localhost:3000/">MISSION</a>
                </div>
                <div className="foot-link">
                    <a href="http://localhost:3000/">COLLABORATE</a>
                    <a href="http://localhost:3000/">BUILD TEAM</a>
                    <a href="http://localhost:3000/">CONTACT A DEV</a>
                    <a href="http://localhost:3000/">SUBMIT TOPIC</a>
                    <a className="none" href="http://localhost:3000/">TEK-PRO</a>
                    <a className="none" href="http://localhost:3000/">ABOUT</a>
                </div>
                <div className="foot-link">
                    <p>STAY UPDATED</p>
                  <input type="text" placeholder="Name" />
                    <input type="email" placeholder="email"/>
                    <button className="p" type="submit">SUBSCRIBE</button>
                </div>
            
            </div>
            
        </div>
    )
}

export default Footer;
