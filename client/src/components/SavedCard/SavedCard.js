import React from 'react';

function SavedCard({children}) {
    return (
        <div className='container'>
            <div className='card'>
                <div className='card-header'><i class='fas fa-download'></i> Saved</div>
                {children}
            </div>
        </div>
    )
}

export default SavedCard;