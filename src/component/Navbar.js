import React from 'react'
import { Link } from "react-router-dom";
import MobileMenu from './MobileMenu';


export default function Navbar() {
    return (
        <div className='Navbar'>
            <MobileMenu/>
            <nav>
                <Link className="btn" to="/">Home </Link>
                <Link className="btn" to="products">Products</Link>
                <Link className="btn" to="contact">Contact</Link>
            </nav>
            <img src={'./img/logosmall.png'} alt="logo" />
        </div>
    )
}
