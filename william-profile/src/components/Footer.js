import React,{useEffect} from "react";
import axios from "axios";
import { Typography, Tab, IconButton } from "@mui/material";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

function Footer() {

    const [image, setImage] = React.useState("");
    useEffect(() => {
        console.log("useEffect called");
        const fetchData = async () => {
          try {
            const response = await axios.get('https://bing.biturl.top/?resolution=1920&format=json&index=0&mkt=en-NZ');
            setImage(response.data);
          } catch (error) {
            console.error('Error fetching data:', error);
          }
        };
    
        fetchData();
      }, []);

    const handleClick = (url) => {
        window.open(url, "_blank");
    };


    return (
        <div className="footerContainer">
            <div className="footer-left">
                <Typography variant="h5">Contact me</Typography>

                {/* <strong>William Wang</strong> */}
                <strong>Wiliam Wang </strong><br />
                <strong>Email: wsking233@gmail.com</strong>
                <Tab />
                <IconButton
                    onClick={() => handleClick("https://www.linkedin.com/in/william-wang-shuai")}
                    color="primary"
                ><LinkedInIcon fontSize="large" target="_blank" />LinkedIn</IconButton>
                {/* <Tab /> */}
                <IconButton
                    onClick={() => handleClick("https://github.com/wsking233")}
                    color="primary"
                ><GitHubIcon fontSize="large" target="_blank" />Github</IconButton>
                <Tab />
            </div>

            <div className="footer-right">
                <p>
                    Image from Bing Photo of the day:<br />
                     {image.copyright}
                {/* {image.copyright} */}
                </p>
                <p>
                    Image API from <a href="https://github.com/TimothyYe/bing-wallpaper" target="_blank">TimothyYe</a>
                </p>
            </div>


        </div>
    );
}

export default Footer;