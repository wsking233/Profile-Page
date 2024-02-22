import React from 'react';
import projects from '../assets/datas/ProjectData.json';


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
    return (
        <section id='project' className='projectContainer'>
            <div className='maxContainer innerStyle'>
                <h3 className='scetionTitle'>Projects</h3>

                <div className='projectCardsHolder'>

                    {projects["en"].map((project, index) => {
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