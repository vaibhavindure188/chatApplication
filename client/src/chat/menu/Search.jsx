
import styled from "@emotion/styled"
import { Search as SearchIcon } from "@mui/icons-material"
import { Box, InputBase } from "@mui/material"

const Component = styled(Box)`
display: flex;
padding: 20px;
& > *{
    background : #ededed;
    height: 40px;
    padding-left : 10px;
    
}
`
const Input  = styled(Box)`
width : 90%;
padding-left: 80px;
border-bottom : 1px solid #F2F2F2;
font-size: 20px;
border-radius: 10px;
${'' /* border-radiusTopLeft : 10px; */}
`
const Icon = styled(Box)`
position : absolute;
top: 85px;
height: 30px;
`
const Search = ({setText}) =>{
    return (<>
       <Box>
           <Component>
              <Icon>
                <SearchIcon/>
              </Icon>
                <Input>
                  <InputBase placeholder="Search or start new chat"
                    onChange = { (e)=> setText(e.target.value)}
                  />
                </Input>
            
           </Component>
       </Box>
       

    </>)
}

export default Search;