import React from "react";

const TabContent = ({ activeTab, formData, onChange }) => {
    return (
        <div className="p-4">
            {activeTab === 'basic' && (
                <div className="card p-3 mb-3">
                    <h4 className="mb-4">Basic Info</h4>
                    <div className="mb-3">
                        <label className="form-label">Name:</label>
                        <input
                            type="text"
                            className="form-control"
                            value={formData.name}
                            onChange={(e) => onChange('name', e.target.value)}
                            placeholder="Enter your name"
                        />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Age:</label>
                        <input
                            type="text"
                            className="form-control"
                            value={formData.age}
                            onChange={(e) => onChange('age', e.target.value)}
                            placeholder="Enter your age"
                        />
                    </div>
                </div>
            )}

            {activeTab === 'contact' && (
                <div className="card p-3 mb-3">
                    <h4 className="mb-4">Contact Info</h4>
                    <div className="mb-3">
                        <label className="form-label">Email:</label>
                        <input
                            type="email"
                            className="form-control"
                            value={formData.email}
                            onChange={(e) => onChange('email', e.target.value)}
                            placeholder="Enter your email"
                        />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Phone:</label>
                        <input
                            type="tel"
                            className="form-control"
                            value={formData.phone}
                            onChange={(e) => onChange('phone', e.target.value)}
                            placeholder="Enter your phone"
                        />
                    </div>
                </div>
            )}

            {activeTab === 'account' && (
                <div className="card p-3 mb-3">
                    <h4 className="mb-4">Account Info</h4>
                    <div className="mb-3">
                        <label className="form-label">Username:</label>
                        <input
                            type="text"
                            className="form-control"
                            value={formData.username}
                            onChange={(e) => onChange('username', e.target.value)}
                            placeholder="Enter your username"
                        />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Password:</label>
                        <input
                            type="password"
                            className="form-control"
                            value={formData.password}
                            onChange={(e) => onChange('password', e.target.value)}
                            placeholder="Enter your password"
                        />
                    </div>
                </div>
            )}
        </div>
    );
};

export default TabContent;
