import { Box, Typography, styled } from "@mui/material";
import { formatDate } from "../../utils/commonUtils";
import { AccountContextData } from "../../context/AccountContext";
import { useContext } from "react";

const Own = styled(Box)`
background:#dcf8c6;
max-width:60%;
margin-left:auto;
display:flex;
width:fit-content;
padding:5px;
border-radius:10px;
word-break:break-word;
margin-top:3px;
margin-right:5px;
`
const Wrapper = styled(Box)`
background:#ffffff;
max-width:60%;
display:flex;
width:fit-content;
padding:5px;
border-radius:10px;
word-break:break-word;
margin-left:4px;
margin-top:3px;
`
const Text = styled(Typography)`
padding:0 25px 0 5px;
font-size:14px;
`
const Time = styled(Typography)`
font-size:10px;
margin-top:auto;
color:#919191;
word-break:keep-all;
`
const Message = ({ message }) => {
  const {account } = useContext(AccountContextData);
  return (
    <>
      {
        account.sub === message.senderId ?
         <Own>       
            <Text>{message.text}</Text>
            <Time>{formatDate(message.createdAt)}</Time>
        </Own>

    :  <Wrapper> 
          <Text>{message.text}</Text>
          <Time>{formatDate(message.createdAt)}</Time>
        </Wrapper>
      }
      
    </>
  );
};

export default Message;
