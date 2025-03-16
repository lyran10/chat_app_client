import React from 'react'
import { Icon } from './icon'
import { Avatar } from '../../common/avatar'
import avatar from "../../images/avatar.png"
import { Nav } from './nav/nav'
import { ThemeBtn } from './themeBtn'

export const Sidebar = () => {
  return (
    <aside className='w-[5%] h-full flex flex-col justify-between bg-[#18171d]'>
      <div className='w-full h-[85%]'>
        <Icon/>
         <div className='h-[10%] w-full flex justify-center items-center'>
            <Avatar classes='h-10 w-10 border'>
              <img className='w-8 h-8 rounded-full bg-black' src={avatar} alt="" />
            </Avatar>
         </div>
         <Nav/>
      </div>
      <ThemeBtn/>
    </aside>
  )
}
