import { Box, Dialog } from "@mui/material";
import React from "react";
import Menuu from "./menu/Menuu";
import EmptyChat from "./chat/EmptyChat";
import styled from "@emotion/styled";
import ChatBox from "./chat/ChatBox";
import { useContext } from "react";
import { AccountContextData } from "../context/AccountContext";
const style = {
    height : '100%',
    margin: '20px 20px',
    marginTop:'50px',
    marginBottom:'20px',
    width : '100%',
    maxWidth : '100%',
    maxHeight: '100%',
    boxShadow: 'none',
    overflow : 'hidden',
    borderRadius: '0'
    
   
   }
const StyledBox = styled(Box)`
display: flex;

`
const LeftComp = styled(Box)`
width: 450px;
min-width: 200px;
border-right: 2px solid rgba(0,0,0,0.14);

`

const RightComp = styled(Box)`
width: 73%;
min-width: 300px;
`
const ChatDialog = () =>{
    const {person} = useContext(AccountContextData);
    return(
    <>
        <Dialog open={true} PaperProps={{sx:style}}   hideBackdrop={true}>
              <StyledBox>
                    <LeftComp>
                        <Menuu />
                    </LeftComp>

                    <RightComp>
                       
                        {
                            Object.keys(person).length ? <ChatBox person={person}/> : <EmptyChat/>
                        }
                    </RightComp>
              </StyledBox>
              
        </Dialog>
    </>
    )
}

export default  ChatDialog;