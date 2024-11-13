import React, { useState } from 'react';
import Tab from './Tab';
import TabContent from './TabContent';

const TabbedForm = () => {
    const [activeTab, setActiveTab] = useState('personal');
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        dob: '',
        gender: '',
        email: '',
        phone: '',
        address: '',
        city: '',
        studentId: '',
        program: '',
        yearLevel: '',
        gpa: '',
        hobbies: '',
        skills: '',
        notes: ''
    });
    const [errors, setErrors] = useState({});

    const tabs = ['personal', 'contact', 'academic', 'additional'];

    const handleTabChange = (tab) => {
        setActiveTab(tab);
    };

    const handleChange = (field, value) => {
        setFormData((prevData) => ({
            ...prevData,
            [field]: value
        }));
    };

    const validateForm = () => {
        const newErrors = {};
        if (!formData.firstName) newErrors.firstName = 'First Name is required';
        if (!formData.email) newErrors.email = 'Email is required';
        if (!formData.studentId) newErrors.studentId = 'Student ID is required';
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleNext = (e) => {
        e.preventDefault();
        const currentIndex = tabs.indexOf(activeTab);
        if (currentIndex < tabs.length - 1) {
            setActiveTab(tabs[currentIndex + 1]);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
    
        const newErrors = {};
        if (!formData.firstName) newErrors.firstName = 'First Name is required';
        if (!formData.email) newErrors.email = 'Email is required';
        if (!formData.studentId) newErrors.studentId = 'Student ID is required';
        setErrors(newErrors);
    
        const isValid = Object.keys(newErrors).length === 0;
    
        if (isValid) {
            const jsonData = JSON.stringify(formData, null, 2);
            alert(`Form submitted successfully!\n\n${jsonData}`);
            console.log(jsonData);
        } else {
            const errorMessages = Object.values(newErrors).join('\n');
            alert(`Please fix the following errors:\n\n${errorMessages}`);
    
            const firstTabWithError = tabs.find(tab =>
                Object.keys(newErrors).some(errorKey => formDataBelongsToTab(tab, errorKey))
            );
            if (firstTabWithError) {
                setActiveTab(firstTabWithError);
            }
        }
    };
    
    

    const formDataBelongsToTab = (tab, field) => {
        const tabFields = {
            personal: ['firstName', 'lastName', 'dob', 'gender'],
            contact: ['email', 'phone', 'address', 'city'],
            academic: ['studentId', 'program', 'yearLevel', 'gpa'],
            additional: ['hobbies', 'skills', 'notes']
        };
        return tabFields[tab]?.includes(field);
    };

    return (
        <div className="container">
            <div className="card shadow">
                <div className="card-header">
                    <h3 className="text-center">Registration Form</h3>
                </div>
                <div className="card-body">
                    {/* Tab navigation */}
                    <div className="d-flex border-bottom mb-4">
                        {tabs.map(tab => (
                            <Tab
                                key={tab}
                                name={tab.charAt(0).toUpperCase() + tab.slice(1).replace('Info', ' Info')}
                                isActive={activeTab === tab}
                                onClick={() => handleTabChange(tab)}
                                hasError={Object.keys(errors).some(errorKey => formDataBelongsToTab(tab, errorKey))}
                            />
                        ))}
                    </div>

                    <form onSubmit={activeTab === 'additional' ? handleSubmit : handleNext}>
                        <TabContent
                            activeTab={activeTab}
                            formData={formData}
                            onChange={handleChange}
                            errors={errors}
                        />

                        <div className="text-center mt-4">
                            {activeTab === 'additional' ? (
                                <button type="submit" className="btn btn-primary">Submit</button>
                            ) : (
                                <button type="button" className="btn btn-secondary" onClick={handleNext}>Next</button>
                            )}
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default TabbedForm;
