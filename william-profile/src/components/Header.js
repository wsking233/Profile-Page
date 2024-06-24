import React, {useEffect} from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import WW from '../assets/images/W.W Black.png';
import { Link as ScrollLink, scroller } from 'react-scroll';
import translations from '../assets/languages/translations.json';
import { FormControl, MenuItem, Select } from '@mui/material';
import { useLanguage } from './LanguageContext';
import '../styles/Header.css';

function Header() {
    const { language, setLanguage } = useLanguage();
    const navigate = useNavigate();
    const location = useLocation();

    const handleChangeLanguage = (e) => {
        setLanguage(e.target.value);
    };

    const handleNavigation = (section) => {
        if (location.pathname !== '/') {
            navigate('/', { state: { section } });
        } else {
            scrollToSection(section);
        }
    };

    const scrollToSection = (section) => {
        scroller.scrollTo(section, {
            duration: 500,
            smooth: true,
            offset: -100,
        });
    };

    // scroll to section when user navigates to the page with a hash in the URL
    useEffect(() => {
        const { state } = location;
        if (state && state.section) {
            scrollToSection(state.section);
        }
    }, [location]);


    return (
        <header>
            <div className="headerLogo">
                <a href='/'>
                    <img src={WW} alt="W.W" />
                </a>
            </div>
            <div className='headerContainer'>
                <ul>
                    <ScrollLink
                        activeClass='active'
                        to='home'
                        spy={true}
                        smooth={true}
                        offset={-100}
                        duration={500}
                        onClick={() => handleNavigation('home')}
                    >{translations[language].home}</ScrollLink>

                    <ScrollLink
                        activeClass='active'
                        to='skillset'
                        spy={true}
                        smooth={true}
                        offset={-100}
                        duration={500}
                        onClick={() => handleNavigation('skillset')}
                    >{translations[language].skills}</ScrollLink>

                    <ScrollLink
                        activeClass='active'
                        to='project'
                        spy={true}
                        smooth={true}
                        offset={-100}
                        duration={500}
                        onClick={() => handleNavigation('project')}
                    >{translations[language].projects}</ScrollLink>

                    <ScrollLink
                        activeClass='active'
                        to='about'
                        spy={true}
                        smooth={true}
                        offset={-100}
                        duration={500}
                        onClick={() => handleNavigation('about')}
                    >{translations[language].about}</ScrollLink>
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
                        <MenuItem value="en">English</MenuItem>
                        <MenuItem value="zh">中文</MenuItem>
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
