import React from 'react'

const ContactDev = () => {
    return (
        <div className="contact-wrapper">

            <div class="lol">
                <h1>Contact TEKPRO</h1>
                <p>We are here to help you</p>    
            </div> 
            
            <div className="lol-2">
                <form id="lol-2" method="post" Action="" ></form> 
                <input name="name" type="text" class="form-control" placeholder="Your Name" required /><br />
                
                <input name="email" type="email" class="form-control" placeholder="Your Email" required /><br />
                
                <textarea name="message" class="form-control" placeholder="Message" required></textarea><br />
                
                <input type="submit" class="form-submit" value="Send Message" /> 
            </div>
            
        </div>
    )
}

export default ContactDev
