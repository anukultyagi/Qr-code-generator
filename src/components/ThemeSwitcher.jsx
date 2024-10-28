import React, { useContext, useEffect } from 'react'
import { WiDaySunny } from "react-icons/wi";
import { GiNightSky } from "react-icons/gi";
import { QrContext } from '../contexts/Qrcontext';


const ThemeSwitcher = () => {
    const { themeDark, setThemeDark } = useContext(QrContext)

    const themeHandler = () => {
        setThemeDark(prev => !prev)
    }

    return (
        <button title='dark mode' className={`text-4xl ${themeDark ? "text-white" : ""}`} onClick={themeHandler}>
            {themeDark ? <WiDaySunny /> : <GiNightSky />}
        </button>
    )
}

export default ThemeSwitcher