import React from 'react';
import './ProjectOverview.css';

function ProjectOverview({ data }) {
    return (
        <section className="project-overview">
            <h2>{data.title || 'Project Overview'}</h2>
            <p>{data.description || 'A premium residential project offering modern amenities and comfortable living spaces.'}</p>
            {data.features && (
                <ul className="features-list">
                    {data.features.map((feature, index) => (
                        <li key={index}>{feature}</li>
                    ))}
                </ul>
            )}
        </section>
    );
}

export default ProjectOverview;