import React, { useState } from 'react'
import { JSX } from 'react/jsx-runtime'
import { NavLink } from 'react-router-dom'

type Props = {
  list : {id : string, text : string, icon : JSX.Element}[]
}

export const NavItems = ({list} : Props) => {
  const [selected, setSelected] = useState<string>("chats")
  let index = 0
  let translate = "-translate-y-5"

  const handleClick = (id : string, i : number) => {
    setSelected(id)
    if(index > i) {
      translate = "translate-y-5"
    }else{
      translate = "-translate-y-5"
    }
    index= i
  }
  return (
    <ul className='flex justify-center items-center flex-col gap-6 relative before:absolute before:top-[120%] before:content-"" before:w-[60%] before:h-[0.5px] before:bg-gray-800'>
      {
        list.map(({id, text, icon},i) => {
          return (
            <li onClick={() => handleClick(id, i)} key={id} className={`group w-full flex justify-center items-center relative h-[20px]`}>
                <NavLink to={"/"} className={`${selected === id ? "text-blue-500" : "text-[#484c4f]"} group-hover:text-blue-500 duration-300`}>{icon} </NavLink>
                <div className={`${selected === id ? "opacity-[1] translate-y-0" : `opacity-[0] ${translate}`} absolute right-0 w-[3%] h-full bg-gradient-to-b from-blue-500 to-blue-300 duration-300`}></div>
            </li>
          )
        })
      }
  
    </ul>
  )
}
