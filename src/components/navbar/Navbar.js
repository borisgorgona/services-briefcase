import React from 'react';
import "./Navbar.css";

const Navbar = ({ isScrolling }) => {
    const toTheTop = () => {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth'});
    };

  return (
    <nav className={`navbar ${isScrolling ? 'scrolling' : null}`}>
      <div className="navbar-logo" onClick={toTheTop}>Boris Gorgona</div>
    </nav>
  )
}

export default Navbar
