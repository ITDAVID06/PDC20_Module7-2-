import React, {useState} from "react";

const BasicForms = () => {
    const[name, setName] = useState('');

    const handleChange = (event) => {
        setName(event.target.value);
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        alert(`Submitted Name: ${name}`);
    }
    
    return (
        <form onSubmit={handleSubmit} className="p-4 border rounded shadow-sm mx-auto" style={{ maxWidth: "400px", backgroundColor: "#f8f9fa" }}>
            <div className="input-group mb-3">
                <input 
                    type="text" 
                    value={name} 
                    id="nameInput"
                    onChange={handleChange} 
                    placeholder="Enter your name" 
                    className="form-control" 
                />
                <button type="submit" className="btn btn-primary">Submit</button>
            </div>
            {name && (
                <p className="mt-3 text-center">
                    <strong>Your name is:</strong> {name}
                </p>
            )}
        </form>

        
    );
}

export default BasicForms;