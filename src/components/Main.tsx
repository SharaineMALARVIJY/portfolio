import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Main.scss';
import PhotoCV from '../assets/images/Photo_CV.jpeg';

function Main({ language }: any) {

  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
          <img src={PhotoCV} alt="Avatar" />
        </div>
        <div className="content">
          <div className="social_icons">
            <a href="https://github.com/SharaineMALARVIJY" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/sharaine-malarvijy/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
            <h1>Sharaine MALARVIJY</h1>
            <p>
              {language === 'fr'
                ? "Étudiant en IA et traitement de l’image et du son"
                : "AI student specialized in image and audio processing"}
            </p>

          <div className="mobile_social_icons">
            <a href="https://github.com/SharaineMALARVIJY" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/sharaine-malarvijy/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;