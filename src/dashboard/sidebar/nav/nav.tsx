import React from 'react'
import { FaMessage, FaUserGroup } from "react-icons/fa6";
import { NavItems } from './navItems';

export const Nav = () => {
  const iconClasses = ``
  const items = [
    {
      id : "chats",
      text : "Chats",
      icon : <FaMessage className={iconClasses}/>,
    },
    {
      id : "teams",
      text : "Teams",
      icon : <FaUserGroup  className={iconClasses}/>,
    },
  ]
  return (
    <nav className='mt-8'>
      <NavItems  list={items}/>
    </nav>
  )
}
