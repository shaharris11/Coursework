import { Routes, Route } from 'react-router-dom'
import './App.css'

import Home from './Components/home'
import Animes from './Components/anime'
import SingleAnime from './Components/singleAnime'
import Register from './Components/register'

function App() {
  
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/anime' element={<Animes />} />
        <Route path= '/anime/:id' element={<SingleAnime />} />
        <Route path='/register' element={<Register />} />
      </Routes>
    </>
  )
}

export default App
