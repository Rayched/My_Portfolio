import styled from "styled-components";

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export default function AboutPage(){
    return (
        <Wrapper>
            <div>
                <div>Education</div>
                <ul>
                    <li>2022.04 ~ 2023.07 SBS 컴퓨터 아카데미 안산점 백엔드 과정</li>
                    <li>2017.03 ~ 2022.02 유한대학교 전자공학과</li>
                </ul>
            </div>
            <div>
                <div>Skill's</div>
                <ul>
                    <label>Frontend</label>
                    <li>HTML/CSS</li>
                    <li>JavaScript / TypeScript</li>
                    <li>React</li>
                    <li>Styled-components</li>
                    <li>Zustand</li>
                </ul>
            </div>
            <div>
                <div>자격증</div>
                <ul>
                    <li>정보처리 산업기사 (2025.06 취득)</li>
                </ul>
            </div>
        </Wrapper>
    );
};