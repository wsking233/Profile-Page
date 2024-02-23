import React from 'react';
import projects from '../assets/datas/ProjectData.json';
import translations from '../assets/languages/translations.json';
import { useLanguage } from './LanguageContext';

function ProjectCard(props) {

    return (
        <div className='projectCard'>
            <div className='projectTitleTop'>
                            <div>
                                <h4 className='projectTitle' >{props.data.title}</h4>
                            </div>
                            <div>
                                <p>{props.data.status}</p>
                            </div>
                        </div>
            <p>{props.data.brief}</p>
            <h5>Project Details</h5>
            <ul>
                {props.data.tasks.map((task) => {
                    return (
                        <li key={task.id}>{task.task}</li>
                    );
                })}
            </ul>
            <p>More Details would be provided with the updating of this site</p>
        </div>

    );
}

function Project() {
    const { language } = useLanguage();

    return (
        <section id='project' className='projectContainer'>
            <div className='maxContainer innerStyle'>
                <h3 className='scetionTitle'>{translations[language].my_projects}</h3>

                <div className='projectCardsHolder'>

                    {projects[language].map((project, index) => {
                        return (
                            <ProjectCard data={project} key={index} />
                        );
                    }
                    )}
                </div>

            </div>
        </section>
    );
}

export default Project;