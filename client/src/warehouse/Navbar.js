import React from 'react';
import './warehouse./warehouse.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1 className="logo lg-heading"><a href="index.html" className="text-light">Inventory</a></h1>
      <div className="navcontainer">
        <ul className="navitems">
          <li className="navitem"><a href="index.html" className="text-light">home</a></li>
          <li className="navitem"><a href="about.html" className="text-light">about</a></li>
          <li className="navitem"><a href="contact.html" className="text-light">contact</a></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
