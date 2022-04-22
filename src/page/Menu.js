import styled from 'styled-components';
import { motion } from 'framer-motion';

const List = styled(motion.ul)`

    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 15em;
    height: 20em;
    position: fixed;
    border-radius: 15px;
     background-color:#c1d5e0;
     @media screen and (max-width:760px) {
      width: 1em;
      &:hover{
          width: 3em;

      }
      
    }
`;
const ListItem = styled(motion.li)`
    font-size: 3em;
    cursor: pointer;   
    @media screen and (max-width:760px) {
      opacity: 0;
      font-size: 1em;
      &:hover{
        display: flex;
        opacity: 1;

      }
    }

`;
const MovePage = styled(motion.a)`
  text-decoration: none;
  color: black;
   &:hover{
      border-bottom: solid 5px black;
      transition: ease 0.1s;
  }
  
`;
export default function Menu(){
    return(
        <List >
            <ListItem><MovePage href='#aboutMe'>About Me</MovePage></ListItem>
            <ListItem><MovePage href='#project'>Project</MovePage></ListItem>
            <ListItem><MovePage href='#contact'>Contact</MovePage></ListItem>
            </List>
    )
}