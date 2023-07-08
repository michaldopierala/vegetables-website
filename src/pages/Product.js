import React, { useRef, useContext, useEffect } from 'react'

export default function Product() {
    const myElementRef = useRef(null);

    useEffect(() => {
        const myElement = myElementRef.current;
        myElement.scrollIntoView();
    }, []);


    return (
        <>
            <div ref={myElementRef}></div>
            <div className='Product'>
                <div className='image'>
                    <img src={"./img/1.jpg"} alt="image" />
                </div>
                <div className='image'>
                    <img src={"./img/2.jpg"} alt="image" />
                </div>
                <div className='image'>
                    <img src={"./img/3.jpg"} alt="image" />
                </div>
                <div className='image'>
                    <img src={"./img/4.jpg"} alt="image" />
                </div>
            </div>
        </>
    )
}
