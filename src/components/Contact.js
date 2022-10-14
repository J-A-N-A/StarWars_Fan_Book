import {Container,Box,Text,Image,Link} from '@chakra-ui/react'
import {useSelector} from 'react-redux'
const linkedin = require('./Linkedin.png');
const mail = require('./mail.png');
const saber = require('./saber.png');

function Contact(){

    const theme = useSelector(state => state.theme)
    const themebg = theme==="light"?"gray.800":"gray.200"
    const themecolor = theme==="light"?"white":"black"
    return (
        <Container maxW="container.xxl" centerContent minHeight={'100vh'} p={'auto'}  backgroundColor={themebg} color={themecolor}>
            <Box textAlign={'center'} w={'100%'} p={10} color={themecolor} mt={20} ml={10}>
                <Image src={saber} alt="logo" boxSize="100px" position={'relative'} left={'50%'} transform={'translateX(-50%)'} />
                    <Text fontSize="auto" fontWeight="bold"  >Did you like this project?</Text>
                    <Text fontSize="auto"   >If you want to contact me, you can do it through the following links:</Text>
                <Link href="https://linkedin.com/in/janardhan-b" isExternal>
                    <Image src={linkedin} alt="logo" boxSize="50px" position={'relative'} left={'50%'} transform={'translateX(-50%)'} />
                </Link>
                    <Text fontSize="1rem">or</Text>
                    <Text fontSize="1rem">
                    <Image src={mail} alt="logo" boxSize="50px" position={'relative'} left={'50%'} transform={'translateX(-50%)'} />
                    Janardhanperso@gmail.com
                    </Text>
                    <Text fontSize="1rem"   >Made with ❤️ by Janardhan</Text>
                    <Text fontSize="10px">Thanks to https://starwars-visualguide.com/ for the images</Text>
             </Box>
        </Container>
    )
}

export default Contact;