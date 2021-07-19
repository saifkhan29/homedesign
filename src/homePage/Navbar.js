import React from 'react';
import './Navbar.css'

export default function Navbar() {
    const navSlide = () => {
        const burger = document.querySelector('.burger');
        const nav = document.querySelector('.nav-links');
        const navLinks = document.querySelectorAll('.nav-links li');
        const body = document.body;
    
        
            nav.classList.toggle('nav-active');
    
            navLinks.forEach((link, index) => {
                if(link.style.animation){
                    link.style.animation = '';
                } else {
                    link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.5}s`
                }
            });
    
            burger.classList.toggle('toggle');
    
            body.classList.toggle('noScroll');
    
    
    
        
    };
    
    
    return (
        <div>
            <nav>
      <div className="logo">
        <h4>HR Tech | Insurance Tech</h4>
      </div>
      <ul className="nav-links">
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#">Projects</a></li>
        <li><a href="#">Clients</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
      <div className="burger" onClick={navSlide}>
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>
    </nav>
            
        </div>
    );
};
