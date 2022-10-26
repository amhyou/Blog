import { useState } from 'react'
import {AiOutlineMenu,AiOutlineClose} from 'react-icons/ai'
import { Link } from "react-router-dom";

const Header = () => {
    const [mopen,setMopen] = useState(false)
  return (
    <div className='pt-5'>

        <div className='flex justify-between ml-2 text-2xl sm:hidden'>
            <div className='flex items-center gap-2 cursor-pointer' onClick={()=>setMopen(true)}>
                <AiOutlineMenu size="25" />
                <h1>Menu</h1>
            </div>
            <div className='mr-5'>
                <Link to="/"><h1>My Blog</h1></Link>
            </div>
        </div>

        <div id="phone-menu" className={`${mopen?'left-0':'left-[-51%]'} top-0 h-screen fixed w-[50%] bg-col2 duration-300`}>
            <div className='flex items-center justify-end pr-5 pt-5 cursor-pointer' onClick={()=>setMopen(false)}>
                <AiOutlineClose size="20" />
                <h1>Close</h1>
            </div>

            <div className='mt-20 flex flex-col ml-5 gap-6 mr-5'>
                <h2 className='hover:bg-stone-600 cursor-pointer rounded-2xl p-2'>Ebook</h2>
                <h2 className='hover:bg-stone-600 cursor-pointer rounded-2xl p-2'>Contact</h2>
                <h2 className='hover:bg-stone-600 cursor-pointer rounded-2xl p-2'>Badge</h2>
                <h2 className='hover:bg-stone-600 cursor-pointer rounded-2xl p-2'>About</h2>
            </div>

        </div>

        <div id="pc-menu" className={`hidden sm:flex top-0 fixed w-full duration-300 justify-center items-center`}>
            <div className='pt-3 flex ml-5 gap-6 mr-5 bg-col2'>
                <h2 className='hover:bg-stone-600 cursor-pointer rounded-2xl p-2'>Ebook</h2>
                <h2 className='hover:bg-stone-600 cursor-pointer rounded-2xl p-2'>Contact</h2>
                <h2 className='hover:bg-stone-600 cursor-pointer rounded-2xl p-2'>Badge</h2>
                <h2 className='hover:bg-stone-600 cursor-pointer rounded-2xl p-2'>About</h2>
            </div>
            <div className='mr-5 text-center flex justify-end'>
                <Link to="/"><h1 className='bg-col3 p-3 rounded-xl hover:bg-col4'>My Blog</h1></Link>
            </div>
        </div>


    </div>
  )
}

export default Header