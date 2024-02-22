import React from 'react';
import './layout.css';
import PsychologyIcon from '@mui/icons-material/Psychology';

// function SkillCard(props) {
//     return (
//         <div className='skillCardContainer'>
//             <h3>{props.data.skill}</h3>
//             {/* <h3>{props.data.level}</h3> */}
//         </div>
//     );
// }

function SkillSet() {

    return (
        <section id="skillset" className='skillSetContainer'>
            <div className='maxContainer innerStyle'>
                {/* <p>
                    I am a software developer. I am passionate about technology and I am looking forward to learning more about it.
                    I am also interested in learning about web development and software development.
                    I am looking forward to learning more about these areas of study.
                </p> */}
                <h3 className='scetionTitle'>My Skills</h3>

                <div className='cardsHolder'>

                    <div className='skillCard'>
                        <PsychologyIcon fontSize="large" />
                        <h4 className='cardsTitle'>Programming Languages</h4>
                        <ul>
                            <li>Java</li>
                            <li>C#</li>
                            <li>C/C++</li>
                        </ul>
                    </div>

                    <div className='skillCard'>
                        <PsychologyIcon fontSize="large" />
                        <h4 className='cardsTitle'>API Intergrations</h4>
                        <ul>
                            <li>Restful</li>
                            <li>C#</li>
                            <li>C/C++</li>
                        </ul>
                    </div>

                    <div className='skillCard'>
                        <PsychologyIcon fontSize="large" />
                        <h4 className='cardsTitle'>Version Control</h4>
                        <ul>
                            <li>Git</li>
                            <li>Github</li>
                            <li>Branching</li>
                        </ul>
                    </div>

                    <div className='skillCard'>
                        <PsychologyIcon fontSize="large" />
                        <h4 className=''>Problem Solving</h4>
                        <ul>
                            <li>Googling</li>
                            <li>ChatGPT</li>
                            <li>Analytical Thinking</li>
                        </ul>
                    </div>

                    {/* {SkillSetData.map((skill) => {
                        return (
                         <SkillCard key={skill.id} data={skill} />
                        );
                    })} */}


                </div>
            </div>
        </section>
    );
}

export default SkillSet;