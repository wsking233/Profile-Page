import React from 'react';
import Avatar from '../assets/images/Avatar.jpg';
import translations from '../assets/languages/translations.json';
import { useLanguage } from './LanguageContext';

function About() {

    const { language } = useLanguage();

    return (
        <section id='about' className="aboutContainer">
            <div className="maxContainer innerStyle">
                <h3 className='scetionTitle'>{translations[language].about_me}</h3>

                <div className='topContainer'>

                    <div className='leftContainer'>
                        <img src={Avatar} alt="William Wang" />
                        <h4>王帅</h4>
                        <h4>William Wang</h4>
                    </div>

                    <div className='rightContainer'>
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