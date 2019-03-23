import React from 'react';
import "./Jumbotron.css";

function Jumbotron ({children}) {
    return (
        <div className='container'>
            <div className="jumbotron mt-4 custom-font">
                {children}
            </div>
        </div>
    )
}

export default Jumbotron;

