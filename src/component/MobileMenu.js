
import React, {useState} from 'react'
import { Link } from "react-router-dom";


export default function MobileMenu() {

const [mobileOpen, setMobileOpen] = useState(false)

function openMenu(){
    mobileOpen? setMobileOpen(false) :setMobileOpen(true)
}

    if (!mobileOpen) return <button className='menuIcon' onClick={openMenu}> <img src='/img/menu.png' alt='menu' /> </button>

    return (
        <div className='MobileMenu'>
            <button className='close_menu' onClick={openMenu}><img src='/img/close_white.png' alt='close button' /></button>

            <div className='tab'>
                <Link className="link" onClick={openMenu} to="/">Home </Link>
                <Link className="link" onClick={openMenu} to="store">Products</Link>
                <Link className="link" onClick={openMenu} to="store">Logistics</Link>
                <Link className="link" onClick={openMenu} to="about">About</Link>
            </div>


        </div>
    )
}



