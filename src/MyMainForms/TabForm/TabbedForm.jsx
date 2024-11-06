import React, { useState } from "react";
import Tab from "./Tab";
import TabContent from "./TabContent";
import 'bootstrap/dist/css/bootstrap.min.css';

const TabbedForm = () => {
    const [activeTab, setActiveTab] = useState("basic");

    const [formData, setFormData] = useState({
        name: "",
        age: "",
        email: "",
        phone: "",
        username: "",
        password: ""
    });

    const handleChange = (field, value) => {
        setFormData((prevData) => ({
            ...prevData,
            [field]: value
        }));
    };

    const handleTabChange = (tab) => {
        setActiveTab(tab);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        alert(`Submitted Data: ${JSON.stringify(formData, null, 2)}`);
    };

    return (
        <div className="container">
            <div className="card shadow">
                <div className="card-header">
                    <h3 className="text-center">Tabbed Form with Shared State</h3>
                </div>
                <div className="card-body">
                    <div className="d-flex border-bottom mb-4">
                        <Tab
                            name="Basic Info"
                            isActive={activeTab === "basic"}
                            onClick={() => handleTabChange("basic")}
                        />
                        <Tab
                            name="Contact Info"
                            isActive={activeTab === "contact"}
                            onClick={() => handleTabChange("contact")}
                        />
                        <Tab
                            name="Account Info"
                            isActive={activeTab === "account"}
                            onClick={() => handleTabChange("account")}
                        />
                    </div>
                    <form onSubmit={handleSubmit}>
                        <TabContent
                            activeTab={activeTab}
                            formData={formData}
                            onChange={handleChange}
                        />
                        <div className="text-center mt-4">
                            <button type="submit" className="btn btn-primary">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default TabbedForm;
