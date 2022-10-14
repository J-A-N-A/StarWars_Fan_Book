import {Container,Box,SimpleGrid,Button,Text,Image,IconButton,Icon,Heading,Flex,Avatar} from '@chakra-ui/react'
import {useSelector} from 'react-redux'
import {useDispatch} from 'react-redux'
import {CloseIcon,StarIcon} from '@chakra-ui/icons'
import axios from 'axios'

function Pop(){
    const dispatch = useDispatch()
    const popdata = useSelector(state => state.popdata)
    const poptrigger = useSelector(state => state.poptrigger)
    const favorites = useSelector(state => state.favorites)
    const theme = useSelector(state => state.theme)
    const themebg = theme==="light"?"gray.800":"gray.200"
    const themecolor = theme==="light"?"gold":"black"

    const handleFav = (id) => {
        if(favorites.filter(item => item.url === id).length === 0){
            dispatch({type:'ADD_FAVORITE',payload:popdata})
        }
    }    
    const handleFavStatus = (id) => {
        if(favorites.filter(item => item.url === id).length === 0){
            return false
        }
        else{
            return true
        }
    }
    const getFilmData = async (url) => {
         const res = await axios.get(url)
            dispatch({type:'SET_FILM_URL',payload:res.data.title}) 
    }
    return(poptrigger ? (
        <Container maxW="container.xxl" minHeight={'100vh'} centerContent   position={'fixed'} top={0} right={0} zIndex={100} backgroundColor={themebg} color={'auto'}>
            <IconButton  icon={<CloseIcon />} position={'absolute'} top={3} right={10} onClick={() => dispatch({type:'SET_POP_TRIGGER',payload:false})} color={themecolor} />
            <SimpleGrid columns={[1, 2]} spacing="0" position={'relative'} mt='60px' left={0} overflowY={'scroll'} height={'100vh'} marginBottom={'100px'}>
                <Image src={`https://starwars-visualguide.com/assets/img/characters/${popdata.url.split('/')[5]}.jpg`} alt={popdata.name} boxSize="auto" objectFit="cover" margin={'auto'} borderColor={'black'} borderStyle={'solid'} borderWidth={'20px'} />
                <Box w="auto" h="auto" p={8} color={themecolor} marginBottom={'100px'}>
                    <Heading size="2xl" mb='20px' color={'gold'}>{popdata.name}</Heading>
                    <Flex>
                        <Button onClick={()=>handleFav(popdata.url)} colorScheme="teal" variant="outline" mr={3} mb={3} isDisabled={handleFavStatus(popdata.url)}>{handleFavStatus(popdata.url)?"Added to Favorites":"Add to Favorites"}<Icon as={StarIcon} ml={2} /></Button>
                    </Flex>
                    <Box w='auto' h='500px'  color={themecolor} mb={10} textDecoration={'capitalize'}>
                        <Text fontSize="xl"  >Height : {popdata.height} Cms</Text>
                        <Text fontSize="xl"  >Mass : {popdata.mass} Kgs</Text>
                        <Text fontSize="xl"  >Hair Color : {popdata.hair_color}</Text>
                        <Text fontSize="xl"  >Skin Color : <Box backgroundColor={popdata.skin_color} w='20px' h='20px' display='inline-block' borderRadius='50%' /> {popdata.skin_color}</Text>
                        <Text fontSize="xl"  >Eye Color : <Box backgroundColor={popdata.eye_color} w='20px' h='20px' borderRadius='50%' display='inline-block' mr={2}></Box>{popdata.eye_color}</Text>
                        <Text fontSize="xl"  >Birth Year : {popdata.birth_year}</Text>
                        <Text fontSize="xl"  >Gender : {popdata.gender}</Text>
                        <Text fontSize="xl"  >Films:</Text>
                        <SimpleGrid columns={[1, 4]}  overflowY={'scroll'} height={'auto'} >
                        {popdata.films.map((item,index) => (
                            <>
                             <Image src={`https://starwars-visualguide.com/assets/img/films/${item.split('/')[5]}.jpg`} onClick={() => getFilmData(item)} m={2} size="md" key={index} />
                            </>
                        ))}
                        </SimpleGrid>
                       <Text fontSize="xl"  >Species:</Text>
                       <SimpleGrid columns={[1, 4]} spacing="0"  overflowY={'scroll'} height={'auto'} >
                        {popdata.species.length===0?<Text fontSize="xl" color={'black'} >Not Known</Text>:popdata.species.map((item,index) => (
                            <>
                                <Image src={`https://starwars-visualguide.com/assets/img/species/${item.split('/')[5]}.jpg`} m={2} size="md" key={index} />
                            </>
                        ))}
                        </SimpleGrid>
                        <Text fontSize="xl"  >Vehicles:</Text>
                        <SimpleGrid columns={[1, 4]}  overflowY={'scroll'} minHeight={'80vh'}>
                        {popdata.vehicles.length === 0 ? <Text fontSize="xl" color={'black'} >Not Known</Text> : popdata.vehicles.map((item,index) => (
                            <>
                            <Image src={`https://starwars-visualguide.com/assets/img/vehicles/${item.split('/')[5]}.jpg`} m={2} size="md" key={index} />
                            </>
                        ))}
                        </SimpleGrid>
                    </Box>
                </Box>
            </SimpleGrid>
        </Container>
    )
    : null)
}
export default Pop;