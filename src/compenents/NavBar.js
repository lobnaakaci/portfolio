import React from 'react';
import "./NavBar.css";
import Apropos from './Apropos';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
   
      <section class="h-wrapper">
        <div class="label">
        <a href="/Lobna">Lobna Kaci </a>
        </div>
<header className= "h">
    <div className="menu">
   
<a href="/Apropos">Apropos</a>
<a href="/Education">Education</a>
<a href="/Experience">Expériences</a>
<a href="/Projets">Projets</a>
<button className="button">
   <a href="/Contact">Contact</a> 
</button>

    </div>
    </header>
      </section>
     
     
      
    
  );
}

export default NavBar;
