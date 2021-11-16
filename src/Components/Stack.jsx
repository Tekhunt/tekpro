import React from "react";

const Stack = ({cname, image, title, text}) => {
    return (
        <div className="f1">
            <div className={cname}>
                <img src={image} alt="stack-logo" />
            </div>

            <h2 className="job-title">{title}</h2>
            
            <p>
                {text}
            </p>
            {/* </div> */}
            
        </div>
    );
}

export default Stack;
