import React from 'react'
import Navbar from './Navbar.js'

const Header = () => {
    return (
        <div className='background-image'>
            <div className='background-color'>
                <Navbar/>
                <h1>Clean Blog</h1>
                <h2>A Blog Theme by Start Bootstrap</h2>
            </div>
        </div>
    )
}

export default Header