
import {Box, Typography} from '@mui/material'
import { emptyChatImage } from '../../constants/data';
import styled from '@emotion/styled';
import { Lock } from '@mui/icons-material';

const Image = styled('img')({
    height:300
})

const SecondBox = styled(Box)`

`
const Component = styled(Box)`
background: #f8f9fa;
padding: 30px 0px;
text-align: center;
height: 100vh;
padding: 50px;

`
const Title = styled(Typography)`
font-size: 32px;
padding-bottom: 20px;
font-family: inherit;
font-weight: 300;
color: #41525d;
`

const SubTitle = styled(Typography)`
font-size: 14px;
color: #667781;
${'' /* font-weight: 400;
font-family: inherit; */}
`

const Button = styled('button')({
    margin: "40px",
    background: "green",
    padding: "7px 19px",
    borderRadius: '20px',
    fontSize: "15px",
    

})
const LastPart = styled(Box)`
display: flex;
padding: 20px;
align-itom: center;
justify-content: center;
margin-top: 30px;
font-size: 12px;
`

const LockStyle= styled(Lock)`
padding-top: 2px;
font-size: 14px;
padding-right: 10px;
${'' /* margin-top: 10px; */}
`

const Privacy  = styled(Typography)`
font-size: 14px;
`
const EmptyChat = () =>{
    const fun = () =>{
        window.open("https://www.whatsapp.com",'_blank')
    }
    return (<>
        <Component>
            <Box>
               <Image src={emptyChatImage} alt='emptychat'/>
            </Box>
            <SecondBox>
                 <Title>Download Whatsapp for Windows</Title>
                 <SubTitle>Make calls, share your screen and get a faster experience when you download the Windows app.</SubTitle>
            </SecondBox>
            <Button onClick={fun}>Get the App</Button>
            <LastPart>
            <LockStyle /><Privacy>Your personal messages are end-to-end encrypted</Privacy>
            </LastPart>
        </Component>
    </>)
}

export default EmptyChat;