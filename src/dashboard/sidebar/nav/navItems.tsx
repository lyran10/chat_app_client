import React, { useState } from 'react'
import { JSX } from 'react/jsx-runtime'
import { NavLink } from 'react-router-dom'

type Props = {
  list : {id : string, text : string, icon : JSX.Element, moveCursor : string}[]
}

export const NavItems = ({list} : Props) => {
  const [selected, setSelected] = useState<{id : string, hoverEffect : string}>({id : "chats", hoverEffect : ""})

  const handleClick = (id : string) => {
    setSelected({...selected, id : id})
  }
  return (
    <ul className='flex justify-center items-center flex-col gap-6 relative before:absolute before:top-[120%] before:content-"" before:w-[60%] before:h-[0.5px] before:bg-gray-800'>
      {
        list.map(({id, text, icon, moveCursor},i) => {
          return (
            <li 
            onMouseEnter={() => setSelected({...selected, hoverEffect : moveCursor})}
            onMouseLeave={() => setSelected({...selected, hoverEffect : ""})}
            onClick={() => handleClick(id)} 
            key={id} 
            className={`group w-full flex justify-center items-center relative h-[25px]`}>
                <NavLink to={"/"} className={`${selected.id === id ? "text-blue-500" : "text-[#484c4f]"} group-hover:text-blue-500 duration-300`}>{icon} </NavLink>

                <div className={`${selected.id === id ? "bg-gradient-to-b from-blue-500 to-blue-300" : `bg-gray-800`} absolute right-0 w-[3%] h-full duration-500`}></div>

                <div className='flex justify-center items-center h-full w-0 group-hover:w-[60px] absolute left-[100%] z-[-1] group-hover:z-auto rounded-r-md text-[13px] font-semibold px-2 py-2 bg-[#18171d] text-[#eaeaec] duration-300'>
                  <span className='opacity-0 group-hover:opacity-[1] delay-150 transition-opacity'>{text}</span>
                </div>
            
            </li>
          )
        })
      }
      
       <div className={` ${selected.hoverEffect ? "opacity-[1] h-[25px]" : "opacity-0 h-0"} bg-gradient-to-b from-blue-500 to-blue-300 absolute top-0 right-0 w-[3%] duration-500 ${selected.hoverEffect}`}></div>
    </ul>
  )
}