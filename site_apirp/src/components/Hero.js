import React from 'react';
import './Hero.css'; // Importe le fichier CSS pour le composant Hero

const Hero = ({ title, description, buttonText, heroImage, scrollTo }) => {
    return (
        <div>
            <div className="hero-container">
                <div className="hero-content">
                    {/* <h1>{title}</h1> */}
                    <h1>{title}</h1>
                    <p>{description}</p>
                    <button onClick={scrollTo}>{buttonText}</button>
                </div>
                <img src={heroImage} alt="Hero Image" className="hero-image" />
            </div>
            <hr className="hero-divider" /> {/* Ligne de démarcation */}
        </div>
    );
}

export default Hero;