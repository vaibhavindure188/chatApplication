import { Box, Typography } from "@mui/material";
import { AccountContextData } from "../context/AccountContext";
import { useContext } from "react";
import styled from "@emotion/styled";

const Image = styled('img')({borderRadius: "50%",
height: "160",
width: '160px',
padding : '25px 100px'
});

const SecondBox = styled(Box)`
display: flex;
flex-direction: column;
align-itom: center;
justify-content : center;
background: #FFFFFF;
padding: 12px 30px 2px;
box-shadow : 0px 1px 3px rgba(0,0,0,0.8px);

& :first-child {
  font-size: 14px;
  color: #009688;
  font-weight: 200;
}

& :last-child{
    color: #4A4A4A;
    margin: 14px 0px;
}
`

const ThirdBox = styled(Typography)`
font-size: 12px;
padding: 12px 30px 2px;
color: #8696a0;
`

const Last = styled(Typography)`
font-size: 20px;
margin-top: 20px;
`
const Profile = () =>{
    const {account} = useContext(AccountContextData);
    return(<>
        <Box>
           <Image src={account.picture} alt="profileImg" />
        </Box>
        <SecondBox>
            <Typography>Your Name</Typography>
            <Typography>{account.name}</Typography>
        </SecondBox>
        <Box>
            <ThirdBox>This is not your username or pin. This name will be visible to your WhatsApp contacts.</ThirdBox>

        </Box>
        <SecondBox>
            <Last>About</Last>
            <Typography>EAT! SLEEP! REPEAT!.</Typography>
        </SecondBox>
    </>)
}

export default Profile;