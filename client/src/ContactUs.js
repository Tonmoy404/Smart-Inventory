import React from 'react';
import './ContactUs.css'; // Make sure to adjust the path if needed

const ContactUs = () => {
  return (
    <div>
      <nav className="navbar">
        <h1 className="logo lg-heading"><a href="index.html" className="text-light">Inventory</a></h1>
        <div className="navcontainer">
          <ul className="navitems">
            <li className="navitem"><a href="index.html" className="text-light">home</a></li>
            <li className="navitem"><a href="about.html" className="text-light">about</a></li>
            <li className="navitem"><a href="dashboard.html" className="text-light">warehouse</a></li>
          </ul>
        </div>
      </nav>
      <br /><br /><br />
      <div className="header">
        <p>Contact Us</p>
      </div>
      <main>
        <section className="contact-form">
          <h2>Get in Touch</h2>
          <form action="submit.php" method="post">
            <div className="input-container">
              <label htmlFor="name">Your Name:</label>
              <input type="text" id="name" name="name" required />
            </div>
            <div className="input-container">
              <label htmlFor="email">Your Email:</label>
              <input type="email" id="email" name="email" required />
            </div>
            <div className="input-container">
              <label htmlFor="message">Message:</label>
              <textarea id="message" name="message" required></textarea>
            </div>
            <div className="input-container">
              <button type="submit">Submit</button>
            </div>
          </form>
        </section>
        <section className="contact-info">
          <h2>Contact Information</h2>
          <address>
            <p>Address: Bara Beraid, Badda, Dhaka-1212</p>
            <p>Phone: (+88)01857558333</p>
            <p>Email: 2014751039@uits.edu.bd</p>
          </address>
        </section>
      </main>
      <footer>
        <p>&copy; 2023 Smart Inventory Management System</p>
      </footer>
    </div>
  );
}

export default ContactUs;
