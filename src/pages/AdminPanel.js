import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { checkAuth, getAllContent, updateContent, logout } from '../services/api';
import '../styles/AdminPanel.css';

function AdminPanel() {
    const [sections, setSections] = useState([]);
    const [selectedSection, setSelectedSection] = useState(null);
    const [editData, setEditData] = useState('');
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
    const init = async () => {
        await verifyAuth();
        await loadContent();
    };
    init();
}, []); // The empty array is correct here - we only want to run once on mount

    const verifyAuth = async () => {
        try {
            const response = await checkAuth();
            if (!response.data.success) {
                navigate('/admin/login');
            }
        } catch (error) {
            navigate('/admin/login');
        }
    };

    const loadContent = async () => {
        try {
            const response = await getAllContent();
            setSections(response.data);
            setLoading(false);
        } catch (error) {
            console.error('Error loading content:', error);
        }
    };

    const handleSectionClick = (section) => {
        setSelectedSection(section);
        setEditData(JSON.stringify(section.data, null, 2));
    };

    const handleSave = async () => {
        try {
            const parsedData = JSON.parse(editData);
            await updateContent(selectedSection.section, parsedData);
            alert('Content updated successfully!');
            loadContent();
        } catch (error) {
            alert('Error saving content. Check JSON format.');
        }
    };

    const handleLogout = async () => {
        await logout();
        navigate('/admin/login');
    };

    if (loading) return <div>Loading...</div>;

    return (
        <div className="admin-panel">
            <div className="admin-header">
                <h1>Admin Panel</h1>
                <button onClick={handleLogout} className="logout-btn">Logout</button>
            </div>
            
            <div className="admin-content">
                <div className="sections-list">
                    <h3>Sections</h3>
                    {sections.map(section => (
                        <div
                            key={section.section}
                            className={`section-item ${selectedSection?.section === section.section ? 'active' : ''}`}
                            onClick={() => handleSectionClick(section)}
                        >
                            {section.section}
                        </div>
                    ))}
                </div>
                
                <div className="edit-area">
                    {selectedSection ? (
                        <>
                            <h3>Editing: {selectedSection.section}</h3>
                            <textarea
                                value={editData}
                                onChange={(e) => setEditData(e.target.value)}
                                rows="20"
                            />
                            <div className="edit-actions">
                                <button onClick={handleSave} className="save-btn">Save Changes</button>
                            </div>
                        </>
                    ) : (
                        <p>Select a section to edit</p>
                    )}
                </div>
            </div>
        </div>
    );
}

export default AdminPanel;