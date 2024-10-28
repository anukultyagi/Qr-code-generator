import { createContext, useState, useEffect } from 'react'

export const QrContext = createContext();

export const QrContextProvider = ({ children }) => {
    const [color, setColor] = useState("black");
    const [qrCodeText, setQrCodeText] = useState("Hakuna Matata");
    const [themeDark, setThemeDark] = useState(() => JSON.parse(localStorage.getItem("themeDark")) || false);

    useEffect(() => {
        document.body.classList.toggle("dark", themeDark);
        localStorage.setItem("themeDark", JSON.stringify(themeDark));
    }, [themeDark]);

    const values = { setQrCodeText, qrCodeText, color, setColor, themeDark, setThemeDark };

    return <QrContext.Provider value={values}>{children}</QrContext.Provider>;
};
