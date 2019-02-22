import React from 'react'

const Navbar = () => {
    let navArray = ["HOME", "ABOUT", "SAMPLE POST", "CONTACT"]
    const navbar = navArray.map(navArray => <a href='#' className='right-navbar'>{navArray}</a>)
        
    return (
        <div className="navbar">
            <a href='#' className='left-navbar'>Start Bootstrap</a>
            {navbar}
        </div>
    )
}

export default Navbar