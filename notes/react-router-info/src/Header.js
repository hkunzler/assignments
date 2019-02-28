import React from 'react'
import {Link} from 'react-router-dom'
const Header = () => {
    return (
        <div>
            <div>
            <Link to='/'>Main Body</Link>
                <Link to='/newbody'>New Body</Link>
            </div>
        </div>
    )
}

export default Header