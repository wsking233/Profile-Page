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
                    <NavLink to="/">HOME</NavLink>
                    <NavLink to="/about">ABOUT</NavLink>
                    <NavLink to="/project">PROJECT</NavLink>
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