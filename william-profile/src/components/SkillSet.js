import React from 'react';
import './layout.css';
import SkillSetData from '../assets/datas/SkillSetData.json';
import translations from '../assets/languages/translations.json';
import { useLanguage } from './LanguageContext';
import SkillCard from './SkillCard';

function SkillSet() {

    const { language } = useLanguage();


    return (
        <section id="skillset" className='skillSetContainer'>
            <div className='maxContainer innerStyle'>
                <h3 className='scetionTitle'>{translations[language].my_skills}</h3>
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