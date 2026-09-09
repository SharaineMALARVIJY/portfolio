import React, {useState, useEffect} from "react";
import {Routes, Route, useLocation} from "react-router-dom";
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
import Adp from './pages/Adp';
import './index.scss';

type Language = 'fr' | 'en';

function App() {
    const location = useLocation();

    const [mode, setMode] = useState<string>('dark');
    const [language, setLanguage] = useState<Language>('fr');

    const handleModeChange = () => {
        setMode(mode === 'dark' ? 'light' : 'dark');
    }

    const handleLanguageChange = () => {
        setLanguage(language === 'fr' ? 'en' : 'fr');
    }

    useEffect(() => {
        const state = location.state as { scrollTo?: string } | null;

        if (location.pathname === '/' && state?.scrollTo) {
            requestAnimationFrame(() => {
                const element = document.getElementById(state.scrollTo!);

                if (element) {
                    element.scrollIntoView({
                        behavior: 'auto',
                        block: 'start'
                    });
                }
            });
        } else {
            window.scrollTo({
                top: 0,
                left: 0,
                behavior: 'auto'
            });
        }
    }, [location.pathname, location.state]);

    return (
    <div className={`main-container ${mode === 'dark' ? 'dark-mode' : 'light-mode'}`}>
        <Routes>
            <Route
                path="/"
                element={
                    <>
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
                    </>
                }
            />

            <Route
                path="/projects/adp"
                element={
                    <>
                        <Adp
                            language={language}
                            mode={mode}
                            modeChange={handleModeChange}
                            languageChange={handleLanguageChange}
                        />
                        <Footer />
                    </>
                }
            />
        </Routes>
    </div>
    );
}

export default App;