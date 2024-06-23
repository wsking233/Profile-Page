import React from 'react';
import projects from '../assets/datas/ProjectData.json';
import translations from '../assets/languages/translations.json';
import { useLanguage } from './LanguageContext';
import ProjectCard from './ProjectCard';
import FreejoasCover from '../assets/images/freejoas_cover.png';
import BoysNightCover from '../assets/images/boysnight_cover.png';


function Project() {
    const { language } = useLanguage();

    return (
        <section id='project' className='projectContainer'>
              <div className='maxContainer innerStyle'>
                 <h3 className='scetionTitle'>{translations[language].my_projects}</h3>

                    <img src={FreejoasCover} ></img>
                    <img src={BoysNightCover} ></img>

                 <div className='projectCardsHolder'>
                  
                </div>
            </div>

        </section>

        // <section id='project' className='projectContainer'>
        //     <div className='maxContainer innerStyle'>
        //         <h3 className='scetionTitle'>{translations[language].my_projects}</h3>

        //         <div className='projectCardsHolder'>

        //             {projects[language].map((project) => {
        //                 return (
        //                     <ProjectCard key={project.id} data={project} />
        //                     );
        //                 }
        //                 )}
        //         </div>
        //     </div>
        // </section>
    );
}

export default Project;