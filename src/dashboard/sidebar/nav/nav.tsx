import React from 'react'
import { FaMessage, FaUserGroup } from "react-icons/fa6";
import { NavItems } from './navItems';

export const Nav = () => {
  const items = [
    {
      id : "chats",
      text : "Chats",
      icon : <FaMessage/>,
      moveCursor : "translate-y-0"
    },
    {
      id : "teams",
      text : "Teams",
      icon : <FaUserGroup/>,
      moveCursor : "translate-y-[50px]"
    },
  ]
  return (
    <nav className='mt-8'>
      <NavItems  list={items}/>
    </nav>
  )
}
