import React from 'react'
import { Link } from "react-router-dom";


export default function Navbar() {
    return (
        <div className='Navbar'>
            <nav>
                <Link className="btn" to="/">Home </Link>
                <Link className="btn" to="products">Products</Link>
                <Link className="btn" to="contact">Contact</Link>
            </nav>
            <img src={'./img/logo.png'} alt="logo" />
        </div>
    )
}
