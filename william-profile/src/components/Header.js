import React from 'react';
import './layout.css';
import WW from '../assets/W.W-White.png';


function Header() {

    return (
        <header>

            <div>
            <img src={WW} alt="W.W" />
            </div>


            <div className='headerContainer'>
                <ul>
                    <a href="#home">HOME</a>
                    <a href="#skillset">SKILL SET</a>
                    <a href="#project">PROJECTS</a>
                    <a href="#about">ABOUT ME</a>
                </ul>
            </div>
        </header>
    );
}

export default Header;