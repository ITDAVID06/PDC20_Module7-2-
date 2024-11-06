import React, { useState } from "react";

const ControlledInput = () => {
    const [email, setEmail] = useState('');

    const handleChange = (e) => {
        setEmail(e.target.value);
        console.log("Current Email:", e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Submitted Email: ${email}`);
    }

    return (
        <form onSubmit={handleSubmit} className="p-4 border rounded shadow-sm mx-auto" style={{ maxWidth: "400px", backgroundColor: "#f8f9fa" }}>
            <div className="input-group mb-3">
                <input
                    type="email"
                    value={email}
                    id="emailInput"
                    onChange={handleChange}
                    placeholder="Enter your email"
                    className="form-control"
                />
                <button type="submit" className="btn btn-primary">Submit</button>
            </div>
            {email && (
                <p className="mt-3 text-center">
                    <strong>Your email is:</strong> {email}
                </p>
            )}
        </form>
    );
}

export default ControlledInput;
