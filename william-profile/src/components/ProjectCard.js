import React from 'react';
import PropTypes from 'prop-types';
import ProjectDetail from './ProjectDetail';

ProjectCard.propTypes = {
    data: PropTypes.object.isRequired,
};

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
                <h5>What I do</h5>
                <ul>
                    {props.data.tasks.map((task) => {
                        return (
                            <li key={task.id}>{task.task}</li>
                        );
                    })}
                </ul>
                {/* <p>More Details would be provided with the updating of this site</p> */}
                {/* click the project card to open project detail */}
                <ProjectDetail data={props.data} />
            </div>

    );
}
export default ProjectCard;
