import React from "react";
import mock01 from '../assets/images/mock01.png';
import mnist from '../assets/images/mnist.jpg';
import mock03 from '../assets/images/cheapino.jpg';
import '../assets/styles/Project.scss';

function Project() {
    return(
    <div className="projects-container" id="projects">
        <h1>Projets</h1>
        <div className="projects-grid">

            <div className="project">
                <a href="https://github.com/SharaineMALARVIJY/Course_2026_NitROS" target="_blank" rel="noreferrer">
                    <img src={mock01} className="zoom" alt="Projet voiture autonome CoVAPSy" width="100%"/>
                </a>
                <a href="https://github.com/SharaineMALARVIJY/Course_2026_NitROS" target="_blank" rel="noreferrer">
                    <h2>Voiture autonome — CoVAPSy</h2>
                </a>
                <p>
                    Développement d’une voiture autonome sous ROS2 dans le cadre de la course
                    inter-universitaire CoVAPSy. Le projet utilise Nav2, le SLAM, un LiDAR et une caméra
                    pour assurer la localisation, la navigation et l’évitement d’obstacles.
                </p>
            </div>

            <div className="project">
                <a href="https://github.com/SharaineMALARVIJY" target="_blank" rel="noreferrer">
                    <img src={mock03} className="zoom" alt="Projet clavier personnalisé" width="100%"/>
                </a>
                <a href="https://github.com/SharaineMALARVIJY" target="_blank" rel="noreferrer">
                    <h2>Clavier personnalisé</h2>
                </a>
                <p>
                    Montage d’un clavier personnalisé avec soudure de composants,
                    programmation d’un microcontrôleur et impression 3D de certaines pièces.
                </p>
            </div>

            <div className="project">
                <a href="https://github.com/SharaineMALARVIJY" target="_blank" rel="noreferrer">
                    <img src={mnist} className="zoom" alt="Projet IA reconnaissance de chiffres" width="100%"/>
                </a>
                <a href="https://github.com/SharaineMALARVIJY" target="_blank" rel="noreferrer">
                    <h2>Reconnaissance de chiffres manuscrits</h2>
                </a>
                <p>
                    Création d’un modèle d’intelligence artificielle en Python pour reconnaître
                    des chiffres manuscrits, avec TensorFlow, NumPy et Scikit-learn.
                </p>
            </div>

        </div>
    </div>
    );
}

export default Project;