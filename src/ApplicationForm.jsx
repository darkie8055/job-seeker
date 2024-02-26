import React, { useState } from 'react';

function ApplicationForm({ jobTitle, company, onSubmit }) {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        phone: '',
        resume: '',
        coverLetter: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(formData);
    };

    return (
        <div className="container mx-auto my-10">
            <h2 className="text-2xl font-semibold mb-4">{jobTitle} at {company}</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
                <input type="text" name="fullName" value={formData.fullName} onChange={handleChange} placeholder="Full Name" className="input-field" required />
                <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email" className="input-field" required />
                <input type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="Phone" className="input-field" required />
                <input type="file" name="resume" onChange={handleChange} className="input-field" required />
                <textarea name="coverLetter" value={formData.coverLetter} onChange={handleChange} placeholder="Cover Letter" rows="4" className="input-field" required></textarea>
                <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md">Submit Application</button>
            </form>
        </div>
    );
}

export default ApplicationForm;
