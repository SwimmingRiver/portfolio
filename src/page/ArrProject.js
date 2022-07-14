import styled from 'styled-components';

const Box = styled.div`
    font-size: 1em;
    width: 60vw;
    height: 60vh;
    border-radius: 10px;
    text-align: center;
    background-color: #f3edc9fd;
    box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
    position: absolute;
    line-height: 250%;
`;
const Proj2Wrap = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`;
const CommingSoon = styled.h1`
    font-size: 100px;
    margin-top: 150px;

`; 
const ProjTitle = styled.h2`
    font-size: 2em;
`;
const ProjImg = styled.img`
    width: 30em;
`;
const ProjImg2 = styled.img`
    width: 20em;
`;
const ProText =styled.p`
    font-size: 1.5em;
    font-family: 'Noto Sans KR', sans-serif;
`;
export default [
    <Box><ProjTitle>
        PixelArtLogueLikeGame</ProjTitle>
        <ProjImg src={require('../Img/pixerartloguelikegame.JPG')} alt='Proj1'/>
        <ProText>졸업 작품을 목표로하여 유니티 엔진과 C#을 이용하여 제작한 레트로 게임입니다. <br/></ProText>
        <ProText>저는 초기 게임 컨셉 기획과 동작에 관련된 코딩을 담당하였습니다.</ProText>
        <ProText>최소 목표인 졸업 기준에 통과는 하였지만, </ProText>
        <ProText>일정과 예산의 제한을 초기에 잘못 책정하여, 팀원들 모두가 아쉬움이 남는 프로젝트였습니다.</ProText>
        <ProText>해당 프로젝트 경험이 초기기획과 개발일정의 중요성을 직접 경험하여 느끼게 됐습니다.</ProText>
        </Box>,
        // box1
    <Box>
        <ProjTitle>To Do List</ProjTitle>
        <Proj2Wrap>
        <ProjImg2 src={require('../Img/todolistcapture.JPG')} alt='Proj2'/>
        <ProText>할 일 목록을 웹 앱으로 react.js와 html,css,js를 활용하여 제작하였습니다.
            <br/>
            입력한 할 일의 수행여부를 확인하는 버튼,수정 버튼,삭제 버튼으로 작동하게 만들었습니다.
             깃허브 페이지를 이용하여 퍼블리싱하였습니다.<br/>
            강의나 책의 도움없이 혼자 만들어본 첫 리액트 프로젝트였습니다. <br/>
            제가 할 수 있는 것과 더 배워야할 것에 대해 다시 생각할 수 있었습니다.<br/>
            <a href='https://swimmingriver.github.io/todoList/' target={"_blank"}>TO DO LIST 페이지 보기</a>
        </ProText>
        </Proj2Wrap>
    </Box>,
    // box2
    <Box>
        <ProjTitle>LoginForm</ProjTitle>
        <Proj2Wrap>
            <ProjImg2 src={require('../Img/LoginForm/Login.JPG')} alt='Proj3'/>
            <ProText>회원가입을 하여 회원 정보를 입력받고, 받은 정보를 회원정보를 열람할 수 있게 만들었습니다.
                <br/>
                회원가입으로 받은 정보는 로컬 스토리지에 저장하는 방식을 사용했습니다.
                <br/>
                <a href='https://swimmingriver.github.io/loginForm/' target={"_blank"}>Login Form 페이지 보기</a>
                </ProText>
        </Proj2Wrap>
    </Box>,
    <Box><CommingSoon>Comming Soon...</CommingSoon></Box>
]