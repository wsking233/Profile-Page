import React from 'react';
import WW from '../assets/images/W.W Black.png';
import { Link } from 'react-scroll';
import translations from '../assets/languages/translations.json';
import { FormControl, MenuItem, Select } from '@mui/material';
import { useLanguage } from './LanguageContext';
import '../styles/Header.css';


function Header() {

    const { language, setLanguage } = useLanguage();

    const handleChangeLanguage = (e) => {
        setLanguage(e.target.value);
    };


    return (
        <header>

            <div className="headerLogo">
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
                    >{translations[language].home}</Link>

                    <Link
                        activeClass='active'
                        to='skillset'
                        spy={true}
                        smooth={true}
                        offset={-100}
                        duration={500}
                    >{translations[language].skills}</Link>

                    <Link
                        activeClass='active'
                        to='project'
                        spy={true}
                        smooth={true}
                        offset={-100}
                        duration={500}
                    >{translations[language].projects}</Link>

                    <Link
                        activeClass='active'
                        to='about'
                        spy={true}
                        smooth={true}
                        offset={-100}
                        duration={500}
                    >{translations[language].about}</Link>

                </ul>
            </div>
            <div className="headerLanguage">
                <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
                    <Select
                        value={language}
                        color='primary'
                        sx={{ bgcolor: 'white' }}
                        onChange={handleChangeLanguage}
                    >
                        <MenuItem value="en" >English</MenuItem>
                        <MenuItem value="zh" >中文</MenuItem>
                    </Select>
                </FormControl>
            </div>
            <div className="placeHolder">
                <img src={WW} alt="W.W LOGO" />
            </div>
        </header>
    );
}

export default Header;