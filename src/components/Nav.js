import {Box,Image,IconButton,Flex} from '@chakra-ui/react'
import {SunIcon, MoonIcon,Search2Icon,StarIcon,ArrowRightIcon,ArrowLeftIcon,EmailIcon} from '@chakra-ui/icons'
import {Link } from 'react-router-dom'
import{useSelector,useDispatch} from 'react-redux'
import axios from 'axios'
const logo = require('./logo.png');
function Nav(){
    const dispatch = useDispatch()
    const theme = useSelector(state => state.theme)
    const themeicon = useSelector(state => state.themeicon)
    const sun=<SunIcon/>
    const moon=<MoonIcon/>
   
    const handleTheme = () => {
        if(theme==="light"){
            dispatch({type:"SET_THEME",payload:"dark"})
            dispatch({type:"SET_THEME_ICON",payload:"moon"})
        }
        else{
            dispatch({type:"SET_THEME",payload:"light"})
            dispatch({type:"SET_THEME_ICON",payload:"sun"})
        }
    }

    const next = useSelector(state => state.next)
    const prev = useSelector(state => state.prev)
    const handlenext = () => {
        axios.get(next)
        .then(res => {
            dispatch({type: "GET_DATA", payload: res.data.results})
            dispatch({type: "GET_NEXT_PAGE", payload: res.data.next})
            dispatch({type: "GET_PREV_PAGE", payload: res.data.previous})
        })
        .catch(err => {
            console.log(err)
        })

    }
    const handleprev = () => {
        axios.get(prev)
        .then(res => {
            dispatch({type: "GET_DATA", payload: res.data.results})
            dispatch({type: "GET_NEXT_PAGE", payload: res.data.next})
            dispatch({type: "GET_PREV_PAGE", payload: res.data.previous})
        })
        .catch(err => {
            console.log(err)
        })

    }
    return (
              <Box w="70px" h="100vh" p={2} color="white" bg="gray.800" position={'fixed'} top={0} left={0} overflowY={'none'} borderRight={'1px'} borderColor={'black'}>
                    <Flex>
                        <Box w="100%" h="auto"  color="white" bg="gray.800" >
                        <Link to='/' ><Image src={logo} alt="logo" boxSize="auto" /></Link>
                           <Link to='/search'><IconButton aria-label="Search database" icon={<Search2Icon />} boxSize="50px" backgroundColor={'gray.800'} color={'white'} /></Link>
                           <Link to='/fav'><IconButton aria-label="Search database" icon={<StarIcon />} boxSize="50px" backgroundColor={'gray.800'} color={'white'} /></Link>
                            <IconButton  icon={<ArrowRightIcon />} boxSize="50px" backgroundColor={'gray.800'} color={'white'} onClick={handlenext} />
                            {(prev === null) ? <IconButton  icon={<ArrowLeftIcon />} boxSize="50px" backgroundColor={'gray.800'} color={'white'} onClick={handleprev} isDisabled/> : <IconButton  icon={<ArrowLeftIcon />} boxSize="50px" backgroundColor={'gray.800'} color={'white'} onClick={handleprev} />}
                            <IconButton  icon={themeicon==="sun"?sun:moon} boxSize="50px" backgroundColor={'gray.800'} color={'white'} onClick={handleTheme} />
                            <Link to='/contact'><IconButton  icon={<EmailIcon />} boxSize="50px" backgroundColor={'gray.800'} color={'white'} /></Link>
                        </Box>
                    </Flex>
                </Box>

    )
}
export default Nav;