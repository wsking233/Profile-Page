import React from 'react';
import translations from '../assets/languages/translations.json';
import { useLanguage } from './LanguageContext';
import FreejoasCover from '../assets/images/freejoas_cover.png';
import BoysNightCover from '../assets/images/boysnight_cover.png';
import '../styles/Project.css';

function Project() {
    const { language } = useLanguage();

    return (
        <section id='project' className='projectContainer'>
            <div className='maxContainer innerStyle'>
                <h2>{translations[language].my_projects}</h2>
                <div className='projectHolder'>
                    <div className='projectImageHolder'>
                        <a href='/freejoas'>
                            <div className='projectContent'>
                                <img src={FreejoasCover} alt='Freejoas Cover'></img>
                                <h3>Freejoas</h3>
                            </div>
                        </a>
                    </div>
                    <div className='projectImageHolder'>
                        <a href='/boysnight'>
                            <div className='projectContent'>
                                <img src={BoysNightCover} alt='Boys Night Cover'></img>
                                <h3>Boys Night</h3>
                            </div>
                        </a>
                    </div>
                </div>
            </div>

        </section>
    );
}

export default Project;