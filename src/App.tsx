import React from 'react'
import {Routes, Route} from "react-router-dom"

export const App = () => {

  return(
    // <>
    //   <Routes>
    //     <Route path='/' element={<MainContainer><Dashboard /></MainContainer>} />
    //   </Routes>
    // </>
    <div className='h-screen flex justify-center items-center'>
        <div className='text-2xl shadow-3xl text-green-500 animate-wiggle flex justify-center items-center h-[300px] w-[300px]'>
          App
        </div>
      </div>
  )
}
