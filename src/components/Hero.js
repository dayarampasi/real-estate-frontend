import React from 'react';
import './Hero.css';

function Hero({ data }) {
    return (
        <section className="hero">
            <div className="hero-content">
                <h1>{data.title || 'Dream Home Awaits You'}</h1>
                <p>{data.subtitle || 'Find your perfect property with us'}</p>
                <button className="cta-button">
                    {data.buttonText || 'Explore Properties'}
                </button>
            </div>
        </section>
    );
}

export default Hero;