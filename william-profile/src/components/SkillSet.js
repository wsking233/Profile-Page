import React from 'react';
import SkillSetData from '../assets/datas/SkillSetData.json';
import translations from '../assets/languages/translations.json';
import { useLanguage } from './LanguageContext';
import SkillCard from './SkillCard';
import '../styles/SkillSet.css';

function SkillSet() {

    const { language } = useLanguage();


    return (
        <section id="skillset" className='skillSetContainer'>
            <div className='maxContainer innerStyle'>
                <h2>{translations[language].my_skills}</h2>
                <div className='cardsHolder'>
                    {SkillSetData.map((skill) => {
                        return (
                         <SkillCard key={skill.id} data={skill} />
                        );
                    })}
                </div>
            </div>
        </section>
    );
}

export default SkillSet;