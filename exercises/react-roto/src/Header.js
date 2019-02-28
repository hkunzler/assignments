import React from 'react'

import {Link} from 'react-router-dom'
const Header = () => {
    return (
        <div>
            <div>
            <Link to='/'>Home</Link>
                <Link to='/about'>About</Link>
                <Link to='/services'>Services</Link>
            </div>
        </div>
    )
}

export default Header