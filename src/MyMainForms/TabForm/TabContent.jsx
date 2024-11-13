import React from 'react';

const TabContent = ({ activeTab, formData, onChange, errors }) => {
    const renderInput = (label, field, type = 'text', placeholder = '') => (
        <div className="mb-3">
            <label className="form-label">{label}:</label>
            <input
                type={type}
                className={`form-control ${errors[field] ? 'is-invalid' : ''}`}
                value={formData[field] || ''}
                onChange={(e) => onChange(field, e.target.value)}
                placeholder={placeholder}
            />
            {errors[field] && <div className="invalid-feedback">{errors[field]}</div>}
        </div>
    );

    const renderSelect = (label, field, options = []) => (
        <div className="mb-3">
            <label className="form-label">{label}:</label>
            <select
                className={`form-control ${errors[field] ? 'is-invalid' : ''}`}
                value={formData[field] || ''}
                onChange={(e) => onChange(field, e.target.value)}
            >
                <option value="">Select {label}</option>
                {options.map((option, index) => (
                    <option key={index} value={option}>
                        {option}
                    </option>
                ))}
            </select>
            {errors[field] && <div className="invalid-feedback">{errors[field]}</div>}
        </div>
    );

    return (
        <div className="p-4">
            {activeTab === 'personal' && (
                <div className="card p-3 mb-3">
                    <h4>Personal Information</h4>
                    {renderInput('First Name', 'firstName', 'text', 'Enter your first name')}
                    {renderInput('Last Name', 'lastName', 'text', 'Enter your last name')}
                    {renderInput('Date of Birth', 'dob', 'date')}
                    {renderSelect('Gender', 'gender', ['Male', 'Female', 'Other'])}
                </div>
            )}

            {activeTab === 'contact' && (
                <div className="card p-3 mb-3">
                    <h4>Contact Information</h4>
                    {renderInput('Email', 'email', 'email', 'Enter your email')}
                    {renderInput('Phone Number', 'phone', 'tel', 'Enter your phone number')}
                    {renderInput('Address', 'address', 'text', 'Enter your address')}
                    {renderInput('City', 'city', 'text', 'Enter your city')}
                </div>
            )}

            {activeTab === 'academic' && (
                <div className="card p-3 mb-3">
                    <h4>Academic Information</h4>
                    {renderInput('Student ID', 'studentId', 'text', 'Enter your student ID')}
                    {renderInput('Program', 'program', 'text', 'Enter your program')}
                    {renderInput('Year Level', 'yearLevel', 'text', 'Enter your year level')}
                    {renderInput('GPA', 'gpa', 'text', 'Enter your GPA')}
                </div>
            )}

            {activeTab === 'additional' && (
                <div className="card p-3 mb-3">
                    <h4>Additional Details</h4>
                    {renderInput('Hobbies', 'hobbies', 'text', 'Enter your hobbies')}
                    {renderInput('Skills', 'skills', 'text', 'Enter your skills')}
                    <div className="mb-3">
                        <label className="form-label">Other Notes:</label>
                        <textarea
                            className={`form-control ${errors.notes ? 'is-invalid' : ''}`}
                            value={formData.notes || ''}
                            onChange={(e) => onChange('notes', e.target.value)}
                            placeholder="Enter any other notes"
                        />
                        {errors.notes && <div className="invalid-feedback">{errors.notes}</div>}
                    </div>
                </div>
            )}
        </div>
    );
};

export default TabContent;
