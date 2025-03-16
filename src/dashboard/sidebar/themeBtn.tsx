import React, {useState} from 'react'
import { IoIosMoon, IoIosSunny } from "react-icons/io";

export const ThemeBtn = () => {
  const [check, setCheck] = useState<boolean>(false)

  return (
    <div className='h-[15%] flex justify-center items-center relative'>
      <div className={`flex justify-center flex-col relative btn h-[65px] w-[30px] rounded-full bg-[#1c1c24]`}>
        <input className="h-full w-full absolute opacity-0" type="checkbox" name='theme' onChange={() => setCheck(!check)} checked={check} />
        <div className={`bg-transparent shadow-3xl absolute bottom-0 w-8 h-8 rounded-full ${check ? "translate-y-0" : "-translate-y-full"} duration-300`}></div>
        <div className={`${check ? " text-[#8aadac]" : "text-blue-500"} h-[50%] flex justify-center items-center duration-300`}><IoIosSunny/></div>
        <div className={`${check ? "text-blue-500" : "text-[#8aadac]"} h-[50%] flex justify-center items-center duration-300`}><IoIosMoon/></div>
      </div>
    </div>
  )
}
