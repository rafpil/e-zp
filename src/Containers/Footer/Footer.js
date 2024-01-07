import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='flex h-20 w-full justify-center items-center bg-secondary text-white dark:text-[#D3D3D3] dark:bg-[#041C32]'>
      <div className='flex flex-wrap justify-between w-full px-2 md:px-5 lg:w-11/12 items-center'>
        <div className='flex basis-full items-center order-2 py-1 md:items-start md:order-1 md:basis-1/4 flex-col'>
          <span className="text-xs md:text-sm">Copyright ©2023. All Rights Reserved.</span>
          <span className="text-xs md:text-sm">Create and design by Rafał.</span>
        </div>

        <div className='flex basis-full order-1 justify-center items-center text-center md:order-3 md:basis-2/4 md:justify-end gap-2'>
          <a href='https:\\ezamowienia.gov.pl' target='_blank'>e-Zamówienia</a> |
          <Link to='informacja-o-danych'>Informacja o danych</Link> |
          <Link to='kontakt'>Kontakt</Link>
        </div>
      </div>
    </div>
  )
}

export default Footer