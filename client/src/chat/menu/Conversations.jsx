import { useContext, useEffect,useState } from "react";
import { getUser } from "../../components/account/Api";

import { AccountContextData } from "../../context/AccountContext";
import Conversation from "./Conversation";
import styled from "@emotion/styled";
import {Box,Divider} from '@mui/material'

const Conversations = ({text}) =>{
  const {account} = useContext(AccountContextData);
  const [users, setUsers] = useState([]);

    useEffect(()=>{
       const fetchData = async () =>{
        const  response = await getUser();
        console.log(response);
        const filteredData = response.filter(user => user.name.toLowerCase().includes(text.toLowerCase()));
        setUsers(filteredData);
        
       } 
       fetchData();
    },[text]);

    const Components = styled(Box)`
    height:81vh;
    overflow:overlay;
    `
    return(<>
    <Components>
        {

              
              users.map(user => (
                user.sub !== account.sub &&
                <>
                <Conversation user = {user}/>
                <Divider />
                </> 
                
        
              ))

              
        }
        
    </Components>
        
    </>)
}

export default Conversations;