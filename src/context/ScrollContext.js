import React, { useState, createContext } from 'react'


export const ScrollContext = createContext()


export default function CartContext({ children }) {

    const [scroll, setScroll] = useState([0]);

    function scrollToContainer(id) {
        setScroll([id])
    }


    return (
        <ScrollContext.Provider value={{scroll, scrollToContainer }}>
            {children}
        </ScrollContext.Provider>
    )
}