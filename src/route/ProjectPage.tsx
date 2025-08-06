import styled from "styled-components";

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 90%;
`;

export default function ProjectPage(){
    return (
        <Wrapper>
            <div>
                <h4>사이드 프로젝트</h4>
                <ul>
                    <li>메이플 To Do</li>
                    <li>디데이 카운터</li>
                    <li>Crypto Tracker</li>
                    <li>Now Movie</li>
                    <li>My Portfolio</li>
                </ul>
            </div>
        </Wrapper>
    );
}