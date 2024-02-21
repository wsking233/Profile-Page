import { Tab } from '@mui/material';
import React from 'react';
import { BrowserRouter, NavLink } from "react-router-dom";
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
                <BrowserRouter>
                    <a href="#">HOME</a>
                    <a href="#skillset">SKILL SET</a>
                    <a to="#project">PROJECTS</a>
                    <a to="#about">ABOUT ME</a>
                </BrowserRouter>

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