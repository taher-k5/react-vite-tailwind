import React, { useState } from 'react'
import {navLinks} from '../constant'
import {logo, menu, close} from '../assets'

const Navbar = () => {
  const [toogle, setToggle] = useState(false);
  return (
    <nav className='w-full flex justify-between py-6 items-center navbar'>
        <img src={logo} alt="logo" className='w-[125px] h-[32px]'/>

        <ul className='list-none sm:flex hidden justify-end items-center flex-1'>
          {navLinks.map((nav, index) => (
            <li key={index} className={`font-poppins font-normal cursor-pointer text-[16px] text-white ${index === navLinks.length -1 ? 'mr-0' : 'mr-10'}`}>
                <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          ))}
        </ul>

        <div className='sm:hidden flex flex-1 justify-end items-center'>
            <img 
              src={toogle ? close : menu} 
              alt="menu"
              className='w-[23px] h-[28px] object-contain'
              onClick={() => (
                setToggle((prev) => (
                  !prev
                ))
              )}
             />

            <div className={`${toogle ? 'flex' : 'hidden'} p-6 sidebar rounded-lg absolute top-20 right-0 mx-4 my-2 min-w-[140px] bg-black-gradient`}>
              <ul className='list-none flex flex-col justify-end items-center flex-1'>
                {navLinks.map((nav, index) => (
                  <li key={index} className={`font-poppins font-normal cursor-pointer text-[16px] text-white ${index === navLinks.length -1 ? 'mb-0' : 'mb-10'}`}>
                      <a href={`#${nav.id}`}>{nav.title}</a>
                  </li>
                ))}
              </ul>
            </div>
        </div>
    </nav>
  )
}

export default Navbar