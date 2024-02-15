import React from 'react';
import {  BrowserRouter, NavLink } from "react-router-dom";

function Header() {

    return (
        <div>
            <h1>William's Profile</h1>
            <BrowserRouter>
                <NavLink to="/">HOME</NavLink>
            </BrowserRouter>


        </div>
    );
}

export default Header;