// import { useState } from 'react'

import React from 'react'
import {Routes, Route} from 'react-router-dom'

import Navigation from './src/components/navigation'
import Characters from './src/components/characters'
import SingleCharacters from './src/components/singleCharacter'




export default function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path='/' element={<Characters />} />
        <Route path='/characters/:characterId' element={<SingleCharacters /> }/>
      </Routes>
    </>
  )
 
}


