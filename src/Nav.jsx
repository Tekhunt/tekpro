import React from 'react'

export default function Nav() {
    return (
        <div class="container">
         <div class="navbar">
             <div class="logo"></div>
             <h1 id="name">Tekhunt</h1>
             <Music />
             <nav>
                 <ul id="menu">
                     <li><a href="#">Home</a></li>
                     <li><a href="#about">About</a></li>
                     <li><a href="{% url 'projects' %}">Projects</a></li>
                     <li><a href="{% url 'contact' %}">Contact</a></li>
                     <li><a href="#blog">Blog</a></li>
                 </ul>
             </nav>
             <img src="https://i.postimg.cc/2yR5Shsj/1636053.png" alt="logo" class="menu-icon"  onclick="open_close()" />
         </div>
     </div>
    )
}

export default Nav;
