import React from 'react';
import './NearbyConnectivity.css';

function NearbyConnectivity({ data }) {
    return (
        <section className="nearby-connectivity">
            <h2>{data.title || 'Nearby Connectivity'}</h2>
            <div className="locations-grid">
                {data.locations && data.locations.map((location, index) => (
                    <div key={index} className="location-card">
                        <h3>{location.name}</h3>
                        <p>{location.distance}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default NearbyConnectivity;