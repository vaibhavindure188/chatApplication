import { useContext, useState } from "react";
import { AccountContextData } from "../../context/AccountContext";
import { Box } from "@mui/material";
import styled from "@emotion/styled";
import { Chat,Update} from '@mui/icons-material'
import HeaderMenu from "./HeaderMenu";
import InfoDrawer from "../../Drawer/InfoDrawer";


const Component = styled(Box)`
display: flex;
height: 44px;
padding : 8px 16px;
background : #ededed;
`
const Image = styled('img')({height:40, width:40, borderRadius:" 50%", cursor:"pointer"

})
const Wrapper = styled(Box)`
margin-left: auto;
 padding : 10px;
 cursor:pointer;

 & > * {
   margin-left: 20px;
 }
`
const Header = () =>{
    const {account} = useContext(AccountContextData);
    const [openDrawer, setOpenDrawer] = useState(false);
    const toggleDrawer = () =>{
        setOpenDrawer(true);
}
    return (<>
       <Component>
          <Image src={account.picture} alt="DP" onClick={toggleDrawer} />
          <Wrapper>
            <Chat />
            <Update/>
            <HeaderMenu setOpenDrawer={setOpenDrawer}/>
          </Wrapper>
          <InfoDrawer open={openDrawer} setOpen={setOpenDrawer} />
          
          
       </Component>

       
    </>)
}

export default Header;