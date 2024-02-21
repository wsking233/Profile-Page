import React from 'react';
import './layout.css';
import IconButton from '@mui/material/IconButton';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

function Header() {

    const handleClick = (url) => {
        window.open(url, "_blank");
    };

    return (
        <header>

            <div className='headerContainer'>
                <ul>
                    <a href="#home">HOME</a>
                    <a href="#skillset">SKILL SET</a>
                    <a href="#project">PROJECTS</a>
                    <a href="#about">ABOUT ME</a>
                </ul>

                <IconButton
                    onClick={() => handleClick("https://www.linkedin.com/in/william-wang-shuai")}
                    color="primary"
                ><LinkedInIcon target="_blank" /></IconButton>

                <IconButton
                    onClick={() => handleClick("https://github.com/wsking233")}
                    color="primary"
                ><GitHubIcon target="_blank" /></IconButton>

            </div>
        </header>
    );
}

export default Header;