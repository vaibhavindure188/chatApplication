import React from "react";
import LoginDialog from "./account/loginDialog";
import ChatDialog from "../chat/ChatDialog";
import {AppBar, Toolbar,styled, Box} from "@mui/material";
import { useContext } from "react";
import { AccountContextData } from "../context/AccountContext";
//******************************* */
const Box2 = styled(Box) 
`
height : 100vh;
background : #DCDCDC
`
// ***********************************


const LoginHeader = styled(AppBar)
`
background-color : #00bfa5;
height : 200px;
box-shadow: none;

`

const ChatHeader = styled(AppBar)
`
background-color : #00A884;
height : 130px;
box-shadow: none;

`
const Messenger = ()=>{
    const {account} = useContext(AccountContextData);
    return ( 
        <Box2>
        {
          account ?
          <>
                <ChatHeader>
                    <Toolbar>
                        <h3> Whatsapp Web</h3>
                    </Toolbar>
                </ChatHeader>
                <ChatDialog />
           </>
           :
           <>
                <LoginHeader>
                    <Toolbar>
                        <h3> Whatsapp Web</h3>
                    </Toolbar>
                </LoginHeader>
                <LoginDialog />
            </>
        }
        </Box2>
    )
}

export default Messenger;