import React from "react";

import { Typography, Tab, IconButton } from "@mui/material";
import LinkedInIcon from '@mui/icons-material/LinkedIn';

function Footer() {
  return (
    <div>
      <Typography variant="h5">Contact me</Typography>

      <IconButton
        href="https://www.linkedin.com/in/william-wang-shuai"
        color="primary"
      ><LinkedInIcon fontSize="large" /></IconButton>
      <strong>William Wang</strong>
      <Tab />
    </div>
  );
}

export default Footer;