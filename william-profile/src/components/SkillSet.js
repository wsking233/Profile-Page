import React from 'react';
import './layout.css';
import SkillSetData from '../assets/datas/SkillSetData.json';
import translations from '../assets/languages/translations.json';
import { useLanguage } from './LanguageContext';
import PsychologyIcon from '@mui/icons-material/Psychology';
import CodeIcon from '@mui/icons-material/Code';
import WebIcon from '@mui/icons-material/Web';
import CallMergeIcon from '@mui/icons-material/CallMerge';


function SkillCard(props) {
    let icon;

    switch (props.data.id) {
        case 1: // Programming Languages
            icon = <CodeIcon fontSize="large" />;
            break;
        case 2: // Web Development
            icon = <WebIcon fontSize="large" />;
            break;
        case 3: //Version Control
            icon = <CallMergeIcon fontSize="large" />;
            break;
        case 4: //Problem Solving
            icon = <PsychologyIcon fontSize="large" />;
            break;
        default:
            icon = <PsychologyIcon fontSize="large" />;
            break;
    }


    return (
        <div className='skillCard'>
        {icon}
        <h4 className='cardsTitle'>{props.data.title}</h4>
        <ul>
            {props.data.skill.map((subSkill) => {
                return (
                    <li key={subSkill.id}>{subSkill.skill}</li>
                );
            })}
        </ul>
    </div>
    );
}

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