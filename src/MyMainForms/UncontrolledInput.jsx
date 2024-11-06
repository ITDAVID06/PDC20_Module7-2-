import React, { useRef } from "react";

const UncontrolledInput = () => {
    const phoneRef = useRef();

    const handleSubmit = (event) => {
        event.preventDefault();
        alert(`Submitted Phone Number: ${phoneRef.current.value}`);
    }

    return (
        <form onSubmit={handleSubmit} className="p-4 border rounded shadow-sm mx-auto" style={{ maxWidth: "400px", backgroundColor: "#f8f9fa" }}>
            <div className="input-group mb-3">
                <input
                    type="text"
                    ref={phoneRef}
                    id="phoneInput"
                    placeholder="Enter your phone number"
                    className="form-control"
                />
                <button type="submit" className="btn btn-primary">Submit</button>
            </div>
            {phoneRef.current && phoneRef.current.value && (
                <p className="mt-3 text-center">
                    <strong>Your phone number is:</strong> {phoneRef.current.value}
                </p>
            )}
        </form>
    );
}

export default UncontrolledInput;
