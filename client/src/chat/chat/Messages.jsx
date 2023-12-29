import styled from "@emotion/styled";
import { Box } from "@mui/material";
import Footer from "./Footer";
import { useContext , useEffect, useState} from "react";
import { AccountContextData } from "../../context/AccountContext";
import { getMessages, newMessage } from "../../components/account/Api";
import Message from "./Message";
const Wrapper = styled(Box)`
background-image:url(${`https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png`});
background-size:50%; 
`;
const Component = styled(Box)`
height:81vh;
overflow-y:scroll;

`;

const Messages = ({person,conversation}) =>{
    const [value, setValue] = useState('');
    const {account} = useContext(AccountContextData);
    const [messages,setMessages] = useState([]);

    useEffect(()=>{
        const getMessageDetails = async()=>{
            const data = await getMessages(conversation._id);
            // console.log(conversation._id);
            setMessages(data);
            // console.log(data);
        }
        conversation._id && getMessageDetails();
    },[person._id, conversation._id]);
    const sendText = async (e) =>{
        const code = e.keyCode || e.which;
        // console.log(e);
        // console.log(code);
        if(code === 13){
            let message = {
                senderId : account.sub,
                receiverId: person.sub,
                conversation:conversation._id,
                type: 'text',
                text :value
            }
            await newMessage(message);
            setValue(''); 
        }
    }
    return(<>
        <Wrapper>
            <Component>
                {
                    messages && messages.map(
                         message =>(
                                <Message message = {message} />
                         )
                    )
                }
            </Component>
            <Footer sendText = {sendText} setValue = {setValue} value={value} />
        </Wrapper>
    </>)
}

export default Messages;