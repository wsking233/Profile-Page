import React from 'react';
import {Route, Routes } from 'react-router-dom';
import Main from './Main';
import FreejoasPage from './Projects/Freejoas/FreejoasPage';
import BoysNightPage from './Projects/BoysNight/BoysNightPage';

function Router() {
    return (
        <Routes>
            <Route path='/' element={<Main />} />
            <Route path='/home' element={<Main />} />
            <Route path='/freejoas' element={<FreejoasPage />} />
            <Route path='/boysnight' element={<BoysNightPage />} />
        </Routes>
    );
}

export default Router;