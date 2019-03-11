import React from 'react';
import { Link } from 'react-router-dom'

const Nav = () => {
    return (
        <div className='flex-container'>
            <Link to='/'>Search For a Movie <i class="fa fa-search"></i></Link>
            <Link to='/contact'>Contact</Link>
        </div>
    );
};

export default Nav;