import React from 'react';
import Avatar from '../assets/Avatar.jpg';
import IconButton from '@mui/material/IconButton';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';

function About() {

    // const handleClick = (url) => {
    //     window.open(url, "_blank");
    // };

    return (
        <section id='about' className="aboutContainer">
            <div className="maxContainer innerStyle">
                <h3 className='scetionTitle'>About Me</h3>

                <div className='topContainer'>

                    <div className='leftContainer'>
                        <img src={Avatar} alt="William Wang" />
                        <h4>王帅</h4>
                        <h4>William Wang</h4>

                        {/* <div>
                            <IconButton
                                onClick={() => handleClick("mailto:wsking233@gmail.com")}
                                // color="primary"
                                sx={{ color: 'white' }}

                            ><EmailIcon target="_blank" /></IconButton>

                            <IconButton
                                onClick={() => handleClick("https://www.linkedin.com/in/william-wang-shuai")}
                                // color="secondary"
                                sx={{ color: 'white' }}

                            ><LinkedInIcon target="_blank" /></IconButton>

                            <IconButton
                                onClick={() => handleClick("https://github.com/wsking233")}
                                // color="primary"
                                sx={{ color: 'white' }}

                            ><GitHubIcon target="_blank" /></IconButton>
                        </div> */}
                    </div>

                    <div className='rightContainer'>
                        <p>
                            Kia ora, my name is William.
                            I just graduated from Auckland Universty of Technology,
                            major in Software Development under Bachelor of Computer and Information Science degree.
                            I am currently looking for a software development job.
                            I am passionate about technology and I am looking forward to learning more about it.
                            I am also interested in learning about web development and software development.
                        </p>

                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;