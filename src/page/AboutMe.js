import styled from 'styled-components';
import {useState} from 'react';
import { AnimatePresence,motion } from 'framer-motion';

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100vw;
    height: 80vh;

`;
const Overlay = styled(motion.div)`
  position: fixed;
  top: 0;
  width: 110%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  opacity: 0.5
  ;
`;
const Box = styled(motion.div)`
    font-size: 1em;
    width: 60vw;
    height: 60vh;
    border-radius: 10px;
    text-align: center;
    background-color: whitesmoke;
    background-color: #f3edc9fd;
    box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;
const ContentTitle = styled.h2`
font-size: 5em;
text-align: center;
margin-bottom: 1em;
height: 3vh;
`;
  const BoxVar ={
    initial: {
        opacity: 0,
        scale: 0,
      },
      visible: {
        opacity: 1,
        scale: 1,
      },
      leaving:{
          opacity:0,
          scale:0,
          y:50,
      }
  }
function AboutMe(){
  
 const [showing,setShowing]=useState(false);
 const ShowingToggle = ()=>{setShowing(!showing)}
    return(
        <Wrapper>
            <ContentTitle>About Me</ContentTitle>
        <Box onClick={ShowingToggle}>AboutMe</Box>
       <AnimatePresence> 
           {showing?(
               <>
               <Overlay/>
           <Box 
           variant={BoxVar} 
           initial="initial" 
           animate="visible" 
           exit="leaving"
           style={{position:"absolute"}}
           >more<button onClick={ShowingToggle}>X</button>
         
            </Box>
            </>
            ):null}</AnimatePresence>
        </Wrapper>
    )
}
export default AboutMe;