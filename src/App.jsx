import {Routes,Route} from 'react-router-dom'
import './App.css'
import AllPlayers from './components/AllPlayers'
import NavBar from './components/NavBar';
import SinglePlayer from './components/SinglePlayer'
import NewPlayerForm from './components/NewPlayerForm'
import Home from './components/Home'

function App() {

  return (
    <>
    <NavBar/>
  <Routes>
    <Route path='/' element={<Home/>}></Route>
    <Route path='/allplayers'element={<AllPlayers/>}></Route>
    <Route path='/players/:id'element={<SinglePlayer/>}></Route>
    <Route path='/newplayers' element={<NewPlayerForm/>}></Route>

  </Routes>
    
  </>
  )
}

export default App
