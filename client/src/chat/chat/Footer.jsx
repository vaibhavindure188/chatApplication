import EmojiEmotionsOutlinedIcon from '@mui/icons-material/EmojiEmotionsOutlined';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import KeyboardVoiceIcon from '@mui/icons-material/KeyboardVoice';
import { InputBase,Box } from '@mui/material';
import styled from '@emotion/styled';
// import { useState } from 'react';
const Container = styled(Box)`
height:55px;
background:#ededed;
display:flex; 
width:100%;
align-items:center;
padding: 0px 14px;
&>*{
    margin:5px;
    color:#919191;
}
`;

const Search = styled(Box)`

background-color:#FFFFFF;
border-radius:14px;
width: 80%;
`;
const InputField = styled(InputBase)`
padding:5px 20px;
width:80%;
margin:0px 10px;
`;
const ClipIcon = styled(AttachFileIcon)`
transform:rotate(40deg);
`

const Footer = ({sendText,setValue,value})=>{
 
    return(<>
    <Container>
        <EmojiEmotionsOutlinedIcon/>
        <ClipIcon/>
        <Search>
            <InputField placeholder='Type a message '
                onChange={(e)=> setValue(e.target.value)}
                onKeyDown={(e) => sendText(e)}
                value ={value}
            />
        </Search>
        <KeyboardVoiceIcon/>
    </Container>
    </>)
}

export default Footer;