import {React, useState, useRef, useEffect} from 'react'
import {Link} from 'react-router-dom';
import ContactEngineer from './ContactEngineer';

const Card = ({id, isMessage, setMessage}) => {
    // const [isMessage, setMessage] = useState(0);
    const [isOpen, setOpen] = useState(false);
    const [isClose, setClose] = useState(false);
    const [text, setText] = useState(false);

    const closer = () => {
        setClose(!isClose)
    }

    const setStatus = (id) => {
        setMessage(id)
        setOpen(!isOpen)
        console.log(id, isMessage)
    }

    const followme = () => {
        setText(!text)
    }

    // const ref = useRef();
    // useEffect(() => {
    //     const clickOutside = (e) => {
    //         if(isOpen && ref.current && !ref.current.contains(e.target)){
    //             setOpen(false)
    //         }
    //     }
    //     document.addEventListener('click', clickOutside);
    //     return () => {};
    // },[isOpen])
    return (
        <div className="zed">
        <div className="flip-card">
            <div className="flip-card-inner">
                <div className="flip-card-front">
                    <p>Natasha</p>
                    <p className="stack">Android developer</p>
                </div>
                <div className="flip-card-back">
                    <div className="card-wrapper">
                        <div className="profil">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/e/e4/Twitter_Verified_Badge.svg" alt="" class="ver"/> 
                            {/* <h1><i className="fa fa-check"></i></h1> */}
                            <p>View Profile</p>
                        </div>
                        <div className="avater">
                            <img className="img" src="https://images.unsplash.com/photo-1634059044563-ec2dc036f1d7?ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDIxN3x0b3dKWkZza3BHZ3x8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="avater" />
                        </div>
                        <div className="mid-wrap">
                            <p>Tasha</p>
                            <p>Frontend Engineer at BBC</p>
                            <div className="mid-btn">
                                <button onClick={() => setStatus(id)}>Message</button>
                                
                                <button onClick={followme}>{text ? 'Following': 'Follow'}</button>
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
        {/* {!isClose && */}
        {/* <div className={!isClose? 'showTab': 'hideTab'}>  */}
        <div className={isMessage == id && !isClose? 'showTab': 'hideTab'}> 
            <ContactEngineer setclose={closer}/>
        </div>
         {/* </div> */}
          {/* } */}
        </div>
            
        
    );
}

export default Card;


