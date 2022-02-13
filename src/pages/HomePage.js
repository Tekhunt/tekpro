import React from 'react'
import Stack from '../Components/Stack'
import Header from '../Components/Header'
import HeroPage from '../Components/HeroPage'

export const HomePage = () => {
    return (
        <div className="smooth">
            <div className="hero-wrap">
                <HeroPage />
            </div>
            <div className="app-wrap">
                <div className="header">
                <Header caption="Stacks" />
                </div>

                <div className="pro-section">
                    <Stack cname= "img-cont" image="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/.NET_Logo.svg/2048px-.NET_Logo.svg.png" text='Net comprises both frontend and backend languages.
                        As for example, ASP.NET is used as backend and C# &
                        VB.NET are used for frontend development.' />
                    <Stack cname= "img-cont" image="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/.NET_Logo.svg/2048px-.NET_Logo.svg.png" text='Net comprises both frontend and backend languages.
                        As for example, ASP.NET is used as backend and C# &
                        VB.NET are used for frontend development.' />
                    <Stack cname= "img-cont" image="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/.NET_Logo.svg/2048px-.NET_Logo.svg.png" text='Net comprises both frontend and backend languages.
                        As for example, ASP.NET is used as backend and C# &
                        VB.NET are used for frontend development.' />
            
                </div>
                <div className="header stack-projects">
                <Header caption="Stack Projects" />
                </div>

                <div className="pro-section">
                    <Stack cname= "img-pro"  image="https://xdfile.com/wp-content/uploads/2019/09/bouncer-758x426.jpg" title='Bouncer' text="Bouncer E-commerce (electronic commerce) is the buying and selling platform
                    of goods and services over an electronic network, primarily the internet." />
                    <Stack cname= "img-pro"  image="https://xdfile.com/wp-content/uploads/2019/09/bouncer-758x426.jpg" title='Bouncer' text="Bouncer E-commerce (electronic commerce) is the buying and selling platform
                    of goods and services over an electronic network, primarily the internet." />
                    <Stack cname= "img-pro"  image="https://xdfile.com/wp-content/uploads/2019/09/bouncer-758x426.jpg" title='Bouncer' text="Bouncer E-commerce (electronic commerce) is the buying and selling platform
                    of goods and services over an electronic network, primarily the internet." />
            
                </div>
            </div>  
          
        </div>
    )
}
