import React from 'react';
import Avatar from '../assets/images/William.jpg';
import translations from '../assets/languages/translations.json';
import { useLanguage } from './LanguageContext';
import '../styles/About.css';

function About() {

    const { language } = useLanguage();

    return (
        <section id='about' className="aboutContainer">
            <div className="maxContainer innerStyle">
                <h2>{translations[language].about_me}</h2>

                <div className='topContainer'>

                    <div className='leftContainer'>
                        <img src={Avatar} alt="William Wang" />
                        <h4>王帅</h4>
                        <h4>William Wang</h4>
                    </div>

                    <div>
                        <p>
                            {translations[language].about_me_content}
                        </p>
                        <hr/>
                        <p>{translations[language].updating}</p>

                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;