import { Tab } from '@mui/material';
import React from 'react';
import {  BrowserRouter, NavLink } from "react-router-dom";

function Header() {

    return (
        <div>
            <h1>William's Profile</h1>
            <BrowserRouter>
                <NavLink to="/">HOME</NavLink>
                <Tab />
                <NavLink to="/about">ABOUT</NavLink>
                <Tab />
                <NavLink to="/project">PROJECT</NavLink>
            </BrowserRouter>

        </div>
    );
}

export default Header;