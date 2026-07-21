import React from 'react';
import '../assets/styles/Contact.scss';

function Contact({ language }: any) {
  return (
    <div id="contact">
      <div className="items-container">
        <div className="contact_wrapper">
          <h1>{language === 'fr' ? 'Contactez-moi' : 'Contact me'}</h1>
          <p>
            {language === 'fr' ? 'Par mail :' : 'By email:'}{' '}
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