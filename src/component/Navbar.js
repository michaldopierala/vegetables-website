import React, {useContext} from 'react'
import { Link } from "react-router-dom";
import MobileMenu from './MobileMenu';
// import { ScrollContex } from '../App';
import  {ScrollContext}  from '../context/ScrollContext';


export default function Navbar() {

    const { scroll, scrollToContainer } = useContext(ScrollContext)


    return (
        <div className='Navbar'>
            <MobileMenu/>
            <nav>
                {/* <Link className="btn" to="/">Home </Link> */}
                {/* <Link className="btn" to="products">Products </Link> */}
                {/* <Link className="btn" to="products">Logistics</Link> */}
                {/* <Link className="btn" to="contact">Contact</Link> */}
                <button className="btn" onClick={() => scrollToContainer(0)} > Home </button>
                <button className="btn" onClick={() => scrollToContainer(2)} > Products </button>
                <button className="btn" onClick={() => scrollToContainer(3)} > Logistics </button>
                <button className="btn" onClick={() => scrollToContainer(4)} > Contact </button>
                
            </nav>
           
            <img src={'./img/logosmall.png'} alt="logo" />
        </div>
    )
}
