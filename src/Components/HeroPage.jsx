import React from 'react';
import {Link} from "react-router-dom";

const HeroPage = () => {
    return (
        <div className="hero">

            <div className="text-content">
                <h2>Connect and Collaborate with Pro Developers Around the World</h2>
                <p>We leverage on the power of the great tech community
                    that fosters diversity and inclusion to bring technology 
                    to everyone's reach. Get in touch with skilled developers,
                    form or join a team and stay productive. Work alongside 
                    Engineers with loads of experinces and accomplish your task
                </p>
                <div className="connect-btn">
                    <button><Link to='/login'> Connect Now</Link> </button>
                    <button className='contact-tekpro'><Link to='/contact'> Contact TEK-PRO </Link></button>
                </div>
            </div>

            <div className="hero-dev">
        
                {/* <div className="img-div"> */}
                
                    <img src="https://images.unsplash.com/photo-1638262499690-fe65412f4d93?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDExfGFldTZyTC1qNmV3fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt='dev' />
                {/* </div> */}
                <p>Kate</p>
                <p>Python Developer</p>
                <button><Link to='/tekpros'> See more Devs </Link></button>
                <div>
                </div>
            </div>
            
        </div>
    )
}

export default React.memo(HeroPage)
