import React, { useState, useEffect } from 'react';
import { getAllContent } from '../services/api';
import Hero from '../components/Hero';
import ProjectOverview from '../components/ProjectOverview';
import NearbyConnectivity from '../components/NearbyConnectivity';
import Amenities from '../components/Amenities';
import AboutUs from '../components/AboutUs';
import ConstructionUpdates from '../components/ConstructionUpdates';
import FAQ from '../components/FAQ';
import '../styles/HomePage.css';

function HomePage() {
    const [content, setContent] = useState({});

    useEffect(() => {
        loadContent();
    }, []);

    const loadContent = async () => {
        try {
            const response = await getAllContent();
            const contentMap = {};
            response.data.forEach(item => {
                contentMap[item.section] = item.data;
            });
            setContent(contentMap);
        } catch (error) {
            console.error('Error loading content:', error);
        }
    };

    return (
        <div className="homepage">
            <Hero data={content.hero || {}} />
            <ProjectOverview data={content.projectOverview || {}} />
            <NearbyConnectivity data={content.nearbyConnectivity || {}} />
            <Amenities data={content.amenities || {}} />
            <AboutUs data={content.aboutUs || {}} />
            <ConstructionUpdates data={content.constructionUpdates || {}} />
            <FAQ data={content.faq || {}} />
        </div>
    );
}

export default HomePage;