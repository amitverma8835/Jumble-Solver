import React from 'react';
import './Nav.css';

function Nav({ points }) {
    return (
        <nav>
            <div className="nav-logo">
                <h1>JumbleSolver</h1>
            </div>
            <div className="points">
                <h3>Your Points: <span>{points}</span></h3>
            </div>
        </nav>
    );
}

export default Nav;
