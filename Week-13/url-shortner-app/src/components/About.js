import React from 'react';
import BackgroundAnimate from '../BackgroundAnimate';
const About = () => {
  return (

    <div className="aboutContainer">
      <h1>Contact Us</h1>
      <BackgroundAnimate />
      <p>You can contact us through the following methods:</p>
      <ul>
        <li>Email: pesto@example.com</li>
        <li>Phone: 123-456-7890</li>
      </ul>
    </div>
  );
};

export default About;
