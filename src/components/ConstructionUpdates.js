import React from 'react';
import './ConstructionUpdates.css';

function ConstructionUpdates({ data }) {
    return (
        <section className="construction-updates">
            <h2>{data.title || 'Construction Updates'}</h2>
            <div className="updates-timeline">
                {data.updates && data.updates.map((update, index) => (
                    <div key={index} className="update-item">
                        <div className="update-date">{update.date}</div>
                        <div className="update-status">{update.status}</div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default ConstructionUpdates;