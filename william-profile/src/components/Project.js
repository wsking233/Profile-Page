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
                    <h3>Freejoas:</h3>
                    <a href='/freejoas'>
                        <img src={FreejoasCover} alt='Freejoas Cover' ></img>
                    </a>
                    <h3>Boys Night:</h3>
                    <a href='/boysnight'>
                        <img src={BoysNightCover} alt='Boys Night Cover'></img>
                    </a>
            </div>

        </section>
    );
}

export default Project;