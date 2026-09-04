import React, { useState } from "react";
import Chip from '@mui/material/Chip';

import AdpNavigation from "../components/AdpNavigation";

import "../assets/styles/Adp.scss";

type Language = 'fr' | 'en';

type AdpProps = {
  language: Language;
  mode: string;
  modeChange: () => void;
  languageChange: () => void;
};

function Adp({
  language,
  mode,
  modeChange,
  languageChange
}: AdpProps) {

  const [showDemo, setShowDemo] = useState(false);
  const isFr = language === 'fr';

  return (
    <>
      <AdpNavigation
        mode={mode}
        language={language}
        modeChange={modeChange}
        languageChange={languageChange}
      />

      <div className="adp-page">

        <section className="adp-hero" id="adp-overview">

          <p className="adp-label">
            {isFr
              ? "Stage de Master 1 — Été 2026"
              : "First-year Master's Internship — Summer 2026"}
          </p>

          <h1>Groupe ADP</h1>

          <h2>
            {isFr
              ? "Analyse et fiabilisation de données de trafic routier"
              : "Analysis and validation of road traffic data"}
          </h2>

          <p className="adp-intro">
            {isFr
              ? "Analyse de données issues de capteurs routiers et développement d’outils permettant de contrôler leur qualité et d’identifier plus rapidement les mesures anormales."
              : "Analysis of road sensor data and development of tools to assess data quality and quickly identify abnormal measurements."}
          </p>

          <div className="adp-technologies">
            <h3>Technologies</h3>

            <div className="adp-chips">
              <Chip className="adp-tech-chip" label="Python" />
              <Chip className="adp-tech-chip" label="Pandas" />
              <Chip className="adp-tech-chip" label="SQL" />
              <Chip className="adp-tech-chip" label="Marimo" />
              <Chip
                className="adp-tech-chip"
                label={isFr ? "Analyse de données" : "Data analysis"}
              />
              <Chip
                className="adp-tech-chip"
                label={isFr ? "Vision par ordinateur" : "Computer vision"}
              />
            </div>
          </div>

        </section>


        <section className="adp-content" id="adp-missions">

          <h2>
            {isFr ? "Trois missions" : "Three missions"}
          </h2>

          <div className="adp-missions">

            <div className="adp-mission">
              <span className="mission-number">01</span>

              <h3>
                {isFr
                  ? "Validation d’une boucle de comptage"
                  : "Traffic sensor validation"}
              </h3>

              <p>
                {isFr
                  ? "Comparaison des mesures d’une boucle routière avec une caméra utilisant la détection de véhicules par IA."
                  : "Comparison of traffic loop measurements with data obtained from an AI-based vehicle detection camera."}
              </p>
            </div>


            <div className="adp-mission">
              <span className="mission-number">02</span>

              <h3>
                {isFr
                  ? "Surveillance des batteries"
                  : "Battery monitoring"}
              </h3>

              <p>
                {isFr
                  ? "Développement d’un système permettant de détecter automatiquement les stations présentant un problème d’alimentation."
                  : "Development of a system to automatically detect monitoring stations experiencing power issues."}
              </p>
            </div>


            <div className="adp-mission adp-mission-featured">
              <span className="mission-number">03</span>

              <span className="mission-focus">
                {isFr ? "Focus interactif" : "Interactive focus"}
              </span>

              <h3>
                {isFr
                  ? "Cohérence des capteurs redondants"
                  : "Redundant sensor consistency"}
              </h3>

              <p>
                {isFr
                  ? "Création d’un outil interactif permettant de comparer des capteurs mesurant le même trafic et de repérer rapidement les anomalies."
                  : "Development of an interactive tool to compare sensors measuring the same traffic and quickly identify anomalies."}
              </p>
            </div>

          </div>

        </section>


        <section className="adp-demo" id="adp-demo">

            <p className="adp-label">
            {isFr ? "Focus — Mission 3" : "Focus — Mission 3"}
            </p>

            <h2>
            {isFr
                ? "Comparaison interactive de capteurs routiers"
                : "Interactive road sensor comparison"}
            </h2>

            <p>
            {isFr
                ? "L’outil développé avec Marimo permet de sélectionner les boucles et la période à comparer, puis d’afficher leurs courbes de débit, leurs écarts et différentes statistiques."
                : "The Marimo tool allows users to select the sensors and time period to compare, then display traffic flow curves, differences and several statistics."}
            </p>

            <div className="adp-demo-container">

            <iframe
                src={`${process.env.PUBLIC_URL}/marimo/adp/index.html`}
                title={
                isFr
                    ? "Comparaison interactive de capteurs routiers"
                    : "Interactive road sensor comparison"
                }
                className={`adp-marimo ${showDemo ? "visible" : "preloading"}`}
            />

            {!showDemo && (
                <div className="adp-demo-launch">
                <h3>
                    {isFr
                    ? "Comparateur interactif de capteurs"
                    : "Interactive sensor comparison"}
                </h3>

                <p>
                    {isFr
                    ? "Explorez une version publique de l’outil développé pendant mon stage à partir de données synthétiques."
                    : "Explore a public version of the tool developed during my internship using synthetic data."}
                </p>

                <button onClick={() => setShowDemo(true)}>
                    {isFr ? "Afficher la démo" : "Show demo"}
                </button>
                </div>
            )}

            </div>

        </section>

      </div>
    </>
  );
}

export default Adp;