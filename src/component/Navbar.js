import React, { useContext, useState } from 'react'
import { Link, NavLink } from "react-router-dom";
import MobileMenu from './MobileMenu';
// import { ScrollContex } from '../App';
import { ScrollContext } from '../context/ScrollContext';
import { useTranslation } from 'react-i18next';



export default function Navbar() {

    const { scroll, scrollToContainer } = useContext(ScrollContext)

    const { t, i18n } = useTranslation();
    const [language, setLanguage] = useState(i18n.language);
    const lngs = {
        en: { nativeName: 'English' },
        de: { nativeName: 'Deutsch' },
        pl: { nativeName: 'Polish' }
    };
    const handleLanguageChange = (event) => {
        setLanguage(event.target.value);
        i18n.changeLanguage(event.target.value);
    };

    return (
        <div className='Navbar'>
            <MobileMenu />
            <nav>
                {/* <button className="btn" to="/" onClick={() => scrollToContainer(0)} > Home </button> */}
                <Link className="btn" to="/" onClick={() => scrollToContainer(0)} > {t('menu.home')} </Link>
                <Link className="btn" to="product" onClick={() => scrollToContainer(1)} style={{ fontWeight: "bold" }}>{t('menu.products')}</Link>
                <Link className="btn" to="/" onClick={() => scrollToContainer(3)} > {t('menu.logistics')} </Link>
                <Link className="btn" to="/" onClick={() => scrollToContainer(4)} > {t('menu.contact')}
                </Link>
            </nav>
            <img src={'./img/logov22.png'} alt="logo" />
            <div className='selector'>
                <select value={language} onChange={handleLanguageChange}>
                    <option value="en">English</option>
                    <option value="de">Deutsch</option>
                    <option value="pl">Polish</option>
                    {/* Add more languages as needed */}
                </select>
            </div>
        </div>
    )
}
