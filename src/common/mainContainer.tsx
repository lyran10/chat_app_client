import React, { ReactNode } from 'react'

type Props = {
  children : ReactNode
}

export const MainContainer = ({children} : Props) => {
  return (
    <div className='w-full h-screen bg-[#262335] flex justify-center items-center'>
      {children}
    </div>
  )
}
