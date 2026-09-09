import React from "react";
import '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPython } from '@fortawesome/free-brands-svg-icons';
import {
    faMicrochip,
    faRobot,
    faWaveSquare
} from '@fortawesome/free-solid-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';


const labelsAIFr = [
    "IA",
    "Machine Learning",
    "Deep Learning",
    "TensorFlow",
    "Scikit-learn",
    "SLAM"
];

const labelsAIEn = [
    "AI",
    "Machine Learning",
    "Deep Learning",
    "TensorFlow",
    "Scikit-learn",
    "SLAM"
];


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


const labelsSignalFr = [
    "Traitement du signal",
    "Signaux aléatoires",
    "Théorie de l'information",
    "Traitement d'image",
    "Traitement du son"
];

const labelsSignalEn = [
    "Signal processing",
    "Random signals",
    "Information theory",
    "Image processing",
    "Audio processing"
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


function Expertise({ language }: any) {
    const isFr = language !== 'en';

    return (
        <div className="container" id="expertise">
            <div className="skills-container">

                <h1>{isFr ? "Compétences" : "Skills"}</h1>

                <div className="skills-grid">

                    <div className="skill">
                        <FontAwesomeIcon icon={faRobot} size="3x"/>

                        <h3>
                            {isFr ? "IA & robotique" : "AI & robotics"}
                        </h3>

                        <p>
                            {isFr
                                ? "Je développe des projets mêlant intelligence artificielle et robotique autonome, notamment pour la classification, la perception, la localisation et la navigation."
                                : "I develop projects combining artificial intelligence and autonomous robotics, particularly for classification, perception, localization and navigation."
                            }
                        </p>

                        <div className="flex-chips">
                            <span className="chip-title">
                                {isFr ? "Domaines :" : "Fields:"}
                            </span>

                            {(isFr ? labelsAIFr : labelsAIEn).map((label, index) => (
                                <Chip key={index} className="chip" label={label}/>
                            ))}
                        </div>
                    </div>


                    <div className="skill">
                        <FontAwesomeIcon icon={faPython} size="3x"/>

                        <h3>
                            {isFr
                                ? "Programmation & systèmes"
                                : "Programming & systems"}
                        </h3>

                        <p>
                            {isFr
                                ? "Je développe principalement en Python, C et C++, sous Linux, avec Git pour le versionnement et ROS2 pour la conception de systèmes robotiques et embarqués."
                                : "I mainly develop in Python, C and C++ on Linux, using Git for version control and ROS2 for robotics and embedded systems."
                            }
                        </p>

                        <div className="flex-chips">
                            <span className="chip-title">
                                {isFr ? "Outils :" : "Tools:"}
                            </span>

                            {(isFr ? labelsProgrammingFr : labelsProgrammingEn).map((label, index) => (
                                <Chip key={index} className="chip" label={label}/>
                            ))}
                        </div>
                    </div>


                    <div className="skill">
                        <FontAwesomeIcon icon={faWaveSquare} size="3x"/>

                        <h3>
                            {isFr
                                ? "Traitement du signal"
                                : "Signal processing"}
                        </h3>

                        <p>
                            {isFr
                                ? "Ma formation m’a apporté des bases mathématiques en traitement du signal, en signaux aléatoires et en théorie de l’information, avec des applications au traitement de l’image et du son."
                                : "My studies provided me with a mathematical foundation in signal processing, random signals and information theory, with applications in image and audio processing."
                            }
                        </p>

                        <div className="flex-chips">
                            <span className="chip-title">
                                {isFr ? "Notions :" : "Topics:"}
                            </span>

                            {(isFr ? labelsSignalFr : labelsSignalEn).map((label, index) => (
                                <Chip key={index} className="chip" label={label}/>
                            ))}
                        </div>
                    </div>


                    <div className="skill">
                        <FontAwesomeIcon icon={faMicrochip} size="3x"/>

                        <h3>
                            {isFr
                                ? "Électronique & prototypage"
                                : "Electronics & prototyping"}
                        </h3>

                        <p>
                            {isFr
                                ? "Je réalise et teste des montages électroniques, de l’instrumentation sur breadboard à la programmation de microcontrôleurs, avec une pratique de la soudure et du prototypage par impression 3D."
                                : "I build and test electronic circuits, from breadboard instrumentation to microcontroller programming, with hands-on experience in soldering and 3D-printed prototyping."
                            }
                        </p>

                        <div className="flex-chips">
                            <span className="chip-title">
                                {isFr ? "Outils :" : "Tools:"}
                            </span>

                            {(isFr ? labelsElectronicsFr : labelsElectronicsEn).map((label, index) => (
                                <Chip key={index} className="chip" label={label}/>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Expertise;