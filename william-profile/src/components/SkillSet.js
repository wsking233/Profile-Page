import React from 'react';
import './layout.css';
import PsychologyIcon from '@mui/icons-material/Psychology';
import CodeIcon from '@mui/icons-material/Code';
import WebIcon from '@mui/icons-material/Web';
import SkillSetData from '../assets/datas/SkillSetData.json';
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

    return (
        <section id="skillset" className='skillSetContainer'>
            <div className='maxContainer innerStyle'>
                <h3 className='scetionTitle'>My Skills</h3>
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