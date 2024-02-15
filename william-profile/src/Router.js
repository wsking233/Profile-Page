import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Homepage";
import About from "./components/About";
import Project from "./components/Project";

function Router(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/project" element={<Project />} />
                <Route path="/about" element={<About />} />
                <Route path="*" element={<h1>Page Not Found</h1>} />
            </Routes>
        </BrowserRouter>
    );
}

export default Router;