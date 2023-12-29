import styled from "@emotion/styled";
import { Call,Videocam,Search,MoreVert } from "@mui/icons-material";
import { Box,Typography } from "@mui/material";
import { defaultProfilePicture } from "../../constants/data";
// import { useContext } from "react";
// import { AccountContextData } from "../../context/AccountContext";
const Component = styled(Box)`
display:flex;
height:44px;
background:#ededed;
padding: 8px 16px;
align-items:center;

`;
const FirstCom = styled(Box)`
${'' /* display:flex; */}
& > *{
    padding-right:20px; 
}
`;
const Image = styled('img')({

    height:40,width:40,objectFit:'cover',borderRadius:'50%'
});
const Name = styled(Typography)`
margin-left:12px !important;
`

const Status = styled(Typography)`
margin-left:12px !important;
font-size:12px;
color:rgb(0,0,0,0.6);
`

const RightComp = styled(Box)`
margin-left:auto;
&>*{
    padding-left:30px;
    font-size:22px;
    color:green;
}
`
const ChatHeader = ({person}) =>{

    return(<>
    <Component>
    <Image src={person.picture} alt="dp" />
    <FirstCom>          
        <Name>{person.name}</Name>
        <Status>Offline</Status>
    </FirstCom>
    <RightComp>
        <Call/>
        <Videocam/>
        <Search/>
        <MoreVert/>
    </RightComp>
    </Component>
    </>)
}

export default ChatHeader;