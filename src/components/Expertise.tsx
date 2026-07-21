import React from "react";
import '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPython } from '@fortawesome/free-brands-svg-icons';
import { faMicrochip, faRobot } from '@fortawesome/free-solid-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';

const labelsProgrammingFr = [
    "Python",
    "C",
    "C++",
    "VHDL",
    "Linux",
    "Git",
    "ROS2"
];

const labelsProgrammingEn = [
    "Python",
    "C",
    "C++",
    "VHDL",
    "Linux",
    "Git",
    "ROS2"
];

const labelsElectronicsFr = [
    "Électronique analogique",
    "Oscilloscope",
    "GBF",
    "Breadboard",
    "Microcontrôleurs",
    "Soudure",
    "Impression 3D"
];

const labelsElectronicsEn = [
    "Analog electronics",
    "Oscilloscope",
    "Function generator",
    "Breadboard",
    "Microcontrollers",
    "Soldering",
    "3D printing"
];

const labelsAIFr = [
    "IA",
    "Traitement d'image",
    "Traitement du son",
    "TensorFlow",
    "NumPy",
    "Scikit-learn",
    "SLAM"
];

const labelsAIEn = [
    "AI",
    "Image processing",
    "Audio processing",
    "TensorFlow",
    "NumPy",
    "Scikit-learn",
    "SLAM"
];

function Expertise({ language }: any) {
    const isFr = language !== 'en';

    return (
    <div className="container" id="expertise">
        <div className="skills-container">
            <h1>{isFr ? "Compétences" : "Skills"}</h1>
            <div className="skills-grid">

                <div className="skill">
                    <FontAwesomeIcon icon={faRobot} size="3x"/>
                    <h3>{isFr ? "IA, image & robotique" : "AI, image & robotics"}</h3>
                    <p>
                        {isFr
                            ? "Je m’intéresse aux systèmes intelligents, à l’IA appliquée au traitement image/son et à la robotique autonome, notamment à travers des projets de navigation et de perception."
                            : "I am interested in intelligent systems, AI applied to image and audio processing, and autonomous robotics, especially through navigation and perception projects."
                        }
                    </p>
                    <div className="flex-chips">
                        <span className="chip-title">{isFr ? "Domaines :" : "Fields:"}</span>
                        {(isFr ? labelsAIFr : labelsAIEn).map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faPython} size="3x"/>
                    <h3>{isFr ? "Programmation & systèmes" : "Programming & systems"}</h3>
                    <p>
                        {isFr
                            ? "Je développe principalement en Python, C et C++, avec une expérience sur Linux, Git et ROS2 pour des projets robotiques et embarqués."
                            : "I mainly develop in Python, C and C++, with experience using Linux, Git and ROS2 for robotics and embedded projects."
                        }
                    </p>
                    <div className="flex-chips">
                        <span className="chip-title">{isFr ? "Stack :" : "Stack:"}</span>
                        {(isFr ? labelsProgrammingFr : labelsProgrammingEn).map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faMicrochip} size="3x"/>
                    <h3>{isFr ? "Électronique & prototypage" : "Electronics & prototyping"}</h3>
                    <p>
                        {isFr
                            ? "Je possède des bases solides en électronique analogique et en prototypage, avec l’utilisation d’outils de mesure, de microcontrôleurs et de montages expérimentaux."
                            : "I have solid foundations in analog electronics and prototyping, including the use of measurement tools, microcontrollers and experimental setups."
                        }
                    </p>
                    <div className="flex-chips">
                        <span className="chip-title">{isFr ? "Compétences :" : "Skills:"}</span>
                        {(isFr ? labelsElectronicsFr : labelsElectronicsEn).map((label, index) => (
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