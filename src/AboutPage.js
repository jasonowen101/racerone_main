import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from React Router

function AboutPage() {
  return (
    <main>
      <div className="container">
        <section className="section">
          <h2>About Us</h2>
          <p>Welcome to our company's website! We are dedicated to providing innovative solutions for businesses worldwide.</p>
          <p>Our mission is to empower organizations with cutting-edge technology and top-notch services that drive success and growth.</p>
          <p>At our core, we believe in collaboration, creativity, and continuous improvement. We strive to exceed our clients' expectations and deliver exceptional value.</p>
          <p>Thank you for choosing us as your trusted partner on your journey to success.</p>
          {/* Add a Link to navigate to the LoginPage */}
          <Link to="/login" className="btn btn-primary">Log In</Link>
        </section>
      </div>
    </main>
  );
}

export default AboutPage;
