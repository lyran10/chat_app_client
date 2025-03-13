import React from 'react'
import { Icon } from './icon'
import { Avatar } from '../../common/avatar'

export const Sidebar = () => {
  return (
    <aside className='w-[5%] h-full bg-[#18171d]'>
         <Icon/>
         <div className='h-[10%] w-full flex justify-center items-center'>
            <Avatar/>
         </div>
       
    </aside>
  )
}
