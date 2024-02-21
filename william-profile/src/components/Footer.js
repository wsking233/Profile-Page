import React, { useEffect } from "react";
import axios from "axios";
import { Typography, Tab, IconButton } from "@mui/material";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

function Footer() {

    return (
        <div className="footerContainer">
            <div className="maxContainer">
                <div className="footer-left">

                    <strong>Wiliam Wang </strong><br />
                    <strong>Email: wsking233@gmail.com</strong>
                </div>

                <div className="footer-right">
                    <p>
                        Design diea from <a href="https://www.behance.net/gallery/128820167/Python-Developer-Website-Design" target="_blank">                        Muhammad Munaf</a>
                    </p>
                </div>

            </div>


        </div>
    );
}

export default Footer;