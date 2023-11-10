import React from 'react';
import './ProfilePage.css'; // Make sure to adjust the path if needed

const ProfilePage = () => {
  return (
    <div>
      <header>
        <h1>Inventory Management System</h1>
        <p>User Profile</p>
      </header>
      <main>
        <section className="profile-card">
          <img src="profile-picture.jpg" alt="User Profile Picture" />
          <h2>John Doe</h2>
          <p>Role: Administrator</p>
        </section>
        <section className="profile-details">
          <h2>Profile Details</h2>
          <ul>
            <li>
              <strong>Email:</strong> john.doe@example.com
            </li>
            <li>
              <strong>Phone:</strong> +1 (123) 456-7890
            </li>
            <li>
              <strong>Location:</strong> City, Country
            </li>
          </ul>
        </section>
      </main>
      <footer>
        <p>&copy; 2023 Smart Inventory Management System</p>
      </footer>
    </div>
  );
};

export default ProfilePage;
