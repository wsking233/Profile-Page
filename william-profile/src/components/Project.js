import React from 'react';
import projects from '../assets/datas/ProjectData.json';
import translations from '../assets/languages/translations.json';
import { useLanguage } from './LanguageContext';



function ProjectCard(props) {
    return (
        <div className='projectCard'>
            <h4 className='cardsTitle'>{props.data.title}</h4>
            <p>{props.data.description}</p>
            {/* <a>Click to see detail</a> */}
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