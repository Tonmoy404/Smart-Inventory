import React from 'react';
import './css/AboutUs.css'

const AboutUs = () => {
  return (
    <div>
      <header className="header">
        <nav className="navbar">
          <h1 className="logo lg-heading"><a href="index.html" className="text-light">Inventory</a></h1>
          <div className="navcontainer">
            <ul className="navitems">
              <li className="navitem"><a href="index.html" className="text-light">home</a></li>
              <li className="navitem"><a href="contact.html" className="text-light">contact</a></li>
              <li className="navitem"><a href="dashboard.html" className="text-light">warehouse</a></li>
            </ul>
          </div>
        </nav>
        <br /><br />
        <div className="main-top">
          <p>About Us</p>
        </div>
      </header>
      <main>
        <section className="mission">
          <h2>Our Mission</h2>
          <p>We are dedicated to revolutionizing inventory management by providing smart, efficient, and innovative solutions to businesses of all sizes. Our mission is to streamline inventory processes and empower businesses to make data-driven decisions.</p>
        </section>
        <section className="team">
          <h2>Our Team</h2>
          <div className="team-member">
            <img src="" alt="Team Member 1" />
            <h3>Mir Ramim Ahammad</h3>
            <p>Student of UITS</p>
          </div>
          <div className="team-member">
            <img src="" alt="Team Member 2" />
            <h3>Tahjibul Islam Rafi</h3>
            <p>Student of UITS</p>
          </div>
          <div className="team-member">
            <img src="" alt="Team Member 3" />
            <h3>Shahriar Rifat</h3>
            <p>Student of UITS</p>
          </div>
          <div className="team-member">
            <img src="" alt="Team Member 4" />
            <h3>Tonmoy Barai</h3>
            <p>Student of UITS</p>
          </div>
        </section>
      </main>
      <footer>
        <p>&copy; 2023 Smart Inventory Management System</p>
      </footer>
    </div>
  );
}

export default AboutUs;
