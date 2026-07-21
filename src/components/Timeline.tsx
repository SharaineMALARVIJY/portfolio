import React from "react";
import '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGraduationCap, faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../assets/styles/Timeline.scss';

function Timeline({ language }: any) {
  const isFr = language !== 'en';

  return (
    <div id="history">
      <div className="items-container">

        <h1>{isFr ? "Formation" : "Education"}</h1>

        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
            contentArrowStyle={{ borderRight: '7px solid white' }}
            date="2025 - 2027"
            iconStyle={{ background: '#5000ca', color: 'white' }}
            icon={<FontAwesomeIcon icon={faGraduationCap} />}
          >
            <h3 className="vertical-timeline-element-title">
              {isFr ? "Master Systèmes intelligents" : "Master's Degree in Intelligent Systems"}
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Sorbonne Université — Paris
            </h4>
            <p>
              {isFr
                ? "Parcours IA pour l’image et le son"
                : "Specialization in AI for image and audio processing"
              }
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
            contentArrowStyle={{ borderRight: '7px solid white' }}
            date="2023 - 2025"
            iconStyle={{ background: '#5000ca', color: 'white' }}
            icon={<FontAwesomeIcon icon={faGraduationCap} />}
          >
            <h3 className="vertical-timeline-element-title">
              {isFr ? "Licence EEA" : "Bachelor's Degree in EEA"}
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Sorbonne Université — Paris
            </h4>
            <p>
              {isFr
                ? "Électronique, énergie électrique et automatique"
                : "Electronics, electrical energy and automatic control"
              }
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
            contentArrowStyle={{ borderRight: '7px solid white' }}
            date="2022"
            iconStyle={{ background: '#5000ca', color: 'white' }}
            icon={<FontAwesomeIcon icon={faGraduationCap} />}
          >
            <h3 className="vertical-timeline-element-title">
              {isFr ? "Licence 1" : "First year of Bachelor's Degree"}
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Sorbonne Université — Paris
            </h4>
            <p>
              {isFr
                ? "Parcours Science de l’ingénieur"
                : "Engineering science track"
              }
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
            contentArrowStyle={{ borderRight: '7px solid white' }}
            date="2021"
            iconStyle={{ background: '#5000ca', color: 'white' }}
            icon={<FontAwesomeIcon icon={faGraduationCap} />}
          >
            <h3 className="vertical-timeline-element-title">
              {isFr ? "Baccalauréat" : "French Baccalaureate"}
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              {isFr
                ? "Spécialités mathématiques et physique-chimie"
                : "Specialized in mathematics, physics and chemistry"
              }
            </h4>
          </VerticalTimelineElement>
        </VerticalTimeline>

        <h1 className="timeline-second-title">
          {isFr ? "Expérience" : "Experience"}
        </h1>

        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
            contentArrowStyle={{ borderRight: '7px solid white' }}
            date={isFr ? "Été 2026" : "Summer 2026"}
            iconStyle={{ background: '#5000ca', color: 'white' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">
              {isFr ? "Stage de Master 1" : "First-year Master's Internship"}
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              ADP — {isFr ? "Laboratoire flux routier" : "Road traffic flow laboratory"}
            </h4>
            <p>
              {isFr
                ? "Analyse et comparaison de données de trafic issues de boucles de comptage et de caméras."
                : "Analysis and comparison of traffic data from inductive loop counters and camera-based systems."
              }
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>

      </div>
    </div>
  );
}

export default Timeline;