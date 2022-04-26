import styled from 'styled-components';
import AboutMe from './page/AboutMe';
import Menu from './page/Menu';
import Project from './page/Project';
import Contact from './page/Contact';
import { motion } from 'framer-motion';
import './Styles.css';



const Background = styled(motion.div)`
  position: absolute;
  /* width: 100%; */
  background-color: #4db6ac;
  background-size: cover;
  background-repeat: repeat-y;
  /* background-attachment: fixed; */
  border: solid 1px black;
  
`;
const Title = styled.h1`
  font-size: 5em;
  text-align: center;
  margin-bottom: 1em;
  background-color: #1323;
  font-family: 'Noto Sans KR', sans-serif;
`
const Wrapper = styled.div`
  display: flex;
 
`;
const ContentsWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const MovePage = styled(motion.a)`
  text-decoration: none;
  /* transition-duration:1s; */
  
`;

function App() {
  return (
    <Background>
      <Title>강수영의 포트폴리오</Title>
     <Wrapper>
        <Menu/>
      <ContentsWrapper>
        <MovePage name="aboutMe"/><AboutMe/>
        <MovePage name="project"/><Project/>
        <MovePage name="contact"/><Contact/>
      </ContentsWrapper>
      </Wrapper>
    </Background>

  );
}

export default App;