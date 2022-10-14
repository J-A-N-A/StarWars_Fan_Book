import {useSelector, useDispatch} from 'react-redux'
import {useEffect} from 'react'
import axios from 'axios'
import {Container,Box,SimpleGrid,Heading} from '@chakra-ui/react'

function Home(){
    const dispatch = useDispatch()
    const data = useSelector(state => state.data)
    const theme = useSelector(state => state.theme)
    
    const getdata=(data)=>{
        dispatch({type:'GET_POP_DATA',payload:data})
        dispatch({type:'SET_POP_TRIGGER',payload:true})
    }
    useEffect(() => {
        axios.get('https://swapi.dev/api/people/')
        .then(res => {
            dispatch({type: "GET_DATA", payload: res.data.results})
            dispatch({type: "GET_NEXT_PAGE", payload: res.data.next})
            dispatch({type: "GET_PREV_PAGE", payload: res.data.previous})
        })
        .catch(err => {
            console.log(err)
        })
    }, [])
    const themecolor = theme==="light"?"gray.800":"gray.200"

    return(
        <Container maxW="container.xxl" minHeight={'100vh'} centerContent backgroundColor={themecolor}>
            
            <Box w="100%" mt='0'  p={6} color="white">
                <SimpleGrid columns={[1, null,5 ]} spacing="1" position={'relative'} top={0} left={8}>
                    {data.map((item, index) => {
                        return(
                            <Box w="auto" h="400" p={5} color='gold' key={index} backgroundImage={`https://starwars-visualguide.com/assets/img/characters/${item.url.split('/')[5]}.jpg`} backgroundSize={'cover'} backgroundPosition={'center'} backgroundRepeat={'no-repeat'}   id='card' onClick={() => getdata(item)} m={2} position={'relative'}>
                                <Heading size="2xl" borderStyle={'outlined'} borderColor={'black'} position={'absolute'} bottom={'10%'} >{item.name}</Heading>
                            </Box>
                        )
                    })}
                </SimpleGrid>
            </Box>
        </Container>
         
       )
}
export default Home;