import styled from 'styled-components';

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100vw;
    height: 80vh;
`;
const Box = styled.div`
    font-size: 1em;
    width: 60vw;
    height: 60vh;
    border-radius: 10px;
    text-align: center;
    background-color: #f3edc9fd;
    box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
    display: flex;
    justify-content:space-around;
    align-items: center;
`;
const ContentTitle = styled.h2`
font-size: 5em;
text-align: center;
margin-bottom: 1em;
height: 3vh;
`;
const ContWrapper = styled.div`
    line-height: 250%;
`;
const ContImg = styled.img`
    width: 25em;
`;
const Linkname = styled.h2`
    font-size: 2em;
`;
export default function Contact(){
    return(
    <Wrapper>
        <ContentTitle>Contact</ContentTitle>
        <Box>
            <ContWrapper>
               <a href='https://github.com/SwimmingRiver' target={"_blank"}>
            <ContImg src={require('../Img/github.png')} alt='github'/>
            </a> 
            <Linkname>GitHub</Linkname>
            </ContWrapper>
            
            <ContWrapper>
            <a href="https://mail.google.com/mail/?view=cm&amp;fs=1&amp;to=swimmingr@gmail.com" target={"_blank"}>
            <ContImg src={require('../Img/mail.png')} alt='email'/>
            </a>
            <Linkname>Mail</Linkname>
            </ContWrapper>
        </Box>
    </Wrapper>
)
}