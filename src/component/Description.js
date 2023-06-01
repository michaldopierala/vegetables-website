import React from 'react'
import { Link } from "react-router-dom";


export default function Description() {
    return (
        <div className='Description'>
            <div className='head'>
                Welcome to Fruitopia 
            </div>
            <div className='text'>
                We deliver wholesale vegetables and fruits. We supply our customers with fresh, high quality produce at
                competitive prices. Partner with us and experience excellence in wholesale produce.
            </div>
            {/* <button className='btn'>Learn more</button> */}
            <Link className="btn" to="/learn">Learn more </Link>
        </div>
    )
}
