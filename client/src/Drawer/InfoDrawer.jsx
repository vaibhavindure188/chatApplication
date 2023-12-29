
import { Drawer,Box, Typography } from "@mui/material";
import { ArrowBack } from "@mui/icons-material";
import styled from "@emotion/styled";
import Profile from "./Profile";


const InfoDrawer = ({open, setOpen}) =>{
  

  const handleClose = () =>{
   setOpen(false);
  }

  const DrawerStyle = {
    top : 17,
    left : 20,
    height: '95%',
    width: '25%',
    boxShadow :'none'

  }

  const HeaderOfDrawer = styled(Box)`
  display : flex;
  color: #FFFFFF;
  background :#008069;
  height : 100px;
  & > * {
    padding: 20px;
    margin-top: 20px;
  }
  `
    return(<>
        <Drawer 
            open = {open}
            onClose={handleClose}
            PaperProps={{sx: DrawerStyle}}
            style = {{zIndex:15000}}
            >
                <HeaderOfDrawer>
                   <ArrowBack onClick={()=>setOpen(false)}/>
                   <Typography>Profile</Typography>
                </HeaderOfDrawer>
                
                <Box>
                    <Profile />
                </Box>
            </Drawer>
    </>)
}

export default InfoDrawer;