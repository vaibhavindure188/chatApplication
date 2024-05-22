import EmojiEmotionsOutlinedIcon from '@mui/icons-material/EmojiEmotionsOutlined';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import KeyboardVoiceIcon from '@mui/icons-material/KeyboardVoice';
import { InputBase,Box } from '@mui/material';
import styled from '@emotion/styled';
import { useEffect } from 'react';
import { uploadFile } from '../../components/account/Api';
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

const Footer = ({sendText,setValue,value,file, setFile})=>{

    useEffect(()=>{
        const getImage = async() =>{
            if(file){
                console.log(file)
                const data = new FormData();
                data.append("name",file.name)
                data.append("file",file)
                await uploadFile(data);  // api function call
            } 
        }
        getImage()
    }, [file])

    const onFileChange = (e) =>{
        console.log(e);
        setFile(e.target.files[0]);
        setValue(e.target.files[0].name)   
    } 
    return(<>
    <Container>
        <EmojiEmotionsOutlinedIcon/>
        <label htmlFor='fileInput' >
            <ClipIcon />
        </label>
        <input type='file' style={{display:"none"}} id="fileInput" onChange={(e) => onFileChange(e)}/>
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