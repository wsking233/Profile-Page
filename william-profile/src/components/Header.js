import React from 'react';
import './layout.css';
import WW from '../assets/images/W.W-White.png';
import { Link } from 'react-scroll';
import translations from '../assets/languages/translations.json';


function Header() {

    return (
        <header>

            <div className="headerLogo">
                <img src={WW} alt="W.W"/>
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
                    >{translations["en"].home}</Link>

                    <Link
                        activeClass='active'
                        to='skillset'
                        spy={true}
                        smooth={true}
                        offset={-100}
                        duration={500}
                    >{translations["en"].skills}</Link>

                    <Link
                        activeClass='active'
                        to='project'
                        spy={true}
                        smooth={true}
                        offset={-100}
                        duration={500}
                    >{translations["en"].projects}</Link>

                    <Link
                        activeClass='active'
                        to='about'
                        spy={true}
                        smooth={true}
                        offset={-100}
                        duration={500}
                    >{translations["en"].about}</Link>


                    {/* <a href="#home">HOME</a> */}
                    {/* <a href="#skillset">SKILL SET</a> */}
                    {/* <a href="#project">PROJECTS</a> */}
                    {/* <a href="#about">ABOUT ME</a> */}
                </ul>
            </div>
            <div className="placeHolder">
                <img src={WW} alt="W.W LOGO"/>
            </div>
        </header>
    );
}

export default Header;