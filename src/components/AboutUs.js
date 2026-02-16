import React from 'react';
import './AboutUs.css';

function AboutUs({ data }) {
    return (
        <section className="about-us">
            <h2>{data.title || 'About Us'}</h2>
            <p>{data.description || 'We are a leading real estate developer with years of experience.'}</p>
            {data.mission && (
                <div className="mission">
                    <h3>Our Mission</h3>
                    <p>{data.mission}</p>
                </div>
            )}
        </section>
    );
}

export default AboutUs;