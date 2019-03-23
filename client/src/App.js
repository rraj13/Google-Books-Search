import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Search from './pages/Search';
import Saved from './pages/Saved';

function App () {
    return (
        <Router>
            <div>
                <div>
                    <Route exact path='/' component={Search} />
                    <Route exact path='/saved' component={Saved} />
                </div>
            </div>
        </Router>   
    )
} 


export default App;
