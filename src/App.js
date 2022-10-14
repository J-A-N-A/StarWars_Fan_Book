import './App.css';
import{BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './components/Home'
import Search from './components/Search';
import Favorites from './components/Favorites';
import Nav from './components/Nav'
import Pop  from './components/Pop'
import Contact from './components/Contact';

function App() {
  return (
    <>
    <BrowserRouter>
    <Nav/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/search" element={<Search/>}/>
      <Route path="/fav" element={<Favorites/>}/>
      <Route path='/contact' element={<Contact/>}/>
    </Routes>
    
    </BrowserRouter>
    <Pop/>

    </>
  );
}

export default App;


// Hi Janardhan,


// For this, you can make use of the OOpen Starwars API (https://swapi.dev/)
// 1. You need to create a screen with Lists of all the Characters available from the endpoint (https://swapi.dev/api/people/) (
// - You should be able to paginate through the data
// - (Bonus) Be able to mark certain characters as favourites and store them on client side so that killing the session does not lose it.
// 2. and a second screen for showing base details of that character using the endpoint (https://swapi.dev/api/people/:id/) and a section on the same screen showing the movie names that character has appeared in.

// - Using Chakra UI framework to build this will be a plus
// - A good design will be a major factor in the evaluation

// You can create a public GitHub repo for the assignment and share the link when done.

// The deadline for the assignment is 24 hrs

// ** This assignment will be the core factor for this hiring. If the output is good enough we will hire immediately **