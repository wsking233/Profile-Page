import React from 'react';
import {Route, Routes } from 'react-router-dom';
import Main from './Pages/Main';
import FreejoasPage from './Pages/FreejoasPage';
import BoysNightPage from './Pages/BoysNightPage';

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