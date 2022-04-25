import styled from 'styled-components';
import {useState} from 'react';
import { AnimatePresence,motion } from 'framer-motion';
import "../Img/JS.png"
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
  opacity: 0.5;
  z-index: 2;
`;
const Box = styled(motion.div)`

    font-size: 1em;
    width: 60vw;
    height: 60vh;
    border-radius: 10px;
    text-align: center;
    font-size: 2em;
    background-color: whitesmoke;
    background-color: #f3edc9fd;
    box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;
const MoreBox = styled(motion.div)`

    font-size: 1em;
    width: 60vw;
    height: 80vh;
    border-radius: 10px;
    text-align: center;
    font-size: 2em;
    background-color: whitesmoke;
    background-color: #f3edc9fd;
    box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
    z-index: 3;
    line-height:130%;
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
        <Box onClick={ShowingToggle}>
            <br/>
            <h2 style={{fontWeight:"bold"}}>배우는 것을 멈추지않는 개발자를 꿈꾸며..!</h2>
            <br/>
       <p>컴퓨터 공학을 전공으로 공부를 하여 졸업하였고, 잠깐의 공백이 있었고, 
           현재는 웹 프론트엔드 개발자를 목표로 하여 공부하고 있습니다.</p>
           <br/>
           <h2 onClick={ShowingToggle}
           style={{cursor:"pointer"}}
           >learn more..</h2>
       <br/>
        <h3 style={{fontWeight:"bold"}}>Studying</h3>
        <img src={require('../Img/HTML.png')} alt='HTML'/>
        <img src={require('../Img/CSS.png')} alt='CSS'/>
        <img src={require('../Img/JS.png')} alt='JavaScript'/>
        <img src={require('../Img/REACT.png')} alt='REACT'/>
        </Box>
       <AnimatePresence> 
           {showing?(
               <>
               <Overlay onClick={()=>setShowing(!showing)}/>
        <MoreBox 
           variant={BoxVar} 
           initial="initial" 
           animate="visible" 
           exit="leaving"
           style={{position:"absolute"}}
           onClick={ShowingToggle}
           >
               <h2>About me</h2>
           <br/>
           <p>대학교에서 전공으로 컴퓨터공학을 공부하였고, 졸업후에 </p>
           <p>진로에 대한 고민을 하던 중 잠시 다른 분야를 배워볼 수 있는 기회가 생겨</p>
           <p>개발에 있어서 약간의 공백 기간이 생겼습니다. </p>
            <p> 하지만 현재는 마음을 다잡고 웹 프론트엔드 개발자를 목표로 <br/>영상강의,관련서적,그룹 스터디등의 방법으로 공부하고있습니다.</p>
           <br/>
           <ul>
               <li>
                   HTML: 필요로하는 태그를 이용하여, 웹사이트의 틀을 만들 수 있습니다.
               </li>
               <li>
                   CSS : 사용한 각 태그들을 원하는 디자인으로 활용할 수 있습니다.
               </li>
               <li>
                   JavaScript : React 라이브러리를 사용하여 기능을 만들 수 있습니다. 현재는 최대한 리액트없이 사용할려고 하고 있습니다. 
               </li>
               <li>
                   REACT : useState,useEffect를 중심으로 필요한 hooks와 상황에 필요한 라이브러리를 활용하여 효율을 늘릴 수 있습니다.
               </li>
           </ul>
           
            </MoreBox>
            </>
            ):null}</AnimatePresence>
        </Wrapper>
    )
}
export default AboutMe;