
import React, {useState , useContext} from 'react'
import { Link } from "react-router-dom";
import  {ScrollContext}  from '../context/ScrollContext';



export default function MobileMenu() {

const [mobileOpen, setMobileOpen] = useState(false)
const { scroll, scrollToContainer } = useContext(ScrollContext)


function openMenu(){
    mobileOpen? setMobileOpen(false) :setMobileOpen(true)
}

    if (!mobileOpen) return <button className='menuIcon' onClick={openMenu}> <img src='/img/menu.png' alt='menu' /> </button>

    return (
        <div className='MobileMenu'>
            <button className='close_menu' onClick={openMenu}><img src='/img/close_white.png' alt='close button' /></button>
            <div className='tab'>
                {/* <Link className="link" onClick={openMenu} to="/">Home </Link>
                <Link className="link" onClick={openMenu} to="store">Products</Link>
                <Link className="link" onClick={openMenu} to="store">Logistics</Link>
                <Link className="link" onClick={openMenu} to="about">About</Link> */}
                <button className="link" onClick={() =>{ scrollToContainer(0); openMenu();} } > Home </button>
                <button className="link" onClick={() => {scrollToContainer(2); openMenu();}} > Products </button>
                <button className="link" onClick={() => {scrollToContainer(3); openMenu();}} > Logistics </button>
                <button className="link" onClick={() => {scrollToContainer(4); openMenu();}} > Contact </button>
            </div>


        </div>
    )
}



