import React from 'react';
import './Amenities.css';

function Amenities({ data }) {
    return (
        <section className="amenities">
            <h2>{data.title || 'Amenities'}</h2>
            <div className="amenities-grid">
                {data.items && data.items.map((item, index) => (
                    <div key={index} className="amenity-card">
                        <h3>{item.name}</h3>
                        <p>{item.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Amenities;