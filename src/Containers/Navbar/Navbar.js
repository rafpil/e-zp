import React from 'react'
import { Link } from 'react-router-dom'
import DarkmodeButton from '../../Components/Darkmode/Darkmode'
import MenuItems from '../../Components/MenuItems/MenuItems';
import LogoImg from '../../Images/Logo'

const Navbar = ({toggleDarkMode}) => {

  return (
    <nav className='flex h-20 w-full justify-center items-center bg-secondary text-white dark:text-[#D3D3D3] dark:bg-[#041C32]'>
      <div className='flex w-full px-2 md:px-5 lg:w-11/12 items-center h-full'>
        <div className='flex basis-1/12 h-full items-center py-1'>
          <Link to='/' className='h-1/2 md:h-full flex justify-center items-center dark:text-[#D3D3D3]'><LogoImg className="cursor-pointer dark:hover:[filter:drop-shadow(1px_1px_10px_#D3D3D3)] hover:[filter:drop-shadow(1px_1px_20px_black)]" /></Link>
        </div>
        <div className='flex text-center basis-10/12'>
          <MenuItems />
        </div>
        <div className='flex basis-1/12 justify-end'>
          <DarkmodeButton toggleDarkMode={toggleDarkMode}/>
        </div>
      </div>
    </nav>
  )
}

export default Navbar