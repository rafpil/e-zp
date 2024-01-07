import React, { useState } from 'react'
import { Outlet, useNavigation } from 'react-router-dom'
import Spinner from '../../Components/Spinner/Spinner'
import Footer from '../Footer/Footer'
import Navbar from '../Navbar/Navbar'

const RootLayout = () => {
    const [darkToggle, setDarkToggle] = useState(false);
    const toggleDarkMode = () => setDarkToggle(!darkToggle);

    const navigation = useNavigation();


    return (
        <div className={`${darkToggle && 'dark'}`}>
            <div className='dark:bg-[#04293A] App darkmode-color-transition'>
                <Navbar toggleDarkMode={toggleDarkMode} />
                <main className='flex w-full px-2 md:px-5 lg:w-11/12 min-h-[calc(100vh-10rem)] py-2 flex-col'>
                    {navigation.state === 'loading' ? <Spinner /> : <Outlet />}
                </main>
                <Footer />
            </div>
        </ div>
    );
}

export default RootLayout