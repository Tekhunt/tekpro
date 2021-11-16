import React from 'react'

const Card = () => {
    return (
        <div className="flip-card">
            <div className="flip-card-inner">
                <div className="flip-card-front">
                    <p>Natasha</p>
                    <p className="stack">Android developer</p>
                </div>
                <div className="flip-card-back">
                    <div className="card-wrapper">
                        <h1 className="dev">Dev</h1>
                        <div className="avater">
                            <img className="img" src="https://images.unsplash.com/photo-1634059044563-ec2dc036f1d7?ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDIxN3x0b3dKWkZza3BHZ3x8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="avater" />
                        </div>
                        <div className="mid-wrap">
                            <p>Tasha</p>
                            <p>Frontend Engineer at BBC</p>
                            <div className="mid-btn">
                                <button>Mesage</button>
                                <button>Projects</button>
                            </div>
                    
                                <hr className="hr-mid"/>
                                <h3>SKILLS</h3>
                                <hr className="hr-mid"/>

                            <div className="skills">
                                <button>React</button>
                                <button>Django</button>
                                <button>RestAPi</button>
                                <button>Nextjs</button>
                                <button>Git & github</button>
                                <button>AWS</button>
                                <button>Agile</button>
                                <button>Jira</button>
                                <button>view more skills</button>
                            </div>
                    
                        </div>
                    </div>
                </div>
            </div>
        </div>
            
        
    );
}

export default Card;


