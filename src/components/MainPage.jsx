import React from 'react'

import { Link } from 'react-router-dom';

const MainPage = () => {
    return (
        <div className="section">
            <span>MainPage</span>
            <Link to="about">relocate to AboutPage</Link>
        </div>
    )
}

export default MainPage;
