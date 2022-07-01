import React from 'react'

import { Link } from 'react-router-dom';

const AboutPage = () => {
    return (
        <div className="section">
            <span>AboutPage</span>
            <Link to="/PWA-deploy-test/">relocate to MainPage</Link>
        </div>
    )
}

export default AboutPage;
