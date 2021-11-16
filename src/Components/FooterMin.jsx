import React from 'react';

const FooterMin = () => {
    return (
        <div className="min-footer">
            <div className="social-sec">
                <div className="min-top">
                    <button>Linkedin</button>
                    <button>Twitter</button>
                    <button>Instagram</button>
                </div>
                <div className="sponsor">
                    <p className="p">Sponsored by <span>Decagon</span></p>
                </div>
            </div>

            <hr className="footer-hr"/>

            <div className="min-bottom">
                <p className="p">Terms Conditions</p>
                <p className="p">Copyright &copy; 2021 TEK-Pro. All Rights Reserved</p>
                <p className="p">Privacy Policy</p>
            </div>
            
        </div>
    )
}

export default FooterMin;
