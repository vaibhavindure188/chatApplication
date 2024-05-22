import styled from '@emotion/styled';
import {Box, Typography} from '@mui/material';
import { useContext } from 'react';
import { AccountContextData } from '../../context/AccountContext';
import { setConversation } from '../../components/account/Api';

const Image = styled('img')({
    height:"30px",
    borderRadius:"50%",
    padding: '0px 14px'
})

const St = styled(Box)`
display:flex;
height:40px;
padding:13px 0px;
cursor:pointer;
${'' /* background-color:black;
color:white; */}
& > * {
    height:30px;
}
`;
const Conversation = ({user}) =>{
    const {setPerson, account} = useContext(AccountContextData);
   
const  getUser =  async() =>{
    setPerson(user);
    if(account.email === user.email){
        await setConversation({senderId:account.email, receiverId:"yourself"})
    }
    else
    await setConversation({senderId:account.email, receiverId:user.email});

}
    return(<>
        <St onClick={()=>getUser()}>
            <Box>
                <Image src={user.picture} alt='dp' />
            </Box>
            <Box>
                <Box>
                    <Typography>{user.name}</Typography>
                </Box>
            </Box>

        </St>
    </>)
}

export default Conversation;