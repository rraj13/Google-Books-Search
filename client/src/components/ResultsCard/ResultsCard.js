import React from 'react';
import './resultscard.css';

function ResultsCard({children}) {
    return (
        <div className='container'>
            <div className='card custom-font mt-4 mb-4'>
                <div className='card-header'>Results</div>
                {children}
            </div>
        </div>
    )
}

export default ResultsCard;