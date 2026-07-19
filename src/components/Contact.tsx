import React from 'react';
import '../assets/styles/Contact.scss';

function Contact() {
  return (
    <div id="contact">
      <div className="items-container">
        <div className="contact_wrapper">
          <h1>Contactez-moi</h1>
          <p>Par mail :{' '}

            <a href="mailto:sharaine.ma@gmail.com" className="email-link">
              sharaine.ma@gmail.com
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Contact;