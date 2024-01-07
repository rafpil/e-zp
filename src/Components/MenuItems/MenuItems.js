import React from 'react'
import { NavLink } from 'react-router-dom'

import './MenuItems.css'

const MenuItems = () => {
    const menuItems = [
        {
            name: 'Postępowania bieżące',
            link: '/'
        },
        {
            name: 'Ogłoszenia o zamówieniu',
            link: '/ogloszenia-wszystkie'
        },
        // 
    ];

    return (
        <ul className='menu-items'>
            {menuItems.map((item, index) =>
                <li key={index}><NavLink to={item.link} className={({ isActive }) => isActive ? 'text-success' : undefined}>{item.name}</NavLink></li>
            )}
        </ul>
    )
}

export default MenuItems