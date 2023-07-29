import React, { useContext } from 'react'
import { Link, NavLink } from "react-router-dom";
import MobileMenu from './MobileMenu';
// import { ScrollContex } from '../App';
import { ScrollContext } from '../context/ScrollContext';
import { useTranslation, Trans } from 'react-i18next';

const lngs = {
    en: { nativeName: 'English' },
    pl: { nativeName: 'Polish' }
  };


export default function Navbar() {
    const { t, i18n } = useTranslation();

    const { scroll, scrollToContainer } = useContext(ScrollContext)


    return (
        <div className='Navbar'>
            <MobileMenu />
            <nav>
                {/* <button className="btn" to="/" onClick={() => scrollToContainer(0)} > Home </button> */}
                <Link className="btn" to="/" onClick={() => scrollToContainer(0)} > Home </Link>
                <Link className="btn" to="product" onClick={() => scrollToContainer(1)} style={{ fontWeight: "bold" }}   >{t('menu.products')} </Link>
                <Link className="btn" to="/" onClick={() => scrollToContainer(3)} > {t('menu.logistics')} </Link>
                <Link className="btn" to="/" onClick={() => scrollToContainer(4)} > {t('menu.contact')} </Link>
            </nav>

            <img src={'./img/logov2.png'} alt="logo" />
            <div className='translation'>
                {Object.keys(lngs).map((lng) => (
                    <button key={lng} style={{ fontWeight: i18n.resolvedLanguage === lng ? 'bold' : 'normal' }} type="submit" onClick={() => i18n.changeLanguage(lng)}>
                        {lngs[lng].nativeName}
                    </button>
                ))}
            </div>
        </div>
    )
}
