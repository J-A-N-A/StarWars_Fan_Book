import {Container,Box,SimpleGrid,Text,IconButton,Heading} from '@chakra-ui/react'
import {useSelector, useDispatch} from 'react-redux'
import {DeleteIcon} from '@chakra-ui/icons'
function Favorites(){
    const dispatch = useDispatch()
    const favorites = useSelector(state => state.favorites)
    const getdata=(data)=>{
        dispatch({type:'GET_POP_DATA',payload:data})
        dispatch({type:'SET_POP_TRIGGER',payload:true})
    }
    const theme = useSelector(state => state.theme)
    const handleRemove=(data)=>{
        dispatch({type:'REMOVE_FAVORITE',payload:data})
    }
    const themebg = theme==="light"?"gray.800":"gray.200"
    const themecolor = theme==="light"?"gold":"black"



 
    return (
        <Container maxW="container.xxl" minHeight={'100vh'} centerContent backgroundColor={themebg} color={themecolor}>
        <Text fontSize="5xl" ml={10} mt='10' textAlign={'center'} fontWeight={'bold'}>Favorites</Text>
        <Box w="100%" mt='50'  p={6} color="white">
            <SimpleGrid columns={[1, null,5 ]} spacing="1" position={'relative'} top={0} left={8}>
                {favorites.map((item, index) => {
                    return(
                        <Box position={'relative'} key={index}>
                            
                        <Box w="auto" h="400" p={5} color='gold'  backgroundImage={`https://starwars-visualguide.com/assets/img/characters/${item.url.split('/')[5]}.jpg`} backgroundSize={'cover'} backgroundPosition={'center'} backgroundRepeat={'no-repeat'}   id='card' onClick={() => getdata(item)} m={2} position={'relative'}>
                        <Heading size="2xl" borderStyle={'outlined'} borderColor={'black'} position={'absolute'} bottom={'10%'} >{item.name}</Heading>    
                        </Box>
                        <IconButton position={'absolute'} top={0} right={0} colorScheme="red" aria-label="Call Sage" icon={<DeleteIcon />} onClick={()=>handleRemove(item)}/>
                        </Box>
                    ) 
                })}
            </SimpleGrid>
        </Box>
    </Container>
     
   )
    
}
export default Favorites;