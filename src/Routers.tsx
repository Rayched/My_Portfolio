import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import HomePage from "./route/HomePage";
import AboutPage from "./route/AboutPage";
import styled from "styled-components";
import Headers from "./components/Headers";
import ProjectPage from "./route/ProjectPage";

export default function Routers(){
    return (
        <BrowserRouter basename={process.env.PUBLIC_URL}>
            <Headers />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/project" element={<ProjectPage />} />
            </Routes>
        </BrowserRouter>
    );
}