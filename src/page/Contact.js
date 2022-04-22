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
`;
const ContentTitle = styled.h2`
font-size: 5em;
text-align: center;
margin-bottom: 1em;
height: 3vh;
`;
export default function Contact(){
    return(
    <Wrapper>
        <ContentTitle>Contact</ContentTitle>
        <Box>Contact</Box>
    </Wrapper>
)
}