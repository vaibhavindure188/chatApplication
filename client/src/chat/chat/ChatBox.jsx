import { Box } from "@mui/material";
import ChatHeader from "./ChatHeader";
import Messages from "./Messages";
import { useContext, useEffect,useState } from "react";
import { AccountContextData } from "../../context/AccountContext";
import { getConversation } from "../../components/account/Api";
// import { Height } from "@mui/icons-material";
const ChatBox = ({person}) =>{
    const {account} = useContext(AccountContextData);
    const [conversation, setConversation] = useState({});
    useEffect(()=>{
        const getConversationDetails = async ()=>{
            let data; 
            if(account.email === person.email)  data =  await getConversation({senderId:account.email, receiverId: "yourself"});
            else data =  await getConversation({senderId:account.email, receiverId: person.email})
          
          setConversation(data);
        }
        getConversationDetails();
    },[person.email]);
    return (<>
        <Box style={{height:'75%'}}>
            <ChatHeader person={person}/>
            <Messages person={person} conversation ={conversation} />
        </Box>
    </>)
}

export default ChatBox;