import React from 'react';
import LOGO from '../assets/images/W.W Black.png';
import translations from '../assets/languages/translations.json';
import { useLanguage } from './LanguageContext';
import '../styles/Home.css';


function Home() {

    const { language } = useLanguage();

    return (
        <section id='home' className='homeContainer'>
            <div>
                <img src={LOGO} alt="W.W LOGO" />
            </div>
            <div>
                <h2>{translations[language].software_developer}</h2>
            </div>
        </section>
    );
}

export default Home;