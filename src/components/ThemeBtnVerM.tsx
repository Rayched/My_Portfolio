import styled from "styled-components";
import { useStore } from "zustand";
import { ThemeStore } from "../stores";

const BtnContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    border: 2px solid black;
    border-radius: 10px;
    width: 4em;
    height: 0.8em;
    font-weight: bold;
    padding: 3px;
`;

export default function ThemeBtnVerM(){
    const {isDark, setDark} = useStore(ThemeStore);

    return (
        <BtnContainer onClick={setDark}>
            <div>{isDark ? "Dark" : "Light"}</div>
        </BtnContainer>
    );
}