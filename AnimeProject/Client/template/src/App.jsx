import { Routes, Route } from 'react-router-dom'
import './App.css'

import Animes from './Components/anime'
import SingleAnime from './Components/singleAnime'

function App() {
  
  return (
    <>
      <Routes>
        <Route path='/' element={<Animes />}/>
        <Route path= '/anime/:id' element={<SingleAnime />} />
      </Routes>
    </>
  )
}

export default App
