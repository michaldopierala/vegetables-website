import React, { useContext } from 'react'
import { Link, NavLink } from "react-router-dom";
import MobileMenu from './MobileMenu';
// import { ScrollContex } from '../App';
import { ScrollContext } from '../context/ScrollContext';


export default function Navbar() {

    const { scroll, scrollToContainer } = useContext(ScrollContext)


    return (
        <div className='Navbar'>
            <MobileMenu />
            <nav>
                {/* <button className="btn" to="/" onClick={() => scrollToContainer(0)} > Home </button> */}
                <Link className="btn" to="/" onClick={() => scrollToContainer(0)} > Home </Link>
                <Link className="btn" style={{ fontWeight: "bold" }} to="product">Products </Link>
                <Link className="btn" to="/" onClick={() => scrollToContainer(3)} > Logistics </Link>
                <Link className="btn" to="/" onClick={() => scrollToContainer(4)} > Contact </Link>
            </nav>

            <img src={'./img/logov2.png'} alt="logo" />
        </div>
    )
}
