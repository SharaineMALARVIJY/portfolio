import { Link } from "react-router-dom";
import React from "react";
import mock01 from '../assets/images/mock01.png';
import mnist from '../assets/images/mnist.jpg';
import mock03 from '../assets/images/cheapino.jpg';
import logo_adp from '../assets/images/logo_groupe_adp.jpg';
import '../assets/styles/Project.scss';

function Project({ language }: any) {
    const isFr = language !== 'en';

    return(
    <div className="projects-container" id="projects">
        <h1>{isFr ? "Projets" : "Projects"}</h1>
        <div className="projects-grid">

            <div className="project">
                <Link to="/projects/adp">
                    <img
                        src={logo_adp}
                        className="zoom"
                        alt={isFr ? "Stage Groupe ADP" : "Groupe ADP internship"}
                        width="100%"
                    />
                </Link>

                <Link to="/projects/adp">
                    <h2>
                        {isFr
                            ? "Stage — Groupe ADP"
                            : "Internship — Groupe ADP"}
                    </h2>
                </Link>

                <p>
                    {isFr
                        ? "Analyse et fiabilisation de données de trafic routier à travers plusieurs outils de traitement et de visualisation."
                        : "Analysis and validation of road traffic data through data processing and visualization tools."
                    }
                </p>
            </div>

            <div className="project">
                <a href="https://github.com/SharaineMALARVIJY/Course_2026_NitROS" target="_blank" rel="noreferrer">
                    <img
                        src={mock01}
                        className="zoom"
                        alt={isFr ? "Projet voiture autonome CoVAPSy" : "CoVAPSy autonomous car project"}
                        width="100%"
                    />
                </a>
                <a href="https://github.com/SharaineMALARVIJY/Course_2026_NitROS" target="_blank" rel="noreferrer">
                    <h2>{isFr ? "Voiture autonome — CoVAPSy" : "Autonomous car — CoVAPSy"}</h2>
                </a>
                <p>
                    {isFr
                        ? "Développement d’une voiture autonome sous ROS2 dans le cadre de la course inter-universitaire CoVAPSy. Le projet utilise Nav2, le SLAM, un LiDAR et une caméra pour assurer la localisation, la navigation et l’évitement d’obstacles."
                        : "Development of an autonomous car using ROS2 for the CoVAPSy inter-university race. The project uses Nav2, SLAM, LiDAR and a camera for localization, navigation and obstacle avoidance."
                    }
                </p>
            </div>

            <div className="project">
                <a href="https://github.com/SharaineMALARVIJY" target="_blank" rel="noreferrer">
                    <img
                        src={mock03}
                        className="zoom"
                        alt={isFr ? "Projet clavier personnalisé" : "Custom keyboard project"}
                        width="100%"
                    />
                </a>
                <a href="https://github.com/SharaineMALARVIJY" target="_blank" rel="noreferrer">
                    <h2>{isFr ? "Clavier personnalisé" : "Custom keyboard"}</h2>
                </a>
                <p>
                    {isFr
                        ? "Montage d’un clavier personnalisé avec soudure de composants, programmation d’un microcontrôleur et impression 3D de certaines pièces."
                        : "Assembly of a custom keyboard involving component soldering, microcontroller programming and 3D printing of several parts."
                    }
                </p>
            </div>

            <div className="project">
                <a href="https://github.com/SharaineMALARVIJY" target="_blank" rel="noreferrer">
                    <img
                        src={mnist}
                        className="zoom"
                        alt={isFr ? "Projet IA reconnaissance de chiffres" : "AI handwritten digit recognition project"}
                        width="100%"
                    />
                </a>
                <a href="https://github.com/SharaineMALARVIJY" target="_blank" rel="noreferrer">
                    <h2>{isFr ? "Reconnaissance de chiffres manuscrits" : "Handwritten digit recognition"}</h2>
                </a>
                <p>
                    {isFr
                        ? "Création d’un modèle d’intelligence artificielle en Python pour reconnaître des chiffres manuscrits, avec TensorFlow, NumPy et Scikit-learn."
                        : "Creation of an artificial intelligence model in Python to recognize handwritten digits, using TensorFlow, NumPy and Scikit-learn."
                    }
                </p>
            </div>

        </div>
    </div>
    );
}

export default Project;