import styled from 'styled-components';
import { motion,AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import ArrProject from './ArrProject';
const Wrapper = styled.div`
    display: flex;
    justify-content:flex-start;
    flex-direction: column;
    width: 100vw;
    height: 80vh;
    background-color: #ffb300;
`;
const Box = styled(motion.div)`
    font-size: 1em;
    width: 60vw;
    height: 60vh;
    border-radius: 10px;
    text-align: center;
    background-color: #f3edc9fd;
    box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
    position: absolute;
`;
const SliderWrapper = styled.div`
    display: flex;
    justify-content:center;
    width: 100vw;
    height: 80vh;
`
const ContentTitle = styled.h2`
height: 3vh;
font-size: 5em;
text-align: center;
margin-bottom: 1em;
`
const SlideBtn = styled.button`
    background-color: inherit;
    border: 0;
    outline: 0;
    cursor: pointer;
`;
const BoxVar = {
    invisible:{
        x:500,
        opacity:0,
        scale:0,
    },
    visible:{
        x:0,
        opacity: 1,
        scale: 1,
    },
    exit:{
        x:-500,
        opacity:0,
        scale:0,
    }
}

export default function Project(){
    const [visible,setVisible]=useState(0);
    const nextBtn = ()=> setVisible((prev) => prev===2?2:prev+1);
    const prevBtn = ()=> setVisible((prev) => prev===0?0:prev-1);
    return(
    <Wrapper>
        <ContentTitle>Project</ContentTitle>
       <SliderWrapper> 
       <AnimatePresence> 
        {[0,1,2,].map((i)=>(
        i===visible? (
        <Box
            variants={BoxVar} initial="invisible" animate="visible"exit="exit" key={i}
        >  <SlideBtn onClick={prevBtn}><span class="material-icons-outlined">
        arrow_back_ios
        </span></SlideBtn>
        {ArrProject[i]}
        <SlideBtn onClick={nextBtn}><span class="material-icons-outlined">
arrow_forward_ios
</span></SlideBtn>
        </Box>):null
        ))}
        </AnimatePresence>
        
        </SliderWrapper>
        
    </Wrapper>)
}