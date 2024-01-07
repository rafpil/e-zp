import React, { useState } from 'react'
import './Darkmode.css'
import MoonIcon from '../../Images/MoonIcon'
import SunIcon from '../../Images/SunIcon'

const DarkmodeButton = ({ toggleDarkMode }) => {

    const [darkmode, setDarkmode] = useState(false);

    const toggleMode = () => setDarkmode(!darkmode);

    return (
        <div className='darkmode' onClick={() => { toggleMode(); toggleDarkMode() }}>
            <div className={`circles ${darkmode ? 'left-[2px]' : 'left-[30px] md:left-[41px]'}`}></div>
            <MoonIcon className="h-7 w-7 m-1" />
            <SunIcon className="h-8 w-8 m-1" />
        </div>
    )
}

export default DarkmodeButton