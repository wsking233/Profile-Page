import PsychologyIcon from '@mui/icons-material/Psychology';
import CodeIcon from '@mui/icons-material/Code';
import WebIcon from '@mui/icons-material/Web';
import CallMergeIcon from '@mui/icons-material/CallMerge';
import PropTypes from 'prop-types';
import '../styles/SkillCard.css';

SkillCard.propTypes = {
    data: PropTypes.object.isRequired,
};

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

export default SkillCard;