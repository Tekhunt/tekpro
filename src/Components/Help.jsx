// import React from "react";
// import '../style.css'
import React, {useState} from "react";

const Help = ({line1, line2}) => {
    // const [klass, setKlass] = useState('hide')
    const [isSupport, setSupport] = useState(false)
    return (
        <div className="help">
            <div className={isSupport? 'show': 'hide'}>
                <p className="supports">Find support</p>
                <p className="supports">Contact us</p>  
            </div>
            <button onClick={() => setSupport(!isSupport)}> {isSupport? 'Close': <p>Support</p>}</button>
        </div>
    )
}
export default Help
