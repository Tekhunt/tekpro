import React, {useState} from 'react'

const ContactEngineer = ({setclose}) => {
    return (
    <div  className="c-body">

        <div class="e-contact-wrapper">
        <div className="closer">
            <button onClick={setclose}><i className="fa fa-close"></i></button>
        </div>    
            <a href=""><h2>Contact</h2></a>
            
            <form >
                <div class="inp-field">
                    <input type="text" required />
                    <label className="c-label">Name</label>
                </div>
                <div className="inp-field">
                    <input type="email" required />
                    <label className="c-label">Email</label>
                </div>
                <div className="inp-field">
                <textarea rows="5" required></textarea>
                    <label className="c-label">Message</label>
                </div>
                <a className="redirect" href="http://tekhunt.me"><input type="submit" value="Send Message" class="c-btn"/></a>
            </form>

        </div>
            
                
    </div>
    )
}

export default ContactEngineer
