import React from 'react';
import './layout.css';
import WW from '../assets/W.W-White.png';
import { Link } from 'react-scroll';


function Header() {

    return (
        <header>

            <div>
                <img src={WW} alt="W.W" />
            </div>
            <div className='headerContainer'>
                <ul>
                    <Link
                        activeClass='active'
                        to='home'
                        spy={true}
                        smooth={true}
                        offset={-100}
                        duration={500}
                    >HOME</Link>

                    <Link
                        activeClass='active'
                        to='skillset'
                        spy={true}
                        smooth={true}
                        offset={-100}
                        duration={500}
                    >SKILLS</Link>

                    <Link
                        activeClass='active'
                        to='project'
                        spy={true}
                        smooth={true}
                        offset={-100}
                        duration={500}
                    >PROJECTS</Link>

                    <Link
                        activeClass='active'
                        to='about'
                        spy={true}
                        smooth={true}
                        offset={-100}
                        duration={500}
                    >ABOUT</Link>


                    {/* <a href="#home">HOME</a> */}
                    {/* <a href="#skillset">SKILL SET</a> */}
                    {/* <a href="#project">PROJECTS</a> */}
                    {/* <a href="#about">ABOUT ME</a> */}
                </ul>
            </div>
        </header>
    );
}

export default Header;