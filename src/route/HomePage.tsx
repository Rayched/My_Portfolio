import styled from "styled-components"

const Wrapper = styled.div`
    width: 100vw;
    height: 90%;
    display: flex;
    justify-content: space-between;
`;

const HomeDataBox = styled.div`
    margin-top: 10px;
`;

const ProfileImgs = styled.img`
    display: block;
    width: 20em;
    height: 30em;
    margin-top: 10px;
    margin-left: 5px;
`;

export default function HomePage(){
    return (
        <Wrapper>
            <ProfileImgs src="refImgs/ProfileImg.jpg" />
            <HomeDataBox>
                <div>신입 프론트엔드 개발자 유한별 입니다.</div>
            </HomeDataBox>
        </Wrapper>
    )
};

