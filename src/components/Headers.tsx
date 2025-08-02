//포트폴리오, Header 컴포넌트

import { useEffect } from "react";
import { Link, useMatch } from "react-router-dom";
import styled from "styled-components";

const Container = styled.header`
    width: 100%;
    height: 13%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    background-color: rgb(247, 243, 243);

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
`;

const URLItem = styled.div<{isMatch: boolean}>`
    font-weight: bold;
    font-size: 17px;
    padding: 3px 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 2px solid black;
    border-radius: 10px;
    margin: 0px 3px;

    background-color: ${(props) => props.isMatch ? "rgb(255, 100, 100)" : "inherit"};
`;

function Headers(){
    const Homes = useMatch("/");
    const Abouts = useMatch("/about");
    const Projects = useMatch("/project");

    useEffect(() => console.log(Homes));
    return (
        <Container>
            <Titles>
                <Link to={"/"}>Hanbyeol_Yu</Link>
            </Titles>
            <NavBar>
                <URLItem isMatch={Homes !== null}>
                    <Link to={"/"}>Home</Link>
                </URLItem>
                <URLItem isMatch={Abouts !== null}>
                    <Link to={"/about"}>About</Link>
                </URLItem>
                <URLItem isMatch={Projects !== null}>
                    <Link to={"/project"}>Project</Link>
                </URLItem>
            </NavBar>
        </Container>
    );
};

export default Headers;