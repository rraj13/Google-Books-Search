import React from 'react';
import './navbar.css';

function Nav ({children}) {
    return (
        <nav className='navbar navbar-expand-lg navbar-light bg-light custom-font border-bottom'>
            <a className='navbar-brand' href='/'>Google Books</a>
            <button className='navbar-toggler' type='button' data-toggle='collapse' data-target='#navbarSupportedContent' aria-controls='navbarSupportedContent' aria-expanded='false' aria-label='Toggle navigation'>
                <span className='navbar-toggler-icon'></span>
            </button>
            {children}
        </nav>
    )
}

export default Nav;

