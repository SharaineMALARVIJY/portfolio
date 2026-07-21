import React, {useState, useEffect} from "react";
import {
  Main,
  Timeline,
  Expertise,
  Project,
  Contact,
  Navigation,
  Footer,
} from "./components";
import FadeIn from './components/FadeIn';
import './index.scss';

type Language = 'fr' | 'en';

function App() {
    const [mode, setMode] = useState<string>('dark');
    const [language, setLanguage] = useState<Language>('fr');

    const handleModeChange = () => {
        setMode(mode === 'dark' ? 'light' : 'dark');
    }

    const handleLanguageChange = () => {
        setLanguage(language === 'fr' ? 'en' : 'fr');
    }

    useEffect(() => {
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
    }, []);

    return (
    <div className={`main-container ${mode === 'dark' ? 'dark-mode' : 'light-mode'}`}>
        <Navigation
            parentToChild={{mode, language}}
            modeChange={handleModeChange}
            languageChange={handleLanguageChange}
        />

        <FadeIn transitionDuration={700}>
            <Main language={language}/>
            <Expertise language={language}/>
            <Timeline language={language}/>
            <Project language={language}/>
            <Contact language={language}/>
        </FadeIn>

        <Footer />
    </div>
    );
}

export default App;