


import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function HamburgerMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className= {isOpen ? 'isOpen' : ''} >
      <button className='mainNavBtn' onClick={() => setIsOpen(!isOpen)}>
        {/* add an SVG or icon for the hamburger menu */}
        Menu
      </button>
      {isOpen && (
        <> 
        <div className="hamCon">
            <button className="menu-btn"><Link to={'/'}>Home</Link></button>
             <button className="menu-btn">About Us</button>
             <button className="menu-btn">Services</button>
             <button className="menu-btn">How It Works</button>
             <button className="menu-btn">Testimonials</button>
        </div>
        </>
      )}
    </nav>
  );
}

export default HamburgerMenu;