import React from 'react';
import './layout.css';
import SkillSetData from "./SkillSetData.json";

function SkillCard(props) {
    return (
        <div className='skillCardContainer'>
            <h3>{props.data.skill}</h3>
            {/* <h3>{props.data.level}</h3> */}
        </div>
    );
}

function SkillSet() {

    return (
        <section className='skillSetContainer'>
            <div className='maxContainer'>
                {/* <p>
                    I am a software developer. I am passionate about technology and I am looking forward to learning more about it.
                    I am also interested in learning about web development and software development.
                    I am looking forward to learning more about these areas of study.
                </p> */}
                <h2>What I Can Do</h2>
                <div className='skillCards'>

                    {SkillSetData.map((skill) => {
                        return (
                         <SkillCard key={skill.id} data={skill} />
                        );
                    })}

                    {/* {SkillCard({ title: 'Java'})}
                    {SkillCard({ title: 'C#'})}
                    {SkillCard({ title: 'C/C++'})}
                    {SkillCard({ title: 'JavaScript'})}
                    {SkillCard({ title: 'HTML'})}
                    {SkillCard({ title: 'CSS'})}
                    {SkillCard({ title: 'React'})}
                    {SkillCard({ title: 'Node.js'})}
                    {SkillCard({ title: 'Express.js'})}
                    {SkillCard({ title: 'MongoDB'})}
                    {SkillCard({ title: 'PHP'})}
                    {SkillCard({ title: 'SQL'})}
                    {SkillCard({ title: 'Git'})}
                    {SkillCard({ title: 'Arduino'})}
                    {SkillCard({ title: 'Unity 2D'})} */}
                    {/* {SkillCard({ title: 'GitHub'})} */}
                    {/* {SkillCard({ title: 'Object OriantiedP'})}
                    {SkillCard({ title: 'Web Development' })}
                    {SkillCard({ title: 'Software Development' })}
                    {SkillCard({ title: 'Problem sovling' })} */}
                </div>
            </div>
        </section>
    );
}

export default SkillSet;