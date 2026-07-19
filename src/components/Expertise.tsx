import React from "react";
import '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPython } from '@fortawesome/free-brands-svg-icons';
import { faMicrochip, faRobot } from '@fortawesome/free-solid-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';

const labelsFirst = [
    "Python",
    "C",
    "C++",
    "VHDL",
    "Linux",
    "Git",
    "ROS2"
];

const labelsSecond = [
    "Électronique analogique",
    "Oscilloscope",
    "GBF",
    "Breadboard",
    "Microcontrôleurs",
    "Soudure",
    "Impression 3D"
];

const labelsThird = [
    "IA",
    "Traitement d'image",
    "Traitement du son",
    "TensorFlow",
    "NumPy",
    "Scikit-learn",
    "SLAM"
];

function Expertise() {
    return (
    <div className="container" id="expertise">
        <div className="skills-container">
            <h1>Compétences</h1>
            <div className="skills-grid">
                <div className="skill">
                    <FontAwesomeIcon icon={faRobot} size="3x"/>
                    <h3>IA, image & robotique</h3>
                    <p>
                        Je m’intéresse aux systèmes intelligents, à l’IA appliquée au traitement image/son
                        et à la robotique autonome, notamment à travers des projets de navigation et de perception.
                    </p>
                    <div className="flex-chips">
                        <span className="chip-title">Domaines :</span>
                        {labelsThird.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faPython} size="3x"/>
                    <h3>Programmation & systèmes</h3>
                    <p>
                        Je développe principalement en Python, C et C++, avec une expérience sur Linux,
                        Git et ROS2 pour des projets robotiques et embarqués.
                    </p>
                    <div className="flex-chips">
                        <span className="chip-title">Stack :</span>
                        {labelsFirst.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faMicrochip} size="3x"/>
                    <h3>Électronique & prototypage</h3>
                    <p>
                        Je possède des bases solides en électronique analogique et en prototypage,
                        avec l’utilisation d’outils de mesure, de microcontrôleurs et de montages expérimentaux.
                    </p>
                    <div className="flex-chips">
                        <span className="chip-title">Compétences :</span>
                        {labelsSecond.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Expertise;