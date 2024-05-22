import React, { useContext } from "react";
import { Dialog, Typography,Box,List,ListItem ,styled} from "@mui/material";
import {GoogleLogin} from "@react-oauth/google";
import {jwtDecode } from 'jwt-decode';
import { AccountContextData } from "../../context/AccountContext";
import { addUser } from "./Api";
const style = {
 height : '80%',
 marginTop: '100px',
 marginBottom :'0',
 width : '60%',
 maxWidth : '100%',
 maxHeight: '100%',
 boxShadow: 'none',
 overflow : 'none'

}

const Stylebox = styled(Box)`
display : flex;
margin: 30px;
padding-top: 30px;
`

const Box1 = styled(Box)`
margin-top : 50px;
`

const Image = styled('img')({  // how to give css to html tags 
    // width: '30px'  
})   

const Title = styled(Typography)`
  font-size : 25px;
  color : #525252;
  font-weight: 300;
  font-family: inherit;
  padding-bottom : 25px;
`
const Styledlist = styled(List)`
& > li {
  padding : 0;
  margin-top: 20px;
  margin-right: 40px;
  font-size: 15px;
  margin-left: 5px;
}
`


const LoginDialog = () =>{
    const {setAccount} = useContext(AccountContextData);

    const onLoginSuccess = async (res) =>{
        const decoded = jwtDecode(res.credential);
        console.log(decoded)
        setAccount(decoded);
        await addUser(decoded);  
      }
      
      const onLoginError = (res) =>{
      console.log("login failed" ,res);
      }
    return (
        <>
            <Dialog open={true} 
              PaperProps={{ sx: style}}
              hideBackdrop={true}
            >
                <Stylebox>
                    <Box1>
                         <Title>To use Whatsapp on your Computer </Title>
                          <Styledlist>
                            <ListItem>1. Open Whatsapp on your phon</ListItem>
                            <ListItem>2. Go to the setting by tapping on your profile photo , menu or setting</ListItem>
                            <ListItem>3. Tap linked devices and link a device</ListItem>
                            <ListItem>4. Point your phone to this screen to capture the QR code</ListItem>
                          </Styledlist>

                    </Box1>
                    <Box>
                    <Image src="https://www.ginifab.com/feeds/qr_code/img/qrcode.jpg" alt="Barcode" />
                    </Box>
                    <Box style={{position: 'absolute', top: '40%', left:"64%"}} >
                        <GoogleLogin 
                            onSuccess={onLoginSuccess}
                            onError={onLoginError}
                        />
                    </Box>
                </Stylebox>
            </Dialog>
        </>
    )
}

export default LoginDialog;