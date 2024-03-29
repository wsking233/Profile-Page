import React from "react";
import IconButton from '@mui/material/IconButton';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import LOGO from '../assets/images/W.W-White.png';
import translations from '../assets/languages/translations.json';
import { useLanguage } from './LanguageContext';



function Footer() {
    
    const { language } = useLanguage();

    const handleClick = (url) => {
        window.open(url, "_blank");
    };

    return (
        <footer>
            <div className="footerContainer">
                <div className="maxContainer">
                    <div className="footerContainer">

                        <div className="footerLeft">
                            <img src={LOGO} alt="W.W" />

                            {/* <h1>W.W</h1>
                        <p>William Wang</p> */}
                        </div>

                        <div className="footerRight">

                            <div className="contactInfo">

                                <h3>{translations[language].contact_me}</h3>
                                <p>{translations[language].email}: wsking233@gmail.com</p>
                                <p>{translations[language].location}</p>
                                <hr />
                                <p>
                                UI Design inspiration comes from {' '}
                                <a href="https://www.behance.net/gallery/128820167/Python-Developer-Website-Design" target="_blank" rel="noreferrer">
                                Muhammad Munaf</a>
                                </p>
                                <p>{translations[language].use_permission}</p>
                            </div>

                            <div className="contactIcon">
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
                            </div>
                        </div>

                    </div>


                </div>
            </div>
            
            <div className="copyright">
                <div className="maxContainer">
                    <p>© 2024 William Wang. All rights reserved.</p>
                </div>
            </div>

            <div className="bottom">
                {}
            </div>

        </footer>
    );
}

export default Footer;