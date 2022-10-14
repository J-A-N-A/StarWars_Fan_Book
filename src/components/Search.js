import {Container,Box,SimpleGrid,Button,Text,Heading,Input,Flex} from '@chakra-ui/react'
import {useSelector, useDispatch} from 'react-redux';
import axios from 'axios'
function Search(){
    const dispatch = useDispatch()
    const searchdata = useSelector(state => state.searchdata)
    const handleSubmit = (e) => {
        e.preventDefault()

        axios.get(`https://swapi.dev/api/people/?search=${e.target[0].value}`)
        .then(res => {
            dispatch({type: "GET_SEARCH_DATA", payload: res.data.results})
        }
        )
        .catch(err => {
            console.log(err)
        }
        )
    }
    const getdata=(data)=>{
        dispatch({type:'GET_POP_DATA',payload:data})
        dispatch({type:'SET_POP_TRIGGER',payload:true})
    }

    const theme = useSelector(state => state.theme)
    const themecolor = theme==="light"?"gray.800":"gray.200"

    return (
        <Container maxW="container.xxl" minHeight={'100vh'} centerContent backgroundColor={themecolor}>
                        <Box  textAlign={'center'} ml={10} mt={8}>
                          <form onSubmit={handleSubmit}>
                            <Flex>
                            <Input type="text" placeholder="Search" backgroundColor={'black'} color={'white'} size={'md'} ml={5} mr={2} />
                            <Button type="submit" colorScheme="teal" size="md"  ml={2}>
                                Search
                            </Button>
                            </Flex>
                            </form>
                        </Box>
                        <Box w="100%" h="auto" p={4} color="gold" textAlign={'center'} fontSize={'2xl'} fontWeight={'bold'}>
                            <Text>{searchdata.length} results found</Text>
                            </Box>
                        <Box w="100%"   p={6} color="black">
                <SimpleGrid columns={[1, null,5 ]} spacing="1" position={'relative'} top={0} left={8}>
                    {searchdata.map((item, index) => {
                        return(
                            <Box w="auto" h="400" p={2} color='gold' key={index}  backgroundSize={'cover'} backgroundPosition={'center'} backgroundRepeat={'no-repeat'}   id='card' onClick={() => getdata(item)} backgroundImage={`url(https://starwars-visualguide.com/assets/img/characters/${item.url.split('/')[5]}.jpg)`} position={'relative'}>
                              <Heading size="2xl" borderStyle={'outlined'} borderColor={'black'} position={'absolute'} bottom={'10%'} >{item.name}</Heading>
                            </Box>
                        )
                    })}
                </SimpleGrid>
            </Box>
                       
                    
        </Container>

    )
}
export default Search;