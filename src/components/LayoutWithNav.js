import React from 'react'
import Footer from './Footer'
import TopNavbar from './TopNavbar'

const LayoutWithNav = ({ children }) => {
    return (
        <>
            <TopNavbar/>
            {children}
            <Footer/>
        </>
    )
}

export default LayoutWithNav
