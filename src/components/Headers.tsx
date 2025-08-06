//포트폴리오, Header 컴포넌트

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Link, useMatch } from "react-router-dom";
import styled from "styled-components";
import ThemeBtn from "./ThemeBtn";
import ThemeBtnVerM from "./ThemeBtnVerM";

const Container = styled.header`
    width: 100%;
    height: 10%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    background-color:rgb(247, 241, 227);

    a {
        text-decoration: none;
        color: black;
    };
`;

const Titles = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 5px;
    margin-left: 5px;
    font-size: 23px;
    font-weight: bold;
`;

const NavBar = styled.nav`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    position: relative;
`;

const URLItem = styled.div`
    font-weight: bold;
    font-size: 17px;
    padding: 3px 5px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
    margin: 0px 3px;

    a {
        display: block;
    }
`;

const URLMatchBar = styled(motion.div)`
    width: 50px;
    height: 5px;
    border: 1px solid black;
    border-radius: 10px;
    background-color: black;
    position: absolute;
    bottom: -8px;
`;

const UtilsBar = styled.div`
    margin-right: 3px;
    padding: 0px 3px;
`;

function Headers(){
    const isHomes = useMatch("/");
    const isAbouts = useMatch("/about");
    const isProjects = useMatch("/project");

    const [InnerWidth, setInnerWidth] = useState(window.innerWidth);

    useEffect(() => {
        const resizeListener = () => setInnerWidth(window.innerWidth);

        window.addEventListener("resize", resizeListener);
    })

    return (
        <Container>
            <Titles>
                <Link to={"/"}>Hanbyeol_Yu</Link>
            </Titles>
            <NavBar>
                <URLItem key="HomeURL">
                    <Link to={"/"}>Home</Link>
                    {isHomes ? <URLMatchBar layoutId="MatchBar"/> : null}
                </URLItem>
                <URLItem key="AboutURL">
                    <Link to={"/about"}>About</Link>
                    {isAbouts ? <URLMatchBar layoutId="MatchBar"/> : null}
                </URLItem>
                <URLItem key="ProjectURL">
                    <Link to={"/project"}>Project</Link>
                    {isProjects ? <URLMatchBar layoutId="MatchBar"/> : null}
                </URLItem>
            </NavBar>
            <UtilsBar>
                {InnerWidth <= 610 ? <ThemeBtnVerM /> : null}
                {InnerWidth >= 609 ? <ThemeBtn /> : null}
            </UtilsBar>
        </Container>
    );
};

export default Headers;