import React from 'react'
import {Routes, Route} from "react-router-dom"
import { MainContainer } from './common/mainContainer'
import { Dashboard } from './pages/dashboard'

export const App = () => {

  return(
    <>
      <Routes>
        <Route path='/' element={<MainContainer><Dashboard /></MainContainer>} />
      </Routes>
    </>
  )
}
