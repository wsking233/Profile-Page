import React from "react";
import IconButton from '@mui/material/IconButton';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import LOGO from '../assets/W.W-White.png';


function Footer() {

    const handleClick = (url) => {
        window.open(url, "_blank");
    };

    return (
        <div className="footerContainer">
            <div className="maxContainer">
                <div className="footerContainer">

                    <div className="footerLeft">
                        <img src={LOGO} alt="W.W" />

                        {/* <h1>W.W</h1>
                        <p>William Wang</p> */}
                    </div>

                    <div className="footerRight">

                        <h3>Contact</h3>
                        <p>Email: wsking233@gmail.com</p>
                        <p>Auckland, New Zealand</p>

                        <p>
                            Design idea from 
                            <a href="https://www.behance.net/gallery/128820167/Python-Developer-Website-Design" target="_blank" rel="noreferrer">   
                            Muhammad Munaf</a>
                        </p>
                    </div>

                    <div>
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
    );
}

export default Footer;