import React from 'react';
import './searchcard.css';


function SearchCard({children}) {
    return (
        <div className='container'>
            <div className='card custom-font'>
                <div className='card-header'><i className='fas fa-book'></i> Book Search</div>
                <div className='card-body'>{children}</div>
            </div>
        </div>
    )
}

export default SearchCard;
