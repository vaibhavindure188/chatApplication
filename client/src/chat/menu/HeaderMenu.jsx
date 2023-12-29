import { MoreVert } from "@mui/icons-material";
import {Menu, MenuItem ,styled} from "@mui/material";

import { useState } from "react";
const Itom = styled(MenuItem)`

`
const HeaderMenu = ({setOpenDrawer}) =>{
    const [open, setOpen] = useState(null);
    const HandleClose = ()=>{

     setOpen(null);
    }
   const handleClick = (e) =>{
    setOpen(e.currentTarget);
    
   }
    return (<>
        <MoreVert onClick={handleClick}/>
        <Menu  
        
            anchorEl={open}
            keepMounted
            open={open}
            getcontentanchore1= {open} 
            onClose ={HandleClose}
            anchorOrigin={{
                vertical : 'bottom',
                horizontal: 'left'
            }}

            transformOrigin={{
                vertical:'top',
                horizontal:'right'
            }}
            
        >
            <Itom onClick={()=>{HandleClose(); setOpenDrawer(true);}}  >Profile</Itom>
            <Itom onClick={()=>{HandleClose();setOpenDrawer(true)}} >My Account</Itom>
            <Itom onClick={()=>{HandleClose();setOpenDrawer(true)}} >Logout</Itom>
        </Menu>

    </>)
}

export default HeaderMenu;