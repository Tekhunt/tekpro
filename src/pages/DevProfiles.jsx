import Card from '../Components/Card'
import React, {useState} from 'react';

export const DevProfiles = () => {
    const [isMessage, setMessage] = useState(0);
    return (
        <div>

            <div className="card app-wrap">
                <Card id={1} isMessage={isMessage} setMessage={setMessage}/>
                <Card id={2} isMessage={isMessage} setMessage={setMessage} />
                <Card id={3} isMessage={isMessage} setMessage={setMessage} />
                <Card id={4} isMessage={isMessage} setMessage={setMessage} />
            </div>
             
            
        </div>
    )
}

