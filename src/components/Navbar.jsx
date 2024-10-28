import React from 'react'
import ThemeSwitcher from './ThemeSwitcher'

const Navbar = () => {
    return (
        <div className='p-2 px-4 sm:px-10  flex justify-between items-center shadow-xl'>
            <div>
                <p title='logo' className='text-lg font-medium select-none dark:text-white'>Qr Code Generator</p>
            </div>
            <div>
                <ThemeSwitcher />
            </div>
        </div>
    )
}

export default Navbar